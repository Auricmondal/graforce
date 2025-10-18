"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/blogs/ServiceSolution1.jpg";
import { FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

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
    <SectionWrapper className="text-black py-10 space-y-10 mx-auto max-w-[2000px]">
      <div className="mx-auto px-4 pt-20 text-center max-h-[450px] flex flex-col justify-center space-y-4 ">
        <Image
          src={heroImage}
          alt="Blog Hero Image"
          className="absolute object-cover w-full h-full hero-image  top-0 right-0 -z-10 opacity-100 max-h-[450px] overflow-hidden"
        />
        <h1 className="hero-head text-4xl sm:text-7xl font-bold mb-4 text-white ">
          News
        </h1>
        <p className="hero-text text-xl text-white lg:max-w-[60%] mx-auto">
          On this page, we regularly share the latest updates about our company
          and our groundbreaking plasma technology.
        </p>
        {/* <a href="#">
          <p className="hero-text text-xl text-white lg:max-w-[60%] mx-auto">
            Follow us on <FaLinkedin className="inline mr-2" />
          </p>
        </a> */}
      </div>
    </SectionWrapper>
  );
};

export default HeroBlogs;
