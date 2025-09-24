"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target.closest("[data-cursor]");
      target ? setCursorType(target.getAttribute("data-cursor")) : setCursorType("default");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const base = {
    x: pos.x,
    y: pos.y,
    backgroundColor: "#fff",
  };

  const variants = {
    default: {
      ...base,
      scale: 1,
      mixBlendMode: "difference",
    },
    highlight: {
      ...base,
      scale: 2,
      mixBlendMode: "exclusion",
    },
    image: {
      ...base,
      scale: 4,
      backgroundImage: "url('/test/img/test-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mixBlendMode: "normal",
    },
  };

  return (
    <motion.div
      className="fixed z-[999] h-12 w-12 pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2"
      variants={variants}
      animate={cursorType}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}
