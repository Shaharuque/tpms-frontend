import React from "react";
import CustomLink from "../../../Pages/Shared/CustomLink";
import { IoCaretBackCircleOutline, IoSettingsSharp } from "react-icons/io5";
import { BiIdCard } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserTimes } from "react-icons/fa";
import { RiUserFill, RiUserUnfollowLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import doctor from "../../../Assets/doctor.png";
import {
  MdOutlineSavings,
  MdOutlineSupervisorAccount,
  MdOutlineWorkOff,
  MdPersonSearch,
} from "react-icons/md";
import { GrDocumentTime } from "react-icons/gr";
import { AiOutlineFieldTime } from "react-icons/ai";

const StaffInformation = () => {
  const { id } = useParams();
  return (
    <div>
      {" "}
      <>
        {/* Top part  */}
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Link to={"/admin/staffs"} className="text-primary text-lg">
              <IoCaretBackCircleOutline />
            </Link>
            <div className="text-xs font-medium">
              <span className="text-sm font-semibold text-primary">
                {" "}
                Amro LLC |
              </span>{" "}
              <span className="text-orange-400 font-semibold">DOB :</span>{" "}
              09/28/2021 |{" "}
              <span className="text-orange-400 font-semibold">NPI : </span>
              3245678913 |{" "}
              <span className="text-orange-400 font-semibold">Phone : </span>
              787878787878
            </div>
          </div>
          <div className="mr-3">
            <Link to={`/admin/staffs`}>
              <button className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
              </button>
            </Link>
          </div>
        </div>
        {/* top Part end  */}

        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between gap-2">
          {/* Navbar  */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className=" my-2 p-2  setting-nav  rounded-lg "
          >
            <div className="">
              <div className="mb-2">
                <img
                  src={doctor}
                  className="h-24 rounded-full border mb-8 w-24 m-auto"
                  alt=""
                />
              </div>
            </div>
            {/* {patient_info.map((s, i) => (
            <PatientNav id={id} key={i} s={s}></PatientNav>
          ))} */}

            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`staffs-biographic/${id}`}
            >
              <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                <MdPersonSearch className=" text-2xl" /> Bio's
              </h1>
            </CustomLink>

            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-contact-details/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <IoIosContact className=" text-2xl" /> Contact Info
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-credentials/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <BiIdCard className=" text-2xl" /> Credentials
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-department/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <MdOutlineSupervisorAccount className=" text-2xl" />{" "}
                  Department Supervisor(S)
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-payroll/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <GiReceiveMoney className=" text-2xl" /> Payroll Setup
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-other-setup/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <IoSettingsSharp className=" text-2xl" /> Other Setup
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-leave-tracking/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <MdOutlineWorkOff className=" text-2xl" /> Leave Tracking
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-payor-exclusion/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <MdOutlineSavings className=" text-2xl" /> Insurance
                  Exclusion(S)
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-sub-activity-exclusion/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <RiUserUnfollowLine className=" text-2xl" /> Service Sub-Type
                  Exclusions
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-client-exclusion/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <FaUserTimes className=" text-2xl" /> Patient Exclusion
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`staffs-portal/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <RiUserFill className=" text-2xl" /> Staff Portal
                </h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 pb-1 clink items-center"
                to={`work-schedule/${id}`}
              >
                <h1 className="ml-1 font-medium mt-1 flex items-center text-[15px] gap-1 ">
                  <AiOutlineFieldTime className=" text-2xl" /> Work Schedule
                </h1>
              </CustomLink>
            </div>
          </motion.div>
          {/* Navbar END */}

          {/* changeable Box  */}

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
  );
};

export default StaffInformation;
