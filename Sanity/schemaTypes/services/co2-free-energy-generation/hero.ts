export default {
  name: "serviceHeroSection",
  title: "Service Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The heading text for the Service Hero section (e.g., Renewable Hydrogen Production).",
    },
    {
      name: "highlightedWord",
      title: "Highlighted Word",
      type: "string",
      description: "Word or phrase to highlight in the title (e.g., Hydrogen).",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Main hero background image (e.g., hydrogen network or globe).",
      options: { hotspot: true },
    },
    {
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the main CTA button (e.g., Talk to an Expert).",
    },
    {
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for the secondary CTA button (e.g., Download Brochure).",
    },
    {
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      description: "Defines what happens when user clicks the primary button (e.g., 'openModal' or 'scroll').",
      options: {
        list: [
          { title: "Open Contact Modal", value: "openModal" },
          { title: "Scroll to Section", value: "scroll" },
          { title: "Custom Link", value: "link" },
        ],
      },
    },
    {
      name: "secondaryButtonLink",
      title: "Secondary Button Link / File",
      type: "file",
      description: "Upload a brochure PDF or any downloadable file.",
      options: {
        accept: "application/pdf",
      },
    },
    {
      name: "secondaryButtonUrl",
      title: "External Brochure URL",
      type: "url",
      description: "Optional external brochure link (used if file is empty).",
    },
  ],
};
