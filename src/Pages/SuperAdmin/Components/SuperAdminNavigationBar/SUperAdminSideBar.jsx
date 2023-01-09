import React from "react";
import ActiveNavLinkSA from "./ActiveNavLinkSA";

const SUperAdminSideBar = ({ i, s, isHovering }) => {
  console.log(s);
  const { icon, link, name } = s;
  console.log(name);
  return (
    <ActiveNavLinkSA to={link} className="link flex">
      <div className="flex items-center border-none">
        <div className=" font-semibold text-xl px-2 py-1">{icon}</div>

        <div
          className={
            isHovering
              ? "opacity-1 duration-500 transition-opacity ease-in text-[18px] font-semibold w-[300px] sidebar-text"
              : "opacity-0 duration-300 ease-out text-[18px] font-medium hidden"
          }
        >
          {name}
        </div>
      </div>
    </ActiveNavLinkSA>
  );
};

export default SUperAdminSideBar;
