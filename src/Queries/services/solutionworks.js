export const solutionWorksSectionQuery = /* groq */ `
  *[_type == "service"][0]{
    "solutionWorksSection": solutionWorksSection{
      sectionHeader,
      sectionSubHeader,
      videoFile{
        asset->{
          url
        }
      },
      videoUrl,
      buttonText,
      buttonLink
    }
  }
`;
