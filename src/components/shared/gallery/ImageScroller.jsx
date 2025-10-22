'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'

const ImageScroller = ({ 
  scrollImage = [], 
  aspect = "16/9", 
  direction = "left", 
  duration = 5, 
  className = "" 
}) => {
  const ScrollerRef = React.useRef(null);

  useGSAP(() => {
    if (scrollImage.length === 0) return;
    
    // Set initial position based on direction
    const startPosition = direction === "left" ? "0%" : "-100%";
    const endPosition = direction === "left" ? "-50%" : "-50%";
    
    gsap.set(ScrollerRef.current, { x: startPosition });
    
    gsap.to(ScrollerRef.current, {
      x: endPosition,
      repeat: -1,
      duration: duration,
      ease: 'none',
    });
  }, [direction, duration, scrollImage]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...scrollImage, ...scrollImage];

  return (
    <div className={`${className} overflow-hidden`}>
      <div ref={ScrollerRef} className={`image-scroller flex gap-2 rounded-lg`}>
        {duplicatedImages.map((image, index) => (
          <div key={index} className={`image-wrapper shrink-0 rounded-lg overflow-hidden`}>
            <Image src={image} alt={`Gallery Image ${index + 1}`} className={`object-cover aspect-[${aspect}] w-80 max-h-[30vh]`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageScroller