export default {
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    {
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label text displayed above the FAQ heading (e.g., 'FAQs')",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main title for the FAQ section (e.g., 'Let's Answer Your Queries')",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Optional background image shown beside the FAQs",
      options: { hotspot: true },
    },
    {
      name: "faqs",
      title: "FAQ List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
