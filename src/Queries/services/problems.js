export const problemSectionQuery = /* groq */ `
  *[_type == "service"][0]{
    "problemSection": problemSection{
      problems[]{
        id,
        title,
        description,
        data[]{
          year,
          value
        }
      }
    }
  }
`;
