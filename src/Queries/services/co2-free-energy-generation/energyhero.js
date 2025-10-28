export const energyHeroSectionQuery = /* groq */ `
  *[_type == "co2-free-energy-generation"][0]{
    "heroSection": energyHeroSection{
      title,
      "backgroundImage": backgroundImage.asset->url,
      primaryButtonText,
      primaryButtonAction,
      secondaryButtonText,
      secondaryButtonAction,
      "secondaryButtonFile": secondaryButtonFile.asset->url,
      secondaryButtonUrl
    }
  }
`;
