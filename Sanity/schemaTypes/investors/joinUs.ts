import { defineType, defineField } from "sanity";

export default defineType({
  name: "joinUsSection",
  title: "Join Us Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Join Us in Scaling Hydrogen",
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      initialValue:
        "Graforce is seeking long-term equity partners to accelerate growth.",
    }),
    defineField({
      name: "topSection",
      title: "Top Section Content",
      type: "array",
      of: [
        {
          type: "object",
          name: "topItem",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "timelineImage",
      title: "Timeline Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "sectionTitle",
      media: "timelineImage",
    },
  },
});
