export default {
  name: "waterHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading text for the hero section (e.g., Transforming Water. Sustaining Life.).",
    },
    {
      name: "backgroundImageLeft",
      title: "Left Background Image",
      type: "image",
      description: "Left decorative background image.",
      options: { hotspot: true },
    },
    {
      name: "backgroundImageRight",
      title: "Right Background Image",
      type: "image",
      description: "Right decorative background image.",
      options: { hotspot: true },
    },
    {
      name: "overlayImage",
      title: "Overlay Image",
      type: "image",
      description: "Central overlay image applied over the left/right images.",
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
      description: "Text for the secondary CTA button (e.g., Download Brochure).",
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
      description: "External link for the secondary button (used if file not uploaded).",
    },
  ],
};
