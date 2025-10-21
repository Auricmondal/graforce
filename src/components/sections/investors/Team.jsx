"use client";

import React, { useRef, useState, useEffect } from "react";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import leaderImg from "@/assets/investor/leader.webp";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Name of Leader",
    position: "POSITION",
    description: "Something that he has to say",
    img: leaderImg,
  },
  {
    id: 2,
    name: "Another Leader",
    position: "POSITION",
    description: "Something that she has to say",
    img: leaderImg,
  },
  {
    id: 3,
    name: "Third Leader",
    position: "POSITION",
    description: "Something that he has to say",
    img: leaderImg,
  },
];

const Team = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Set card width on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const fullWidth = containerRef.current.offsetWidth;
        setSlideWidth(fullWidth * 0.9); // 90% of container
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <SectionWrapper
      className="bg-[#E6E6E6] text-black space-y-2 min-h-screen h-max"
      sectionClassName="bg-cst-neutral-1"
    >
      <CardWrapper
        className="gap-2 p-8 !rounded-2xl"
        variant="custom"
        color="default"
        align="center"
      >
        <SectionLabel text="Team & Leadership" />
        <h2 className="text-2xl lg:text-5xl md:text-[48px] tracking-tight font-medium">
          <AnimatedHeader>Led by Experts</AnimatedHeader>
        </h2>
        <p className="max-w-sm">
          <AnimatedHeader>
            Graforce&apos;s team combines deep scientific expertise with
            entrepreneurial drive.
          </AnimatedHeader>
        </p>
      </CardWrapper>

      <div
        className="relative w-full overflow-hidden px-4 md:px-6 py-8 bg-white rounded-2xl"
        ref={containerRef}
      >
        {/* Carousel */}
        <div
          className="hidden lg:flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (slideWidth + 24)}px)`, // 20px = gap
          }}
        >
          {data.map((item, index) => (
            <div
              key={item.id}
              ref={slideRef}
              style={{
                width: slideWidth,
                marginRight: index === data.length - 1 ? 0 : 20, // 20px gap between slides
                flexShrink: 0,
              }}
              className="relative md:h-[380px] lg:h-[552px] rounded-xl bg-white overflow-hidden"
            >
              {/* Text Overlay */}
              <div className="absolute left-0 bottom-0 p-6 w-1/2 text-black rounded-bl-xl z-10 flex flex-col gap-2">
                <h2 className="text-[32px] lg:text-5xl font-dancing-script">{item.name}</h2>
                <h3 className="uppercase text-xs lg:text-base text-cst-neutral-4 tracking-widest">
                  {item.position}
                </h3>
                <p className="lg:text-2xl">{item.description}</p>
              </div>

              {/* Image */}
              <Image
                src={item.img}
                alt={item.name}
                className="rounded-lg h-full w-full object-cover"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          {data.map((item, index) => (
            <div
              key={item.id}
              ref={slideRef}
              className="relative md:h-[380px] lg:h-[552px] rounded-xl  bg-white overflow-hidden mb-4"
            >
              {/* Text Overlay */}
              <div className="absolute left-0 bottom-0 p-6 w-1/2 text-black rounded-bl-xl z-10 flex flex-col gap-2">
                <h2 className="text-[32px] lg:text-5xl font-dancing-script">{item.name}</h2>
                <h3 className="uppercase text-xs lg:text-base text-cst-neutral-4 tracking-widest">
                  {item.position}
                </h3>
                <p className="">{item.description}</p>
              </div>

              {/* Image */}
              <Image
                src={item.img}
                alt={item.name}
                className="rounded-lg h-full w-full object-cover"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="justify-center gap-6 mt-2 mb-8 z-20 hidden lg:flex">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-white rounded-full py-3 px-5  hover:bg-gray-100"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-white rounded-full py-3 px-5  hover:bg-gray-100"
        >
          &#10095;
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Team;
