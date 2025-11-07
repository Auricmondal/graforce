import { defineType, defineField } from "sanity";

export default defineType({
  name: "syngasHeroSection",
  title: "Syngas Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      description: "Main heading (e.g., 'Clean Syngas, Built from Residue Streams').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subTitle",
      title: "Hero Subtitle",
      type: "text",
      description: "Supporting line (e.g., 'Turning methane, biogas, or other residues...').",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      description: "Upload background image for the hero section.",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Talk to an Expert",
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
      initialValue: "openModal",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Download Brochure",
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
      initialValue: "download",
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "If 'Custom Link' is selected, provide a valid URL.",
    }),
  ],
});
