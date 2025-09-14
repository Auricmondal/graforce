import React from "react";

export default function FloatupButton({
  className = "",
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
      className={`
        group relative
        ${fullWidth ? "md:w-full" : "md:w-fit"} w-full
        cursor-pointer select-none
        transition-all duration-200 ease-out active:scale-95 active:shadow-sm
        ${
          variant === "default"
            ? "bg-primary-500 text-white rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium shadow-md hover:shadow-lg"
            : ""
        }
        ${className}
      `}
      {...props}
    >
      {/* Text Animation */}
      <span className="relative block overflow-hidden">
        <span className="flex transition-transform duration-300 group-hover:-translate-y-full text-[14px] md:text-[16px]">
          {children}
        </span>
        <span className="flex absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[14px] md:text-[16px]">
          {children}
        </span>
      </span>

      {/* Icon Animation */}
      {icon && (
        <span className="relative w-7 h-7 flex items-center justify-center overflow-hidden rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black">
          {/* First Icon (slides out) */}
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full">
            {icon}
          </span>
          {/* Second Icon (slides in) */}
          <span className="absolute inset-0 -translate-x-full flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0">
            {icon}
          </span>
        </span>
      )}
    </button>
  );
}
