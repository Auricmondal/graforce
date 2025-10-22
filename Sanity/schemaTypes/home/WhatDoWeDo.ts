export default {
  name: "whatDoWeDoSection",
  title: "What Do We Do Section",
  type: "object",
  fields: [
    {
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Small label displayed above the main text, e.g. 'What Do We Do'",
    },
    {
      name: "description",
      title: "Main Description",
      type: "text",
      description: "Main paragraph describing what the company does",
    },
    {
      name: "globeImage",
      title: "Globe Image",
      type: "image",
      options: { hotspot: true },
      description: "Background globe image displayed on the right side",
    },
    {
      name: "floatingTips",
      title: "Floating Tips",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Tip Text",
              type: "string",
              description: "Floating tip text, e.g. '• 100% Carbon Value'",
            },
          ],
        },
      ],
      description: "List of floating tips displayed over the globe image",
    },
  ],
};
