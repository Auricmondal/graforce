export const productGallerySectionQuery = /* groq */ `
  *[_type == "hydrogen-production"][0]{
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
