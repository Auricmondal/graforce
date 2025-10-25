import { defineType, defineField } from "sanity";

export default defineType({
  name: "jobs",
  title: "Jobs Page",
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
      type: "heroSection", // You can create a variant for Jobs if needed
    }),
    defineField({
      name: "aboutUsSection",
      title: "About Us Section",
      type: "aboutUsSection",
    }),
    defineField({
      name: "ourValuesSection",
      title: "Our Values Section",
      type: "ourValuesSection",
    }),
    defineField({
      name: "jobOpeningsSection",
      title: "Job Openings Section",
      type: "jobOpeningsSection",
    }),
    defineField({
      name: "secondaryCTASection",
      title: "Secondary CTA Section",
      type: "secondaryCTASection",
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
        title: `Jobs Page [${language?.toUpperCase() || "??"}]`,
        subtitle: title || "No content yet",
      };
    },
  },
});
