import { defineField, defineType } from "sanity";

export default defineType({
  name: "youNeedUsSection",
  title: "You Need Us Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Top small label text, e.g., 'Our Contribution'",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Sub Header",
      type: "string",
      description: "Main heading, e.g., 'Powering Every Sector'",
    }),
    defineField({
      name: "sectionImage",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Accessibility text for the image (optional)",
        },
      ],
      description: "Main tower or background image used in the section",
    }),
    defineField({
      name: "sectionColorVariant",
      title: "Section Color Variant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Custom", value: "custom" },
          { title: "Blue", value: "blue" },
        ],
      },
      initialValue: "default",
      description: "Select color variant for this section",
    }),
    defineField({
      name: "sectionColor",
      title: "Custom Section Color",
      type: "string",
      description:
        "CSS color class or value when using custom variant (e.g. bg-primary)",
    }),
    defineField({
      name: "doubleButton",
      title: "Show Double Buttons",
      type: "boolean",
      initialValue: false,
      description:
        "Enable if you want to show both 'Learn More' and 'Specifications' buttons",
    }),
    defineField({
      name: "fullWidthHeader",
      title: "Full Width Header",
      type: "boolean",
      initialValue: true,
      description:
        "If enabled, the header spans the full section width across the layout",
    }),
    defineField({
      name: "sectorsData",
      title: "Sectors Data",
      type: "array",
      of: [
        defineField({
          name: "sector",
          type: "object",
          title: "Sector",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "Small label text, e.g., 'energy management'",
            }),
            defineField({
              name: "title",
              title: "Title / Description",
              type: "text",
              description: "Main description for the sector",
            }),
          ],
          preview: {
            select: {
              title: "label",
            },
          },
        }),
      ],
      description: "List of sectors with label and detailed description",
    }),
  ],
});
