export const ourFounderQuery = 
`*[_type == "aboutPage"][0]{
"ourFounder": ourFounder{
  sectionLabel,
  header,
  paragraphs,
  linkedinUrl,
  "founderImage": founderImage.asset->url
}
}`;
