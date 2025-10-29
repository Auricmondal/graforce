"use client";

import { useInView } from "motion/react";
import { useRef, useEffect } from "react";
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

  const didAnimate = useRef(false);
  const splitInstance = useRef(null);
  const tl = useRef(null);

  // Animate only once when first in view
  useEffect(() => {
    if (!ref.current) return;
    if (didAnimate.current) return;
    if (!inView) return;

    // Create SplitText when it’s time to animate
    splitInstance.current = new SplitText(ref.current, {
      type: "lines",
      linesClass: "gsap-line",
    });

    // Fix: Ensure each line is a <span>
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
        onComplete: () => {
          // Clean up wrappers so original children remain
          splitInstance.current?.revert();
          splitInstance.current = null;
          tl.current = null;
          didAnimate.current = true;
        },
      }
    );

    return () => {
      // Safety cleanup
      tl.current?.kill();
      splitInstance.current?.revert();
      tl.current = null;
      splitInstance.current = null;
    };
  }, [inView, delay, duration, stagger]);

  return (
    <span ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </span>
  );
}
