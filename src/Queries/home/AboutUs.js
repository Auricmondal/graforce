export const aboutUsQuery = /* groq */ `
  *[_type == "home"][0]{
    "aboutUs": aboutUsSection{
      title,
      foundation,
      location,
      companyName,
      description,
      buttonText,
      buttonUrl,
      image{
        asset->{
          url
        },
        alt
      },
      brandLogos[]{
        name,
        logo{
          asset->{
            url
          },
          alt
        }
      }
    }
  }
`;
