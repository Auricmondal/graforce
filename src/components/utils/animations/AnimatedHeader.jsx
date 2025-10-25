"use client";

import { useInView } from "motion/react";
import { useRef, useEffect } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function AnimatedHeader({
  children,
  delay = 0,
  duration = 0.6,
  stagger = 0.1,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -5% 0px" });
  const splitInstance = useRef(null);
  const tl = useRef(null);
  const hasAnimated = useRef(false);

  const splitAndAnimate = () => {
    if (!ref.current || hasAnimated.current) return;

    if (splitInstance.current) {
      splitInstance.current.revert();
      splitInstance.current = null;
    }

    // Split the text into lines
    splitInstance.current = new SplitText(ref.current, {
      type: "lines",
      linesClass: "gsap-line",
    });

    // Replace <div> with <span>
    splitInstance.current.lines = splitInstance.current.lines.map((lineEl) => {
      if (lineEl.tagName === "DIV") {
        const span = document.createElement("span");
        span.className = lineEl.className;
        span.style.display = "block";
        span.innerHTML = lineEl.innerHTML;
        lineEl.replaceWith(span);
        return span;
      }
      return lineEl;
    });

    // Animate lines
    if (inView) {
      tl.current = gsap.fromTo(
        splitInstance.current.lines,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration,
          delay,
          ease: "power3.out",
        }
      );
      hasAnimated.current = true;
    } 
  };

  useGSAP(
    () => {
      splitAndAnimate();

      const handleResize = () => {
        // debounce with requestAnimationFrame
        window.requestAnimationFrame(() => {
          splitAndAnimate();
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (splitInstance.current) {
          splitInstance.current.revert();
          splitInstance.current = null;
        }
        if (tl.current) {
          tl.current.kill();
          tl.current = null;
        }
      };
    },
    { scope: ref, dependencies: [inView] }
  );

  return (
    <span ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </span>
  );
}
