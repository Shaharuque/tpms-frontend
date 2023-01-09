import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
// import { SuperAdmin } from "../../Pages/Data/Data";
import SettingNav from "../../Admin/Settings/Settings/SettingsComponent/SettingNav";

const SuperAdminRoutes = () => {
  return (
    <div>
      {/* <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap  justify-between"> */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" p-2 my-2 lg:mr-2 setting-nav shadow-md rounded-md"
        >
          {/* {SuperAdmin.map((s, i) => (
            <SettingNav key={i} s={s}></SettingNav>
          ))} */}
        </motion.div>
      </div>
    </div>
  );
};

export default SuperAdminRoutes;
