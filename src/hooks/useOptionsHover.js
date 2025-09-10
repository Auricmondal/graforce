import gsap from 'gsap';
import React, { useEffect } from 'react'

const useOptionsHover = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".options", { opacity: 0, Y: 20, transformOrigin: "top" }, 
      { opacity: 1, Y: 0, duration: 0.3, ease: "power2.out" },
      0 // start at time 0
    ).fromTo(
      ".card",
      { opacity: 0, y: 20, scale: 0, transformOrigin: "top right" },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
      0.3 // start at time 0
    ).fromTo(
      ".list",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
      0.3 // also start at time 0
    );
  }, []);
}

export default useOptionsHover