import React from "react";
import NavLink from "../NavLink";

const DesktopNav = ({ navItems, active, navigateTo }) => {
  return (
    <div className="flex items-start">
      <div className="gap-4 hidden [@media(min-width:1080px)]:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            active={active}
            onClick={() => navigateTo(item.href)}
            link={item.href}
            className={
              "flex px-3 rounded-full items-center bg-neutral-100 cursor-pointer "
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
