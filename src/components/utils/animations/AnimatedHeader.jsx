"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function AnimatedHeader({
  children,
  delay = 0,
  duration = 0.4,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  console.log({inView})

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 32, // same as -2rem
        transition: {
          duration: 0,
        },
      });
    }
  }, [inView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={controls}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
