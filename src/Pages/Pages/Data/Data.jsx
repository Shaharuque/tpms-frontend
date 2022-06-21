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
export const patient = [
  {
    report: "Expiring Authorization",
    count: "2",
    link: "#",
  },
  {
    report: "Patient/Guarantor",
    count: "0",
    link: "#",
  },
  {
    report: "No Authorization",
    count: "10",
    link: "#",
  },
  {
    report: "Co-Pay For Today",
    count: "0",
    link: "#",
  },
  {
    report: "Auth Place Holders",
    count: "0",
    link: "#",
  },
];
export const staffs = [
  {
    report: "Vacation(s) Pending Approval",
    count: "0",
    link: "#",
  },
  {
    report: "Missing Credentials",
    count: "11",
    link: "#",
  },
  {
    report: "Credentials To Expire",
    count: "0",
    link: "#",
  },
  {
    report: "Signature Not Loaded",
    count: "0",
    link: "#",
  },
  {
    report: " ",
    count: " ",
    link: "#",
  },
];
export const billing = [
  {
    report: "Sessions Rendered - Not Billed",
    count: "321",
    link: "#",
  },
  {
    report: "Last Weeks Deposits",
    count: "0",
    link: "#",
  },
  {
    report: "Last Month Statements",
    count: "0",
    link: "#",
  },
  {
    report: "Last Month Billed Dates",
    count: "0",
    link: "#",
  },
  {
    report: "Pending Secondary Claims",
    count: "0",
    link: "#",
  },
];
export const scheduler = [
  {
    report: "Scheduled Not Rendered",
    count: "71",
    link: "#",
  },
  {
    report: "Sessions Not Attended Last Week",
    count: "0",
    link: "#",
  },
  {
    report: "Provider Signature Missing In Session",
    count: "0",
    link: "#",
  },
  {
    report: "Session Note Missing",
    count: "779",
    link: "#",
  },
  {
    report: "Cancelled Session This Month",
    count: "23",
    link: "#",
  },
];
export const reports = [
  {
    report: "Schedule Billable",
    count: "0",
    link: "#",
  },
  {
    report: "Payment Deposits",
    count: "0",
    link: "#",
  },
  {
    report: "KPI Report by Month",
    count: "0",
    link: "#",
  },
  {
    report: "KPI Report by Patient",
    count: "0",
    link: "#",
  },
  {
    report: "KPI Report by Insurance",
    count: "0",
    link: "#",
  },
];
