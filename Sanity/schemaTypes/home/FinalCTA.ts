export default {
  name: "finalCTASection",
  title: "Final CTA Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main heading text for the final call-to-action section",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text displayed on the CTA button",
    },
    {
      name: "leftImage",
      title: "Left Background Image",
      type: "image",
      options: { hotspot: true },
      description: "The decorative image shown on the left side",
    },
    {
      name: "rightImage",
      title: "Right Background Image",
      type: "image",
      options: { hotspot: true },
      description: "The decorative image shown on the right side",
    },
  ],
};
