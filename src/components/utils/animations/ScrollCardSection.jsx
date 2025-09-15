"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollStackSection = ({ direction = "vertical", children }) => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = wrapperRef.current.querySelectorAll(".item");

    // Set container relative to allow absolutely positioned children
    section.style.position = "relative";

    // Set up initial states
    items.forEach((item, index) => {
      gsap.set(item, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.95,
        yPercent: index === 0 ? 0 : 50, // cards start lower
        zIndex: index,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: true,
        anticipatePin: 1,
      },
    });

    items.forEach((item, i) => {
      const next = items[i + 1];
      if (!next) return;

      // Fade out current, move it up a little
      tl.to(item, {
        opacity: 0,
        scale: 0.9,
        yPercent: -25,
        duration: 0.5,
      });

      // At the same time, bring in next from below
      tl.to(
        next,
        {
          opacity: 1,
          scale: 1,
          yPercent: 10,
          duration: 0.5,
        },
        "-=0.3" // Overlap the animations
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [direction]);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block scroll-section relative  h-screen w-full"
    >
      <div ref={wrapperRef} className="wrapper relative w-full h-full">
        {children}
      </div>
    </section>
  );
};

export default ScrollStackSection;
