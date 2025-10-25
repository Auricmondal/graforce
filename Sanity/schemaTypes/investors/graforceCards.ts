import { defineType, defineField } from "sanity";

export default defineType({
  name: "graforceCardsSection",
  title: "Graforce Cards Section",
  type: "object",
  fields: [
    defineField({
      name: "rippleCardTitle",
      title: "Left Ripple Card Title",
      type: "string",
      initialValue: "Graforce",
    }),
    defineField({
      name: "cards",
      title: "Right Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "animationDelay",
              title: "Animation Delay",
              type: "string",
              initialValue: "0s",
            }),
            defineField({
              name: "colSpan",
              title: "Column Span",
              type: "string",
              options: {
                list: [
                  { title: "1", value: "1" },
                  { title: "2", value: "2" },
                ],
              },
              initialValue: "2",
            }),
          ],
        },
      ],
    }),
  ],
});
