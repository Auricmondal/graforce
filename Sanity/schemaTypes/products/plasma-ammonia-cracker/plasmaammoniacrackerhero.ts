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
      description: "Example: 'Hydrogen from Ammonia, Reinvented'",
    }),
    defineField({
      name: "subTitle",
      title: "Subheading / Description",
      type: "text",
      description: "Example: 'Our plasma technology makes hydrogen production cleaner, safer, and carbon-free.'",
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
    }),
    defineField({
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "Optional URL for secondary button if action is 'link' or 'download'",
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
      description: "Name of the state machine to control the animation",
    }),
    defineField({
      name: "riveDelay",
      title: "Rive Animation Delay",
      type: "number",
      description: "Delay before the animation starts in milliseconds",
    }),
  ],
});
