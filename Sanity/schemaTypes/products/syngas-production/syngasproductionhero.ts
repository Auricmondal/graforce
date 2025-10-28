import { defineType, defineField } from "sanity";

export default defineType({
  name: "syngasHeroSection",
  title: "Syngas Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main heading for the hero section. Example: 'Clean Syngas, Built from Residue Streams'",
    }),
    defineField({
      name: "subTitle",
      title: "Subheading / Description",
      type: "text",
      description: "Short description or tagline. Example: 'Turning methane, biogas or other gaseous residues into hydrogen and synthesis gas with zero CO₂.'",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Background image for the hero section. Example: upload a high-quality PNG/JPG of syngas facility.",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Example: 'Talk to an Expert'",
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
      description: "Action triggered when primary button is clicked. Example: 'openModal'.",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Example: 'Download Brochure'",
    }),
    defineField({
      name: "secondaryButtonAction",
      title: "Secondary Button Action",
      type: "string",
      options: {
        list:[
        { title: "Download Brochure", value: "download" },
        { title: "Scroll to Section", value: "scroll" },
        { title: "Custom Link", value: "link" },
      ]},
      description: "Action triggered when secondary button is clicked. Example: 'download'.",
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "Optional URL for secondary button if action is 'link' or 'download'. Example: 'https://example.com/brochure.pdf'",
    }),
  ],
});
