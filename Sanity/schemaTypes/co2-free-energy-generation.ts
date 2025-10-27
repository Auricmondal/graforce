import { defineType, defineField } from "sanity";

export default defineType({
  name: "co2-free-energy-generation",
  title: "Service Page",
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
      name: "serviceHeroSection",
      title: "Hero Section",
      type: "serviceHeroSection",
    }),
    defineField({
      name: "problemSection",
      title: "Emission Problems",
      type: "problemSection",
    }),
    defineField({
      name: "achievementsSection",
      title: "Achievements Section",
      type: "youNeedUsSection",
    }),
    defineField({
      name: "whyWorldNeedsUsSection",
      title: "Why World Needs Us Section",
      type: "youNeedUsSection",
    }),
    defineField({
      name: "solutionWorksSection",
      title: "Solution Works Section",
      type: "solutionWorksSection",
    }),
    defineField({
      name: "productGallerySection",
      title: "Product Gallery Section",
      type: "productGallerySection",
    }),
    defineField({
      name: "testimonialSection",
      title: "Testimonials Section",
      type: "testimonialSection",
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection",
    }),
    defineField({
      name: "otherServicesSection",
      title: "Other Services Section",
      type: "otherServicesSection",
    }),
    defineField({
      name: "newsSection",
      title: "News Section",
      type: "newsSection",
    }),
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "faqSection",
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "serviceHeroSection.title",
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `Service Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
