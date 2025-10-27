export default {
  name: "energyHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The heading text for the hero section (e.g., Engineering the Future of CO₂ Free Power).",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Main hero background image.",
      options: { hotspot: true },
    },
    {
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the main CTA button (e.g., Talk to an Expert).",
    },
    {
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      description: "Action for primary button.",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "External Link", value: "link" },
        ],
      },
    },
    {
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for secondary CTA button (e.g., Download Brochure).",
    },
    {
      name: "secondaryButtonAction",
      title: "Secondary Button Action",
      type: "string",
      description: "Action for secondary button.",
      options: {
        list: [
          { title: "Scroll to Section", value: "scroll" },
          { title: "Download File", value: "file" },
          { title: "External Link", value: "link" },
        ],
      },
    },
    {
      name: "secondaryButtonFile",
      title: "Secondary Button File",
      type: "file",
      description: "Upload a PDF brochure (optional).",
      options: { accept: "application/pdf" },
    },
    {
      name: "secondaryButtonUrl",
      title: "Secondary Button URL",
      type: "url",
      description: "External link for the secondary button (optional, used if file not uploaded).",
    },
  ],
};
