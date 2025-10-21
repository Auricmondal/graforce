import Image from "next/image";
import importantDetailsImg from "@/assets/product/imp-details.webp";
import leftImg from "@/assets/service/ServiceSolution1.jpg";
import InfoCard from "./InfoCard";

export const leftTypes = {
  1: (
    <Image
      src={importantDetailsImg}
      height={800}
      width={1000}
      alt="imp-details"
      style={{ objectFit: "contain", width: "100%" }}
    />
  ),
  2: (
    <div className="flex h-full w-full bg-cst-neutral-1 gap-2">
      <div className="w-1/2 h-full hidden md:block">
        <Image
          src={leftImg.src}
          alt="Abstract Background"
          height={800}
          width={1000}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Panels */}

      <div className="w-full md:w-1/2 h-full flex flex-col gap-2">
        {/* 0.5 MW Plasmalyzer Module */}
        <InfoCard
          title="0.5 MW Plasmalyzer Module"
          bgColor="var(--cst-neutral-5)"
          textColor="white"
          labelColor="#9ca3af"
          barData={[
            { label: "H₂", height: "5rem", color: "#3a3a3d" },
            { label: "C", height: "8rem", color: "#3a3a3d" },
          ]}
          outputs={[
            { amount: 50, unit: "Kg", label: "Hydrogen" },
            { amount: 150, unit: "Kg", label: "Carbon" },
          ]}
        />

        {/* 20 MW Plant */}
        <InfoCard
          title={{ left: "20 MW Plant", right: "40 Modules" }}
          bgColor="#5627da"
          textColor="white"
          labelColor="rgba(255,255,255,0.8)"
          barData={[
            { label: "H₂", height: "5rem", color: "#8968e5" },
            { label: "C", height: "8rem", color: "#8968e5" },
          ]}
          outputs={[
            { amount: 2, unit: "Tons", label: "Hydrogen" },
            { amount: 6, unit: "Tons", label: "Carbon" },
          ]}
        />
      </div>
    </div>
  ),
  3: (
    <div className="flex h-full w-full bg-cst-neutral-1 gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full min-h-[80vh]">
        <div className="bg-[#5626da] rounded-lg"></div>
        <div className="bg-cst-neutral-5 rounded-lg"></div>
        <div className="bg-cst-neutral-2 rounded-lg"></div>
        <div className="bg-[#5626da] rounded-lg"></div>
      </div>
    </div>
  ),
};
