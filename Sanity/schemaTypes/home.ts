import { defineType, defineField } from "sanity"

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "aboutUsSection",
      title: "About Us Section",
      type: "aboutUsSection", 
    }),
  ],
})
