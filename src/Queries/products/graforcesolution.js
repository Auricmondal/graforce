export const graforceSolutionSectionQuery = /* groq */ `
  *[_type == "methane-plasmalyzer"][0]{
    "graforceSolutionSection": graforceSolutionSection{
      sectionLabel,
      sectionHeader,
      cards[] {
        title,
        description,
        onClickText,
        "icon": icon.asset->url
      }
    }
  }
`;
