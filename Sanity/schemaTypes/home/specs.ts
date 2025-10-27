export default {
  name: "specifications",
  title: "Specifications",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Main title for the specifications section",
    },
    {
      name: "specifications",
      title: "Specifications List",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "subtitle",
              title: "Subtitle",
              type: "string",
              description: "Subtitle of the specification (e.g., Dimensions, Performance)",
            },
            {
              name: "details",
              title: "Details",
              type: "text",
              description: "Detailed explanation of this specification",
            },
            {
              name: "points",
              title: "Points",
              type: "array",
              of: [{ type: "string" }],
              description: "Bullet points describing the specification",
            },
          ],
        },
      ],
    },
    {
      name: "actions",
      title: "Actions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "required",
              title: "Required",
              type: "boolean",
              description: "Whether this action is required or optional",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "Text for the action button",
            },
            {
              name: "primary",
              title: "Primary",
              type: "boolean",
              description: "Whether this is a primary action button",
            },
            {
              name: "onClick",
              title: "OnClick",
              type: "string",
              description: "JS code as string to execute when clicked (handled in frontend)",
            },
          ],
        },
      ],
    },
  ],
};
