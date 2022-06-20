import React from "react";
import BarChart from "./Dashboard/BarChart";
import DashboardNumbers from "./Dashboard/DashboardNumbers";
import LineChart from "./Dashboard/LineChart";
import TreatmentBarChart from "./Dashboard/TreatmentBarChart";
import { dashboardCount } from "./Data/Data";

const Dashboard = () => {
  return (
    <div>
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
    </div>
  );
};

export default Dashboard;
