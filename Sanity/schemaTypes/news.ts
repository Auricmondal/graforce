// schemas/newsPage.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "newsPage",
  title: "News / Blogs Page",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      title: "Language",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "cardsSection",
      title: "Cards Section",
      type: "cardsSection", // your custom object schema for CardsSection
    }),
    defineField({
      name: "otherServicesSection",
      title: "Other Services Section",
      type: "otherServicesSection", // reuse the schema you already have
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection", // reuse the schema you already have
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "cardsSection.sectionHeader", // show section header in preview
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `News Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
