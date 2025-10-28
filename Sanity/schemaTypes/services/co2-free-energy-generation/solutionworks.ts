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
      description: "Secondary heading (e.g., The Future of Hydrogen)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short paragraph under the sub-header",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      description: "Upload a .webm or .mp4 video file",
      options: {
        accept: "video/webm,video/mp4",
      },
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "External video URL (if not using uploaded file)",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text for the button (e.g., Download Brochure)",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "Link for the button (external or internal)",
    }),
  ],
});
