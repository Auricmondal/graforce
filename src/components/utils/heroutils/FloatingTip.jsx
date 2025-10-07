import React from "react";
import * as motion from "motion/react-client";

export default function FloatingTip({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={`absolute bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-black text-xs md:text-sm font-bold shadow-lg z-2 ${className}`}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
