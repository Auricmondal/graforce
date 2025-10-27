import { defineType, defineField } from "sanity";

export default defineType({
  name: "industryPage",
  title: "Industry Page",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "industryHeroSection",
      title: "Hero Section",
      type: "industryHeroSection", // You need a separate object type for Hero
    }),
    defineField({
      name: "importantDetailsSection",
      title: "Important Details Section",
      type: "importantDetailsSection", // Same as in product, define object fields
    }),
    defineField({
      name: "contributionSection",
      title: "Contribution Section",
      type: "contributionSection", // Object type for Contribution component
    }),
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "faqSection", // Object type for FAQs
    }),
    defineField({
      name: "newsSection",
      title: "News Section",
      type: "newsSection", // Object type for News
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection", // Object type for Final CTA
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "heroSection.title", // Assuming hero has a title
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `Industry Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
