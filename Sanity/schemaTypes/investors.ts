import { defineType, defineField } from "sanity";

export default defineType({
  name: "investors",
  title: "Investors Page",
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
      name: "heroSection",
      title: "Hero Section",
      type: "heroSection",
    }),
    defineField({
      name: "impactOpportunitySection",
      title: "Impact Opportunity Section",
      type: "impactOpportunitySection",
    }),
    defineField({
      name: "caseStudiesSection",
      title: "Case Studies Section",
      type: "caseStudiesSection",
    }),
    defineField({
      name: "graforceCardsSection",
      title: "Graforce Cards Section",
      type: "graforceCardsSection",
    }),
    defineField({
      name: "marketEntrySection",
      title: "Market Entry Section",
      type: "marketEntrySection",
    }),
    defineField({
      name: "socialProofSection",
      title: "Social Proof Section",
      type: "socialProofSection",
    }),
    defineField({
      name: "teamSection",
      title: "Team Section",
      type: "teamSection",
    }),
    defineField({
      name: "joinUsSection",
      title: "Join Us Section",
      type: "joinUsSection",
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "heroSection.title",
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `Investors Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
