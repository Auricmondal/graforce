import { defineType, defineField } from "sanity";

export default defineType({
  name: "usedcomponentsHeroSection",
  title: "Hero Section (Used Components)",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main heading text (e.g., 'Efficient Gas Separation & Compression').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      description: "Supporting text (e.g., system description).",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Talk to an Expert",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Download Brochure",
    }),
    defineField({
      name: "riveAnimation",
      title: "Rive Animation File",
      type: "file",
      description: "Upload your Rive animation (.riv file) for the hero section.",
      options: {
        accept: ".riv",
      },
    }),
  ],
});
