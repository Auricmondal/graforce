// schemas/about/ourFounder.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "ourFounder",
  title: "Our Founder Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label above the header",
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      description: "Main heading for this section",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Content paragraphs about the founder",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      description: "Founder’s LinkedIn profile link",
    }),
    defineField({
      name: "founderImage",
      title: "Founder Image",
      type: "image",
      options: { hotspot: true },
      description: "Image of the founder",
    }),
  ],
});
