// Queries/about/abouthero.js
export const aboutHeroQuery = /* groq */ `
  *[_type == "aboutPage"][0]{
    "hero": heroaboutSection{
      header,
      "imageUrl": image.asset->url,
      "alt": image.alt
    }
  }
`;
