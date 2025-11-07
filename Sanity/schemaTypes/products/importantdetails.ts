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
      description:
        "Small label displayed above the section (e.g., 'Important Details')",
    }),
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description:
        "Main header for this section (e.g., 'Technical and Other Details')",
    }),
    defineField({
      name: "cards",
      title: "Details Cards",
      type: "array",
      description:
        "Right-hand cards with title, description, and left visual mapping",
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
              title: "Left Visual Type",
              type: "string",
              description:
                "Select which pre-defined left layout should appear for this card",
              options: {
                list: [
                  { title: "Type 1 – Rive Animation", value: "1" },
                  { title: "Type 2 – Image + InfoCards", value: "2" },
                  { title: "Type 3 – Data Grid Cards", value: "3" },
                  { title: "Type 4 – Rive Animation 2", value: "4" },
                  { title: "Type 5 – Image + InfoCards 2", value: "5" },
                ],
                layout: "dropdown",
              },
              initialValue: "1",
            }),
          ],
        }),
      ],
    }),
  ],
});
