"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/blogs/ServiceSolution1.jpg";
import gsap from "gsap";
import CardWrapper from "@/wrappers/CardWrapper";

const HeroBlogs = () => {
  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-image",
      { y: 0, opacity: 1, filter: "blur(100px)", scale: 1.5 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.0,
        filter: "blur(0px)",
        scale: 1,
        ease: "power2.out",
      },
      1.5
    )
      .fromTo(
        ".hero-head",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.0, ease: "power2.out" },
        1.5
      )
      .fromTo(
        ".hero-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" },
        2
      );
  }, []);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper variant="custom" className="overflow-hidden">
        <div className="relative flex items-center md:items-end w-full text-black py-8 mx-auto h-[90vh] md:h-[70vh] overflow-hidden">
          <Image
            src={heroImage}
            alt="Blog Hero Image"
            className="hiden absolute object-cover w-full h-full hero-image top-0 right-0 -z-0 opacity-100"
          />
          <div className="relative z-1 mx-auto px-4 pb-18 text-center flex flex-col justify-center gap-4 h-fit w-full">
            <h1 className="hero-head text-4xl sm:text-7xl font-bold mb-4 text-white ">
              News
            </h1>
            <p className="hero-text text-xl text-white lg:max-w-[60%] mx-auto">
              On this page, we regularly share the latest updates about our company
              and our groundbreaking plasma technology.
            </p>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default HeroBlogs;
