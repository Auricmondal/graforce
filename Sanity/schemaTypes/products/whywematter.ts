import { defineType, defineField } from "sanity";

export default defineType({
  name: "whyWeMatterSection",
  title: "Why We Matter Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description:
        "Main header text for this section (e.g., 'Our Mission is to Save the Earth')",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Sub Header",
      type: "string",
      description:
        "Small label displayed above the section (e.g., 'Here is Why We Matter')",
    }),
    defineField({
      name: "cards",
      title: "Why We Matter Cards",
      type: "array",
      description:
        "List of cards explaining why this product/service matters",
      of: [
        {
          type: "object",
          name: "card",
          title: "Card",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "number",
              description: "Unique identifier for each card",
            }),
            defineField({
              name: "title",
              title: "Card Title",
              type: "string",
              description: "Title for the card (e.g., 'Rising Emissions Over Decades')",
            }),
            defineField({
              name: "description",
              title: "Card Description",
              type: "text",
              description:
                "Description text for the card (e.g., 'Global fossil CO₂ emissions have grown by 60%...')",
            }),
            defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "URL to navigate when the button is clicked (e.g., /industries)",
    }),
          ],
        },
      ],
    }),
  ],
});
