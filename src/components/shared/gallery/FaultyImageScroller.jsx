'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import useGSAP from "src/hooks/useGSAP"; // project-specific hook used elsewhere in repo

/**
 * ImageScroller
 *
 * A responsive, infinite horizontal image scroller (marquee) using GSAP.
 * Implementation notes:
 * - Renders two identical groups of images side-by-side to create a seamless loop.
 * - Animates the outer track's xPercent from 0 -> ±50% (one group width) with repeat:-1 and ease: "none".
 * - Duration is calculated from measured content width and the provided `speed` (pixels per second).
 * - Uses useGSAP to create/cleanup the timeline and re-create it when inputs change.
 *
 * Props:
 * - scrollImage: Array<string|ReactNode>  -> list of image URLs or nodes to render.
 * - aspect: string | number                -> CSS aspect ratio for each image (e.g. "16/9", "1/1", or a number)
 * - direction: 'left' | 'right'           -> scroll direction (defaults to 'left')
 * - speed: number                          -> pixels per second scroll speed (defaults to 120)
 *
 * Accessibility:
 * - aria-hidden on the visual-only scroller (if images convey non-essential decoration).
 *
 * Performance:
 * - Uses will-change: transform on the animated track.
 * - Recreates the animation on resize / props change to keep measurements correct.
 */
const ImageScroller = ({
  scrollImage = [], // array of src strings or React nodes
  aspect = "1/1",
  direction = "left",
  speed = 120,
}) => {
  const containerRef = useRef(null); // viewport box (overflow hidden)
  const trackRef = useRef(null); // animated container that holds two groups
  const groupRef = useRef(null); // single group (duplicated in DOM)

  /**
   * Build the DOM once: two identical groups for the infinite loop.
   * The animation below moves the entire track by +/-50% (one group's width).
   */
  useGSAP(
    () => {
      // Basic guards
      if (!groupRef.current || !trackRef.current || !containerRef.current) return;

      // Measure the width of one group (groupRef is one copy)
      const groupWidth = Math.max(
        0,
        Math.round(groupRef.current.getBoundingClientRect().width)
      );

      // If nothing to animate, bail
      if (!groupWidth || scrollImage.length === 0) return;

      // Calculate duration in seconds from pixels-per-second speed
      // We animate 50% of the track (one group). Duration = pixels / speed
      const duration = groupWidth / Math.max(1, speed);

      // Determine xPercent target: left => -50, right => 50
      const xPercentTarget = direction === "right" ? 50 : -50;

      // Ensure any previous timelines on this element are killed
      gsap.killTweensOf(trackRef.current);

      // Create the infinite timeline: move track by +/-50% (one group's width) repeating forever
      const tl = gsap.to(trackRef.current, {
        xPercent: xPercentTarget,
        ease: "none",
        duration,
        repeat: -1,
        // smooth linear motion; no yoyo
      });

      // Recalculate on window resize to keep the duration consistent with new size
      const onResize = () => {
        if (!groupRef.current) return;
        const newGroupWidth = Math.max(
          0,
          Math.round(groupRef.current.getBoundingClientRect().width)
        );
        if (!newGroupWidth) return;
        const newDuration = newGroupWidth / Math.max(1, speed);
        tl.duration(newDuration);
      };

      window.addEventListener("resize", onResize);

      // Cleanup for this effect
      return () => {
        tl.kill();
        window.removeEventListener("resize", onResize);
      };
    },
    // Dependencies: recreate animation when images, speed or direction change
    [scrollImage, speed, direction]
  );

  // Helper to render one copy of items
  const renderItems = () =>
    scrollImage.map((item, idx) => {
      // If item is a string, treat as img src; otherwise render node directly
      const key = `scroller-item-${idx}`;
      if (typeof item === "string") {
        return (
          <div
            key={key}
            className="scroller-item"
            style={{
              flex: "0 0 auto",
              display: "block",
              paddingRight: 8,
            }}
          >
            <img
              src={item}
              alt=""
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: aspect,
                borderRadius: 6,
              }}
            />
          </div>
        );
      }

      return (
        <div key={key} style={{ flex: "0 0 auto", paddingRight: 8 }}>
          {item}
        </div>
      );
    });

  return (
    <div
      ref={containerRef}
      className="image-scroller overflow-hidden"
      aria-hidden="true"
      style={{
        width: "100%",
      }}
    >
      <div
        ref={trackRef}
        className="marquee-track flex items-center"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          willChange: "transform",
        }}
      >
        {/* first group (measured) */}
        <div
          ref={groupRef}
          className="marquee-group flex items-center"
          style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
        >
          {renderItems()}
        </div>

        {/* duplicate group for seamless loop */}
        <div
          aria-hidden="true"
          className="marquee-group duplicate flex items-center"
          style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}
        >
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;