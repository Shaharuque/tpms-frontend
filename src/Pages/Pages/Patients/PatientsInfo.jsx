import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import PatientNav from "./PatientNav";
import { patient_info } from "../Data/Data";
import doctor from "../../Assets/doctor.png";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const PatientsInfo = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-primary text-lg">
          <IoCaretBackCircleOutline />
        </span>
        <div className="text-xs font-normal">
          <span className="text-sm font-semibold text-primary">
            {" "}
            Amro LLC |
          </span>{" "}
          <span className="text-orange-400 font-semibold">DOB :</span>{" "}
          09/28/2021 |{" "}
          <span className="text-orange-400 font-semibold">Phone : </span>
          (894)-023-8043 |{" "}
          <span className="text-orange-400 font-semibold">Address : </span>
          1222, OTtn, With Jersey City NJ 32809
        </div>
      </div>
      <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" p-2 setting-nav rounded-md"
        >
          <div className="">
            <div className="">
              <img src={doctor} className="h-24 w-24 m-auto" alt="" />
            </div>
          </div>
          {patient_info.map((s, i) => (
            <PatientNav key={i} s={s}></PatientNav>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" m-2 p-2 h-[100vh] setting-body shadow-md rounded-lg "
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default PatientsInfo;
