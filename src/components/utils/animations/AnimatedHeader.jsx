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
  stagger = 0.2,
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const splitInstance = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      // Revert old SplitText if exists
      if (splitInstance.current) {
        splitInstance.current.revert();
      }

      // Set up fresh split
      splitInstance.current = new SplitText(ref.current, {
        type: "lines",
        linesClass: "gsap-line",
      });

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
        // Reset instantly when out of view
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
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
