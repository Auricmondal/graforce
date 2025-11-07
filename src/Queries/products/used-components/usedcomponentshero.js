export const heroSectionQuery = /* groq */ `
  *[_type == "used-components"][0]{
    "heroSection": usedcomponentsHeroSection{
      title,
      subtitle,
      primaryButtonText,
      secondaryButtonText,
      "riveAnimation": riveAnimation.asset->url
    }
  }
`;
