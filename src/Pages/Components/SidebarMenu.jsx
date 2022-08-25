import React from "react";
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
            className={
              isHovering
                ? "mr-2 opacity-1 duration-600 ease-in text-[14px]"
                : "mr-2 opacity-0 duration-200 ease-out text-[14px]"
            }
          >
            {items.name}
          </div>
        </div>

        <div
          className={
            isHovering
              ? "mr-2 opacity-1 duration-600 ease-in text-[14px]"
              : "mr-2 opacity-0 duration-200 ease-out text-[14px]"
          }
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
              className="hover:bg-white rounded-md py-1 my-2 hover:text-primary text-white duration-200 transition ease-in-out"
              activeclassname="active"
            >
              <div className="flex items-center">
                <div className="  px-3 py-1">{s.icon}</div>

                <div
                  className={
                    isHovering
                      ? "mr-2 opacity-0.5 duration-600 ease-in text-[14px]"
                      : "mr-2 opacity-0 duration-200 ease-out text-[14px]"
                  }
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
