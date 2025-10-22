export const heroSectionQuery = /* groq */ `
  *[_type == "home"][0]{
    "hero": heroSection{
      title,
      highlightedWord,
      "video": coalesce(videoFile.asset->url, videoUrl),
      primaryButtonText,
      secondaryButtonText,
      jobs[]{
        title,
        description,
        link
      },
      specifications[]{
        title,
        details
      },
      blogs[]{
        title,
        excerpt,
        "slug": slug.current
      }
    }
  }
`;
