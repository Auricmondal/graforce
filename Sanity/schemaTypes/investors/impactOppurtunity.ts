import { defineType, defineField } from "sanity";

export default defineType({
  name: "impactOpportunitySection",
  title: "Impact Opportunity Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
      initialValue: "The Impact Opportunity",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
      initialValue: "Decarbonizing at Industrial Scale",
    }),
    defineField({
      name: "cards",
      title: "Impact Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "impactCard",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
  ],
});
