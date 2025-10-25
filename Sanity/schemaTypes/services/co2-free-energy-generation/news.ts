export default {
  name: "newsSection",
  title: "News Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "Title for the section (e.g., Latest News, In the Headlines, etc.)",
    },
    {
      name: "newsItems",
      title: "News Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "newsItem",
          title: "News Item",
          fields: [
            {
              name: "title",
              title: "News Title",
              type: "string",
              description: "Headline or title of the news article",
            },
            {
              name: "tag",
              title: "Tag / Category",
              type: "string",
              description: "Tag or category for the news (e.g., Announcement, Press Release)",
            },
            {
              name: "date",
              title: "Published Date",
              type: "date",
              options: {
                dateFormat: "DD MMM, YYYY",
              },
            },
            {
              name: "image",
              title: "News Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "link",
              title: "External Link (Optional)",
              type: "url",
              description: "If provided, clicking on the news opens this link.",
            },
          ],
        },
      ],
    },
  ],
};
