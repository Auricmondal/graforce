import React from "react";
import NavLink from "../NavLink";

const MobileNav = ({ navItems, active, navigateTo, className, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className={`flex items-center justify-center [@media(min-width:1080px)]:hidden ${className}`}>
      <div className="bg-transparent w-full top-0 left-0 flex-col gap-1 flex [@media(min-width:1080px)]:hidden px-1">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            link={item.href}
            // active={active}
            onClick={() => navigateTo(item.href)}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className={"w-full block px-6 py-2 items-center border-b border-gray-600 cursor-pointer text-white"}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
