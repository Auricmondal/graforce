export const faqSectionQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
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
