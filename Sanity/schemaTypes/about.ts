import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
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
      type: "heroSection", // you can create this object schema
    }),
    defineField({
      name: "impactOpportunity",
      title: "Impact & Opportunity Section",
      type: "impactOpportunity", // object schema for ImpactOpportunity
    }),
    defineField({
      name: "statsSection",
      title: "Stats Section",
      type: "statsSection", // object schema for Stats
    }),
    defineField({
      name: "ourFounder",
      title: "Our Founder Section",
      type: "ourFounder", // object schema for OurFounder
    }),
    defineField({
      name: "ourTeam",
      title: "Our Team Section",
      type: "ourTeam", // object schema for OurTeam
    }),
    defineField({
      name: "ourWholeTeam",
      title: "Whole Team Section",
      type: "ourWholeTeam", // object schema for OurWholeTeam
    }),
    defineField({
      name: "aboutFAQSection",
      title: "FAQ Section",
      type: "aboutFAQSection", // object schema for AboutFAQ
    }),
    defineField({
      name: "exploreInvestment",
      title: "Explore Investment Section",
      type: "exploreInvestment", // object schema for ExploreInvestment
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection", // object schema for FinalCTA
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "heroSection.header", // show hero header in preview
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `About Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
