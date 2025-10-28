export const aboutFAQQuery = /* groq */ `
  *[_type == "aboutPage"][0]{
    "faqSection": aboutFAQSection{
      header,
      subHeader,
      buttonContent,
      faqItems[]{
        question,
        answer
      }
    }
  }
`
