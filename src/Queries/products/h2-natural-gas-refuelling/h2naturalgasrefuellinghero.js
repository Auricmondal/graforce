export const h2NaturalGasHeroQuery = /* groq */ `
*[_type == "h2-natural-gas-refuelling"][0]{
  "heroSection": h2naturalgasHeroSection{
    title,
    subTitle,
    primaryButtonText,
    primaryButtonAction,
    secondaryButtonText,
    "secondaryButtonLink": secondaryButtonLink.asset->url,
    "backgroundVideo": backgroundVideo.asset->url
  }
}
`;
