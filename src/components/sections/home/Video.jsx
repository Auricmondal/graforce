"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const circleRef = useRef(null);

  const scrollTriggerConfig = {
    trigger: "#hero",
    start: "top top",
    end: "bottom+=2500 top",
    scrub: true,
    pin: true
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const video = videoRef.current;
    const circle = circleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: scrollTriggerConfig,
      defaults: { borderRadius: "50rem", ease: "power4.inOut" },
    });

    tl.to(overlay, { duration: 0.01,
      onComplete: () => {
        video?.play().catch(() => {});
    }})
      .to(overlay, { width: "5vmin", height: "5vmin", duration: 0.5 })
      .to(overlay, { width: "20vmin", height: "20vmin", duration: 0.1 })
      .to(overlay, { width: "100vmin", height: "100vmin", duration: 2.5 })
      .to(overlay, { width: "100%", height: "100vh", borderRadius: "0rem", duration: 3 })

      .to(circle, { strokeDashoffset: 0, duration: 3, ease: "none" })
      .to(circle, { opacity: 0, duration: 0.5, ease: "power2.out" });

    return () => { tl.kill(); };
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
        className="w-screen h-screen object-cover"
      />

      <svg
        className="absolute bottom-8 right-8 w-16 h-16 rounded-full p-2"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="circularStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#ffffff"}} />
            <stop offset="100%" style={{stopColor:"#444"}} />
          </linearGradient>
        </defs>
        <circle
          ref={circleRef}
          r="40"
          cx="50"
          cy="50"
          stroke="url(#circularStrokeGradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray="280"
          strokeDashoffset="280"
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  );
}

export default Video;
