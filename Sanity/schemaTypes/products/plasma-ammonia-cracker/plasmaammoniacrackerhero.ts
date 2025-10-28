// schemas/hydrogenAmmoniaHeroSection.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "plasmaammoniacrackerHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading for the hero section. Example: 'Hydrogen from Ammonia, Reinvented'",
    }),
    defineField({
      name: "subTitle",
      title: "Subheading / Description",
      type: "text",
      description: "A short description or tagline for the hero section. Example: 'Our plasma technology makes hydrogen production cleaner, safer, and carbon-free.'",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Main background image for the hero section. Example: Upload a high-quality PNG or JPG showing the hydrogen network.",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the main CTA button. Example: 'Talk to an Expert'",
    }),
    defineField({
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
      description: "Action triggered when the primary button is clicked. Example: 'openModal' to show contact form.",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for the secondary CTA button. Example: 'Download Brochure'",
    }),
    defineField({
  name: "secondaryButtonAction",
  title: "Secondary Button Action",
  type: "string",
  options: {
    list: [
      { title: "Download Brochure", value: "download" },
      { title: "Scroll to Section", value: "scroll" },
      { title: "Custom Link", value: "link" },
    ],
  },
  description: "Action triggered when the secondary button is clicked. Example: 'download' to download a brochure PDF.",
}),

    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "Optional URL for the secondary button if action is 'link' or 'download'. Example: 'https://example.com/brochure.pdf'",
    }),
  ],
});
