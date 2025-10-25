export const serviceHeroQuery = /* groq */ `
  *[_type == "service"][0]{
    "serviceHero": serviceHeroSection{
      title,
      highlightedWord,
      backgroundImage{
        asset->{
          url
        },
        alt
      },
      primaryButtonText,
      secondaryButtonText,
      primaryButtonAction,
      secondaryButtonLink{
        asset->{
          url
        }
      },
      secondaryButtonUrl
    }
  }
`;
