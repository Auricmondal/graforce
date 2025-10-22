export const solutionSectionQuery = /* groq */ `
  *[_type == "home"][0]{
    "solution": solutionSection{
      sectionLabel,
      heading,
      backgroundImage{
        asset->{
          url
        },
        alt
      },
      steps[]{
        id,
        title,
        description
      }
    }
  }
`;
