export const otherServicesQuery = /* groq */ `
  *[_type == "service"][0]{
    "otherServicesSection": otherServicesSection{
      sectionLabel,
      services[]{
        title,
        "slug": slug.current,
        image{
          asset->{
            url
          },
          alt
        }
      }
    }
  }
`;
