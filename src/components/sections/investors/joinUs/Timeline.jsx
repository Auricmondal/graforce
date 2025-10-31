"use client";
import { useEffect, useRef, useState } from "react";
import {
  useRive,
  useStateMachineInput,
  Fit,
  Layout,
  Alignment,
} from "@rive-app/react-canvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RiveScrollAnimation() {
  const containerRef = useRef(null);
  const [riveSrc, setRiveSrc] = useState("/animations/timeline.riv");
  const [aspectRatio, setAspectRatio] = useState(null);

  const handleResize = () => {
    const isMobile = window.innerWidth < 1024;
    setRiveSrc(
      isMobile
        ? "/animations/timeline.riv" // Use mobile version if available
        : "/animations/timeline.riv" // Use desktop version
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { rive, RiveComponent } = useRive({
    src: riveSrc,
    stateMachines: "timeline",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      // get intrinsic artboard size once loaded
      const artboard = rive?.artboard;
      if (artboard) {
        const ratio = artboard.bounds.maxY / artboard.bounds.maxX;
        setAspectRatio(ratio);
      }
    },
  });

  const scrollInput = useStateMachineInput(rive, "timeline", "Scroll");

  useEffect(() => {
    if (!scrollInput || !containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      end: "bottom 25%",
      scrub: true,
      onUpdate: (self) => {
        scrollInput.value = self.progress * 100;
      },
    });

    // console.log({artboardName})
    return () => trigger.kill();
  }, [scrollInput]);

  useEffect(() => {
    if (rive && rive.loaded) {
      const artboard = rive.artboard;
      if (artboard?.bounds) {
        const width = artboard.bounds.maxX - artboard.bounds.minX;
        const height = artboard.bounds.maxY - artboard.bounds.minY;
        const ratio = width / height;
        setAspectRatio(ratio);
      }
    }
  }, [rive]);

  return (
    <div
      ref={containerRef}
      style={{
        aspectRatio: aspectRatio || 1,
        marginInline: "auto",
      }}
    >
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
