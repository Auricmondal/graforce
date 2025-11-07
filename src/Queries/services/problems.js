export const problemSectionQuery = /* groq */ `
*[_type == "hydrogen-production"][0]{
  problemSection {
    sectionHeader,
    sectionSubHeader,
    problems[] {
      id,
      title,
      description,
      data[] {
        year,
        value
      }
    }
  }
}
`;
