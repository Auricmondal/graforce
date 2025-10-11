import React from "react";

const PrimaryButton = ({ 
  className = "", 
  children, 
  onClick, 
  hoverTextColor = "white", 
  hoverBgColor = "primary",
  ...props 
}) => {
  // Map color names to full Tailwind classes
  const textColorMap = {
    white: "hover:text-white",
    black: "hover:text-black",
    primary: "hover:text-primary",
    "cst-neutral-1": "hover:text-cst-neutral-1",
    "cst-neutral-2": "hover:text-cst-neutral-2",
    "cst-neutral-3": "hover:text-cst-neutral-3",
    "cst-neutral-4": "hover:text-cst-neutral-4",
  };

  const bgColorMap = {
    primary: "hover:bg-primary",
    white: "hover:bg-white",
    black: "hover:bg-black",
    "cst-neutral-1": "hover:bg-cst-neutral-1",
    "cst-neutral-2": "hover:bg-cst-neutral-2",
    "cst-neutral-3": "hover:bg-cst-neutral-3",
    "cst-neutral-4": "hover:bg-cst-neutral-4",
  };

  const hoverTextClass = textColorMap[hoverTextColor] || "hover:text-white";
  const hoverBgClass = bgColorMap[hoverBgColor] || "hover:bg-primary";

  return (
    <button
      className={`${className} ${hoverTextClass} ${hoverBgClass} transition-colors duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
