import React, { useState } from "react";
import "../Style/Setting.css";
import "../Style/SuperAdmin.css";
import SuperAdminNav from "./Components/SuperAdminNavigationBar/SuperAdminNav";
import logo2 from "../Assets/logo-new.png";
import logo1 from "../Assets/favicon.png";
import { Outlet } from "react-router-dom";
import SUperAdminSideBar from "./Components/SuperAdminNavigationBar/SUperAdminSideBar";
import { SuperAdminRoute } from "../Pages/Data/Data";
import Footer from "../Shared/Footer/Footer";

const SuperAdmin = () => {
  // console.log(setting);
  //Redux works will be done here
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="flex items-center bg-[#EFF7F8]">
        {/* //super admin side bar code  */}
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="h-[100vh] fixed top-0  left-0 bg-secondary superAdmin-sidebar z-30"
          // className="lg:w-[3%] md:w-[7%] w-[10%] top-10 absolute left-0 bg-teal-800"
        >
          <div
            className={
              isHovering
                ? "w-[350px] translate-100 duration-150"
                : "w-[70px] translate-[-100] duration-150"
            }
          >
            <div className="s-top-section">
              {isHovering ? (
                <>
                  <div className=" h-8 ">
                    <img src={logo2} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <img className="h-10  transition-all" src={logo1} alt="" />
                </>
              )}
            </div>
            {/* <div className=" overflow-y-scroll lg:overflow-hidden max-h-screen pb-24"> */}
            <div className=" overflow-y-scroll max-h-screen pb-24">
              {SuperAdminRoute.map((s, i) => (
                <SUperAdminSideBar
                  i={i}
                  s={s}
                  isHovering={isHovering}
                ></SUperAdminSideBar>
              ))}
            </div>
          </div>
        </div>

        {/* //super admin side bar code end  */}

        <div className="slide w-full">
          <div className="ml-[98px] mt-3 mb-4 mr-[22px] ">
            <SuperAdminNav></SuperAdminNav>
          </div>
          <main className="font-medium s-main bg-white shadow-md rounded-3xl w-auto mt-2 ml-[98px] mr-[22px] ">
            <Outlet />
          </main>
          <Footer></Footer>
        </div>

        {/* <div>
          <SuperAdminNav></SuperAdminNav>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            // className="rounded-xl sm:my-5 p-4 my-1 bg-white shadow-md "
          >
            <main className="font-medium  main bg-white shadow-md rounded-3xl w-auto mt-2 ml-[98px] mr-[22px] ">
              <Outlet />
            </main>
          </motion.div>
          other
        </div> */}
      </div>

      {/* <div className="bg-[#EFF7F8] p-4 "> */}
      {/* super admin Navbar  */}
      {/* <SuperAdminNav></SuperAdminNav>
        <main className="bg-white rounded-3xl my-4">
          <SuperAdminRoutes></SuperAdminRoutes>
        </main>               
        <div>                   
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="shadow-md  text-center mb-3 mt-2 py-4  bg-white rounded-3xl"
          >
            <h4 className=" text-sm  p-2 font-medium lg:p-0">
              Copyright 2022 ©{" "}
              <span className=" text-secondary">TherapyPMS</span>. All rights
              reserved.
            </h4>
          </motion.div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default SuperAdmin;
