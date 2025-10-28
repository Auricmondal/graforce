export const newsSectionQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
    "newsSection": newsSection{
      sectionTitle,
      newsItems[]{
        title,
        tag,
        date,
        link,
        image{
          asset->{
            url
          }
        }
      }
    }
  }
`;
