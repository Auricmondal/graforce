import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "solutionSection",
  title: "Solution Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Badge text displayed above the heading (e.g., 'Our Solution')",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main heading for the solution section",
    }),
    defineField({
      name: "steps",
      title: "Solution Steps",
      type: "array",
      description: "Steps that show the solution process",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "solutionStep", // <— consistent naming
          title: "Solution Step",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "number",
              description: "Unique identifier for the step",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              description: "Step title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Detailed description of the step",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title.en",
              subtitle: "id",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Image displayed on the right side of the section",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Accessibility description of the image",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading.en",
      subtitle: "sectionLabel.en",
      media: "backgroundImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Solution Section",
        subtitle: subtitle || "Our Solution",
        media,
      };
    },
  },
});
