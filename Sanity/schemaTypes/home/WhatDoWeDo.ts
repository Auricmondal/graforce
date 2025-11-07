import { defineType, defineField } from "sanity";

export default defineType({
  name: "whatDoWeDoSection",
  title: "What Do We Do Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionLabel",
      title: "Section Label",
      type: "string",
      description: "Small label displayed above the main text, e.g. 'What Do We Do'",
    }),
    defineField({
      name: "description",
      title: "Main Description",
      type: "text",
      description: "Main paragraph describing what the company does",
    }),
    defineField({
      name: "globeImage",
      title: "Globe Video / Image",
      type: "file",
      options: { accept: "video/*,image/*" },
      description: "Upload the .webm video or an image used as the globe background on the right side",
    }),
    defineField({
      name: "floatingTips",
      title: "Floating Tips",
      type: "array",
      of: [
        defineField({
          name: "tip",
          title: "Floating Tip",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Tip Text",
              type: "string",
              description: "Floating tip text, e.g. '100% Carbon Value'",
            }),
            defineField({
              name: "position",
              title: "Position Preset",
              type: "string",
              description: "Select a preset placement for this floating tip",
              options: {
                list: [
                  {
                    title: "Top Right (💚 100% Carbon Value)",
                    value: "top-8 right-4 md:right-1/8 -translate-y-10 md:translate-0",
                  },
                  {
                    title: "Center Right (💙 0% CO₂ Costs)",
                    value: "top-1/2 left-2/3 md:left-2/3 -translate-y-10 md:translate-0",
                  },
                  {
                    title: "Bottom Left (💛 50% Energy Savings)",
                    value: "bottom-5 sm:bottom-5 left-1/9 -translate-y-10 md:translate-0",
                  },
                ],
                layout: "dropdown",
              },
              initialValue:
                "top-8 right-4 md:right-1/8 -translate-y-10 md:translate-0",
            }),
            defineField({
              name: "delay",
              title: "Animation Delay",
              type: "number",
              description: "Animation delay (in seconds) for when the tip appears",
              initialValue: 0.5,
            }),
          ],
        }),
      ],
      description: "List of floating tips displayed over the globe image",
    }),
  ],
});
