import { defineType, defineField } from "sanity";

export default defineType({
  name: "marketEntrySection",
  title: "Market Entry Section",
  type: "object",
  fields: [
    defineField({
      name: "leftBox",
      title: "Left Box",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string", initialValue: "Market Entry in 2025" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "backgroundImage", title: "Background Image", type: "image" }),
      ],
    }),
    defineField({
      name: "topMiddleBox",
      title: "Top Middle Box",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Text", type: "text", initialValue: "Demo plant successfully running in Austria." }),
        defineField({ name: "decorativeImage", title: "Decorative Image", type: "image" }),
      ],
    }),
    defineField({
      name: "topRightBox",
      title: "Top Right Box",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Text", type: "text", initialValue: "0.5 MW reactor developed and ready for commercialization." }),
        defineField({ name: "decorativeImage", title: "Decorative Image", type: "image" }),
      ],
    }),
    defineField({
      name: "bottomRightBox",
      title: "Bottom Right Box",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Text", type: "text", initialValue: "Active pipeline of industrial partners for early deployment." }),
        defineField({
          name: "decorativeImages",
          title: "Decorative Images",
          type: "array",
          of: [{ type: "image" }],
        }),
      ],
    }),
  ],
});
