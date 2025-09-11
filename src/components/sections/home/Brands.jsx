"use client";
import React from "react";
import useInfiniteLogos from "@/hooks/useInfiniteLogos";
import useContainerWidth from "@/hooks/useContainerWidth";
import GradientOverlay from "@/components/sections/home/scroller/GradientOverlay";
import InfiniteScrollContainer from "@/components/sections/home/scroller/InfiniteScrollContainer";
import LogoItem from "@/components/sections/home/scroller/LogoItem";

const Brands = ({ reversePeriod = 0 }) => {
  const logos = [
    {
      id: 1,
      name: "Digicert",
      src: "https://www.wikimedia.org/portal/wikimedia.org/assets/img/Wikipedia-logo_sister.svg",
    },
    {
      id: 2,
      name: "Group",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
    },
    {
      id: 3,
      name: "Vector",
      src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      id: 4,
      name: "WSJ",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
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