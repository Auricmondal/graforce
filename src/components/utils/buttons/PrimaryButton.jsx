import React from "react";

const PrimaryButton = ({ className, children, onClick, ...props }) => {
  return (
    <button
      className={`hover:text-white hover:bg-primary ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
