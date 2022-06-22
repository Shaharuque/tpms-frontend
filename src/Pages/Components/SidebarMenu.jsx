import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import StateUse from "../Hooks/StateUse";
// import StateOpen from "../Hooks/StateUse";
import { motion } from "framer-motion";

const SidebarMenu = ({ items, isHovering, dropState, handleDropState }) => {
  return (
    <div className="pl-4 py-3 hover:bg-primary text-white">
      <div
        // onBlur={() => setOpen(false)}
        // onClick={() => setOpen(!open)}
        onClick={(_) => handleDropState(items.name)}
        className="flex items-center justify-between"
      >
        <div className="flex items-center">
          <div className=" text-xl px-2">{items.icon}</div>

          <div
            style={{ display: isHovering ? "block" : "none" }}
            className="link_text text-sm"
          >
            {items.name}
          </div>
        </div>

        <div
          style={{ display: isHovering ? "block" : "none" }}
          className="text-xl mr-2 transition-all"
        >
          <IoIosArrowUp
            style={{
              transition: "all .3s ease-out",
              transform: `rotate(${!dropState ? "180" : "0"}deg)`,
            }}
          />
        </div>
      </div>
      {dropState && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mr-4"
          style={{
            transition: "all .3s ease-out",
          }}
        >
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
                  className="link_text text-sm"
                >
                  {s.name}
                </div>
              </div>
            </NavLink>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SidebarMenu;
