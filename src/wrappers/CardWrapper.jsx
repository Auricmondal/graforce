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
    featured:"pt-20 sm:pt-28 pb-10 px-10",
    custom: "",
  };

  const cardColors = {
    default: "bg-white",
    blue: "bg-[#E6E6E64D]",
    dark: "bg-cst-neutral-5",
    custom: "",
  };

  const cardRadius = {
    standard: "rounded-lg",
    compact: "rounded-xl",
    featured: "rounded-3xl",
    custom: "",
  };

  const alignments = {
    left: "text-left items-start justify-start",
    center: "text-center items-center justify-center",
    right: "text-right items-end justify-end",
    custom: "",
  };

  return (
    <div
      className={`
        flex flex-col
        ${variants[variant]}
        ${cardColors[color]}
        ${cardRadius[radius]}
        ${alignments[align]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default CardWrapper;