import { defineType, defineField } from "sanity";

export default defineType({
  name: "investorHero",
  title: "Investor Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Invest in the Future of Hydrogen",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      initialValue:
        "Graforce is redefining hydrogen production with plasma technology - scalable, profitable, and CO₂-free",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Download Brochure",
    }),
    defineField({
      name: "secondaryButtonLink",
      title: "Secondary Button Link",
      type: "url",
      initialValue: "#solutions-section-service",
    }),
  ],
});
