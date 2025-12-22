export const industryHeroQuery = /* groq */ `
*[_type == "industryPage"][0]{
  "heroSection": industryHeroSection {
    title,
    subtitle,
    "backgroundImageUrl": backgroundImage.asset->url
  }
}
`;
