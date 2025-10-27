export const heroSectionQuery = /* groq */ `
*[_type == "home"][0]{
  "hero": heroHomeSection{
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
      subtitle,
      details,
      points
    },
    blogs[]{
      title,
      excerpt,
      "slug": slug.current
    }
  }
}
`;
