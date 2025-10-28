export const waterHeroSectionQuery = /* groq */ `
  *[_type == "water-purification"][0]{
    "hero": waterHeroSection{
      title,
      backgroundImageLeft{
        asset->{
          url
        },
        alt
      },
      backgroundImageRight{
        asset->{
          url
        },
        alt
      },
      overlayImage{
        asset->{
          url
        },
        alt
      },
      primaryButtonText,
      primaryButtonAction,
      secondaryButtonText,
      secondaryButtonAction,
      secondaryButtonFile{
        asset->{
          url
        }
      },
      secondaryButtonUrl
    }
  }
`;
