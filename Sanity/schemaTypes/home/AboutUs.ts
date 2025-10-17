import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUsSection",
  title: "About Us Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "Main heading for the About Us section (e.g., Trusted. Proven. Driven.)",
    }),
    defineField({
      name: "foundation",
      title: "Foundation Year",
      type: "number",
      description: "The year the company was founded, e.g., 2012"
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "Headquarter or company location (e.g., Berlin Adlershof)",
    }),
    defineField({
      name: "brandLogos",
      title: "Brand Logos",
      type: "array",
      description: "Logos of partner or certified brands",
      of: [
        defineField({
          name: "brand",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Brand Name",
              type: "string",
            }),
            defineField({
              name: "logo",
              title: "Logo Image",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: "name",
              media: "logo",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "Displayed prominently (e.g., Graforce)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      description: "A short paragraph describing what the company does and its technology highlights."
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "Text displayed on the button (e.g., Learn More)",
      initialValue: "Learn More",
    }),
    defineField({
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
      description: "The URL the button should link to (e.g., /contact or https://example.com)",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "companyName",
      media: "image",
    },
  },
});
