import React from "react";
import { Outlet } from "react-router-dom";
import "../Style/Setting.css";
import { motion } from "framer-motion";
import Footer from "../Shared/Footer/Footer";
import Settings from "../Admin/Settings/Settings";
import SuperAdminRoutes from "./Components/SuperAdminRoutes";

const SuperAdmin = () => {
  // console.log(setting);
  //Redux works will be done here

  return (
    <div className="slide">
      <div className="">
        <div>this is navbar</div>
      </div>
      <main className="">
        <SuperAdminRoutes></SuperAdminRoutes>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SuperAdmin;
