"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

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
  }

  // ✅ Detect outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div className="flex gap-4 items-center">
        <div
          onClick={toggleLanguageOptions}
          className="[@media(min-width:470px)]:flex hidden items-center border-0 rounded-full px-2 bg-neutral-100 select-none cursor-pointer"
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
        className={`absolute gap-2 flex flex-col w-60 rounded-xl shadow bg-[#edf0f7] overflow-hidden p-4 my-6 translate-x-[-20%] transition-transform duration-300 ease-in-out origin-top ${
          showLanguageOptions ? "scale-100" : "scale-0"
        }`}
      >
        {/* German Option */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-blue-100 cursor-pointer" onClick={()=>setLanguage('DE')}>
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300">
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
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-blue-100 cursor-pointer" onClick={()=>setLanguage('GB')}>
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300">
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
