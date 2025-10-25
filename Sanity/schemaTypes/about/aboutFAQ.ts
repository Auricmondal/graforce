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
    }),
    defineField({
      name: "subHeader",
      title: "Subheader",
      type: "text",
    }),
    defineField({
      name: "buttonContent",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ Item",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
          ],
        },
      ],
    }),
  ],
});
