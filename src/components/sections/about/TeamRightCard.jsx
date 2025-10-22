// import GalleryScroller from '@/components/shared/gallery/GallerScroller'
import ImageScroller from '@/components/shared/gallery/ImageScroller'
import CardWrapper from '@/wrappers/CardWrapper'
import GalleryImage1 from "@/assets/about/gallery-image-1.jpg"
import GalleryImage2 from "@/assets/about/gallery-image-2.jpg"
import React from 'react'

const TeamRightCard = ({ className }) => {
  const imagesCopy1 = [
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
    GalleryImage1,
  ];
  const images1 = [
    ...imagesCopy1,
    ...imagesCopy1,
    ...imagesCopy1,
  ];

  const imagesCopy2 = [
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
    GalleryImage2,
  ];
  const images2 = [
    ...imagesCopy2,
    ...imagesCopy2,
    ...imagesCopy2,
  ];

  return (
    <CardWrapper color='transparent' className={`flex flex-col gap-4 justify-evenly h-full ${className}`}>
      {/* <GalleryScroller  /> */}
      <div className="rounded-xl overflow-hidden">
        <ImageScroller scrollImage={images2} aspect="3/4" className="" direction="left" duration={7} />
      </div>
      <div className="rounded-xl overflow-hidden">
        <ImageScroller scrollImage={images1} aspect="16/9" className="" direction="right" duration={7} />
      </div>
    </CardWrapper>
  )
}

export default TeamRightCard