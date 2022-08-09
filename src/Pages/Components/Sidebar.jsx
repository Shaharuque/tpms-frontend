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
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import NavigationBar from "../Pages/Shared/NavigationBar";
import Footer from "./Footer";
// import StateUse from "../Hooks/StateUse";

const menuItem = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: <FaHouseUser />,
  },
  {
    path: "/admin/appointment",
    name: "Appointment",
    icon: <FaRegCalendarAlt />,
    subRoute: [
      {
        path: "/admin/session-manage",
        name: "List View",
        icon: <FaListAlt />,
      },
      {
        path: "/admin/calender-view",
        name: "calender view",
        icon: <FaCalendarAlt />,
      },
      {
        path: "/admin/recurring-session",
        name: "recurring session",
        icon: <VscDebugDisconnect />,
      },
    ],
  },
  {
    path: "/admin/patient-List",
    name: "Patients",
    icon: <FaUserPlus />,
  },
  {
    path: "/admin/staffs",
    name: "Staffs",
    icon: <FaUserMd />,
  },
  {
    path: "/admin/billing",
    name: "Billing",
    icon: <FaFunnelDollar />,
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
    subRoute: [
      {
        path: "/admin/era-remittance",
        name: "ER-Remittance",
        icon: <FaFileAlt />,
      },
      {
        path: "/admin/m-posting",
        name: "M Posting",
        icon: <MdOutlineMonetizationOn />,
      },
      {
        path: "/admin/era-manager",
        name: "ER Manager",
        icon: <AiOutlineFileDone />,
      },
    ],
  },
  {
    path: "/admin/payroll",
    name: "Payroll",
    icon: <FaMoneyBillAlt />,
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
  },
  {
    path: "/admin/settings",
    name: "Settings",
    icon: <FiSettings />,
  },
];

const initialDropState = {};
menuItem.map((item) => {
  if (item.subRoute) initialDropState[item.name] = false;
});

// console.log(initialDropState);

const Sidebar = () => {
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
  return (
    <div className="relative bg-neutral pt-3 pb-2">
      <div className=" slide">
        <div className="">
          <NavigationBar></NavigationBar>
        </div>
        <main className="font-medium resp main bg-white shadow-md rounded-3xl mt-3 ">
          <Outlet />
        </main>
        <Footer></Footer>
      </div>

      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="Side_container fixed bg-secondary left-0 top-0 "
      >
        <div
          style={{
            width: isHovering ? "220px" : "70px",
            transition: isHovering ? "ease-in 0.3s" : "ease-out 0.5s",
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
                <img className="h-10 w-10 transition-all" src={logo1} alt="" />{" "}
              </>
            )}
          </div>
          {menuItem.map((items, index) => (
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
                      style={{
                        display: isHovering ? "block" : "none",
                      }}
                      className="link_text text-sm"
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
