export const aboutUsQuery = `
  *[_type == "home" && language == $language][0]{
    "aboutUs": aboutUsSection{
      title,
      foundation,
      location,
      companyName,
      description,
      buttonText,
      buttonUrl,
      image,
      brandLogos[] {
        name,
        logo
      }
    }
  }
`;