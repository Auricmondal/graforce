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
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Main hero background image (e.g., hydrogen network or globe).",
      options: { hotspot: true },
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
      description: "Defines what happens when user clicks the primary button",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link / File",
      type: "file",
      description: "Upload a brochure PDF or any downloadable file.",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "External Brochure URL",
      type: "url",
      description: "Optional external brochure link (used if file is empty).",
    }),
  ],
});
