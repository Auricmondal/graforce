// queries/methaneHeroQuery.js
export const methaneHeroQuery = /* groq */ `
*[_type == "methane-plasmalyzer"][0]{
  "heroSection": methaneplasmalyzerHeroSection{
    title,
    subTitle,
    primaryButtonText,
    primaryButtonAction,
    secondaryButtonText,
    secondaryButtonUrl,
    backgroundImages[]{
      asset->{
        _id,
        url
      }
    }
  }
}
`;
