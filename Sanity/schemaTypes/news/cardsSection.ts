// schemas/cardsSection.js
import { defineType, defineField } from "sanity";

export default defineType({
  name: "cardsSection",
  title: "Cards Section Settings",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Subheader",
      type: "string",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      description: "Categories for filtering news",
    }),
    defineField({
      name: "pattern",
      title: "Grid Pattern",
      type: "array",
      of: [{ type: "number" }],
      description: "Pattern for arranging cards (like [1,3,2,3])",
    }),
    defineField({
      name: "showLoadMore",
      title: "Show Load More Button",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
