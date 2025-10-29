import { useEffect, useRef, useState } from "react";
import { useRive, Fit, Alignment, Layout } from "@rive-app/react-canvas";

export default function RiveAutoplay({ src, stateMachines }) {
  const containerRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(null);

  const { rive, RiveComponent } = useRive({
    src,
    stateMachines,
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
      className="relative w-full"
      style={{
        aspectRatio: aspectRatio || 1,
      }}
    >
      <RiveComponent
        className="w-full !h-full object-contain mx-auto block"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
