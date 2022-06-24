import React from "react";
import { Outlet } from "react-router-dom";
import { setting } from "./Data/Data";
import SettingNav from "./Settings/SettingComponents/SettingNav";
import "./Settings/SettingComponents/Setting.css";
import { motion } from "framer-motion";

const Settings = () => {
  // console.log(setting);
  return (
    <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className=" p-2 setting-nav rounded-md"
      >
        <div className="">
          <h1 className=" text-sm bg-secondary p-2 px-3 text-white">
            Facility Setup
          </h1>
        </div>
        {setting.map((s, i) => (
          <SettingNav key={i} s={s}></SettingNav>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className=" m-2 p-2 setting-body rounded-lg "
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default Settings;
