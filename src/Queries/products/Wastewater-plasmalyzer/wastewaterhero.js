export const heroSectionQuery = /* groq */ `
    *[_type == "wastewater-plasmalyzer"][0]{
    "heroSection": wastewaterheroSection{
      title,
      subtitle,
      primaryButtonText,
      secondaryButtonText,
      backgroundImage{
        asset->{
          url
        },
        alt
      }
    }
  }

`;
