export const carbonHeroQuery = /* groq */ `
  *[_type == "synthetic-carbon"][0]{
    "heroSection": syntheticcarbonHeroSection {
      title,
      subtitle,
      primaryButtonText,
      secondaryButtonText,
      "riveAnimation": riveAnimation.asset->url
    }
  }
`;
