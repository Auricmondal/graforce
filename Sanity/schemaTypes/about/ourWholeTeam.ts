// schemas/about/ourWholeTeam.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "ourWholeTeam",
  title: "Our Whole Team Section",
  type: "object",
  fields: [
    defineField({
      name: "leftCard",
      title: "Left Card",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "rightCard",
      title: "Right Card",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
      ],
    }),
  ],
});
