export const whyWeMatterSectionQuery = /* groq */ `
  *[_type == "methane-plasmalyzer"][0]{
    "whyWeMatterSection": whyWeMatterSection{
      sectionHeader,
      sectionSubHeader,
       buttonLink,
      cards[]{
        id,
        title,
        description,
        data[]{
          label,
          value
        }
      }
    }
  }
`;
