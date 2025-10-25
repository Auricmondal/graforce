import { defineField, defineType } from "sanity";

export default defineType({
  name: "problemSection", // 👈 give it a unique name
  title: "Emission Problems",
  type: "object", // 👈 not document anymore
  fields: [
    defineField({
      name: "problems",
      title: "Problems List",
      type: "array",
      of: [
        defineField({
          name: "problemItem", // 👈 each object in the array needs a name
          title: "Problem Item",
          type: "object",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "data",
              title: "Chart Data",
              type: "array",
              of: [
                {
                  name: "dataPoint", // 👈 name added for nested object
                  title: "Data Point",
                  type: "object",
                  fields: [
                    { name: "year", title: "Year", type: "number" },
                    { name: "value", title: "Value", type: "number" },
                  ],
                },
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
