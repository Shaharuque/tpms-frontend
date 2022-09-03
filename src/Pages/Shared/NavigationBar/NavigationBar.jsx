import React, { useState } from "react";

import { BsDownload, BsArrowsFullscreen } from "react-icons/bs";
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
} from "react-icons/ai";
import { Dropdown, IconButton } from 'rsuite';
import { FaBars } from "react-icons/fa";
import admin from "../../Assets/user.png";
import company from "../../Assets/company.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CreateAppointment from "../../Pages/Shared/AdditionFeatures/CreateAppointment";
import CreatePatient from "../../Pages/Shared/AdditionFeatures/CreatePatient";
import ScheduleExport from "./ScheduleExport/ScheduleExport";
import { useOutsideAlerter } from "../../../CustomHooks/useDetectOutsideClick";

// i am using alakaja 
const NavigationBar = ({ handle }) => {
  const [dOpen, setDOpen] = useState(false);
  const { visible, setVisible, ref } = useOutsideAlerter(false);
  const navigate = useNavigate();
  let [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [patientClicked, setPatientClicked] = useState(false);

  const handleAppointment = () => {
    setClicked(!clicked);
  };
  const handlePatient = () => {
    setPatientClicked(!patientClicked);
  };

  const handleSignOut = () => {
    navigate("/");
  };

  const handleModal = () => {
    setVisible(false);
    setDOpen(!dOpen);
  };

  const renderIconButton = (props, ref) => {
    return (
      <IconButton {...props} ref={ref} icon={"+"} circle color="blue" appearance="primary" />
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className=" relative shadow-md rounded-3xl ml-[98px] mr-[22px]"
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
            <p
              className="md:text-base font-semibold text-[8px]  bg-transparent "
              style={{ textShadow: "2px 2px 4px #00000052", color: "#495057" }}
            >
              ABC Behavioral Therapy Centers
            </p>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-1 cursor-pointer md:hidden"
        >
          <p className="">{open ? <AiOutlineClose /> : <FaBars />}</p>
        </div>

        <div
          className={`md:flex md:items-center gap-10  md:pt-0 pt-10 md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mr-3 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {/*Full screen showing code */}
          <div>
            {!handle.active ? (
              <h1
                onClick={handle.enter}
                className="mt-[-5px]  text-lg font-bold text-secondary"
              >
                <BiFullscreen />
              </h1>
            ) : (
              <h1
                onClick={handle.exit}
                className="mt-[-5px] text-xl font-bold text-secondary"
              >
                <BiExitFullscreen />
              </h1>
            )}
          </div>

          {/* adding  */}
          <div className="  ">
            <div className="dropdown md:dropdown-start">
              <label tabIndex="0" className="">
                <h1 className=" text-xl font-bold text-secondary">
                  <AiOutlinePlus />
                </h1>
              </label>
              <div
                tabIndex="0"
                className="dropdown-content p-3 md:w-52 sm:w-56  w-auto mt-1 shadow-2xl border-2 rounded bg-white text-sm "
                // className="dropdown md:dropdown-start"
              >
                <button className="flex items-center gap-2 hover:text-slate-600 mb-2">
                  <AiOutlinePlusCircle />
                  <div onClick={handlePatient}>create patient</div>
                </button>

                <button className="flex items-center  gap-2 hover:text-slate-600 mb-2">
                  <AiOutlinePlusSquare />
                  <div onClick={handleAppointment}>create Appointment</div>
                </button>
              </div>
              {clicked && (
                <div>
                  <CreateAppointment
                    handleClose={handleAppointment}
                  ></CreateAppointment>
                </div>
              )}
              {patientClicked && (
                <div>
                  <CreatePatient handleClose={handlePatient}></CreatePatient>
                </div>
              )}
            </div>
          </div>

          {/* jakir code */}

          {/* <Dropdown renderToggle={renderIconButton}>
      <Dropdown.Item icon={"j"}>New File</Dropdown.Item>
      <Dropdown.Item icon={"474"}> File with Current Profile</Dropdown.Item>
      <Dropdown.Item icon={"-"}>Download As...</Dropdown.Item>
      <Dropdown.Item icon={"+"}>Export PDF</Dropdown.Item>
    </Dropdown> */}

          {/* end */}

          {/* notify*/}
          <div className="">
            <div className="dropdown md:dropdown-end">
              <div className="">
                <label tabIndex="0" className="">
                  <div className="relative">
                    <div>
                      <h1 className="  text-2xl text-secondary -mt-1">
                        <AiOutlineNotification />
                      </h1>
                      <span className=" absolute top-0 h-4 right-[-8px]  bg-red-700 text-white badge-xs rounded-full">
                        8
                      </span>
                    </div>
                  </div>
                </label>
              </div>
              <div
                tabIndex="0"
                className="mt-1 dropdown-content w-auto md:w-[25rem] bg-base-100 shadow-lg rounded-t-xl"
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
            <button className="  text-2xl font-bold text-secondary md:-mt-2">
              <BiMessageRounded />
            </button>
          </div>
          {/**download */}
          <div ref={ref}>
            <div
              onClick={() => {
                setVisible(!visible);
                setDOpen(false);
              }}
              className="text-xl font-bold text-secondary md:-mt-2  cursor-pointer"
            >
              <BsDownload />
            </div>
            {visible && (
              <div>
                <ScheduleExport setVisible={setVisible}></ScheduleExport>
              </div>
            )}
          </div>
          {/* admin part  */}
          <div>
            <div className="my-5 md:my-0">
              <div className="" onClick={handleModal}>
                <label
                  tabIndex="0"
                  className="flex gap-2 items-center cursor-pointer"
                >
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

                {dOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute z-10 bg-white w-auto md:w-[18rem] sm:w-56 shadow rounded-xl border : ;
       mt-2 sm:right-0 cursor-pointer"
                  >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-t-xl p-4">
                      <h5 className=" text-sm text-white font-bold">
                        Hello admin
                      </h5>
                      <p className="text-xs text-white">admin@admin.com</p>
                    </div>

                    <div>
                      <Link
                        to={"/admin/profile/profile-information"}
                        className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                      >
                        <div className=" rounded-full p-3 bg-[#CEEBEE]">
                          <AiOutlineFileAdd className="text-teal-500" />
                        </div>
                        <div className="text-xs text-wite">
                          <h1 className="font-bold">My Profile</h1>
                          <p className="text-[#7c8186]">
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
                        <div className="text-xs text-wite">
                          <h1 className="font-bold">Change Password</h1>
                          <p className="text-[#7c8186]">Update your password</p>
                        </div>
                      </Link>
                    </div>
                    <button
                      type="button"
                      className="rounded  w-30 mx-auto bg-[#0CADBF] text-white font-medium text-xs  shadow-md mb-3 mt-5 flex gap-2 items-center justify-center py-1 "
                      onClick={handleSignOut}
                    >
                      Sign out <AiOutlinePlusSquare />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
