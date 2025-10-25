import { defineType, defineField } from "sanity";

export default defineType({
  name: "secondaryCTASection",
  title: "Secondary CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "headline",
      title: "Headline Text",
      type: "string",
      initialValue: "The future runs on clean power. We're building it.",
    }),
    defineField({
      name: "leftImage",
      title: "Left Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rightImage",
      title: "Right Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Let's Talk",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      initialValue: "#",
    }),
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "buttonText",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Secondary CTA Section",
        subtitle: subtitle || "No button text set",
      };
    },
  },
});
