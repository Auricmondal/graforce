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

  const rebuildSplit = () => {
    if (!ref.current) return;

    // clear prior split and timeline
    if (splitInstance.current) {
      splitInstance.current.revert();
      splitInstance.current = null;
    }
    if (tl.current) {
      tl.current.kill();
      tl.current = null;
    }

    // fresh split
    splitInstance.current = new SplitText(ref.current, {
      type: "lines",
      linesClass: "gsap-line",
    });

    // ensure spans, not divs
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
  };

  const animateIfNeeded = () => {
    if (!splitInstance.current?.lines?.length) return;

    if (inView && !hasAnimated.current) {
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
    } else {
      // keep layout correct after resize or content swap without replay
      gsap.set(splitInstance.current.lines, { opacity: 1, y: 0 });
    }
  };

  // Initial mount + inView changes
  useGSAP(
    () => {
      // build once on mount and whenever inView flips, then animate accordingly
      rebuildSplit();
      animateIfNeeded();

      const handleResize = () => {
        // Rebuild split on next frame to match new line wrapping
        window.requestAnimationFrame(() => {
          rebuildSplit();
          // do not replay if already animated
          animateIfNeeded();
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

  // Rerun when parent changes the children
  useEffect(() => {
    // reset animation state so new text can animate
    hasAnimated.current = false;

    // wait for React to paint new children, then rebuild and animate
    requestAnimationFrame(() => {
      rebuildSplit();
      animateIfNeeded();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <span ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </span>
  );
}
