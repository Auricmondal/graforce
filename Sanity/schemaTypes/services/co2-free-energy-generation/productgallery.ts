import { defineType, defineField } from "sanity";

export default defineType({
  name: "productGallerySection",
  title: "Product Gallery Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionHeader",
      title: "Section Header",
      type: "string",
      description: "Header text for the gallery section",
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Images to display in the product gallery",
    }),
    defineField({
      name: "scrollDirections",
      title: "Scroll Directions",
      type: "array",
      of: [{ type: "string", options: { list: ["left", "right"] } }],
      description: "Scroll direction for each gallery scroller",
    }),
  ],
});
