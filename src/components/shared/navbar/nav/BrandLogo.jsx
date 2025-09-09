import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const BrandLogo = () => {
  return (
    <div className="flex text-3xl font-bold brand">
      <div className="[@media(min-width:1080px)]:hidden flex items-center mr-2">
        <HiOutlineMenuAlt1 />
      </div>
      Graforce
    </div>
  );
};

export default BrandLogo;
