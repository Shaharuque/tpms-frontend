import React from "react";
import { Outlet } from "react-router-dom";
import "../Style/slide.css";
import logo1 from "../Assets/favicon.png";
import logo2 from "../Assets/logo-new.png";
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
} from "react-icons//bs";
import { VscDebugDisconnect } from "react-icons/vsc";
import { RiFundsBoxLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { TbWebhook } from "react-icons/tb";
import { GrFormSchedule } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
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
        name: "Billing Manager",
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
//devShaik444 commits
// const initialDropState = {};
// menuItem.map((item) => {
//   if (item.subRoute) initialDropState[item.name] = false;
// });

const initialDropState = {};
const x = menuItem.map((item) => {
  if (item.subRoute) initialDropState[item.name] = false;
});
//console.log(x);
// console.log(initialDropState);

const Sidebar = ({ handle }) => {
  const [isHovering, setIsHovering] = useState(false);

  const [dropState, setDropState] = useState(initialDropState);

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

  // console.log(menuItem[1].others.name);
  //console.log(localStorage.getItem("type")); //admin or provider pabo type apatoto api pailey next kaj
  const logged_type = localStorage.getItem("type");
  return (
    <div className="relative bg-neutral pt-3 pb-2">
      <div className=" slide">
        <div className="">
          <NavigationBar handle={handle}></NavigationBar>
        </div>
        <main className="font-medium  main bg-white shadow-md rounded-3xl w-auto mt-2 ml-[98px] mr-[22px] ">
          <Outlet />
        </main>
        <Footer></Footer>
      </div>

      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="Side_container fixed bg-secondary left-0 top-0 zfixed"
      >
        <div
          style={{
            width: isHovering ? "240px" : "70px",
            // transition: isHovering ? "ease-in 0.5s" : "ease-out 0.3s",
          }}
          className="sidebar"
        >
          <div className="top-section">
            {isHovering ? (
              <>
                <div className=" transition-all">
                  {" "}
                  <img src={logo2} alt="" />{" "}
                </div>
              </>
            ) : (
              <>
                <img className="h-10  transition-all" src={logo1} alt="" />{" "}
              </>
            )}
          </div>
          {/* item.roll admin diley admin route a niye jabey and provider diley user route jabey */}
          {menuItem
            .filter((item) => item.roll === "admin") //dynamic bhabey now route render hobey
            .map((items, index) => (
              <div key={index}>
                {items.subRoute ? (
                  <NavLink
                    to={"#"}
                    key={index}
                    className=""
                    activeclassname="active"
                  >
                    <SidebarMenu
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
                    activeclassname="active"
                    onClick={(_) => handleDropState("other")}
                  >
                    <div className="flex items-center">
                      <div className=" text-xl px-2 py-1">{items.icon}</div>

                      <div
                        // onClick={() => setOpen(!open)}
                        // style={{
                        //   display: isHovering ? "block" : "none",
                        // }}
                        // className="link_text text-sm"
                        className={
                          isHovering
                            ? "opacity-1 duration-600 ease-in text-[14px] "
                            : "opacity-0 duration-200 ease-out text-[14px] hidden"
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
  );
};

export default Sidebar;
