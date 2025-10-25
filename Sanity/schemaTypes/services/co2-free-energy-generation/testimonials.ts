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
      description: "Header text for the testimonial section",
    }),
    defineField({
      name: "sectionSubHeader",
      title: "Section Subheader",
      type: "string",
      description: "Subheader text (optional)",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "companyName", type: "string", title: "Company Name" },
            {
              name: "logo",
              type: "image",
              title: "Company Logo",
              options: { hotspot: true },
            },
            { name: "review", type: "text", title: "Review Text" },
            { name: "reviewer", type: "string", title: "Reviewer Name" },
            { name: "designation", type: "string", title: "Designation" },
          ],
        },
      ],
    }),
  ],
});
