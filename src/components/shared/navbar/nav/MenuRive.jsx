"use client";
import { useRive } from "@rive-app/react-canvas";

export default function MenuRive({ isMenuOpen }) {
  const { RiveComponent } = useRive({
    src: "/nav/graforce.riv",
    stateMachines: "State Machine 1", // check actual name in your .riv
    autoplay: true,
  });

  return (
    <div className={`flex items-center justify-center ${isMenuOpen ? "text-white rounded-full shadow-md bg-neutral-300 w-8 h-8 p-2" : "w-7 h-7 text-black"}
    `}>
      <RiveComponent className="" />
    </div>
  );
}
