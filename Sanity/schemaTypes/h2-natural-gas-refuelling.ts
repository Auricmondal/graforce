import { defineType, defineField } from "sanity";

export default defineType({
  name: "h2-natural-gas-refuelling",
  title: "H2 Natural Gas Refuelling Page",
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
      name: "h2naturalgasHeroSection",
      title: "Hero Section",
      type: "h2naturalgasHeroSection",
    }),
    defineField({
      name: "whyWeMatterSection",
      title: "Why We Matter Section",
      type: "whyWeMatterSection",
    }),
    defineField({
      name: "graforceSolutionSection",
      title: "Graforce Solution Section",
      type: "graforceSolutionSection",
    }),
    defineField({
      name: "howThisWorksSection",
      title: "How This Works Section",
      type: "youNeedUsSection",
    }),
    defineField({
      name: "importantDetailsSection",
      title: "Important Details Section",
      type: "importantDetailsSection",
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
      name: "otherServicesSection",
      title: "Other Services Section",
      type: "otherServicesSection",
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection",
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
      title: "h2naturalgasHeroSection.title",
    },
    prepare(selection) {
      const { language, title } = selection;
      return {
        title: `Product Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
