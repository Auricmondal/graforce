export const syntheticCarbonHeroQuery = /* groq */ `
  *[_type == "synthetic-carbon-quality"][0]{
    "heroSection": syntheticcarbonqualityHeroSection {
      title,
      subtitle,
      primaryButtonText,
      secondaryButtonText,
      "backgroundImage": backgroundImage.asset->url
    }
  }
`;
