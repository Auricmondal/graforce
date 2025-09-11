"use client";
import React from 'react';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const scrollTriggerConfig = { trigger: "#hero", start: "top top", end: "bottom+=2500 top", scrub: true, pin: true };

  useEffect(() => {
    const overlay = overlayRef.current;
    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
      defaults: { borderRadius: "50rem", ease: "power4.inOut" },
    });

    tl.to(overlay, { duration: 0.01,
      onComplete: () => {
        video?.play().catch(() => {});
    }});

    tl.to(overlay, { width: "5vmin", height: "5vmin", duration: 0.5 })
      .to(overlay, { width: "20vmin", height: "20vmin", duration: 0.1 })
      .to(overlay, { width: "100vmin", height: "100vmin", duration: 2.5 })
      .to(overlay, { width: "100vw", height: "100vh", borderRadius: "0rem", duration: 3 })
      .to({}, { duration: 3 });

  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 overflow-hidden bg-white"
    >
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        playsInline
        muted
        className="w-screen h-screen object-cover scale-1.5"
      />
    </div>
  );
}

export default Video;