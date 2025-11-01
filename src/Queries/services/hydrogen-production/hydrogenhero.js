export const hydrogenHeroQuery = /* groq */ `
*[_type == "hydrogen-production"][0]{
  "hero": hydrogenHeroSection{
    title,
    highlightedWord,
    riveFile{
      asset->{
        url
      }
    },
    primaryButtonText,
    secondaryButtonText,
    primaryButtonAction,
    secondaryButtonUrl
  }
}
`;
