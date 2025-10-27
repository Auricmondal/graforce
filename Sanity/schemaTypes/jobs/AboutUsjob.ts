import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutUsjobsSection",
  title: "About Us Section",
  type: "object",
  fields: [
    defineField({
      name: "foundationYear",
      title: "Foundation Year",
      type: "number",
      initialValue: 2012,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Berlin Adlershof",
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      initialValue: "graforce",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Technology Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Learn More",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      initialValue: "/about",
    }),
  ],
});
