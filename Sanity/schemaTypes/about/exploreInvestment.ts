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
      description: "Main heading of the section",
    }),
    defineField({
      name: "subHeader",
      title: "Subheader",
      type: "text",
      description: "Detailed description or subheading",
    }),
    defineField({
      name: "buttonContent",
      title: "Button Text",
      type: "string",
      description: "Text displayed on the button",
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image displayed alongside the text",
    }),
  ],
});
