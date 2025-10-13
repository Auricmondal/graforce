'use client'
import Image from 'next/image'
import AboutImage from "@/assets/home/aboutimg.png"
import React from 'react'
import gsap from 'gsap';

const GallerScroller = ({ className = "", direction = 'left', sideBlur = false }) => {
  const galleryScroll = React.useRef(null);
  const galleryImageStock = [
    AboutImage,
    AboutImage,
    AboutImage,
    AboutImage,
    AboutImage,
    AboutImage,
    AboutImage,
    AboutImage,
  ];

  const galleryImages = [...galleryImageStock, ...galleryImageStock, ...galleryImageStock];

  React.useEffect(() => {
    const el = galleryScroll.current;
    if (!el) return;

    // ensure any previous tweens are removed (prevents speed-up from stacking)
    gsap.killTweensOf(el);

    // duplicate contents once so the repeating animation appears seamless
    if (!el.dataset.duplicated) {
      el.innerHTML = el.innerHTML + el.innerHTML;
      el.dataset.duplicated = 'true';
    }

    // distance is 100% because content was duplicated (move half the full strip)
    const distancePercent = 100;
    const durationSeconds = galleryImages.length * 10; // increase for slower, decrease for faster

    // Set initial position based on direction
    if (direction === 'right') {
      gsap.set(el, { xPercent: -distancePercent + 20 });
    }

    const tween = gsap.to(el, {
      xPercent: direction === 'left' ? -distancePercent : 0,
      ease: 'none',
      repeat: -1,
      duration: durationSeconds,
    });

    return () => {
      tween.kill();
      gsap.killTweensOf(el);
    };
  }, [direction]);

  return (
    <div className={`${className} relative overflow-hidden flex items-center shrink-0 rounded-xl`}>
      <div ref={galleryScroll} className="flex shrink-0 gap-2">
        {galleryImages.map((image, index) => (
          <div key={index} className='flex gap-2 shrink-0'>
            <Image src={image} alt={`Gallery Image ${index + 1}`} width={(index%2) ? 500 : 400} height={'400'} className='aspect-[2/1] object-cover rounded-lg ' />
          </div>
        ))}
      </div>
      <div className={`absolute ${sideBlur ? "flex" : "hidden"} justify-between h-full w-full top-0 left-0 pointer-events-none`}>
        <div className="h-full bg-gradient-to-r from-white to-transparent w-25"></div>
        <div className="h-full bg-gradient-to-l from-white to-transparent w-25"></div>
      </div>
    </div>
  )
}

export default GallerScroller