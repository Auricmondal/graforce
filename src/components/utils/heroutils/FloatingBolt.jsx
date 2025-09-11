import React from 'react';
import * as motion from "motion/react-client";
import Bolt from "@/assets/energy_symbol-3.png";
import Image from 'next/image';

export default function FloatingBolt ({ className = "", size = "w-6 h-6" }) {
  return (
    <motion.div
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${size} bg-white rounded-full flex items-center justify-center shadow-lg z-1 ${className}`}
    >
      <Image src={Bolt} alt="Lightning Bolt" className="object-contain" />
    </motion.div>
  );
};