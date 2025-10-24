import { defineType, defineField } from "sanity";

export default defineType({
  name: "industryHeroSection",
  title: "Industry Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main heading text for the hero section (e.g., 'Hydrogen for Every Sector').",
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      description: "Subtitle or description text for the hero section.",
    }),
    defineField({
      name: "backgroundImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Background image displayed behind the hero content.",
    }),
  ],
});
