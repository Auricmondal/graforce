import React from "react";

export default function AnimatedText({ className, children, icon, variant, ...props }) {
  if (variant === "Footer") {
    const isRightAligned = className?.includes('text-right');
    
    return (
      <button
        className={`group cursor-pointer w-full ${className}`}
        {...props}
      >
        <span className="relative block overflow-hidden">
          <span className={`flex transform transition-transform duration-300 group-hover:-translate-y-full text-[14px] md:text-[16px] ${isRightAligned ? 'justify-end' : ''}`}>
            {children}
          </span>
          <span className={`flex absolute ${isRightAligned ? 'right-0' : 'left-0'} top-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[14px] md:text-[16px] ${isRightAligned ? 'justify-end' : ''}`}>
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

  return (
    <div
      className={`group
      cursor-pointer ${className}`}
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
    </div>
  );
}
