import { defineType, defineField } from "sanity";

export default defineType({
  name: "whyWeMatterSection",
  title: "Why We Matter Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Small label displayed above the section (e.g., 'Here is Why We Matter')",
    }),
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main header text for this section (e.g., 'Our Mission is to Save the Earth')",
    }),
    defineField({
      name: "cards",
      title: "Solution Cards",
      type: "array",
      description: "List of cards explaining why this product/service matters",
      of: [
        defineField({
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              description: "Unique identifier for each card",
            }),
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              description: "Title for the solution card",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              description: "Description text for the solution card",
            }),
            defineField({
              name: "data",
              title: "Chart Data",
              type: "array",
              description: "Optional numeric data used to render chart on the right side",
              of: [
                defineField({
                  name: "dataPoint",
                  title: "Data Point",
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "value", title: "Value", type: "number" },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
