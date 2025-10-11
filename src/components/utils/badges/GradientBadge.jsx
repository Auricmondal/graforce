"use client";
import { motion } from "framer-motion";

export default function GradientBadge({
  icon,
  text,
  className = "",
  variant = "default",
}) {
  return (
    <motion.span
      className={`${
        variant === "default"
          ? "p-[8px_16px] rounded-full opacity-100 inline-flex items-center justify-center text-white text-xs md:text-sm font-medium border-[0.5px] border-black/10 bg-gradient-to-r from-primary-50 from-0% via-primary-400 via-50% to-primary-50 to-100% bg-[length:200%_100%]"
          : ""
      } ${className}`}
      animate={{ backgroundPosition: ["0% 50%", "400% 50%"] }}
      transition={{ duration: 24, ease: "linear", repeat: Infinity }}
    >
      {icon && <span className="mr-1 text-black">{icon}</span>}
      {text}
    </motion.span>
  );
}
