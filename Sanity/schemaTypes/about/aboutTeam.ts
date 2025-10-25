// schemas/about/ourTeam.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "ourTeam",
  title: "Our Team Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label above the header (e.g., 'Our Team')",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      description: "Main heading for this section",
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
      description: "Text for the optional link under the header",
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      description: "URL for the optional link",
    }),
    defineField({
      name: "brandLogos",
      title: "Brand Logos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Logos of the brands supporting or backing the team",
    }),
  ],
});
