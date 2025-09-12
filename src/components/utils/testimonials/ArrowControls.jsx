import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React from "react";

const ArrowControls = ({ className, prevSlide, nextSlide, ...props }) => {
  return (
    <div
      className={`${className}`}
      {...props}
    >
      <button
        onClick={prevSlide}
        className="bg-primary hover:bg-primary/50 border border-white/60 rounded-lg opacity-100 p-4 md:p-6 transition-opacity duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <IoIosArrowBack className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="bg-primary hover:bg-primary/50 border border-white/70 rounded-lg opacity-100 p-4 md:p-6 transition-opacity duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <IoIosArrowForward className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default ArrowControls;
