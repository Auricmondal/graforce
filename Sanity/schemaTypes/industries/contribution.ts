import { defineType, defineField } from "sanity";

export default defineType({
  name: "contributionSection",
  title: "Contribution Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Subheader",
      type: "string",
    }),
    defineField({
      name: "sectionImage",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cases",
      title: "Cases / Contributions",
      type: "array",
      of: [
        defineField({
          name: "caseItem",
          title: "Case Item",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
});
