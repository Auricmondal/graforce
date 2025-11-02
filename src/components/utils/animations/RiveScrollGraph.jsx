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

export default function RiveScrollGraph({
  src = "/animations/graph.riv",
  stateMachines = "timeline",
  anchorRef,
  aspectRatioProp = "1",
  className = "",
}) {
  const containerRef = useRef(null);
  const [riveSrc, setRiveSrc] = useState(src);
  const [aspectRatio, setAspectRatio] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  const { rive, RiveComponent } = useRive({
    src: riveSrc,
    stateMachines: stateMachines,
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

    if (isMobile) {
      scrollInput.value = 100;
      return;
    }

    const triggerElement = anchorRef || containerRef.current;

    const trigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        scrollInput.value = self.progress * 100;
      },
    });

    // console.log({artboardName})
    return () => trigger.kill();
  }, [scrollInput, anchorRef, isMobile]);

  useEffect(() => {
    if (rive && rive.loaded) {
      const artboard = rive.artboard;
      if (artboard?.bounds) {
        const width = artboard.bounds.maxX - artboard.bounds.minX;
        const height = artboard.bounds.maxY - artboard.bounds.minY;
        const ratio = width / height;
        setAspectRatio(aspectRatioProp || ratio);
      }
    }
  }, [rive]);

  return (
    <div
      ref={containerRef}
      className={`flex relative flex-col items-center justify-between m-auto w-full h-fit ${className}`}
      style={{aspectRatio: aspectRatio}}
    >
      <RiveComponent
        style={{
          position: "absolute",
          inset: 0,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
