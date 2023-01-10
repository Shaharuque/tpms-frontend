import React from "react";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SuperAdminNav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logout = () => {
    console.log("clicked");
    navigate("/");
  };
  return (
    <>
      <div
        className="bg-secondary rounded-xl sm:rounded-3xl py-3 flex items-center 
     justify-between s-navbar"
      >
        <div className=" font-medium sm:text-lg lg:px-5 px-3 text-lg text-white tracking-wide">
          Administration
        </div>
        {/* this part only visible in large device */}
        <div className="hidden md:block">
          <div className="flex items-center h-4 gap-3 sm:text-sm text-base tracking-wide font-medium text-white md:mt-0 px-5">
            <div>Welcome</div>|<button className="super-admin-nav">Home</button>
            |<button className="super-admin-nav">Log Out</button>
          </div>
        </div>

        {/* this part only visible in medium and small device */}
        <div className="md:hidden">
          <Hamburger
            duration={0.8}
            rounded
            color="#EFF7F8"
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
        </div>
      </div>
      {/* this part only visible in medium and small device */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        >
          <div
            className="gap-3 rounded-b-xl text-base font-medium flex align-middle justify-center text-white bg-secondary py-8 mt-[-20px]  
          "
          >
            <div className="">
              <div>Welcome</div>
              <div>
                <button className="super-admin-nav my-2">Home</button>
              </div>
              <div>
                <button onClick={() => logout()} className="super-admin-nav">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SuperAdminNav;
