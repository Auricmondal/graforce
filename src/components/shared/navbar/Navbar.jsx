"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDisableZoom } from "@/hooks/useDisableZoom";
import LanguageOptions from "./nav/LanguageOptions";
import DesktopNav from "./nav/navigation/DesktopNav";
import BrandLogo from "./nav/BrandLogo";
import MobileNav from "./nav/navigation/MobileNav";
import useClickOutside from "@/hooks/useClickOutside";

const Navbar = () => {
  const router = useRouter();
  const active = "rounded-full border border-gray-400";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);
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

  useDisableZoom();

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <bar className="fixed top-0 w-full z-100" ref={menuRef}>
      <nav
        className={`mx-auto flex-1 items-center justify-between px-4 py-2 w-[85%] border border-gray-300 bg-white shadow-sm overflow-auto
        ${
          isMenuOpen
            ? "h-[100vh] w-[100vw] transition-all duration-300 ease-in-out origin-top mt-0 rounded-sm bg-gradient-to-l from-[#1E428A] to-[#081124]"
            : "h-14 transition-all duration-300 ease-in-out origin-top mt-3  rounded-2xl"
        }
        `}
      >
        <div className="justify-between items-center flex px-4">
          <BrandLogo onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
          <DesktopNav
            navItems={navItems}
            active={active}
            navigateTo={navigateTo}
            isMenuOpen={isMenuOpen}
          />
          <div className="language">
            <LanguageOptions />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <MobileNav
            navItems={navItems}
            active={active}
            navigateTo={navigateTo}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className={isMenuOpen ? "pt-6" : "pt-0 h-0 overflow-hidden"}
          />
        </div>
      </nav>
    </bar>
  );
};

export default Navbar;
