import React from "react";

const Hamburger = ({ isMenuOpen }) => {
  return (
    <div className="group flex flex-col gap-1 transition-all duration-200 ease-in-out">
      <div
        className={`transition-all duration-200 ease-in-out rounded-full border w-6 h-1.5 ${
          isMenuOpen
            ? "rotate-135 bg-white border-white translate-y-[117%]"
            : "bg-black border-black"
        }`}
      ></div>
      <div
        className={`transition-all duration-200 ease-in-out rounded-full group-hover:w-6 ${
          isMenuOpen ? "w-0 h-0" : "w-3 h-1.5 border border-black bg-black"
        }`}
      ></div>
      <div
        className={`transition-all duration-200 ease-in-out rounded-full border w-6 h-1.5 ${
          isMenuOpen
            ? "rotate-45 bg-white border-white translate-y-[-117%]"
            : "bg-black border-black"
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
