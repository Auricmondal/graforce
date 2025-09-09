import React from "react";

export default function FloatupButton({
  className,
  children,
  icon,
  onClick,
  fullWidth = false,
  variant = "default",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`group 
        ${fullWidth ? "md:w-full" : "md:w-fit"} 
      cursor-pointer w-full ${
        variant === "default"
          ? "bg-primary-500 text-white rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium"
          : ""
      } ${className}`}
      {...props}
    >
      <span className="relative block overflow-hidden">
        <span className="flex transform transition-transform duration-300 group-hover:-translate-y-full text-[14px] md:text-[16px]">
          {children}
        </span>
        <span className="flex absolute left-0 top-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[14px] md:text-[16px]">
          {children}
        </span>
      </span>
      {icon && (
        <span className="relative w-5 h-5 block overflow-hidden text-center">
          <span className="absolute inset-0 transform transition-opacity duration-300 group-hover:opacity-0 text-[14px] md:text-[16px] text-center h-fit m-auto">
            {icon}
          </span>
          <span className="flex absolute left-0 top-0 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 text-[14px] md:text-[16px] text-center h-fit m-auto">
            {icon}
          </span>
        </span>
      )}
    </button>
  );
}
