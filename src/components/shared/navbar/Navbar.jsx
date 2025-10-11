"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import { useDisableZoom } from "@/hooks/useDisableZoom";
import LanguageOptions from "./nav/LanguageOptions";
import BrandLogo from "./nav/BrandLogo";
import useClickOutside from "@/hooks/useClickOutside";
import useHideOnScrollNav from "@/hooks/useHideOnScrollNav";
import Hamburger from "./nav/Hamburger";
import SideNavMenu from "./nav/navigation/SideNavMenu";

const Navbar = () => {
  const router = useRouter();
  const active = "rounded-full border border-gray-400";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const downMenuRef = React.useRef(null);
  const navItems = [
    { id: 1, name: "Home", href: "/", toggle: false },
    { id: 2, name: "Services", href: "/services", toggle: true },
    { id: 3, name: "Products", href: "/products", toggle: true },
    { id: 4, name: "Industries", href: "/industries", toggle: true },
    { id: 5, name: "About Us", href: "/about", toggle: false },
  ];

  const navigateTo = (href) => {
    router.push(href);
    setIsMenuOpen(false);
  };
  // useDisableZoom();

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  useHideOnScrollNav(menuRef, isMenuOpen);

  useHideOnScrollNav(downMenuRef, isMenuOpen);

  return (
    <>
      {!isMenuOpen && (
        <div className="">
          <div
            className={`fixed top-0 right-0 w-full z-100 ${
              isMenuOpen ? "h-full" : "h-fit"
            }`}
            ref={menuRef}
          >
            <nav
              className={`mx-auto flex-1 items-center justify-between px-2 py-2 bg-transparent shadow-none [@media(min-width:1080px)]:overflow-hidden overflow-auto m-auto h-14 transition-all duration-500 ease-in-out origin-top sm:mt-3 rounded-2xl w-[100%]
        
        `}
            >
              <div className="justify-between items-center flex sm:px-1 md:px-2 lg:px-4">
                <BrandLogo
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  isMenuOpen={isMenuOpen}
                />
                <div className="language flex items-center gap-2">
                  <LanguageOptions />
                  <div
                    className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${
                      isMenuOpen ? "text-white" : "text-black"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <Hamburger isMenuOpen={true} />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div
            ref={downMenuRef}
            className="fixed flex items-center gap-2 bg-white py-2 px-4 rounded-xl shadow-sm cursor-pointer z-100 -bottom-[10vh] right-2"
          >
            <LanguageOptions downMenu={true} />
            <div
              className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${
                isMenuOpen ? "text-white" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Hamburger isMenuOpen={true} />
            </div>
          </div>
        </div>
      )}
      <SideNavMenu
        onClick={() => setIsMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
};

export default Navbar;
