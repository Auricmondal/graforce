export const productGallerySectionQuery = /* groq */ `
  *[_type == "service"][0]{
    "productGallerySection": productGallerySection{
      sectionHeader,
      images[]{
        asset->{
          url
        },
        alt
      },
      scrollDirections
    }
  }
`;
