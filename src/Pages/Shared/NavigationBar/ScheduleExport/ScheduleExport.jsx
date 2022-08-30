import React from "react";
import { motion } from "framer-motion";
import ExportedFiles from "./ExportedFiles";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

const ScheduleExport = ({ setVisible }) => {
  const navigate = useNavigate();
  const handleDownload = () => {
    setVisible(false);
    navigate("/admin/report-export-view");
  };
  return (
    <Fade button>
      <div
        className="absolute bg-white w-auto md:w-[18rem] sm:w-56 shadow rounded-xl
       mt-2 sm:right-52 "
      >
        <div className="rounded-t-xl p-4 flex justify-between items-center bg-gradient-to-r from-primary to-secondary">
          <h5 className="inline  text-sm text-white font-bold">
            Schedule export
          </h5>
          <span class="inline-block  px-2 text-xs text-center  align-baseline font-bold bg-white text-black rounded">
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
    </Fade>
  );
};

export default ScheduleExport;
