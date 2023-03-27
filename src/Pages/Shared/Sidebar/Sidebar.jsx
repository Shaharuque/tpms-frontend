import React from "react";
import { Outlet } from "react-router-dom";
import "./Sidebar.css";
import "../../Style/slide.css";
import logo2 from "../../Assets/logo-new.png";
import logo1 from "../../Assets/favicon.png";
import {
  FaUserPlus,
  FaFunnelDollar,
  FaHouseUser,
  FaRegCalendarAlt,
  FaUserMd,
  FaMoneyCheckAlt,
  FaMoneyBillAlt,
  FaListAlt,
  FaCalendarAlt,
  FaHornbill,
  FaFileAlt,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdPersonAddAlt1 } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineMonetizationOn } from "react-icons/md";
import {
  BsFileEarmarkRuled,
  BsBookmarkStar,
  BsFileText,
  BsThreeDotsVertical,
} from "react-icons//bs";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiFundsBoxLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbWebhook } from "react-icons/tb";
import { GrFormSchedule } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import { BiDotsHorizontal } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { handleSidebarFixed } from "../../../features/Sidebar_redux/SidebarSlice";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../CustomHooks/useWindowDimensions";
// import StateUse from "../Hooks/StateUse";
//
const menuItem = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <FaHouseUser />,
    roll: "admin",
  },
  {
    path: "/admin/appointment",
    name: "Appointment",
    roll: "admin",
    icon: <FaRegCalendarAlt />,
    subRoute: [
      {
        path: "/admin/session-manage",
        name: "List View",
        icon: <FaListAlt />,
      },
      {
        path: "/admin/calender-view",
        name: "Calender View",
        icon: <FaCalendarAlt />,
      },
      {
        path: "/admin/recurring-session",
        name: "Recurring Session",
        icon: <VscDebugDisconnect />,
      },
    ],
  },
  {
    path: "/admin/patient-List",
    name: "Patients",
    roll: "admin",
    icon: <FaUserPlus />,
  },
  {
    path: "/admin/staffs",
    name: "Staffs",
    icon: <FaUserMd />,
    roll: "admin",
  },
  {
    path: "/admin/billing",
    name: "Billing",
    icon: <FaFunnelDollar />,
    roll: "admin",
    subRoute: [
      {
        path: "/admin/submit-billing",
        name: "Primary Billing Manager",
        icon: <FaHornbill />,
      },
      {
        path: "/admin/submit-secondary-billing",
        name: "Sec. Billing Manager",
        icon: <FaHornbill />,
      },
      {
        path: "/admin/ar-leader",
        name: "AR-Leader",
        icon: <TbWebhook />,
      },
      {
        path: "/admin/contract-rate",
        name: "Contract Rate",
        icon: <BsBookmarkStar />,
      },
      {
        path: "/admin/patient-statement",
        name: "Patient Statement",
        icon: <BsFileEarmarkRuled />,
      },
      {
        path: "/admin/patient-eligibility",
        name: "Eligibility",
        icon: <BsFileEarmarkRuled />,
      },
    ],
  },
  {
    path: "/admin/payment",
    name: "Payment",
    icon: <FaMoneyCheckAlt />,
    roll: "admin",
    subRoute: [
      {
        path: "/admin/era-remittance",
        name: "E-Remittance",
        icon: <FaFileAlt />,
      },
      {
        path: "/admin/m-posting",
        name: "Cash Posting",
        icon: <MdOutlineMonetizationOn />,
      },
    ],
  },
  {
    path: "/admin/payroll",
    name: "Payroll",
    icon: <FaMoneyBillAlt />,
    roll: "admin",
    subRoute: [
      {
        path: "/admin/processing-payroll",
        name: "Processing Payroll",
        icon: <RiFundsBoxLine />,
      },
      {
        path: "/admin/timesheet",
        name: "TimeSheet",
        icon: <BsFileText />,
      },
    ],
  },
  {
    path: "/admin/report",
    name: "Report",
    icon: <GoGraph />,
    roll: "admin",
  },
  {
    path: "/admin/settings",
    name: "Settings",
    icon: <FiSettings />,
    roll: "admin",
  },

  // user part
  {
    path: "/user",
    name: "My Schedule",
    icon: <FaHouseUser />,
    roll: "provider",
  },

  {
    path: "/user/biographic",
    name: "biographic",
    icon: <BsFileText />,
    roll: "provider",
  },

  {
    path: "/user/Pataients",
    name: "Pataients",
    icon: <BsFileText />,
    roll: "provider",
  },

  {
    path: "/user/user-timesheet",
    name: "Timesheet",
    icon: <BsFileText />,
    roll: "provider",
  },
  //Patient portal
  {
    path: "/patient",
    name: "My Schedule",
    icon: <GrFormSchedule />,
    roll: "patient",
  },
  {
    path: "/patient/my-info",
    name: "My Info",
    icon: <MdPersonAddAlt1 />,
    roll: "patient",
  },
  {
    path: "/patient/my-statement",
    name: "My Statement",
    icon: <AiOutlineFileDone />,
    roll: "patient",
  },
];
// const initialDropState = {};
// menuItem.map((item) => {
//   if (item.subRoute) initialDropState[item.name] = false;
// });

