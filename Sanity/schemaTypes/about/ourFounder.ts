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
      description:
        "Short title shown above the main heading — e.g., ‘Our Founder’.",
    }),
    defineField({
      name: "header",
      title: "Main Heading",
      type: "string",
      description:
        "Add a bold, visionary heading — e.g., ‘The Minds Powering a Hydrogen Revolution’.",
    }),
    defineField({
      name: "paragraphs",
      title: "Founder Story",
      type: "array",
      of: [{ type: "text" }],
      description:
        "Write about the founder’s journey and mission — for example, how Dr. Jens Hanke envisioned reversing climate change through technology, and how the Grafoce team blends physics, engineering, and design to make clean hydrogen accessible.",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Profile URL",
      type: "url",
      description:
        "Add the founder’s official LinkedIn profile link — e.g., Dr. Jens Hanke’s profile.",
    }),
    defineField({
      name: "founderImage",
      title: "Founder Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Upload a professional image of the founder — ideally one that reflects leadership and innovation.",
    }),
  ],
});
