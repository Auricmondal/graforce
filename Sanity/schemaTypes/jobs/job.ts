import { defineType, defineField } from "sanity";

export default defineType({
  name: "job",
  title: "Job",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Job Content",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Job Title",
          type: "string",
        }),
        defineField({
          name: "postedOn",
          title: "Posted On",
          type: "string",
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
        }),
        defineField({
          name: "applyBy",
          title: "Apply By",
          type: "string",
        }),
        defineField({
          name: "aboutUs",
          title: "About Us",
          type: "text",
        }),
        defineField({
          name: "aboutUsPoints",
          title: "About Us Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "jobDescription",
          title: "Job Description",
          type: "text",
        }),
        defineField({
          name: "jobDescriptionPoints",
          title: "Job Description Points",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    defineField({
      name: "actions",
      title: "Actions",
      type: "array",
      of: [
        defineField({
          name: "action",
          title: "Action",
          type: "object",
          fields: [
            defineField({
              name: "required",
              title: "Required",
              type: "boolean",
            }),
            defineField({
              name: "label",
              title: "Button Label",
              type: "string",
            }),
            defineField({
              name: "primary",
              title: "Is Primary Button?",
              type: "boolean",
            }),
            defineField({
              name: "onClick",
              title: "onClick Function (as text)",
              type: "string",
              description:
                "You can define what happens when the button is clicked, e.g. () => alert('Clicked!')",
            }),
          ],
        }),
      ],
    }),
  ],
  });
