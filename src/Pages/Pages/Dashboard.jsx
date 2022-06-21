import React from "react";
import BarChart from "./Dashboard/BarChart";
import DashboardNumbers from "./Dashboard/DashboardNumbers";
import LineChart from "./Dashboard/LineChart";
import Tables from "./Dashboard/Tables";
import TreatmentBarChart from "./Dashboard/TreatmentBarChart";
import { dashboardCount } from "./Data/Data";
import {
  task,
  patient,
  staffs,
  billing,
  scheduler,
  reports,
} from "./Data/Data";

const Dashboard = () => {
  return (
    <div className="">
      <h1 className=" text-orange-500 text-sm">Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 gap-5">
        {dashboardCount.map((data, i) => (
          <DashboardNumbers key={i} data={data}></DashboardNumbers>
        ))}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        <TreatmentBarChart></TreatmentBarChart>
        <LineChart></LineChart>
        <BarChart></BarChart>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        <Tables
          tableType={task}
          tableName={<span className=" text-sm px-2">Today's Task</span>}
        ></Tables>
        <Tables
          tableType={patient}
          tableName={<span className=" text-sm px-2">Patient</span>}
        ></Tables>
        <Tables
          tableType={staffs}
          tableName={<span className=" text-sm px-2">Staffs</span>}
        ></Tables>
        <Tables
          tableType={billing}
          tableName={<span className=" text-sm px-2">Billing</span>}
        ></Tables>
        <Tables
          tableType={scheduler}
          tableName={<span className=" text-sm px-2">Scheduler</span>}
        ></Tables>
        <Tables
          tableType={reports}
          tableName={<span className=" text-sm px-2">Trending Reports</span>}
        ></Tables>
      </div>
    </div>
  );
};

export default Dashboard;
