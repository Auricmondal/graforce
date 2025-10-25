import { defineType, defineField } from "sanity";

export default defineType({
  name: "socialProofSection",
  title: "Social Proof Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Social Proof",
    }),
    defineField({
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
      initialValue: "Graforce is featured in global media and industry reports.",
    }),
    defineField({
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "brand",
          fields: [
            defineField({ name: "name", title: "Brand Name", type: "string" }),
            defineField({ name: "logo", title: "Brand Logo", type: "image" }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        }),
      ],
    }),
  ],
});
