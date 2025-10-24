'use client'
import StampImages from '@/components/utils/stampImages/StampImages'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

const ImageScroller = ({
  scrollImage = [],
  aspect = "1",
  direction = "left",
  duration = 5,
  className = ""
}) => {
  const ScrollerRef = React.useRef(null);

  useGSAP(() => {
    if (scrollImage.length === 0) return;

    // Set initial position based on direction
    const startPosition = direction === "left" ? "0%" : "-600%";
    const endPosition = direction === "left" ? "-600%" : "0%";

    // gsap.set(ScrollerRef.current, { x: startPosition });

    gsap.to(ScrollerRef.current, {
      // x: endPosition,
      x: direction === "left" ? "400%" : "-400%",
      repeat: -1,
      duration: duration,
      ease: 'none',
    });
  }, [direction, duration, scrollImage]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...scrollImage, ...scrollImage];

  return (
    <div className={`${className} overflow-hidden`}>
      <div ref={ScrollerRef} className={`image-scroller flex gap-2 rounded-lg
        ${direction === "left" ? "justify-end" : "justify-start"}`}>
        {duplicatedImages.map((image, index) => (
          // <Image key={index} src={image} alt={`Gallery Image ${index + 1}`} className={`image-wrapper shrink-0 rounded-lg object-cover max-h-[30vh] w-[20vw]`} />
          <StampImages key={index} stockImage={image.image} title={image.title} name={image.name} imageClassName={`image-wrapper shrink-0 rounded-lg object-cover max-h-[30vh] w-[300px] lg:w-[20vw]`} stampClassName='bottom-2 left-2' stampSize='small' />
        ))}
      </div>
    </div>
  )
}

export default ImageScroller