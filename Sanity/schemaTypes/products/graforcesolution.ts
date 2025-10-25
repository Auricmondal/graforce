import { defineType, defineField } from "sanity";

export default defineType({
  name: "graforceSolutionSection",
  title: "Graforce Solution Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label above the header (e.g., 'The Graforce Solution').",
      initialValue: "The Graforce Solution",
    }),
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main heading text (e.g., 'Plasmalyzer®').",
      initialValue: "Plasmalyzer®",
    }),
    defineField({
      name: "cards",
      title: "Solution Cards",
      type: "array",
      description: "Cards displayed under this section.",
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
            }),
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "onClickText",
              title: "OnClick Text or Action",
              type: "string",
              description:
                "Optional text for the onClick event (e.g., 'Learn more about Plasma Power').",
            }),
          ],
        }),
      ],
    }),
  ],
});
