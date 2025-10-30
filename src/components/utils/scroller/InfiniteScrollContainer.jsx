import React from "react";
import { motion } from "framer-motion";
import useDirectionReversal from "@/hooks/useDirectionReversal";

const InfiniteScrollContainer = ({
  children,
  oneSetWidth,
  duration = 25,
  reversePeriod = null,
  direction = "left",
  className = "flex gap-4",
}) => {
  const { animationKey } = useDirectionReversal(reversePeriod);

  return (
    <motion.div
      key={`scroll-${animationKey}-${direction}`}
      className={`${className} ${direction === "left" ? "justify-start" : "justify-end"}`}
      initial={{ x: direction === "left" ? -oneSetWidth : 0 }}
      animate={{
        x: direction === "left" ? [0, -oneSetWidth] : [0, oneSetWidth],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      }}
      style={{ width: "max-content" }}
    >
      {children}
    </motion.div>
  );
};

export default InfiniteScrollContainer;
