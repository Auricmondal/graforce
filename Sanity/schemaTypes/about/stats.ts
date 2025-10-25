import { defineType, defineField } from "sanity";

export default defineType({
  name: "statsSection",
  title: "Stats Section",
  type: "object",
  fields: [
    defineField({
      name: "stats",
      title: "Stats Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "statItem",
          title: "Stat Item",
          fields: [
            defineField({ name: "value", title: "Value", type: "number" }),
            defineField({ name: "prefix", title: "Prefix", type: "string" }),
            defineField({ name: "suffix", title: "Suffix", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        },
      ],
    }),
  ],
});
