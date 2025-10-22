import { defineType, defineField } from "sanity";

export default defineType({
  name: "solutionWorksSection",
  title: "Solution Works Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Main header text for the section (e.g., How the Solution Works)",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Sub Header",
      type: "string",
      description: "Sub-header or description text for the section",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      description: "Upload a .webm or .mp4 video",
      options: {
        accept: "video/webm,video/mp4",
      },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "External video URL if no file is uploaded",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text for the primary button (e.g., Download Brochure)",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "URL the button should link to",
    }),
  ],
});
