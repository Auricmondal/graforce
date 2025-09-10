"use client";

import { useEffect, useRef, useState } from "react";

const FitText = ({ children, minFont = 16, maxFont = 300, className = "" }) => {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(maxFont);

  useEffect(() => {
    const resize = () => {
      const container = containerRef.current;
      if (!container) return;

      const parentWidth = container.parentElement.offsetWidth;

      let newFont = Math.min(maxFont, parentWidth / children.length * 1.8);
      newFont = Math.max(newFont, minFont);

      setFontSize(newFont);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [children, minFont, maxFont]);

  return (
    <div
      ref={containerRef}
      className={`${className}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </div>
  );
};

export default FitText;
