// Queries/about/impactOpportunity.js
export const impactOpportunityQuery = /* groq */ `
*[_type == "aboutPage"][0]{
  "impactOpportunity": impactOpportunity{
    sectionLabel,
    header,
    paragraphs[],
    "videoUrl": video.asset->url
  }
}
`;
