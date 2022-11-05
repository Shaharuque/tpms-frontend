import React from "react";
import { Outlet } from "react-router-dom";
import { setting } from "../../Pages/Data/Data";
import "../../Style/Setting.css";
import { motion } from "framer-motion";
import SettingNav from "./Settings/SettingsComponent/SettingNav";

const Settings = () => {
  // console.log(setting);
  //Redux works will be done here

  return (
    <div>
      <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap  justify-between">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" p-2 my-2 setting-nav shadow-md rounded-md"
        >

          {setting.map((s, i) => (
            <SettingNav key={i} s={s}></SettingNav>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" m-2 p-2  setting-body shadow-md rounded-lg "
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
