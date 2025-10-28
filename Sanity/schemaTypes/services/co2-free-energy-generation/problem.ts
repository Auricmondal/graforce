import { defineType, defineField } from "sanity";

export default defineType({
  name: "problemSection",
  title: "Problem Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Title for the problem section",
    }),
    defineField({
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      description: "Heading displayed under the section title",
    }),
    defineField({
      name: "problems",
      title: "Problems",
      type: "array",
      of: [
        defineField({
          name: "problemItem",
          title: "Problem Item",
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "Problem ID",
              type: "number",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "data",
              title: "Data Points",
              type: "array",
              of: [
                defineField({
                  name: "dataPoint",
                  title: "Data Point",
                  type: "object",
                  fields: [
                    { name: "year", title: "Year", type: "string" },
                    { name: "value", title: "Value", type: "number" },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    // ✅ Learn More Button
    defineField({
      name: "learnMoreText",
      title: "Learn More Button Text",
      type: "string",
      description: "Text for the Learn More button",
    }),
    defineField({
      name: "learnMoreLink",
      title: "Learn More Link",
      type: "url",
      description: "Link for the Learn More button",
    }),
  ],
});
