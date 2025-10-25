export const testimonialSectionQuery = /* groq */ `
  *[_type == "service"][0]{
    "testimonialSection": testimonialSection{
      sectionHeader,
      sectionSubHeader,
      testimonials[]{
        companyName,
        logo{
          asset->{
            url
          },
          alt
        },
        review,
        reviewer,
        designation
      }
    }
  }
`;
