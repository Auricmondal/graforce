import { defineType, defineField } from "sanity";

export default defineType({
  name: "wastewaterheroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main headline (e.g., 'Redefining Waste as a Resource').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      description:
        "Supporting text under the main title (e.g., your sustainability message).",
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
      description:
        "Main hero image (e.g., plasma, wastewater, or hydrogen image).",
      options: { hotspot: true },
    }),
  ],
});
