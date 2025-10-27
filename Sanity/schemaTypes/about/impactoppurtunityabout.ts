// schemas/about/impactOpportunity.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "impactOpportunity",
  title: "Impact & Opportunity Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Label text above the header",
    }),
    defineField({
      name: "header",
      title: "Header Text",
      type: "string",
      description: "Main heading in this section",
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Content paragraphs",
    }),
    defineField({
      name: "video",
      title: "Video Upload",
      type: "file",
      options: {
        accept: "video/*", // Only accept video files
      },
      description: "Upload a video to display on the right side",
    }),
  ],
});
