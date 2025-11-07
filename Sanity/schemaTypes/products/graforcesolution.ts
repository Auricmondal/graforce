import { defineType, defineField } from "sanity";

export default defineType({
  name: "graforceSolutionSection",
  title: "Graforce Solution Section",
  type: "object",
  fields: [
    // 🏷️ Section Label
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label displayed above the main heading (e.g., 'The Graforce Solution').",
      initialValue: "The Graforce Solution",
    }),

    // 🧠 Section Header
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main header text (e.g., 'Plasmalyzer®').",
      initialValue: "Plasmalyzer®",
    }),

    // 🧩 Solution Cards
    defineField({
      name: "cards",
      title: "Solution Cards",
      type: "array",
      description: "List of solution cards displayed under this section.",
      of: [
        defineField({
          name: "solutionCard",
          title: "Solution Card",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Card Icon",
              type: "image",
              options: { hotspot: true },
              description: "Upload the icon for this card (e.g., SolutionIcon).",
            }),
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) => Rule.required().error("Title is required."),
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required().error("Description is required."),
            }),
            defineField({
              name: "onClickText",
              title: "OnClick Text or Action",
              type: "string",
              description:
                "Optional text or hint for the onClick event (e.g., 'Learn more about Plasma Power').",
            }),
          ],
        }),
      ],
    }),
  ],
});
