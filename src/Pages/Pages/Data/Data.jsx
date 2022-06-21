import { FaUser, FaUserFriends } from "react-icons/fa";
import { TbBuildingHospital } from "react-icons/tb";
import { ImUsers } from "react-icons/im";

// ***********************************************************************
// ******************************DashBoard Data***************************
// ***********************************************************************

export const dashboardCount = [
  {
    icon: <FaUser />,
    number: "36",
    info: "Total No. of Patients",
    bgClass: "bg-gradient-to-b from-cyan-400 to-violet-900",
    iColor: "bg-blue-600",
  },
  {
    icon: <FaUser />,
    number: "12",
    info: "Total No. of Staffs",
    bgClass: "bg-gradient-to-b from-orange-300 to-red-700",
    iColor: "bg-red-700",
  },
  {
    icon: <ImUsers />,
    number: "71",
    info: "Unrendered Sessions",
    bgClass: "bg-gradient-to-b from-teal-400 to-blue-900",
    iColor: "bg-blue-600",
  },
  {
    icon: <TbBuildingHospital />,
    number: "321",
    info: "Unbilled Claims",
    bgClass: "bg-gradient-to-b from-emerald-300 to-emerald-900 ",
    iColor: "bg-green-800",
  },
];

//Table Data
export const task = [
  {
    report: "AR Follow Up Bucket",
    count: "57",
    link: "#",
  },
  {
    report: "Provider Escalation",
    count: "0",
    link: "#",
  },
  {
    report: "Payor Escalation",
    count: "0",
    link: "#",
  },
  {
    report: "MG Escalation",
    count: "0",
    link: "#",
  },
  {
    report: "Medical Records",
    count: "0",
    link: "#",
  },
];
