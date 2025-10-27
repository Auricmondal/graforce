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
      name: "heroHomeSection",
      title: "Hero Section",
      type: "heroHomeSection", 
    }),
    defineField({
      name: "aboutUsSection",
      title: "About Us Section",
      type: "aboutUsSection", 
    }),
    defineField({
      name: "solutionSection",
      title: "Solution Section",
      type: "solutionSection", 
    }),
    defineField({
      name: "finalCTASection",
      title: "Final CTA Section",
      type: "finalCTASection", 
    }),
    defineField({
      name: "whatDoWeDoSection",
      title: "What Do We Do Section",
      type: "whatDoWeDoSection", 
    }),
    defineField({
      name: "youNeedUsSection",
      title: "You Need Us Section",
      type: "youNeedUsSection", 
    }),
  ],
  preview: {
    select: {
      language: "language",
      title: "aboutUsSection.title",
    },
    prepare(selection) {
      const { language, title } = selection;
      

      return {
        title: `Home Page [${language?.toUpperCase() || '??'}]`,
        subtitle: title || 'No content yet',
      };
    },
  },
})