const initialDropState = {};
// const x = menuItem.map((item) => {
//   if (item.subRoute) initialDropState[item.name] = false;
// });

// console.log(initialDropState);

const Sidebar = ({ handle }) => {
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  const [dropState, setDropState] = useState(initialDropState);

  const { height, width } = useWindowDimensions();
  console.log("height", height);
  console.log("width", width);

  const handleDropState = (dropName) => {
    if (dropName === "other") setDropState(initialDropState);
    else
      setDropState((prevState) => ({
        ...initialDropState,
        [dropName]: !prevState[dropName],
      }));
  };

  // const { open, setOpen } = StateUse();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  //console.log(localStorage.getItem("type")); //admin or provider pabo type apatoto api pailey next kaj
  const logged_type = localStorage.getItem("type");

  const [sideBar, setSideBar] = useState(true);
  const handleSIdebar = () => {
    setSideBar(!sideBar);
    // console.log("sidebar", sideBar);
  };

  const handleFixed = () => {
    dispatch(handleSidebarFixed());
  };

  return (
    <>
      <>
        <div className={isToggled ? "flex" : "relative bg-neutral pt-3 pb-2"}>
          {isToggled ? (
            <>
              <div className="">
                <div
                  className="sidebar-box-fixed w-[290px]  bg-secondary scrollbar"
                  id="style-1"
                >
                  <div className="top-section">
                    {isHovering ? (
                      <>
                        <div className=" transition-all">
                          <img src={logo2} alt="" />{" "}
                        </div>
                        <button onClick={handleFixed}>
                          <BsThreeDotsVertical className="text-2xl text-white ml-[10px] isFixed" />
                        </button>
                      </>
                    ) : (
                      <div>
                        <img
                          className="h-10  transition-all"
                          src={logo1}
                          alt=""
                        />{" "}
                      </div>
                    )}
                  </div>
                  {/* item.roll admin diley admin route a niye jabey and provider diley user route jabey */}
                  <div className={height <= 720 ? "sidebar-scrolling" : ""}>
                    {/* <div className="force-overflow"> */}
                    {menuItem
                      .filter((item) => item.roll === "admin") //dynamic bhabey now route render hobey
                      .map((items, index) => (
                        <div key={index}>
                          {items.subRoute ? (
                            <NavLink
                              to={"#"}
                              key={index}
                              className=""
                              activeclassname="active_sidebar"
                            >
                              <SidebarMenu
                                setSideBar={setSideBar}
                                items={items}
                                isHovering={isHovering}
                                dropState={dropState[items.name]}
                                handleDropState={handleDropState}
                              ></SidebarMenu>
                            </NavLink>
                          ) : (
                            <NavLink
                              to={items.path}
                              key={index}
                              className="link flex"
                              activeclassname="active_sidebar"
                              onClick={(_) => {
                                handleDropState("other");
                                setSideBar(false);
                              }}
                            >
                              <div className="flex items-center">
                                <div className=" text-xl px-2 py-1">
                                  {items.icon}
                                </div>

                                <div
                                  className={
                                    isHovering
                                      ? "opacity-1 duration-600 ease-in text-[18px]  font-semibold"
                                      : "opacity-0 duration-200 ease-out text-[18px] font-semibold hidden"
                                  }
                                >
                                  {items.name}
                                </div>
                              </div>
                            </NavLink>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* If fixed part no available  */}
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={
                  sideBar && width < 1024
                    ? "Side_container"
                    : " fixed bg-secondary left-0 top-0 z-30 "
                }
              >
                <div
                  className={
                    isHovering
                      ? " w-[290px] sidebar-box h-[100vh] sidebar-transition"
                      : " w-[70px] sidebar-box h-[100vh] sidebar-transition"
                  }
                >
                  <div className="top-section">
                    {isHovering ? (
                      <>
                        <div className=" transition-all">
                          <img src={logo2} alt="" />{" "}
                        </div>
                        <button onClick={handleFixed}>
                          <BiDotsHorizontal className="text-2xl text-white ml-[10px] isFixed" />
                        </button>
                      </>
                    ) : (
                      <>
                        <img
                          className="h-10  transition-all"
                          src={logo1}
                          alt=""
                        />{" "}
                      </>
                    )}
                  </div>
                  {/* item.roll admin diley admin route a niye jabey and provider diley user route jabey */}
                  <div
                    className={
                      height <= 720 ? "sidebar-scrolling pb-10" : "pb-10"
                    }
                  >
                    {menuItem
                      .filter((item) => item.roll === "admin") //dynamic bhabey now route render hobey
                      .map((items, index) => (
                        <div key={index}>
                          {items.subRoute ? (
                            <NavLink
                              to={"#"}
                              key={index}
                              className=""
                              // activeclassname="active_sidebar"
                            >
                              <SidebarMenu
                                setSideBar={setSideBar}
                                items={items}
                                isHovering={isHovering}
                                dropState={dropState[items.name]}
                                handleDropState={handleDropState}
                              ></SidebarMenu>
                            </NavLink>
                          ) : (
                            <NavLink
                              to={items.path}
                              key={index}
                              className="link flex"
                              // activeClassname="active_sidebar"
                              onClick={(_) => {
                                handleDropState("other");
                              }}
                            >
                              <div className="flex items-center">
                                <div className=" text-xl px-2 py-1">
                                  {items.icon}
                                </div>
                                <div
                                  // onClick={() => setOpen(!open)}
                                  // style={{
                                  //   display: isHovering ? "block" : "none",
                                  // }}
                                  // className="link_text text-sm"
                                  // className={
                                  //   isHovering
                                  //     ? "sidebar-menu text-[18px] opacity-1 font-semibold"
                                  //     : "sidebar-menu-go text-[18px] opacity-0 font-semibold hidden"
                                  // }
                                  className={
                                    isHovering
                                      ? " transition duration-500 ease-in-out text-[18px]  font-semibold"
                                      : " transition duration-500 ease-in-out text-[18px] font-semibold hidden"
                                  }
                                >
                                  {items.name}
                                </div>
                              </div>
                            </NavLink>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={isToggled ? "slide mx-5 mt-2 transition-all" : "slide"}
          >
            <div
              className={
                !isToggled ? "lg:ml-[98px] lg:mr-[22px] mx-2" : "ml-[280px]"
              }
            >
              <NavigationBar
                handleSIdebar={handleSIdebar}
                handle={handle}
              ></NavigationBar>
            </div>
            <main
              className={
                isToggled
                  ? "font-medium  main bg-white shadow-md rounded-3xl 2xl:w-[83vw] xl:w-[75vw] w-auto mt-2 ml-[280px] mr-0"
                  : "font-medium  main bg-white shadow-md rounded-3xl w-auto mt-2 mx-2 lg:ml-[98px] lg:mr-[22px] "
              }
            >
              <Outlet />
            </main>
            <Footer sideFixed={isToggled}></Footer>
          </motion.div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
