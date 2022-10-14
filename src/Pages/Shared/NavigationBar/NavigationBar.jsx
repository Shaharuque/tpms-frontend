//This particular navigation bar is used in our project
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import {
  BiFullscreen,
  BiExitFullscreen,
  BiMessageRounded,
} from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineNotification,
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlinePlusSquare,
  AiOutlineFileAdd,
  AiFillUnlock,
  AiOutlineIdcard,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import admin from "../../Assets/user.png";
import company from "../../Assets/company.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ScheduleExport from "./ScheduleExport/ScheduleExport";
import CreatePatient from "./AdditionFeatures/CreatePatient";
import CreateAppointment from "./AdditionFeatures/CreateAppointment";

// i am using alakaja
const TestNaviBar = ({ handle }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [patientClicked, setPatientClicked] = useState(false);

  const handleAppointment = () => {
    setClicked(!clicked);
  };
  const handlePatient = () => {
    setPatientClicked(!patientClicked);
    console.log("hi sdusdushdu");
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className=" relative shadow-md rounded-3xl mr-[22px]"
    >
      <div className="flex items-center justify-between bg-white rounded-3xl  p-2">
        <div
          className="flex justify-center items-center gap-2 md:gap-4  font-medium cursor-pointer font-[Poppins] 
      text-gray-800 ml-2"
        >
          <div className="w-9 rounded-full">
            <img className=" rounded-full" src={company} alt="pic" />
          </div>

          <div>
            <p className="md:text-base font-semibold text-[8px] text-gray-800  bg-transparent ">
              ABC Behavioral Therapy Centers
            </p>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-[10px] cursor-pointer lg:hidden"
        >
          <p className="">{open ? <AiOutlineClose /> : <FaBars />}</p>
        </div>

        {/* resposive tab $ phone  */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute border rounded-sm z-20 responsive-box top-14 lg:hidden bg-white p-5 mx-[-8px] w-full"
          >
            {/*Full screen showing code */}
            <div>
              {!handle.active ? (
                <button
                  onClick={handle.enter}
                  className="  text-2xl font-bold text-secondary"
                >
                  <BiFullscreen />
                </button>
              ) : (
                <button
                  onClick={handle.exit}
                  className=" text-xl font-bold text-secondary"
                >
                  <BiExitFullscreen />
                </button>
              )}
            </div>

            {/* adding  */}
            <div>
              <div className="dropdown sm:dropdown-start">
                <label tabIndex={0}>
                  <button className=" text-xl my-3 font-bold text-secondary">
                    <AiOutlinePlus />
                  </button>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-md drop-box rounded-sm bg-white w-52"
                >
                  <button
                    onClick={handlePatient}
                    className="text-[14px] text-secondary border px-[20px] py-1 mb-2 rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2"
                  >
                    <AiOutlinePlusCircle className="text-lg font-semibold" />
                    <div>Create Patient</div>
                  </button>

                  <button className="text-[14px] text-secondary border px-[15px] py-1  rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2">
                    <AiOutlinePlusSquare className="text-lg font-semibold" />
                    <div onClick={handleAppointment}>Create Appointment</div>
                  </button>
                </div>
              </div>
              {clicked && (
                <div>
                  <CreateAppointment
                    handleClose={handleAppointment}
                    clicked={clicked}
                  ></CreateAppointment>
                </div>
              )}
              {patientClicked && (
                <div>
                  <CreatePatient handleClose={handlePatient}></CreatePatient>
                </div>
              )}
            </div>
            {/* end */}
            {/* notify*/}
            <div className="md:mb-3">
              <div className="dropdown sm:dropdown-start">
                <div className="">
                  <label tabIndex="0" className="">
                    <div className="relative">
                      <div>
                        <button className="  text-2xl text-secondary mt-1">
                          <AiOutlineNotification />
                        </button>
                        <span className=" absolute top-0 h-4 right-[-8px]  bg-red-700 text-white badge-xs rounded-full">
                          8
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  tabIndex="0"
                  className=" dropdown-content w-[15rem] md:w-[22rem] lg:w-[15rem] mt-1 p-1 shadow-md drop-box rounded-sm bg-white  "
                >
                  <div className="card-body">
                    <h4 className=" text-center ">Latest Changes</h4>
                    <hr />
                    <span className="text-info text-xs">
                      <span className="badge badge-primary mr-2">new </span>
                      Latest changes NewTelehealth Video Session. Video Session
                      feature for Telehealth For Telehealth, video session
                      feature is added. You can...
                    </span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* message  */}
            <div>
              <button className=" my-3 text-2xl font-bold text-secondary md:mt-[2px] flex items-center">
                <BiMessageRounded />
              </button>
            </div>
            {/**download */}
            <div className="dropdown sm:dropdown-start">
              <label tabIndex={0}>
                <button className=" text-xl font-bold text-secondary">
                  <BsDownload />
                </button>
              </label>
              <div tabIndex={0} className="dropdown-content menu lg:mt-3 ">
                <ScheduleExport></ScheduleExport>
              </div>
            </div>
            <br />
            {/* admin part  */}
            <div className="dropdown my-3 md:dropdown-start">
              <label tabIndex={0}>
                <label className="flex gap-2 items-center cursor-pointer">
                  <div className="w-8 mr-1 rounded-full">
                    <img
                      className="avatar rounded-full"
                      src={admin}
                      alt="pic"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Admin</h4>
                    <h5 className="text-secondary font-medium text-xs">
                      admin@admin.com
                    </h5>
                  </div>
                </label>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu mt-1  w-[15rem]  sm:w-[18rem] "
              >
                <div className="bg-gradient-to-r from-primary to-secondary rounded-t-xl p-4 flex justify-between">
                  <div className="w-8 mr-1 rounded-full">
                    <img
                      className="avatar rounded-full"
                      src={admin}
                      alt="pic"
                    />
                  </div>
                  <div>
                    <h5 className=" text-sm text-white font-bold text-end">
                      Hello admin
                    </h5>
                    <p className="text-xs text-white">admin@admin.com</p>
                  </div>
                </div>
                <div className="shadow-lg bg-white">
                  <div>
                    <Link
                      to={"/admin/profile/profile-information"}
                      className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                    >
                      <div className=" rounded-full p-3 bg-[#CEEBEE]">
                        <AiOutlineFileAdd className="text-teal-500" />
                      </div>
                      <div>
                        <button className="font-bold text-sm">
                          My Profile
                        </button>
                        <p className="text-[#7c8186] text-xs">
                          View personal profile details
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"/admin/profile/password-change"}
                      className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                    >
                      <div className=" rounded-full p-3 bg-[#CEEBEE] ">
                        <AiFillUnlock className="text-teal-500" />
                      </div>
                      <div>
                        <button className="font-bold text-sm ">
                          Change Password
                        </button>
                        <p className="text-[#7c8186] text-xs ">
                          Update your password
                        </p>
                      </div>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="rounded px-2 mx-auto bg-[#0CADBF] text-white font-medium text-sm  shadow-md mb-3 mt-5 flex items-center justify-center py-1 gap-2 hover:bg-[#B91C1C]"
                    onClick={handleSignOut}
                  >
                    Sign Out <VscSignOut className="font-bold text-lg" />
                  </button>{" "}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div
          className={`lg:flex lg:items-center gap-10  lg:pt-0 pt-10 lg:pb-0 pb-10 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 mr-3 transition-all duration-500 ease-in ${
            open ? "top-24 " : "top-[-490px]"
          }`}
        >
          {/*Full screen showing code */}
          <div>
            {!handle.active ? (
              <button
                onClick={handle.enter}
                className="  text-lg font-bold text-secondary"
              >
                <BiFullscreen />
              </button>
            ) : (
              <button
                onClick={handle.exit}
                className=" text-xl font-bold text-secondary"
              >
                <BiExitFullscreen />
              </button>
            )}
          </div>

          {/* adding  */}
          <div>
            <div className="dropdown md:dropdown-end">
              <label tabIndex={0}>
                <button className=" text-xl mt-[3px] font-bold text-secondary">
                  <AiOutlinePlus />
                </button>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu mt-5 p-2 shadow-md drop-box rounded-sm bg-white w-52"
              >
                <button
                  onClick={handlePatient}
                  className="text-[14px] text-secondary border px-[20px] py-1 mb-2 rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2"
                >
                  <AiOutlineUserAdd className="text-lg font-bold " />
                  <div>Create Patient</div>
                </button>

                <button className="text-[14px] text-secondary border px-[15px] py-1  rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2">
                  <AiOutlineIdcard className="text-lg font-bold" />
                  <div onClick={handleAppointment}>Create Appointment</div>
                </button>
              </div>
            </div>
            {clicked && (
              <div>
                <CreateAppointment
                  handleClose={handleAppointment}
                  clicked={clicked}
                ></CreateAppointment>
              </div>
            )}
            {patientClicked && (
              <div>
                <CreatePatient handleClose={handlePatient}></CreatePatient>
              </div>
            )}
          </div>
          {/* end */}

          {/* notify*/}
          <div className="">
            <div className="dropdown md:dropdown-end">
              <div className="">
                <label tabIndex="0" className="">
                  <div className="relative">
                    <div>
                      <button className="  text-2xl text-secondary mt-1">
                        <AiOutlineNotification />
                      </button>
                      <span className=" absolute top-0 h-4 right-[-8px]  bg-red-700 text-white badge-xs rounded-full">
                        8
                      </span>
                    </div>
                  </div>
                </label>
              </div>
              <div
                tabIndex="0"
                className=" dropdown-content w-auto md:w-[25rem] mt-4 p-2 shadow-md drop-box rounded-sm bg-white  "
              >
                <div className="card-body">
                  <h4 className=" text-center ">Latest Changes</h4>
                  <hr />
                  <span className="text-info text-xs">
                    <span className="badge badge-primary mr-2">new </span>
                    Latest changes NewTelehealth Video Session. Video Session
                    feature for Telehealth For Telehealth, video session feature
                    is added. You can...
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* message  */}
          <div>
            <button className="  text-2xl font-bold text-secondary md:mt-[2px] flex items-center">
              <BiMessageRounded />
            </button>
          </div>
          {/**download */}

          <div className="dropdown">
            <label tabIndex={0}>
              <button className=" text-xl font-bold text-secondary">
                <BsDownload />
              </button>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu mt-3 shadow-lg shadow-red-600"
            >
              <ScheduleExport></ScheduleExport>
            </div>
          </div>
          {/* admin part  */}
          <div className="dropdown md:dropdown-end">
            <label tabIndex={0}>
              <label className="flex gap-2 items-center cursor-pointer">
                <div className="w-8 mr-1 rounded-full">
                  <img className="avatar rounded-full" src={admin} alt="pic" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Admin</h4>
                  <h5 className="text-secondary font-medium text-xs">
                    admin@admin.com
                  </h5>
                </div>
              </label>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu mt-2  w-auto md:w-[18rem] sm:w-56 "
            >
              <div className="bg-gradient-to-r from-primary to-secondary rounded-t-xl p-4 flex justify-between">
                <div className="w-8 mr-1 rounded-full">
                  <img className="avatar rounded-full" src={admin} alt="pic" />
                </div>
                <div>
                  <h5 className=" text-sm text-white font-bold text-end">
                    Hello admin
                  </h5>
                  <p className="text-xs text-white">admin@admin.com</p>
                </div>
              </div>
              <div className="shadow-md bg-white">
                <div>
                  <Link
                    to={"/admin/profile/profile-information"}
                    className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                  >
                    <div className=" rounded-full p-3 bg-[#CEEBEE]">
                      <AiOutlineFileAdd className="text-teal-500" />
                    </div>
                    <div>
                      <button className="font-bold text-sm">My Profile</button>
                      <p className="text-[#7c8186] text-xs">
                        View personal profile details
                      </p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/admin/profile/password-change"}
                    className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                  >
                    <div className=" rounded-full p-3 bg-[#CEEBEE] ">
                      <AiFillUnlock className="text-teal-500" />
                    </div>
                    <div>
                      <button className="font-bold text-sm ">
                        Change Password
                      </button>
                      <p className="text-[#7c8186] text-xs ">
                        Update your password
                      </p>
                    </div>
                  </Link>
                </div>
                <button
                  type="button"
                  className="rounded px-2 mx-auto bg-[#0CADBF] text-white font-medium text-sm gap-2 shadow-md mb-3 mt-5 flex items-center justify-center py-1 hover:bg-[#B91C1C]"
                  onClick={handleSignOut}
                >
                  Sign Out <VscSignOut className="font-bold text-lg" />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestNaviBar;
