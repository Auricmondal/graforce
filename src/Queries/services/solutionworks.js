export const solutionWorksSectionQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
    "solutionWorksSection": solutionWorksSection{
      sectionHeader,
      sectionSubHeader,
      description,
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
