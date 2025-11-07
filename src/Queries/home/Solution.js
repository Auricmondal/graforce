export const solutionSectionQuery = /* groq */ `
  *[_type == "home"][0]{
    solutionSection{
      header,
      subHeader,
      "riveFileUrl": riveFile.asset->url,
      problemData[] {
        id,
        title,
        description,
        "imageUrl": image.asset->url,
        link
      }
    }
  }
`;
