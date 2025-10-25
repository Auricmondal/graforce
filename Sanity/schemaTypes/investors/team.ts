import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamSection",
  title: "Team Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Team & Leadership",
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      initialValue:
        "Graforce's team combines deep scientific expertise with entrepreneurial drive.",
    }),
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        defineField({
          name: "member",
          title: "Member",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "position", title: "Position", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "image", title: "Image", type: "image" }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "position",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
});
