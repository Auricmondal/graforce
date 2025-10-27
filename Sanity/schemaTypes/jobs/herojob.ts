import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroJobSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "weAreHiring",
      title: "We Are Hiring Badge",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Where bold minds meet big challenges.",
    }),
    defineField({
      name: "subHeading",
      title: "Subheading / Description",
      type: "text",
      rows: 5,
      initialValue:
        "Join Grafoce and turn daring ideas into tangible progress. Create, innovate, and leave a mark that lasts. Be part of a team where every project pushes the boundaries of clean energy and reshape industries, and every contribution matters.",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Explore Open Roles",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "#job-openings",
    }),
  ],
});
