export const youNeedUsSectionQuery = /* groq */ `
  *[_type == "home"][0]{
    "youNeedUs": youNeedUsSection{
      sectionHeader,
      sectionSubHeader,
      sectionImage{
        asset->{
          url
        },
        alt
      },
      sectionColorVariant,
      sectionColor,
      doubleButton,
      fullWidthHeader,
      sectorsData[]{
        label,
        title
      }
    }
  }
`;
