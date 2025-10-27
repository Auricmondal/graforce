export default {
  name: "heroHomeSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Main Title",
      type: "string",
      description: "The main heading text for the hero section",
    },
    {
      name: "highlightedWord",
      title: "Highlighted Word",
      type: "string",
      description: "Word in the title that appears highlighted (e.g., Hydrogen)",
    },
    {
      name: "videoFile",
      title: "Background Video File",
      type: "file",
      description: "Upload a .webm or .mp4 video for the hero section",
      options: { accept: "video/webm,video/mp4" },
    },
    {
      name: "videoUrl",
      title: "Background Video URL",
      type: "url",
      description: "External video link (.webm or .mp4). Used if videoFile is empty.",
    },
    {
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
      description: "Text for the first button (e.g., Book a Demo)",
    },
    {
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
      description: "Text for the second button (e.g., Learn More)",
    },
    {
      name: "jobs",
      title: "Jobs",
      type: "array",
      of: [
        {
          type: "object",
          title: "Job",
          fields: [
            { name: "title", title: "Job Title", type: "string" },
            { name: "description", title: "Job Description", type: "text" },
            { name: "link", title: "Job Link", type: "url" },
          ],
        },
      ],
      description: "List of jobs to show in the Hero Section sidebar",
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [
        {
          type: "object",
          title: "Specification",
          fields: [
            { name: "subtitle", title: "Subtitle", type: "string" },
            { name: "details", title: "Details", type: "text" },
            {
              name: "points",
              title: "Points",
              type: "array",
              of: [{ type: "string" }],
              description: "Bullet points for this specification",
            },
          ],
        },
      ],
      description: "List of specifications to show in the Hero Section sidebar",
    },
    {
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [
        {
          type: "object",
          title: "Blog",
          fields: [
            { name: "title", title: "Blog Title", type: "string" },
            { name: "excerpt", title: "Blog Excerpt", type: "text" },
            { name: "slug", title: "Blog Slug", type: "slug" },
          ],
        },
      ],
      description: "List of blogs to show when user clicks 'Learn More'",
    },
  ],
};
