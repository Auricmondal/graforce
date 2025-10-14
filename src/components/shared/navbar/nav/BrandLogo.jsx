import { useRouter } from "next/navigation";
import React from "react";
import Hamburger from "./Hamburger";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import MenuRive from "./MenuRive";

const BrandLogo = ({ onClick, isMenuOpen, className, size = "text-3xl" }) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center justify-center brand cursor-pointer gap-2 ${className}`}
    >
      {/* <div
        className={`[@media(min-width:1080px)]:hidden text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${
          isMenuOpen ? "text-white" : "text-black"
        }`}
        // onMouseEnter={onClick}
        onClick={onClick}
      >
        <Hamburger isMenuOpen={isMenuOpen} /> */}
      {/* <HiOutlineMenuAlt1 /> */}
      {/* <MenuRive isMenuOpen={isMenuOpen} /> */}
      {/* </div> */}
      {/* <div
        className={`group flex text-3xl font-bold brand cursor-pointer transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "text-white hover:text-blue-200"
            : "text-black hover:text-blue-900"
        }`}
        onClick={() => router.push("/")}
      > */}
      <div
        className={`group flex ${size} font-bold brand cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={() => router.push("/")}
      >
        Graforce
      </div>
    </div>
  );
};

export default BrandLogo;
