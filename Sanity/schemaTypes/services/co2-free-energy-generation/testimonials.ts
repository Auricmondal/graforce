import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialSection",
  title: "Testimonial Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Header text for the testimonial section. Example: 'This is What Our Customers Have to Say'.",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Subheader",
      type: "string",
      description: "Optional subheader text. Example: 'Valuable Reviews'.",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      description: "Customer reviews to be displayed in the testimonial section.",
      of: [
        defineField({
          name: "testimonialItem",
          title: "Testimonial",
          type: "object",
          fields: [
            defineField({
              name: "companyName",
              title: "Company Name",
              type: "string",
              description: "The name of the company giving the testimonial.",
            }),
            defineField({
              name: "logo",
              title: "Company Logo",
              type: "image",
              options: { hotspot: true },
              description: "Upload the company logo image.",
            }),
            defineField({
              name: "review",
              title: "Review Text",
              type: "text",
              description: "The main testimonial text.",
            }),
            defineField({
              name: "reviewer",
              title: "Reviewer Name",
              type: "string",
              description: "Name of the person giving the review.",
            }),
            defineField({
              name: "designation",
              title: "Designation",
              type: "string",
              description: "Designation or role of the reviewer.",
            }),
          ],
          preview: {
            select: {
              title: "companyName",
              subtitle: "reviewer",
              media: "logo",
            },
          },
        }),
      ],
    }),
  ],
});
