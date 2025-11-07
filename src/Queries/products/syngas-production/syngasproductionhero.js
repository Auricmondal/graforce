export const syngasHeroQuery = /* groq */ `
  *[_type == "syngas-production"][0]{
    "heroSection": syngasHeroSection {
      title,
      subTitle,
      primaryButtonText,
      primaryButtonAction,
      secondaryButtonText,
      secondaryButtonAction,
      secondaryButtonUrl,
      "backgroundImageUrl": backgroundImage.asset->url
    }
  }
`;
