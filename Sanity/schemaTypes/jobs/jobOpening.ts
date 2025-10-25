import { defineType, defineField } from "sanity";

export default defineType({
  name: "jobOpeningsSection",
  title: "Job Openings Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Build the future. Together.",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      initialValue: "Sector",
    }),
    defineField({
      name: "sectors",
      title: "Sectors",
      type: "array",
      of: [
        defineField({
          name: "sectorItem",
          title: "Sector Item",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              initialValue: "Marketing Manager",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "jobData",
              title: "Job Data",
              type: "array",
              of: [{ type: "reference", to: [{ type: "job" }] }],
            }),
          ],
        }),
      ],
    }),
  ],
});
