import React from "react";

const Hamburger = ({ isMenuOpenu }) => {
  return (
    <div className={`group flex flex-col justify-center mx-auto w-full gap-1 transition-all duration-500 ease-in-out bg-cst-neutral-5 rounded-full ${
          isMenuOpenu
            ? "py-3 px-2"
            : "p-2 py-3"
        }`}>
      <div
        className={`transition-all duration-500 ease-in-out rounded-sm border w-6 h-0.5 ${
          isMenuOpenu
            ? "rotate-135 bg-white border-white translate-y-[220%]"
            : "bg-white border-white"
        }`}
      ></div>
      <div
        className={`mx-auto transition-all duration-500 ease-in-out rounded-sm group-hover:w-6 ${
          isMenuOpenu ? "w-0 h-0" : "w-3 h-0.5 border border-white bg-white"
        }`}
      ></div>
      <div
        className={`transition-all duration-500 ease-in-out rounded-sm border w-6 h-0.5 ${
          isMenuOpenu
            ? "rotate-45 bg-white border-white translate-y-[-220%]"
            : "bg-white border-white"
        }`} 
      ></div>
    </div>
  );
};

export default Hamburger;
