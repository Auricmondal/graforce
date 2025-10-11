import React from "react";

const PrimaryButton = ({ className, children, onClick, hoverText = "text-white", hoverBgColor = "bg-primary", ...props }) => {
  return (
    <button
      className={`${className} ${`hover:`+hoverText} ${`hover:`+hoverBgColor} transition-colors duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
