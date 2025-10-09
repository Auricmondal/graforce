"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

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
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const splitInstance = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (splitInstance.current) {
        splitInstance.current.revert();
      }

      // Initial split using divs (default)
      splitInstance.current = new SplitText(ref.current, {
        type: "lines",
        linesClass: "gsap-line",
      });

      // Replace each line wrapper <div> with a <span>
      splitInstance.current.lines = splitInstance.current.lines.map(
        (lineEl) => {
          if (lineEl.tagName === "DIV") {
            const span = document.createElement("span");
            span.className = lineEl.className;
            span.style.display = "block"; // mimic <div> behavior
            span.innerHTML = lineEl.innerHTML;
            lineEl.replaceWith(span);
            return span;
          }
          return lineEl;
        }
      );

      // Animate
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
      } else {
        gsap.set(splitInstance.current.lines, {
          opacity: 0,
          y: 32,
        });
      }

      return () => {
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
