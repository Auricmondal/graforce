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
      description: "Main heading for the industry hero section. Example: 'Hydrogen for Every Sector'",
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      description: "Supporting description for hero. Example: 'From energy systems to heavy industry, Graforce solutions cut emissions...'",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Background image for the hero section (e.g., industry hero image).",
      options: { hotspot: true },
    }),
  ],
});
