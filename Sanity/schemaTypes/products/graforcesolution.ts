import { defineType, defineField } from "sanity";

export default defineType({
  name: "graforceSolutionSection",
  title: "Graforce Solution Section",
  type: "object",
  fields: [
    defineField({
      name: "placeholder",
      title: "Placeholder Field",
      type: "string",
      description: "Temporary field. Replace with real fields later.",
    }),
  ],
});
