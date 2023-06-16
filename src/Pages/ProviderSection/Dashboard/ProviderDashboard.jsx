import React from "react";
import BarChart from "./Dashboard/BarChart";
import DashboardNumbers from "./Dashboard/DashboardNumbers";
import LineChart from "./Dashboard/LineChart";
import Tables from "./Dashboard/Tables";
import TreatmentBarChart from "./Dashboard/TreatmentBarChart";
import { dashboardCount } from "../../Pages/Data/Data";

import { task, patient, staffs, billing, scheduler, reports } from "../../Pages/Data/Data";
import { motion } from "framer-motion";

const ProviderDashboard = () => {
  return (
    <div>
      <motion.h1 initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className=" text-orange-500 text-sm">
        Dashboard
      </motion.h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 gap-5">
        {dashboardCount.map((data, i) => (
          <DashboardNumbers key={i} data={data}></DashboardNumbers>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5"
      >
        <TreatmentBarChart></TreatmentBarChart>
        <LineChart></LineChart>
        <BarChart></BarChart>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5"
      >
        <Tables tableType={task} tableName={<span className=" text-sm px-2">Today's Task</span>}></Tables>
        <Tables tableType={patient} tableName={<span className=" text-sm px-2">Patient</span>}></Tables>
        {/* <Tables tableType={staffs} tableName={<span className=" text-sm px-2">Staffs</span>}></Tables>
        <Tables tableType={billing} tableName={<span className=" text-sm px-2">Billing</span>}></Tables>
        <Tables tableType={scheduler} tableName={<span className=" text-sm px-2">Scheduler</span>}></Tables>
        <Tables tableType={reports} tableName={<span className=" text-sm px-2">Trending Reports</span>}></Tables> */}
      </motion.div>
    </div>
  );
};

export default ProviderDashboard;
