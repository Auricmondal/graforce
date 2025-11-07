import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "solutionSection",
  title: "Solution Section",
  type: "object",
  fields: [
    defineField({
      name: "subHeader",
      title: "Sub Header",
      type: "string",
      description: "Small heading text (e.g., 'Our Solution')",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      description: "Main heading text (e.g., 'Splitting methane into solid carbon and clean hydrogen.')",
    }),
    defineField({
      name: "riveFile",
      title: "Rive File",
      type: "file",
      options: { accept: ".riv" },
      description: "Upload a Rive animation file (e.g., electrolysis.riv)",
    }),
    defineField({
      name: "problemData",
      title: "Solution Steps / Problem Data",
      type: "array",
      description: "Steps displayed in the circular animation graph",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "solutionStep",
          title: "Solution Step",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "number",
              validation: (Rule) => Rule.required(),
              description: "Unique identifier for the step",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
              description: "Step title (e.g., 'Plasma Electrolysis Systems (Plasmalyzers®)')",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
              description: "Detailed explanation of this step",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              description: "Optional image for this step",
            }),
            defineField({
              name: "link",
              title: "Link",
              type: "url",
              description: "Optional URL link for this step (e.g., /products/methane-plasmalyzer)",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "id",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
});
