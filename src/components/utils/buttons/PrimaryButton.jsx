import React from "react";

const PrimaryButton = ({ className, children, onClick, ...props }) => {
  return (
    <button
      className={`${className} hover:text-white hover:bg-primary transition-colors duration-300 ease-in-out`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
