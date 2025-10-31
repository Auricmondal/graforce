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

export default function AchievementRive({
  id,
  src = "/animations/electrolysis.riv",
}) {
  const containerRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(null);

  const { rive, RiveComponent } = useRive({
    src: src,
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
      id: `rive-scroll-trigger-${id}`,
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom 0%",
      scrub: true,
      onUpdate: (self) => {
        scrollInput.value = self.progress * 100;
      },
    });

    // console.log({artboardName})
    return () => trigger.kill();
  }, [scrollInput, id, src]);

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
        position: "relative",
        width: "100%",
      }}
    >
      <RiveComponent
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
