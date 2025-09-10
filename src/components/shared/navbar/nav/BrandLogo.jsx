import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const BrandLogo = ({ onClick, isMenuOpen }) => {
  const router = useRouter();
  return (
    <div className={`flex text-3xl font-bold brand cursor-pointer ${isMenuOpen ? "text-white hover:text-blue-200" : "text-black hover:text-blue-900"}`} onClick={() => router.push('/')}>
      <div className="[@media(min-width:1080px)]:hidden flex items-center mr-2"
        onClick={onClick}
      >
        <HiOutlineMenuAlt1 />
      </div>
      Graforce
    </div>
  );
};

export default BrandLogo;
