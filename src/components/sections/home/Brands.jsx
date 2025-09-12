'use client';
import React from "react";
import GradientOverlay from "@/components/utils/scroller/GradientOverlay";
import InfiniteScrollContainer from "@/components/utils/scroller/InfiniteScrollContainer";
import LogoItem from "@/components/utils/scroller/LogoItem";
import useContainerWidth from "@/hooks/useContainerWidth";
import useInfiniteLogos from "@/hooks/useInfiniteLogos";

const Brands = ({ reversePeriod = 0 }) => {
  const logos = [
    {
      id: 1,
      name: "Digicert",
      src: "/brand/img/digicert_icon.png.webp",
    },
    {
      id: 2,
      name: "Group",
      src: "/brand/img/Group.webp",
    },
    {
      id: 3,
      name: "Vector",
      src: "/brand/img/Vector.webp",
    },
    {
      id: 4,
      name: "WSJ",
      src: "/brand/img/WSJ.webp",
    },
  ];

  const { containerRef, containerWidth } = useContainerWidth();
  const duplicatedLogos = useInfiniteLogos(logos, containerWidth, 184);
  const oneSetWidth = logos.length * 184;

  return (
    <div className="w-full bg-white py-16">
      <div className="relative overflow-hidden" ref={containerRef}>
        <GradientOverlay />
        {duplicatedLogos.length > 0 && (
          <InfiniteScrollContainer
            oneSetWidth={oneSetWidth}
            duration={25}
            reversePeriod={reversePeriod}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.id}-${index}`} logo={logo} index={index} />
            ))}
          </InfiniteScrollContainer>
        )}
      </div>
    </div>
  );
};

export default Brands;
