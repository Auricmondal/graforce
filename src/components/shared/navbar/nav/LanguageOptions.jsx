"use client";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import React, { useState, useRef } from "react";

const LanguageOptions = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const dropdownRef = useRef(null);
  const [Lang, setLang] = useState('GB')
  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prev) => !prev);
  };

  const setLanguage = (lang) => {
    // Logic to change the language of the website
    setLang(lang);
    setShowLanguageOptions(false);
  };

  useClickOutside(dropdownRef, () => setShowLanguageOptions(false));

  return (
    <div ref={dropdownRef} className="">
      <div className="flex gap-2 items-center">
        <div
          onClick={toggleLanguageOptions}
          className="[@media(min-width:470px)]:flex hidden items-center border-0 rounded-full text-sm px-3 py-1 bg-[#edf0f7] select-none cursor-pointer text-black font-medium hover:bg-[#adc0ec] transition-all ease-in-out duration-300"
        >
          Translate
        </div>
        <div
          onClick={toggleLanguageOptions}
          className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 cursor-pointer"
        >
          <Image
            src={`https://flagsapi.com/${Lang}/shiny/64.png`}
            width={36}
            height={36}
            alt="English Lang"
            className="scale-180 relative border border-amber-400 rounded-full object-cover"
          />
        </div>
      </div>

      <div
        className={`absolute gap-2 flex flex-col w-50 rounded-xl shadow bg-[#edf0f7] overflow-hidden p-4 my-6 [@media(min-width:645px)]:translate-x-[-25%] [@media(min-width:470px)]:translate-x-[-23%] translate-x-[-80%] transition-transform duration-300 ease-in-out origin-top-right sm:origin-top text-black ${
          showLanguageOptions ? "scale-100" : "scale-0 z-50"
        }`}
      >
        {/* German Option */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white hover:bg-[#adc0ec] transition-all ease-in-out duration-300 cursor-pointer" onClick={()=>setLanguage('DE')}>
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 hover:text-blue-800">
            <Image
              src={`https://flagsapi.com/DE/shiny/64.png`}
              width={36}
              height={36}
              alt="German Lang"
              className="scale-180 rounded-full object-cover"
            />
          </div>
          <span>German</span>
        </div>

        {/* English Option */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white hover:bg-[#adc0ec] cursor-pointer transition-all ease-in-out duration-300" onClick={()=>setLanguage('GB')}>
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 hover:text-blue-800">
            <Image
              src="https://flagsapi.com/GB/shiny/64.png"
              width={36}
              height={36}
              alt="English Lang"
              className="scale-180 rounded-full object-cover"
            />
          </div>
          <span>English</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageOptions;
