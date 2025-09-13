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

    // Prepare items: position offscreen & fade out except first
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, {
          opacity: 0,
          scale: 0.95,
          ...(direction === "horizontal"
            ? { xPercent: 100 }
            : { yPercent: 100 }),
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "power2.out", duration: 0.6 },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        // Smoothly scale and fade out the current item
        tl.to(item, {
          scale: 0.9,
          opacity: 0,
        });

        // Bring the next one in with nice motion
        tl.to(
          items[i + 1],
          {
            opacity: 1,
            scale: 1,
            ...(direction === "horizontal" ? { xPercent: 0 } : { yPercent: 0 }),
          },
          "<"
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [direction]);

  return (
    <section
      ref={sectionRef}
      className={`hidden xl:block scroll-section ${direction}-section section overflow-hidden`}
    >
      <div ref={wrapperRef} className="wrapper relative w-full">
        <div className="list relative h-full w-full">{children}</div>
      </div>
    </section>
  );
};

export default ScrollStackSection;
