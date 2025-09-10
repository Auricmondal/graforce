"use client";
import useOptionsHover from "@/hooks/useOptionsHover";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const ServiceOptions = ({ className, setHovered, ...props }) => {
  const card = React.useRef(null);
  const router = useRouter();
  const options = [
    "Hydrogen production",
    "Water purification",
    "CO2 free energy generation",
  ];
  
  useOptionsHover();

  return (
    // <div className={`${className}`}>
    <div
      // className="flex flex-col translate-x-[10%] transition-transform duration-200 ease-in-out bg-white border rounded-lg border-gray-300 shadow-sm p-2"
      className={`options flex flex-col translate-x-[10%] transition-transform duration-200 ease-in-out bg-white border rounded-lg border-gray-300 shadow-sm p-2 ${className}`}
      {...props}
    >
      <div className="text-black py-2 border-b border-gray-400 font-bold mb-2">
        Our Services
      </div>
      <div className="flex flex-row gap-8 justify-between mt-2">
        <div className="space-y-3 mb-8">
          {/* Service Options */}
          {options.map((option, index) => (
            <div
              key={index}
              className="list flex items-center backdrop-blur-sm rounded-lg p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                // Handle option click
                router.push(
                  "/services/#" + option.toLowerCase().replace(/\s+/g, "-")
                );
                setHovered(false);
              }}
            >
              <div className="bg-gray-500 w-10 h-10 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-2xl font-bold">
                  {option.charAt(0)}
                </span>
              </div>
              <span className="text-black text-2xl font-medium">{option}</span>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="space-y-1 p-4">
          <div className="text-black text-lg font-medium">Our Achievement</div>

          {/* Achievement Card */}
          <div
            ref={card}
            className="card bg-neutral-200 backdrop-blur-sm rounded-lg border border-white/20 p-4 text-black flex flex-col gap-2"
          >
            {/* Placeholder for chart/graph */}
            <div className="bg-neutral-50 rounded-md h-54 mb-4 flex items-center justify-center">
              <div className="text-xs ">Brilient Achievements</div>
            </div>

            <div>
              <div className="text-2xl font-bold mb-1">85% Co2 reduction</div>
              <div className=" text-sm">How we achieved that</div>
            </div>
            {/* Contact Button */}
            <button
              onClick={() => {
                router.push("/contact");
                setHovered(false);
              }}
              className="transition-colors duration-200 rounded-full flex items-center font-medium text-lg gap-1"
            >
              <span>Contact Us</span>
              <IoIosArrowDroprightCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export const ServiceOptionsMobile = ({ className, mobileMenuHovered, setMobileMenuHovered, setIsMenuOpen, ...props }) => {
  const card = React.useRef(null);
  const router = useRouter();
  const options = [
    "Hydrogen production",
    "Water purification",
    "CO2 free energy generation",
  ];
  return (
    <div
      className={`flex flex-col transition-transform duration-200 ease-in-out rounded-lg text-white shadow-sm p-1 ${className}
      ${mobileMenuHovered ? "scale-x-100 transition-transform duration-200 ease-in-out" : "scale-x-0 transition-transform duration-200 ease-in-out"}`}
      {...props}
    >
      {/* <div className="text-white py-2 border-b border-gray-400 font-bold mb-2">
        Our Services
      </div> */}
      <div className="flex flex-col gap-0 justify-between mt-0">
        <div className="space-y-1 mb-0">
          {/* Service Options */}
          {options.map((option, index) => (
            <div
              key={index}
              className="list flex items-center backdrop-blur-sm rounded-lg p-1 cursor-pointer bg-[#24489a]"
              onClick={() => {
                // Handle option click
                router.push(
                  "/services/#" + option.toLowerCase().replace(/\s+/g, "-")
                );
                setHovered(false);
                setIsMenuOpen(false); // Close the menu after navigation
              }}
            >
              <div className="bg-gray-500 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-sm font-bold">
                  {option.charAt(0)}
                </span>
              </div>
              <span className="text-white text-sm font-medium">{option}</span>
            </div>
          ))}
        </div>
        {/* Achievement Section */}
        <div className="space-y-1 px-2 pt-2">
          <div className="text-white text-sm font-medium">Our Achievement</div>
          {/* Achievement Card */}
          <div
            ref={card}
            className="card bg-[#24489a] backdrop-blur-sm rounded-lg border border-white/20 p-2 text-white flex flex-col gap-2"
          >
            {/* Placeholder for chart/graph */}
            <div className="bg-gray-500 rounded-md h-20 mb-4 flex items-center justify-center">
              <div className="text-xs ">Brilient Achievements</div>
            </div>
            <div>
              <div className="text-md font-bold mb-1">85% Co2 reduction</div>
              <div className=" text-sm">How we achieved that</div>
            </div>
            {/* Contact Button */}
            <button
              onClick={() => {
                router.push("/contact");
                setMobileMenuHovered(false);
              }}
              className="transition-colors duration-200 rounded-full flex items-center font-medium text-md gap-1"
            >
              <span>Contact Us</span>
              <IoIosArrowDroprightCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}