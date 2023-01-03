import React from "react";
import "../Style/Setting.css";
import { motion } from "framer-motion";
import SuperAdminRoutes from "./Components/SuperAdminRoutes";
import "../Style/SuperAdmin.css";
import SuperAdminNav from "./Components/SuperAdminNavigationBar/SuperAdminNav";

const SuperAdmin = () => {
  // console.log(setting);
  //Redux works will be done here

  return (
    <div className="bg-[#EFF7F8] p-4 ">
      {/* super admin Navbar  */}
      <SuperAdminNav></SuperAdminNav>
      <main className="bg-white rounded-3xl my-4">
        <SuperAdminRoutes></SuperAdminRoutes>
      </main>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="shadow-md  text-center mb-3 mt-2 py-4  bg-white rounded-3xl  "
        >
          <h4 className=" text-sm  p-2 font-medium lg:p-0">
            Copyright 2022 © <span className=" text-secondary">TherapyPMS</span>
            . All rights reserved.
          </h4>
        </motion.div>
      </div>
    </div>
  );
};

export default SuperAdmin;
