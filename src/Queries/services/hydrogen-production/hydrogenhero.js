export const hydrogenHeroQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
    "hero": hydrogenHeroSection{
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
