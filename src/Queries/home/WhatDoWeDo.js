export const whatDoWeDoSectionQuery = /* groq */ `
  *[_type == "home"][0]{
    "whatDoWeDo": whatDoWeDoSection{
      sectionLabel,
      description,
      globeImage{
        asset->{
          url
        },
        alt
      },
      floatingTips[]{
        text
      }
    }
  }
`;
