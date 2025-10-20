"use client";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import CardWrapper from "@/wrappers/CardWrapper";
import { IoMdArrowForward } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import useIsDesktop from "@/hooks/useIsDesktop";

const HoverCard = ({ icon, title, description, className, onClick }) => {
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const rightSideRef = useRef(null);

  const isDesktop = useIsDesktop();

  const hoverIn = () => {
    if (!isDesktop) return; // Disable hover effects on non-desktop devices

    // Animate description out
    gsap.to(descriptionRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        descriptionRef.current.style.display = "none";
        buttonRef.current.style.display = "block";

        // Animate button in
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });

    // Animate justify-content
    gsap.to(rightSideRef.current, {
      justifyContent: "flex-end",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const hoverOut = () => {
    if (!isDesktop) return; // Disable hover effects on non-desktop devices

    // Animate button out
    gsap.to(buttonRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        buttonRef.current.style.display = "none";
        descriptionRef.current.style.display = "block";

        // Animate description in
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });

    // Animate justify-content back
    gsap.to(rightSideRef.current, {
      justifyContent: "flex-start",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      className={`${className} group`}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      <CardWrapper
        align="center"
        className="flex flex-row items-center text-start gap-2 transition-all duration-300 ease-in-out p-4 md:px-6 md:py-8"
        variant="custom"
      >
        {/* Left Side */}
        <div className="flex flex-row items-center md:justify-between gap-2 w-[60%] md:w-[70%]">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div className="flex md:mx-auto md:text-center">
            <h3 className=" md:text-[32px] font-medium capitalize">{title}</h3>
          </div>
        </div>

        {/* Right Side (Description or Button) */}
        <div
          ref={rightSideRef}
          className="flex items-center w-[40%] md:w-[30%] justify-start relative min-h-[48px] transition-all duration-300"
        >
          {/* Description */}
          <div
            ref={descriptionRef}
            className="absolute left-0"
            style={{ display: isDesktop ? "block" : "none", opacity: 1 }}
          >
            <p className="text-base text-cst-neutral-5">{description}</p>
          </div>

          {/* Button */}
          <div
            ref={buttonRef}
            className="absolute right-0"
            style={{
              display: isDesktop ? "none" : "block",
              opacity: isDesktop ? 0 : 1,
            }}
          >
            <PrimaryButton
              className="group/button flex items-center md:gap-2 bg-transparent border border-primary text-primary text-xs md:text-base rounded-xl py-3 px-3 md:px-8"
              onClick={() => {
                if (onClick) {
                  const fn = eval(onClick); // Replace if you can
                  fn();
                }
              }}
            >
              Learn More
              <IoMdArrowForward className="md:ml-2 md:text-2xl group-hover/button:translate-x-2 transition-transform duration-200" />
            </PrimaryButton>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default HoverCard;
