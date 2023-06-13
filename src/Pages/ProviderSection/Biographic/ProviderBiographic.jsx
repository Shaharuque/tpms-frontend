import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import axios from "axios";
import { providerIp } from "../../../Misc/BaseClient";
import { useToken } from "antd/es/theme/internal";
import { IoCaretBackCircleOutline, IoSettingsSharp } from "react-icons/io5";
import { BiIdCard } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserTimes } from "react-icons/fa";
import { RiUserFill, RiUserUnfollowLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
  MdOutlineSavings,
  MdOutlineSupervisorAccount,
  MdOutlineWorkOff,
  MdPersonSearch,
} from "react-icons/md";
import doctor from "../../Assets/doctor.png";
const ProviderBiographic = () => {
  const { token } = useToken();

  // // api call
  // useEffect(() => {
  //   const getProviderData = async () => {
  //     const res = await axios({
  //       method: "POST",
  //       url: `${providerIp}/biographic/`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "x-auth-token": token || null,
  //       },
  //     });
  //     const data = res?.data;
  //     // setdata(data);
  //     console.log("check data", data);
  //   };
  //   getProviderData();
  // }, [token]);
  return (
    <div>
      <div>
        {" "}
        <>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Link to={"/admin/staffs"} className="text-primary text-lg ">
                <IoCaretBackCircleOutline />
              </Link>
              <div className="text-xs font-normal">
                <span className="text-sm font-semibold text-primary"> Ashu Soni |</span> <span className="text-orange-400 font-semibold">DOB :</span> 12/27/1999
                | <span className="text-orange-400 font-semibold">NPI : </span>
                5563289657 | <span className="text-orange-40 font-semibold">Phone : </span>
                (123)-456-7822
              </div>
            </div>

            <div className="mr-3">
              <Link to={`#`}>
                <button className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  <IoCaretBackCircleOutline className="text-sm" /> Back
                </button>
              </Link>
            </div>
          </div>

          <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between">
            <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className=" p-2 setting-nav rounded-md">
              <div className="mb-4">
                <div className="">
                <img
                  src={doctor}
                  className="h-24 rounded-full border mb-8 w-24 m-auto"
                  alt=""
                />
                </div>
              </div>

            

              <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`/provider/biographic`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                <MdPersonSearch className=" text-2xl" /> Bio's
              </h1>
            </CustomLink>

            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`bio-contactinfo`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
              <IoIosContact className=" text-2xl" /> Contact Info
              </h1>
            </CustomLink>
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`bio-credential`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
              <IoIosContact className=" text-2xl" /> Credentials / Qualifications
              </h1>
            </CustomLink>
            
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`bio-leave-tracking`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
              <MdOutlineWorkOff className=" text-2xl" /> Leave Tracking
              </h1>
            </CustomLink>
            
            
            
            
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`bio-work-schedule`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
              <AiOutlineFieldTime className=" text-2xl" /> Work Schedule
              </h1>
            </CustomLink>
            



             
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
        </>
      </div>
    </div>
  );
};

export default ProviderBiographic;