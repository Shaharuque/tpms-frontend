import React, { useState } from "react";
import ExportedFiles from "./ExportedFiles";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
//
const ScheduleExport = () => {
  const navigate = useNavigate();
  const handleDownload = () => {
    navigate("/admin/report-export-view");
    console.log("use");
  };

  return (
    <div className="nav-box">
      <div
        className="absolute z-10 bg-white w-[15rem] sm:w-[18rem] shadow-md rounded-lg
       mt-2 lg:right-[-20px] md:right-[-280px] sm:right-[-280px]  "
      >
        <div className="rounded-t-lg p-4 flex justify-between items-center bg-gradient-to-r from-primary to-secondary">
          <h5 className="inline  text-sm text-white font-bold">
            Schedule export
          </h5>
          <span className="inline-block  px-2 text-xs text-center align-baseline font-bold bg-white text-black rounded">
            64
          </span>
        </div>
        <div className="h-[350px] mt-2 overflow-scroll">
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
          <ExportedFiles></ExportedFiles>
        </div>
        <div className=" absolute bottom-0 py-2 rounded-b-xl  w-full bg-white">
          <button
            onClick={handleDownload}
            className="py-[5px] font-medium px-3 text-xs mx-auto flex gap-2 items-center justify-center w-32  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleExport;
