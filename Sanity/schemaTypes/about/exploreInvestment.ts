// schemas/about/exploreInvestment.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "exploreInvestment",
  title: "Explore Investment Section",
  type: "object",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      description: "The main heading of the Explore Investment section. Example: 'We’re building the bridge between ambition and action.'",
    }),
    defineField({
      name: "subHeader",
      title: "Subheader",
      type: "text",
      description: "Supporting text that explains or expands on the header. Give more context about the investment opportunities or section content.",
    }),
    defineField({
      name: "buttonContent",
      title: "Button Text",
      type: "string",
      description: "The text displayed on the call-to-action button. Example: 'Explore Investment Options'.",
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The image displayed alongside the text. This should visually represent the section or investment opportunities.",
    }),
  ],
});
