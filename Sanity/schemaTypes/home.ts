import { defineType, defineField } from "sanity"

export default defineType({
  name: "home",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "aboutUsSection",
      title: "About Us Section",
      type: "aboutUsSection", 
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "aboutUsSection.title",
    },
    prepare(selection) {
      const { language, title } = selection;
      
      const languageNames = {
        en: 'English',
        de: 'German'
      };
      
      return {
        title: `Home Page [${language?.toUpperCase() || '??'}]`,
        subtitle: title || 'No content yet',
      };
    },
  },
})
