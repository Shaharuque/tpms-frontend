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
import { FaBars } from "react-icons/fa";
import admin from "../../Assets/user.png";
import company from "../../Assets/company.jpg";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import CreateAppointment from "./AdditionFeatures/CreateAppointment";
import CreatePatient from "./AdditionFeatures/CreatePatient";

const NavigationBar = ({ handle }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="shadow-md resp ml-[5.2rem] md:ml-[5rem] lg:ml-[5.2rem] rounded-3xl sticky "
    >
      <div className="flex items-center justify-between bg-white rounded-3xl  p-3">
        <div
          className="flex justify-center items-center gap-2 font-medium cursor-pointer font-[Poppins] 
      text-gray-800"
        >
          <div className="w-9 rounded-full">
            <img className=" rounded-full" src={company} alt="pic" />
          </div>

          <div>
            <p
              className="md:text-lg text-sm  bg-transparent "
              style={{ textShadow: "2px 2px 4px #00000052" }}
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
          className={`md:flex md:items-center gap-10 md:pt-0 pt-10 md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-18 " : "top-[-490px]"
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
                className=" text-lg font-bold text-secondary"
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
              <ul
                tabIndex="0"
                className="dropdown-content p-3 md:w-52  w-auto mt-1 shadow-2xl border-2 rounded bg-white text-sm "
              >
                <button className="flex items-center gap-2 hover:text-slate-600 mb-2">
                  <AiOutlinePlusCircle />
                  <div onClick={handlePatient}>create patient</div>
                </button>

                <button className="flex items-center  gap-2 hover:text-slate-600 mb-2">
                  <AiOutlinePlusSquare />
                  <div onClick={handleAppointment}>create Appointment</div>
                </button>
              </ul>
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

          {/* notify    */}
          <div className="">
            <div className="dropdown md:dropdown-end">
              <div className="">
                <label tabIndex="0" className="">
                  <div className="relative">
                    <div>
                      <h1 className="  text-2xl text-secondary">
                        <AiOutlineNotification />
                      </h1>
                      <span className=" absolute top-0 h-4 right-[-8px] bg-red-700 text-white badge-xs rounded-full">
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
          {/* download  */}
          <div>
            <h1 className="  text-xl font-bold text-secondary">
              <BiMessageRounded />
            </h1>
          </div>

          <div>
            <h1 className="  text-lg font-bold text-secondary">
              <BsDownload />
            </h1>
          </div>
          {/* admin settings part */}
          <div className="my-5 md:my-0">
            <div className="dropdown md:dropdown-end">
              <label tabIndex="0" className="flex gap-2 items-center">
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

              <div className="flex justify-center menu menu-compact dropdown-content w-auto md:w-[18rem] shadow bg-white rounded-lg">
                <div className="bg-[#0CADBF] rounded-t-xl p-4">
                  <h5 className=" text-sm text-white font-bold">Hello admin</h5>
                  <p className="text-xs text-white">admin@admin.com</p>
                </div>

                <div>
                  <Link
                    to={"/admin/profile/profile-information"}
                    className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                  >
                    <div className=" rounded-full p-3 bg-[#CEEBEE]">
                      <AiOutlineFileAdd />
                    </div>
                    <div className="text-xs text-wite">
                      <h1 className="font-medium">My Profile</h1>
                      <p>View personal profile details</p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link
                    to={"/admin/profile/password-change"}
                    className="flex gap-4 hover:bg-slate-100 bg-opacity-10 p-3"
                  >
                    <div className=" rounded-full p-3 bg-[#CEEBEE] ">
                      <AiFillUnlock />
                    </div>
                    <div className="text-xs text-wite">
                      <h1 className="font-medium">My Profile</h1>
                      <p>Update your password</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
