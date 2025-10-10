"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import useIsDesktop from "@/hooks/useIsDesktop";
// import gridImg from '@/assets/grid-blue.svg';

export default function FlipCard({
  companyName,
  logo,
  review,
  reviewer,
  designation,
  index,
}) {
  const cardRef = useRef(null);
  const isMobile = !useIsDesktop();

  // Desktop hover handlers
  const handleHover = (flip) => {
    if (!cardRef.current || isMobile) return;
    gsap.to(cardRef.current, {
      rotateY: flip ? 180 : 0,
      duration: 0.5,
      ease: "sine.in",
      delay: 0,
    });
  };

  if (isMobile) {
    return (
      <div
        className={`w-full h-auto rounded-xl px-4 p-12 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden ${
          index % 2 === 0 ? "bg-secondary" : "bg-secondary-light"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-24 h-24 bg-[url(/grid-blue.svg)] bg-no-repeat bg-contain bg-bottom rotate-x-180`}
        />
        <div
          className={`absolute bottom-0 right-0 w-24 h-24 bg-[url(/grid-blue.svg))] bg-no-repeat bg-contain bg-bottom rotate-y-180`}
        />

        <Image src={logo} alt="Logo" width={32} height={32} className="mb-1" />
        <p className="text-[9px] font-medium mb-10 text-dark">{companyName}</p>
        <p className="md:text-2xl font-medium leading-snug mb-4">“{review}”</p>
        <div>
          <p className="text-xs font-medium text-cst-neutral-4">{reviewer}</p>
          <p className="text-xs text-cst-neutral-2">{designation}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-[60vh] relative [perspective:1000px] cursor-pointer `}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        ref={cardRef}
        className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d]"
      >
        <div
          className={`overflow-hidden absolute z-100 top-[2px] left-[2px] w-40 h-40 bg-[url(/grid-blue.svg)] bg-no-repeat bg-contain bg-bottom rotate-x-180`}
        />
        <div
          className={`overflow-hidden absolute z-100 bottom-[2px] right-[2px] w-40 h-40 bg-[url(/grid-blue.svg)] bg-no-repeat bg-contain bg-bottom rotate-y-180`}
        />

        {/* Front */}
        <div
          className={`absolute w-full h-full rounded-xl flex flex-col items-center justify-center text-center  [backface-visibility:hidden] ${
            index % 3 === 0 ? "bg-secondary" : "bg-secondary-light"
          }`}
        >
          <Image src={logo} alt="Logo" width={90} height={90} />
          <p className="mt-1 text-[40px] text-dark">{companyName}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute w-full h-full rounded-xl text-center px-4 py-6  [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center ${
            index % 3 === 0 ? "bg-secondary" : "bg-secondary-light"
          }`}
        >
          <div className="max-w-[35vw] mx-auto">
            <p className="text-2xl mb-4">“{review}”</p>
            <p className="font-medium text-cst-neutral-4">{reviewer}</p>
            <p className="text-xs text-cst-neutral-2">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
