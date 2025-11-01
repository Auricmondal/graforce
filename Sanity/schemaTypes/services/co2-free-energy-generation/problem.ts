import { defineType, defineField } from "sanity";

export default defineType({
  name: "problemSection",
  title: "Emission Problem Section",
  type: "object",
  fields: [
        defineField({
          name: "sectionTitle",
          title: "Section Title",
          type: "string",
          description:
            "The main title of the problem section. Example: 'The Problem We Discovered'",
        }),
        defineField({
          name: "sectionHeading",
          title: "Section Heading",
          type: "string",
          description:
            "The short heading below the section title. Example: 'The Emission Burden'",
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
                  description: "Unique numeric identifier for each problem.",
                }),
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  description: "The title of the problem. Example: 'High CO₂ Emissions'",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  description:
                    "Detailed explanation of the problem. Example: 'Methane combustion contributes significantly to greenhouse gases.'",
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
                        {
                          name: "year",
                          title: "Year",
                          type: "string",
                          description: "Year of the data point. Example: '2025'",
                        },
                        {
                          name: "value",
                          title: "Value",
                          type: "number",
                          description: "Value for that year. Example: 1200",
                        },
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
