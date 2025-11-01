import { defineType, defineField } from "sanity";

export default defineType({
  name: "methaneplasmalyzerHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main heading for the product hero (e.g., Methane Plasmalyzer®)",
    }),
    defineField({
      name: "subTitle",
      title: "Subheading / Description",
      type: "text",
      description: "Short description or tagline for the hero section",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
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
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
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
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
    }),
    defineField({
      name: "riveFile",
      title: "Rive File",
      type: "file",
      description: "Upload the .riv animation file",
    }),
    defineField({
      name: "riveStateMachine",
      title: "Rive State Machine",
      type: "string",
      description: "Name of the Rive state machine to use",
    }),
    defineField({
      name: "riveDelay",
      title: "Rive Delay",
      type: "number",
      description: "Delay in milliseconds before starting the Rive animation",
    }),
  ],
});
