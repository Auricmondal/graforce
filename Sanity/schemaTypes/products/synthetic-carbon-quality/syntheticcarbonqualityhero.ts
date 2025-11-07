import { defineType, defineField } from "sanity";

export default defineType({
  name: "syntheticCarbonQualityHeroSection",
  title: "Hero Section ",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main heading text (e.g., 'Exceptional Carbon. Engineered for Performance.')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      description:
        "Supporting text (e.g., describing the purity, conductivity, or stability).",
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
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Upload the hero section background image.",
      options: { hotspot: true },
    }),
  ],
});
