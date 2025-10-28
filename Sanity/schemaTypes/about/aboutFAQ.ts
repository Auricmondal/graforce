// schemas/aboutFAQSection.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutFAQSection",
  title: "About FAQ Section",
  type: "object",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      description: "The main heading of the FAQ section. Example: 'Real impact needs real people. That’s where you come in.'",
    }),
    defineField({
      name: "subHeader",
      title: "Subheader",
      type: "text",
      description: "The supporting text under the header. Provide more context about the section or the company culture.",
    }),
    defineField({
      name: "buttonContent",
      title: "Button Text",
      type: "string",
      description: "The text displayed on the primary call-to-action button. Example: 'Explore Job Openings'.",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      description: "A list of frequently asked questions with their answers.",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              description: "The question you want to display. Example: 'How do I apply for a job at Grafoce?'",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              description: "The answer to the corresponding question. Keep it clear and concise.",
            },
          ],
        },
      ],
    }),
  ],
});
