export default {
  name: "youNeedUsSection",
  title: "You Need Us Section",
  type: "object",
  fields: [
    {
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Top small label text, e.g., 'Our Contribution'",
    },
    {
      name: "sectionSubHeader",
      title: "Section Sub Header",
      type: "string",
      description: "Main heading, e.g., 'Powering Every Sector'",
    },
    {
      name: "sectionImage",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
      description: "Main tower or background image used in the section",
    },
    {
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
    },
    {
      name: "sectionColor",
      title: "Custom Section Color",
      type: "string",
      description: "CSS color class or value when using custom variant (e.g. bg-primary)",
    },
    {
      name: "doubleButton",
      title: "Show Double Buttons",
      type: "boolean",
      initialValue: false,
      description: "Enable if you want to show both 'Learn More' and 'Specifications' buttons",
    },
    {
      name: "fullWidthHeader",
      title: "Full Width Header",
      type: "boolean",
      initialValue: true,
      description: "If enabled, the header spans the full section width",
    },
    {
      name: "sectorsData",
      title: "Sectors Data",
      type: "array",
      of: [
        {
          type: "object",
          name: "sector",
          title: "Sector",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "Small label text, e.g., 'energy management'",
            },
            {
              name: "title",
              title: "Title / Description",
              type: "text",
              description: "Main description for the sector",
            },
          ],
        },
      ],
      description: "List of sectors with label and detailed description",
    },
  ],
};
