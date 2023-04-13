//This particular navigation bar is used in our project
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import "../../Style/Navigation.css";
import {
  BiExitFullscreen,
  BiMessageRounded,
  BiDotsHorizontal,
} from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineFileAdd,
  AiFillUnlock,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import admin from "../../Assets/user.png";
import company from "../../Assets/company.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ScheduleExport from "./ScheduleExport/ScheduleExport";
import { Dropdown, Space } from "antd";
import Add from "./Add/Add";
import { userLoggedOut } from "../../../features/login_redux/loginSlice";
import { useDispatch } from "react-redux";

const NavigationBar = ({ handle, handleSidebar }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("type");
    localStorage.removeItem("users");
    dispatch(userLoggedOut());
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className=" relative shadow-md rounded-3xl"
    >
      <div className="flex items-center justify-between bg-white rounded-3xl p-2">
        <div className="flex items-center justify-between w-6/7">
          <div
            className="flex  justify-center items-center gap-2 md:gap-4  font-medium cursor-pointer font-[Poppins] 
      text-gray-800 ml-2"
          >
            <div className="w-9 rounded-full">
              <img className=" rounded-full" src={company} alt="pic" />
            </div>

            <div>
              <p className="md:text-base font-semibold text-[12px] text-gray-800  bg-transparent ">
                ABC Behavioral Therapy Centers
              </p>
            </div>
          </div>

          <button className="lg:hidden" onClick={handleSidebar}>
            <BiDotsHorizontal className="text-2xl text-secondary ml-[10px]" />
          </button>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-[10px] cursor-pointer lg:hidden w-1/7"
        >
          <div className="mt-1">
            {open ? (
              <AiOutlineClose className="text-xl bg-black text-white rounded" />
            ) : (
              <FaBars className="text-xl " />
            )}
          </div>
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
                  className="  text-xl font-bold text-secondary"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/pnwpbzow.json"
                    trigger="hover"
                    colors="primary:#0aa7b8"
                    style={{ height: "25px" }}
                  ></lord-icon>
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
            {/* adding  */}
            <Dropdown
              overlay={<Add></Add>}
              trigger={["click"]}
              placement="bottomLeft"
              overlayStyle={{ zIndex: "100" }}
            >
              <button onClick={(e) => e.preventDefault()}>
                <Space>
                  <button className=" text-xl mt-[3px] font-bold text-secondary">
                    <AiOutlinePlus />
                  </button>
                </Space>
              </button>
            </Dropdown>
            {/* end */}
            {/* notify*/}

            <div className="md:mb-3">
              <Dropdown
                overlay={
                  <div className="nav-box w-[15rem] md:w-[22rem] lg:w-[15rem] mt-1 p-1 shadow-md drop-box rounded-sm bg-white  ">
                    <div className="card-body">
                      <h4 className=" text-center ">Latest Changes</h4>
                      <hr />
                      <span className="text-info text-xs">
                        <span className="badge badge-primary mr-2">new </span>
                        Latest changes NewTelehealth Video Session. Video
                        Session feature for Telehealth For Telehealth, video
                        session feature is added. You can...
                      </span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                }
                trigger={["click"]}
                placement="bottomLeft"
                overlayStyle={{ zIndex: "100" }}
              >
                <button onClick={(e) => e.preventDefault()}>
                  <Space>
                    <div>
                      <lord-icon
                        src="https://cdn.lordicon.com/psnhyobz.json"
                        trigger="hover"
                        colors="primary:#0AA7B8"
                        style={{ height: "25px", marginTop: "5px" }}
                      ></lord-icon>
                    </div>
                  </Space>
                </button>
              </Dropdown>
            </div>
            {/* message  */}
            <div>
              <Link
                to={"chat"}
                className=" my-3 text-2xl font-bold text-secondary md:mt-[2px] flex items-center"
              >
                <BiMessageRounded />
              </Link>
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
                    Sign Out{" "}
                    <lord-icon
                      src="https://cdn.lordicon.com/moscwhoj.json"
                      trigger="loop"
                      colors="primary:#ffffff,secondary:#ffffff"
                      style={{}}
                    ></lord-icon>
                  </button>{" "}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* large lg,xl,2xl....... device  */}

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
                className="  text-xl font-bold text-secondary flex justify-center"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/pnwpbzow.json"
                  trigger="hover"
                  colors="primary:#0aa7b8"
                  style={{ height: "25px" }}
                ></lord-icon>
              </button>
            ) : (
              <button
                onClick={handle.exit}
                className=" text-xl font-bold text-secondary flex justify-center"
              >
                <BiExitFullscreen />
              </button>
            )}
          </div>

          {/* adding  */}
          <Dropdown
            overlayClassName=""
            overlay={<Add></Add>}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{ zIndex: "100", marginTop: "-50px" }}
          >
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <button className=" text-xl mt-[3px] font-bold text-secondary">
                  {/* <AiOutlinePlus /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/mecwbjnp.json"
                    trigger="hover"
                    style={{ height: "25px", Width: 800 }}
                    colors="primary:#02818F"
                    state="hover-1"
                  ></lord-icon>
                </button>
              </Space>
            </button>
          </Dropdown>
          {/* end */}
          {/* notify*/}

          <div>
            <Dropdown
              overlay={
                <div className="border nav-box w-auto md:w-[25rem] p-2 shadow-lg  rounded-sm bg-white">
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
              }
              trigger={["click"]}
              overlayStyle={{ zIndex: "100", marginTop: "-40px" }}
              placement="bottomRight"
            >
              <button onClick={(e) => e.preventDefault()}>
                <Space>
                  <div title="Announcement">
                    {/* <button className="flex  text-2xl text-secondary mt-1">
                      <AiOutlineNotification />

                      <div className="absolute left-[7px] top-[-5px]">
                        <lord-icon
                          src="https://cdn.lordicon.com/msetysan.json"
                          trigger="hover"
                          colors="primary:#e83a30"
                          style={{ height: "20px", marginTop: "5px" }}
                        ></lord-icon>
                      </div>
                    </button> */}
                    <lord-icon
                      src="https://cdn.lordicon.com/psnhyobz.json"
                      trigger="hover"
                      colors="primary:#0AA7B8"
                      style={{ height: "25px", marginTop: "5px" }}
                    ></lord-icon>
                  </div>
                </Space>
              </button>
            </Dropdown>
          </div>

          {/* message  */}
          <div>
            <Link
              to={"chat"}
              className="  text-2xl font-bold text-secondary md:mt-[2px] flex items-center"
            >
              <lord-icon
                src="https://cdn.lordicon.com/hpivxauj.json"
                trigger="hover"
                colors="primary:#0aa7b8"
                style={{ height: "25px" }}
              ></lord-icon>
            </Link>
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
              className="dropdown-content menu nav-box  shadow-lg shadow-red-600"
            >
              <ScheduleExport></ScheduleExport>
            </div>
          </div>
          {/* admin part  */}
          <div className="dropdown md:dropdown-end">
            <label tabIndex={0}>
              <label className="flex gap-2 items-center cursor-pointer ">
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
              className="dropdown-content menu  nav-box mt-[6px] w-auto md:w-[18rem] sm:w-56 "
            >
              <div className="bg-gradient-to-r  from-primary to-secondary rounded-t-xl p-4 flex justify-between">
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
                  Sign Out
                  <lord-icon
                    src="https://cdn.lordicon.com/moscwhoj.json"
                    trigger="loop"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{}}
                  ></lord-icon>
                  {/* <VscSignOut className="font-bold text-lg" /> */}
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
