export const finalCTAQuery = /* groq */ `
*[_type == "home"][0]{
  "finalCTA": finalCTASection{
    title,
    buttonText
  }
}
`;
