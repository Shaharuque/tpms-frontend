import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ items, isHovering }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    //   setIsOpen(true);
  };
  return (
    <div className="pl-4 py-3 hover:bg-primary text-white">
      <div onClick={toggleMenu} className="flex items-center justify-between">
        <div className="flex items-center">
          <div className=" text-xl px-2">{items.icon}</div>

          <div
            style={{ display: isHovering ? "block" : "none" }}
            className="link_text text-lg"
          >
            {items.name}
          </div>
        </div>

        <div
          style={{ display: isHovering ? "block" : "none" }}
          className="text-xl mr-2 transition-all"
        >
          {!isMenuOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      {isMenuOpen && (
        <div className=" mr-4">
          {items.subRoute.map((s, i) => (
            <NavLink
              to={s.path}
              key={i}
              style={{ display: "block" }}
              className="hover:bg-white rounded-md py-1 my-2 hover:text-primary transition ease-in-out"
              activeclassname="active"
            >
              <div className="flex items-center">
                <div className="  px-3 py-1">{s.icon}</div>

                <div
                  style={{
                    display: isHovering ? "block" : "none",
                    // padding: isHovering ? "8px" : "3px",
                  }}
                  className="link_text"
                >
                  {s.name}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
