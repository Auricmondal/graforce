import React from "react";

const CardWrapper = ({
  children,
  className = "",
  variant = "standard",
  color = "default",
  radius = "standard",
  align = "left",
}) => {
  const variants = {
    standard: "px-16 py-8",
    compact: "py-6 px-8",
    featured:
      "pt-28 pb-10 px-10",
  };

  const cardColors = {
    default: "bg-white",
    blue: "bg-[#E6E6E64D]",
    dark: "bg-[#4D4D4D]",
  };

  const cardRadius = {
    standard: "rounded-lg",
    compact: "rounded-xl",
    featured: "rounded-3xl",
  };

  const alignments = {
    left: "text-left items-start justify-start",
    center: "text-center items-center justify-center",
    right: "text-right items-end justify-end",
  };

  return (
    <div
      className={`
        flex flex-col
        ${variants[variant] || variants.standard}
        ${cardColors[color] || cardColors.default}
        ${cardRadius[radius] || cardRadius.standard}
        ${alignments[align] || alignments.left}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
