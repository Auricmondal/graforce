export const faqSectionQuery = /* groq */ `
  *[_type == "service"][0]{
    "faqSection": faqSection{
      sectionLabel,
      heading,
      backgroundImage{
        asset->{
          url
        }
      },
      faqs[]{
        question,
        answer
      }
    }
  }
`;
