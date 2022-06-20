import React from "react";
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

const Sidebar = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHouseUser />,
    },
    {
      path: "/appointment",
      name: "Appointment",
      icon: <FaRegCalendarAlt />,
      subRoute: [
        {
          path: "/session-manage",
          name: "List View",
          icon: <FaListAlt />,
        },
        {
          path: "/calender-view",
          name: "calender view",
          icon: <FaCalendarAlt />,
        },
        {
          path: "/recurring-session",
          name: "recurring session",
          icon: <VscDebugDisconnect />,
        },
      ],
    },
    {
      path: "/patients",
      name: "Patients",
      icon: <FaUserPlus />,
    },
    {
      path: "/staffs",
      name: "Staffs",
      icon: <FaUserMd />,
    },
    {
      path: "/billing",
      name: "Billing",
      icon: <FaFunnelDollar />,
      subRoute: [
        {
          path: "/submit-billing",
          name: "Billing Manager",
          icon: <FaHornbill />,
        },
        {
          path: "/ar-leader",
          name: "AR-Leader",
          icon: <TbWebhook />,
        },
        {
          path: "/contract-rate",
          name: "Contract Rate",
          icon: <BsBookmarkStar />,
        },
        {
          path: "/patient-statement",
          name: "Patient Statement",
          icon: <BsFileEarmarkRuled />,
        },
      ],
    },
    {
      path: "/payment",
      name: "Payment",
      icon: <FaMoneyCheckAlt />,
      subRoute: [
        {
          path: "/era-remittance",
          name: "ER-Remittance",
          icon: <FaFileAlt />,
        },
        {
          path: "/m-posting",
          name: "M Posting",
          icon: <MdOutlineMonetizationOn />,
        },
        {
          path: "/era-manager",
          name: "ER Manager",
          icon: <AiOutlineFileDone />,
        },
      ],
    },
    {
      path: "/payroll",
      name: "Payroll",
      icon: <FaMoneyBillAlt />,
      subRoute: [
        {
          path: "/processing-payroll",
          name: "Processing Payroll",
          icon: <RiFundsBoxLine />,
        },
        {
          path: "/timesheet",
          name: "TimeSheet",
          icon: <BsFileText />,
        },
      ],
    },
    {
      path: "/report",
      name: "Report",
      icon: <GoGraph />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  // console.log(menuItem[1].others.name);
  return (
    <div className="relative">
      <div className="ml-16">
        <div className="md:ml-10 ml-2">
          <NavigationBar></NavigationBar>
        </div>
        <main className="font-medium w-[20rem] md:w-[1600px] bg-gray-200 text-2xl text-center ml-2 md:ml-10 rounded-3xl py-24 my-24">
          {children}
        </main>
      </div>

      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="Side_container fixed bg-secondary left-0 top-0"
      >
        <div
          style={{ width: isHovering ? "220px" : "70px" }}
          className="sidebar"
        >
          <div className="top-section">
            {isHovering ? (
              <>
                <div className="logo">Logo</div>
              </>
            ) : (
              <>
                <div className="logo px-2 font-bold">L</div>
              </>
            )}
          </div>
          {menuItem.map((items, index) => (
            <>
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
                  ></SidebarMenu>
                </NavLink>
              ) : (
                <NavLink
                  to={items.path}
                  key={index}
                  className="link flex"
                  activeclassname="active"
                >
                  <div className="flex items-center">
                    <div className=" text-xl px-2 py-1">{items.icon}</div>

                    <div
                      style={{ display: isHovering ? "block" : "none" }}
                      className="link_text"
                    >
                      {items.name}
                    </div>
                  </div>
                </NavLink>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
