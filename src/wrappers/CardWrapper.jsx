import React from "react";

const CardWrapper = ({
  children,
  className = "",
  variant = "standard",
  color = "default",
  radius = "standard",
  align = "left",
  flexColumn = true,
}) => {
  const variants = {
    standard: "px-6 py-12 sm:px-6 sm:py-8",
    compact: "py-6 px-8",
    normal: "py-20 px-6",
    featured:"pt-20 sm:pt-28 pb-10 px-10",
    custom: "",
  };

  const cardColors = {
    default: "bg-white",
    blue: "bg-primary",
    dark: "bg-cst-neutral-5",
    transparent: "bg-transparent",
    custom: "",
  };

  const cardRadius = {
    standard: "rounded-lg",
    compact: "rounded-xl",
    featured: "rounded-3xl",
    custom: "",
  };

  const alignments = {
    left: "text-left items-start",
    center: "text-center justify-center items-center",
    right: "text-right items-end",
    custom: "",
  };

  return (
    <div
      className={`
        flex 
        ${flexColumn ? "flex-col" : ""}
        ${className}
        ${color === "default" ? "border border-cst-neutral-1" : color === "transparent" || color === "custom" ? "" : "border border-cst-neutral-1"}
        ${variants[variant]}
        ${cardColors[color]}
        ${cardRadius[radius]}
        ${alignments[align]}
      `}
    >
      {children}
    </div>
  );
};

export default CardWrapper;