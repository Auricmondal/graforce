export const finalCTASectionQuery = /* groq */ `
  *[_type == "home"][0]{
    "finalCTA": finalCTASection{
      title,
      buttonText,
      leftImage{
        asset->{
          url
        },
        alt
      },
      rightImage{
        asset->{
          url
        },
        alt
      }
    }
  }
`;
