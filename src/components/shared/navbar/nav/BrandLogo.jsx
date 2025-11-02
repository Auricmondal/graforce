import { useRouter } from "next/navigation";
import React from "react";

const BrandLogo = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center justify-center brand cursor-pointer gap-2 ${className}`}
    >
      <div
        className={`group flex font-bold brand cursor-pointer transition-all duration-300 ease-in-out`}
        onClick={() => router.push("/")}
      >
        <img src="/logo.png" alt="Graforce" className="w-30 sm:w-36 grayscale" />
      </div>
    </div>
  );
};

export default BrandLogo;
