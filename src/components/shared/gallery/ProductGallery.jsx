'use client';

import React, { useEffect, useState } from 'react';
import SectionLabel from '@/components/utils/badges/SectionLabel';
import CardWrapper from '@/wrappers/CardWrapper';
import SectionWrapper from '@/wrappers/SectionWrapper';
import InfiniteScrollContainer from '@/components/utils/scroller/InfiniteScrollContainer';
import LogoItem from '@/components/utils/scroller/LogoItem';
import useContainerWidth from '@/hooks/useContainerWidth';
import useInfiniteLogos from '@/hooks/useInfiniteLogos';
import GradientOverlay from '@/components/utils/scroller/GradientOverlay';
import { client } from '@/lib/sanityClient';
import { productGallerySectionQuery } from '@/Queries/services/productgallery';

const ProductGallery = ({ reversePeriod = 0 }) => {
  const [galleryData, setGalleryData] = useState({
    sectionHeader: 'Product Gallery',
    images: [
      { id: 1, src: '/products/aboutimg.png', name: 'Product Image 1' },
      { id: 2, src: '/products/aboutimg.png', name: 'Product Image 2' },
      { id: 3, src: '/products/aboutimg.png', name: 'Product Image 3' },
    ],
    scrollDirections: ['left', 'right'],
  });

  const { containerRef, containerWidth } = useContainerWidth();
  const duplicatedImages = useInfiniteLogos(
    galleryData.images,
    containerWidth,
    184
  );

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await client.fetch(productGallerySectionQuery);
        const section = res?.productGallerySection;

        if (!section) {
          console.warn(
            '⚠️ No productGallerySection found in Sanity. Using fallback data.'
          );
          return;
        }

        const images = section.images?.map((img, index) => ({
          id: index + 1,
          src: img?.image?.asset?.url || '/products/aboutimg.png',
          name: img?.alt || `Product Image ${index + 1}`,
        }));

        setGalleryData({
          sectionHeader: section.sectionHeader || 'Product Gallery',
          images: images?.length ? images : galleryData.images,
          scrollDirections:
            section.scrollDirections?.length > 0
              ? section.scrollDirections
              : ['left', 'right'],
        });
      } catch (err) {
        console.error('❌ Failed to fetch Product Gallery from Sanity:', err);
      }
    };

    fetchGallery();
  }, []);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper
        color="default"
        variant="custom"
        align="left"
        className="px-4 py-12 flex flex-col items-center gap-4 w-full"
      >
        <div className="w-full">
          <SectionLabel
            className="capitalize"
            text={galleryData.sectionHeader}
          />
        </div>

        {/* Render each scroll direction dynamically */}
        {galleryData.scrollDirections.map((dir, i) => (
          <div
            key={i}
            className="flex py-0 sm:py-2 w-full gap-0 rounded-xl overflow-hidden relative"
            ref={containerRef}
          >
            <GradientOverlay />
            {duplicatedImages.length > 0 && (
              <InfiniteScrollContainer
                oneSetWidth={1000}
                duration={13}
                reversePeriod={reversePeriod}
                direction={dir}
              >
                {duplicatedImages.map((logo, index) => (
                  <LogoItem key={index} logo={logo} index={index} />
                ))}
              </InfiniteScrollContainer>
            )}
          </div>
        ))}
      </CardWrapper>
    </SectionWrapper>
  );
};

export default ProductGallery;
