// Queries/about/abouthero.js
export const aboutHeroQuery = /* groq */ `
  *[_type == "aboutPage"][0]{
    "hero": heroaboutSection{
      header,
      subHeader,
      "imageUrl": image.asset->url,
      "alt": image.alt
    }
  }
`;
