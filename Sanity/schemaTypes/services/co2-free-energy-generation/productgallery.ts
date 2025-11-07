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
      description: "Header text for the gallery section (e.g., 'Product Gallery').",
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        defineField({
          name: "imageItem",
          title: "Image Item",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Accessibility description for the image.",
            }),
          ],
        }),
      ],
      description: "Images to display in the product gallery.",
    }),
    defineField({
      name: "scrollDirections",
      title: "Scroll Directions",
      type: "array",
      of: [{ type: "string", options: { list: ["left", "right"] } }],
      description:
        "Scroll direction for each gallery scroller (e.g., ['left', 'right']).",
    }),
  ],
});
