export const problemSectionQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
    problemSection {
      sectionTitle,
      sectionHeading,
      problems[] {
        id,
        title,
        description,
        data[] {
          year,
          value
        }
      },
      learnMoreText,
      learnMoreLink
    }
  }
`;
