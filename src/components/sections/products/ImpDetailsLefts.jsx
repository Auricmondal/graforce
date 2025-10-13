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
      <div className="w-1/2 h-full">
        <Image
          src={leftImg.src}
          alt="Abstract Background"
          height={800}
          width={1000}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Panels */}

      <div className="w-1/2 h-full flex flex-col gap-2">
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
      <div className="w-1/2 h-full">
        <Image
          src={leftImg.src}
          alt="Abstract Background"
          height={800}
          width={1000}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Panels */}

      <div className="w-1/2 h-full flex flex-col gap-2">
        {/* 0.5 MW Plasmalyzer Module */}
        <InfoCard
          title="1.2 GW Fusion Reactor Core"
          bgColor="#1b1f3b"
          textColor="white"
          labelColor="#a0aec0" // Tailwind gray-400
          barData={[
            { label: "H₂", height: "6rem", color: "#4fd1c5" }, // teal
            { label: "He", height: "4rem", color: "#805ad5" }, // purple
          ]}
          outputs={[
            { amount: 300, unit: "Kg", label: "Hydrogen" },
            { amount: 120, unit: "Kg", label: "Helium" },
          ]}
        />

        {/* Carbon Extractor Array */}
        <InfoCard
          title={{ left: "Carbon Extractor Array", right: "16 Units" }}
          bgColor="#2d3748"
          textColor="white"
          labelColor="rgba(255,255,255,0.7)"
          barData={[
            { label: "CO₂", height: "7rem", color: "white", opacity: 0.4 },
            { label: "C", height: "5rem", color: "white", opacity: 0.4 },
          ]}
          outputs={[
            { amount: 1.5, unit: "Tons", label: "CO₂" },
            { amount: 1, unit: "Tons", label: "Carbon" },
          ]}
        />
      </div>
    </div>
  ),
};
