import React from "react";
import { motion } from "framer-motion";

const LogoItem = ({ logo, index }) => {
  return (
    <motion.div
      className="flex-shrink-0 mx-0 flex items-center justify-center"
      style={{ minWidth: "120px" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <motion.img
        src={logo.src}
        alt={logo.name}
        className={`h-[20vh] sm:h-[30vh] w-full ${index % 2 === 0 ? "aspect-5/2" : "aspect-5/3"} rounded-xl object-cover`}
        initial={{ opacity: 1, filter: "grayscale(0%)" }}
        animate={{ opacity: 1, filter: "grayscale(0%)" }}
        whileHover={{
          opacity: 1,
          filter: "grayscale(0%)",
          transition: { duration: 0.3 },
        }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </motion.div>
  );
};

export default LogoItem;
