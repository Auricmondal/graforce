import { defineType, defineField } from "sanity";

export default defineType({
  name: "otherServicesSection",
  title: "Other Services Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description:
        "Small label text displayed above the service options (e.g., 'Explore our services').",
    }),
    defineField({
      name: "services",
      title: "Services List",
      type: "array",
      description:
        "List of service options displayed with hover images and links.",
      of: [
        {
          type: "object",
          name: "serviceItem",
          title: "Service Item",
          fields: [
            defineField({
              name: "title",
              title: "Service Title",
              type: "string",
              description: "Name of the service (e.g., Hydrogen Production).",
            }),
            defineField({
              name: "slug",
              title: "Service Slug / URL Path",
              type: "slug",
              description:
                "Used for navigation (e.g., /services/hydrogen-production).",
              options: { source: "title", maxLength: 96 },
            }),
            defineField({
              name: "image",
              title: "Service Image",
              type: "image",
              description:
                "Displayed on hover or as background when user interacts with this service option.",
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
});
