// schemas/about/hero.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroaboutSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "header",
      title: "Header Text",
      type: "string",
      description: "Main heading displayed in the hero section",
    }),
    defineField({
      name: "subHeader",
      title: "Subheader Text",
      type: "text",
      description: "Optional subheader or description",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Background image for the hero section",
    }),
  ],
});
