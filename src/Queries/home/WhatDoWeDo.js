export const whatDoWeDoSectionQuery = /* groq */ `
  *[_type == "home" && language == $language][0]{
    "whatDoWeDo": whatDoWeDoSection{
      sectionLabel,
      description,
      globeImage{
        asset->{
          url
        },
        alt
      },
      floatingTips[] {
        text,
        position,
        delay
      }
    }
  }
`;
