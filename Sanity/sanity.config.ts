import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { documentInternationalization } from '@sanity/document-internationalization'
import { schemaTypes as rawSchemaTypes } from './schemaTypes'

// === Keep only document types (ignore object types) ===
// If your schemaTypes exports real type objects (via defineType), we can filter by .type === 'document'.
// If schemaTypes contains plain strings, we include them as-is (assume they refer to document types).
const objectTypeNames = (rawSchemaTypes || [])
  .filter((t) => typeof t !== 'string' && t?.type === 'document')
  .map((t) => t.name)
  .filter(Boolean)

const stringTypeNames = (rawSchemaTypes || []).filter((t) => typeof t === 'string')

// Final list of type names to show in the desk. Prefer explicit document objects first.
const schemaTypeNames = [...objectTypeNames, ...stringTypeNames].filter(Boolean)

// Languages shown in desk
const LANGS = [
  { id: 'en', title: 'English', emoji: '🇬🇧' },
  { id: 'de', title: 'German',  emoji: '🇩🇪' },
]

export default defineConfig({
  name: 'default',
  title: 'Graforce',

  projectId: 'sib3yr4f',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            schemaTypeNames.map((typeName) =>
              S.listItem()
                .title(typeName)
                .child(
                  S.list()
                    .title(`${typeName} — Languages`)
                    .items([
                      ...LANGS.map((lang) =>
                        S.listItem()
                          .title(`${lang.emoji} ${lang.title}`)
                          .child(
                            S.documentList()
                              .title(`${typeName} — ${lang.title}`)
                              .filter('_type == $type && language == $lang')
                              .params({ type: typeName, lang: lang.id })
                          )
                      ),

                      S.listItem()
                        .title('Language not specified')
                        .child(
                          S.documentList()
                            .title(`${typeName} — Base / Not localized`)
                            .filter('_type == $type && !defined(language)')
                            .params({ type: typeName })
                        ),

                      S.listItem()
                        .title('All')
                        .child(
                          S.documentList()
                            .title(`${typeName} — All`)
                            .filter('_type == $type')
                            .params({ type: typeName })
                        ),
                    ])
                )
            )
          ),
    }),

    visionTool(),

    presentationTool({
      previewUrl: {
        origin: 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),

    documentInternationalization({
      supportedLanguages: LANGS.map((l) => ({ id: l.id, title: l.title })),
      schemaTypes: schemaTypeNames,
    }),
  ],

  // Keep the original raw export so Sanity still registers object types
  schema: {
    types: rawSchemaTypes,
  },
})
