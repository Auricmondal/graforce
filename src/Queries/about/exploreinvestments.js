export const exploreInvestmentQuery = /* groq */ `
*[_type == "aboutPage"][0]{
  "header": exploreInvestment.header,
  "subHeader": exploreInvestment.subHeader,
  "buttonContent": exploreInvestment.buttonContent,
  "imageUrl": exploreInvestment.image.asset->url,
  "imageAlt": exploreInvestment.image.alt
}
`;
