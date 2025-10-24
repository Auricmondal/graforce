import { defineType, defineField } from "sanity";

export default defineType({
  name: "importantDetailsSection",
  title: "Important Details Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Small label displayed above the section (e.g., 'Important Details')",
    }),
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main header for this section (e.g., 'Technical and Other Details')",
    }),
    defineField({
      name: "cards",
      title: "Details Cards",
      type: "array",
      description: "Right-hand cards with title, description, and leftType image mapping",
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
              description: "Unique identifier for the card",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Card title",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Card description text",
            }),
            defineField({
              name: "leftType",
              title: "Left Side Type",
              type: "string",
              description: "Controls which visual appears on the left (1, 2, 3...)",
              options: {
                list: [
                  { title: "Full Image", value: "1" },
                  { title: "Image + Info Cards", value: "2" },
                  { title: "Grid Panels", value: "3" },
                ],
                layout: "radio",
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
