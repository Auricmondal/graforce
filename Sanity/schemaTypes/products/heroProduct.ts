import { defineType, defineField } from "sanity";

export default defineType({
  name: "productHeroSection",
  title: "Product Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading for the product hero (e.g., Methane Plasmalyzer®)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short description or tagline for the hero section",
    }),
    defineField({
      name: "backgroundImages",
      title: "Background Images",
      type: "array",
      description: "Images shown in the hero background (can be multiple decorative images)",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the main CTA button (e.g., Talk to an Expert)",
    }),
    defineField({
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      description: "Defines what happens on click (e.g., open modal)",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for the secondary CTA button (e.g., Download Brochure)",
    }),
    defineField({
      name: "secondaryButtonAction",
      title: "Secondary Button Action",
      type: "string",
      description: "Defines what happens on click (e.g., download file or scroll)",
      options: {
        list: [
          { title: "Download Brochure", value: "download" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "Optional URL for secondary button if action is 'link' or 'download'",
    }),
  ],
});
