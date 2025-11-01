import { defineType, defineField } from "sanity";

export default defineType({
  name: "hydrogenHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The heading text for the Service Hero section (e.g., Renewable Hydrogen Production).",
    }),
    defineField({
      name: "highlightedWord",
      title: "Highlighted Word",
      type: "string",
      description: "Word or phrase to highlight in the title (e.g., Hydrogen).",
    }),
    defineField({
      name: "riveFile",
      title: "Rive Animation File",
      type: "file",
      description: "Upload the .riv file for the hero animation.",
      options: { accept: ".riv" },
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the main CTA button (e.g., Talk to an Expert).",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for the secondary CTA button (e.g., Download Brochure).",
    }),
    defineField({
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      description: "Defines what happens when user clicks the primary button.",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "Optional external link for the secondary button (brochure, download, etc.).",
    }),
  ],
});
