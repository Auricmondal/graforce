import { useRouter } from "next/navigation";
import React from "react";

const BrandLogo = ({ className, size = "text-3xl" }) => {
  const router = useRouter();
  return (
    <div
      className={`flex items-center justify-center brand cursor-pointer gap-2 ${className}`}
    >
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
