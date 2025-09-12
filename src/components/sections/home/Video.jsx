"use client";
import React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const video = videoRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom+=2000 top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(overlay, {
      width: "0rem",
      height: "0rem",
      borderRadius: "50rem",
      ease: "power2.out",
      duration: 0.4,
      onComplete: () => {
        if (video) {
          video.play();
        }
      },
    });

    tl.to(overlay, {
      width: "5rem",
      height: "5rem",
      borderRadius: "50rem",
      ease: "power2.out",
      duration: 0.4,
    }).to(overlay, {
      width: "20rem",
      height: "20rem",
      borderRadius: "50rem",
      ease: "power2.out",
      duration: 0.4,
    });

    if (vw > vh) {
      tl.to(overlay, {
        width: "100vh",
        height: "100vh",
        borderRadius: "50rem",
        ease: "power2.out",
        duration: 0.4,
      })
        .to(overlay, {
          width: Math.max(vw * 0.6, vh),
          borderRadius: "10rem",
          ease: "power2.out",
          duration: 0.4,
        })
        .to(overlay, {
          width: Math.max(vw * 0.8, vh),
          borderRadius: "5rem",
          ease: "power2.out",
          duration: 0.4,
        })
        .to(overlay, {
          width: "100vw",
          borderRadius: "5rem",
          ease: "power2.out",
          duration: 0.4,
        });
    } else {
      tl.to(overlay, {
        width: "100vw",
        height: "100vw",
        borderRadius: "50rem",
        ease: "power2.out",
        duration: 0.4,
      })
        .to(overlay, {
          height: Math.max(vh * 0.6, vw),
          borderRadius: "10rem",
          ease: "power2.out",
          duration: 0.4,
        })
        .to(overlay, {
          height: Math.max(vh * 0.8, vw),
          borderRadius: "5rem",
          ease: "power2.out",
          duration: 0.4,
        })
        .to(overlay, {
          height: "100vh",
          borderRadius: "5rem",
          ease: "power2.out",
          duration: 0,
        });
    }

    tl.to(overlay, {
      borderRadius: "0%",
      scale: 1,
      ease: "power2.out",
      duration: 0.4,
    }).to({}, { duration: 3 });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 overflow-hidden bg-white"
    >
      <video
        id="video-section"
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        playsInline
        muted
        className="w-screen h-screen object-cover scale-1.5"
      />
    </div>
  );
};

export default Video;
