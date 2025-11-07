import { defineType, defineField } from "sanity";

export default defineType({
  name: "problemSection",
  title: "Emission Problem Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main heading text (e.g., 'The Problem We Discovered').",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Subheader",
      type: "string",
      description: "Subheading text (e.g., 'The Emission Burden').",
    }),
    defineField({
      name: "problems",
      title: "Problems",
      type: "array",
      of: [
        defineField({
          name: "problem",
          title: "Problem",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Problem ID",
              type: "number",
              description: "Unique numeric identifier for each problem.",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Title of the problem (e.g., 'High CO₂ Emissions').",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Detailed explanation of the problem.",
            }),
          ],
        }),
      ],
    }),
  ],
});
