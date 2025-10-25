import { defineType, defineField } from "sanity";

export default defineType({
  name: "ourValuesSection",
  title: "Our Values Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "The Four Pillars Of Graforce",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [
        defineField({
          name: "valueItem",
          title: "Value Item",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "number",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 4,
            }),
            defineField({
              name: "color",
              title: "Background Color",
              type: "string",
              description: "Use Tailwind color classes or HEX code",
              initialValue: "bg-[#5627DA]",
            }),
            defineField({
              name: "image",
              title: "Decorative Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
