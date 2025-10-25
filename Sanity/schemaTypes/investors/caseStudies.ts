import { defineType, defineField } from "sanity";

export default defineType({
  name: "caseStudiesSection",
  title: "Case Studies Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "The Impact Opportunity",
    }),
    defineField({
      name: "cases",
      title: "Case Studies",
      type: "array",
      of: [
        defineField({
          name: "caseItem",
          title: "Case Study",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title / Description",
              type: "text",
              rows: 5,
            }),
            defineField({
              name: "image",
              title: "Optional Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
  ],
});
