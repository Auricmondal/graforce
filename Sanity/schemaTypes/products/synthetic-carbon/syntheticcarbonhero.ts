import { defineType, defineField } from "sanity";

export default defineType({
  name: "syntheticcarbonHeroSection",
  title: "Hero Section (Carbon Product)",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main heading text (e.g., 'Turning Solid Carbon into Sustainable Value').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      description:
        "Supporting text (e.g., technical and environmental benefits of your carbon product).",
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
      description: "Upload a .riv file for the hero animation (optional).",
      options: { accept: ".riv" },
    }),
  ],
});
