import { defineType, defineField } from "sanity";

export default defineType({
  name: "h2naturalgasHeroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main heading text displayed in the hero section",
    }),
    defineField({
      name: "subTitle",
      title: "Subheading / Description",
      type: "text",
      description: "Short descriptive text shown below the title",
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Label for the primary call-to-action button",
    }),
    defineField({
      name: "primaryButtonAction",
      title: "Primary Button Action",
      type: "string",
      description: "Action type or link for the primary button (e.g., 'contactForm', 'link', etc.)",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Label for the secondary button (e.g., 'Download Brochure')",
    }),
    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button File (Optional)",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
      description: "Upload a file for the secondary button (e.g., a brochure PDF)",
    }),
    defineField({
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
      options: {
        accept: "video/*",
      },
      description: "Background looping video for the hero section",
    }),
  ],
});
