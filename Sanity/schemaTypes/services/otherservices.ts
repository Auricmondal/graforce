import { defineType, defineField } from "sanity";

export default defineType({
  name: "otherServicesSection",
  title: "Other Services Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Service Title" },
            { name: "slug", type: "slug", title: "Service URL Slug" },
            {
              name: "image",
              type: "image",
              title: "Service Image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
  ],
});
