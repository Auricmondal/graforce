"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./nav/NavLink";
import { useDisableZoom } from "@/hooks/useDisableZoom";
import LanguageOptions from "./nav/LanguageOptions";
import DesktopNav from "./nav/navigation/DesktopNav";
import BrandLogo from "./nav/BrandLogo";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const active = "rounded-full border border-gray-400";
  const navItems = [
    { id: 1, name: "Home", href: "/", toggle: false },
    { id: 2, name: "Services", href: "/services", toggle: true },
    { id: 3, name: "Products", href: "/products", toggle: true },
    { id: 4, name: "Industries", href: "/industries", toggle: true },
    { id: 5, name: "About Us", href: "/about", toggle: false },
  ];
  const navigateTo = (href) => {
    router.push(href);
  };

  useDisableZoom();

  return (
    <bar className="fixed top-0 w-full flex justify-center">
      <nav className="mx-auto flex px-10 py-2 w-[85%] justify-between items-center border rounded-2xl mt-3 border-gray-300 bg-white shadow-sm">
        <BrandLogo />
        <DesktopNav
          navItems={navItems}
          active={active}
          navigateTo={navigateTo}
        />
        <div className="language">
          <LanguageOptions />
        </div>
      </nav>
    </bar>
  );
};

export default Navbar;
