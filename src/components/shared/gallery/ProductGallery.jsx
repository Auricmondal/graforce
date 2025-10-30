'use client';
import SectionLabel from '@/components/utils/badges/SectionLabel';
import CardWrapper from '@/wrappers/CardWrapper';
import SectionWrapper from '@/wrappers/SectionWrapper';
import React from 'react';
import GalleryScroller from './GallerScroller';
import InfiniteScrollContainer from '@/components/utils/scroller/InfiniteScrollContainer';
import LogoItem from '@/components/utils/scroller/LogoItem';
import AboutImage from "@/assets/home/aboutimg.png"
import useContainerWidth from '@/hooks/useContainerWidth';
import useInfiniteLogos from '@/hooks/useInfiniteLogos';
import GradientOverlay from '@/components/utils/scroller/GradientOverlay';

const ProductGallery = ({ reversePeriod = 0 }) => {
  const logos = [
    {
      id: 1,
      src: '/products/aboutimg.png',
      name: 'Product Image 1',
    },
    {
      id: 2,
      src: '/products/aboutimg.png',
      name: 'Product Image 2',
    },
    {
      id: 3,
      src: '/products/aboutimg.png',
      name: 'Product Image 3',
    },
  ];

  const { containerRef, containerWidth } = useContainerWidth();
  const duplicatedImages = useInfiniteLogos(logos, containerWidth, 284);
  // const duplicatedImages = [...logos, ...logos, ...logos, ...logos];
  console.log("images", duplicatedImages);
  const oneSetWidth = logos.length * 284;

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1'>
      <CardWrapper
        color={`default`}
        variant='custom'
        align='left'
        className='px-4 py-12 flex flex-col items-center gap-4 w-full'
      >
        <div className="w-full">
          <SectionLabel className={`capitalize`} text={`Product Gallery`} />
        </div>
        <div className="flex py-0 sm:py-2 w-full gap-0 rounded-xl overflow-hidden relative" ref={containerRef}>
          {/* <GalleryScroller direction='left' /> */}
          {/* <GalleryScroller direction='right' /> */}
          <GradientOverlay />
          {duplicatedImages.length > 0 && (
            <InfiniteScrollContainer
              oneSetWidth={oneSetWidth}
              duration={20}
              reversePeriod={reversePeriod}
            >
              {duplicatedImages.map((logo, index) => (
                <LogoItem key={index} logo={logo} index={index} />
              ))}
            </InfiniteScrollContainer>
          )}
        </div>
        <div className="flex py-0 sm:py-2 w-full gap-0 rounded-xl overflow-hidden relative" ref={containerRef}>
          {/* <GalleryScroller direction='left' /> */}
          {/* <GalleryScroller direction='right' /> */}
          <GradientOverlay />
          {duplicatedImages.length > 0 && (
            <InfiniteScrollContainer
              oneSetWidth={oneSetWidth}
              duration={20}
              reversePeriod={reversePeriod}
              direction='right'
            >
              {duplicatedImages.map((logo, index) => (
                <LogoItem key={index} logo={logo} index={index} />
              ))}
            </InfiniteScrollContainer>
          )}
        </div>
      </CardWrapper>
    </SectionWrapper>
  )
}

export default ProductGallery