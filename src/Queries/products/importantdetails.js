export const importantDetailsSectionQuery = /* groq */ `
  *[_type == "methane-plasmalyzer"][0]{
    "importantDetailsSection": importantDetailsSection{
      sectionLabel,
      sectionHeader,
      cards[] {
        id,
        title,
        description,
        leftType
      }
    }
  }
`;
