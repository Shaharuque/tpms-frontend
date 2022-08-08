import React from "react";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import PatientNav from "./PatientNav";
// import { patient_info } from "../Data/Data";
import doctor from "../../Assets/doctor.png";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomLink from "../Shared/CustomLink";
import { useEffect } from "react";
import { getpatientsDetails } from "../../../features/Patient_redux/patientSlice";

const PatientsInfo = () => {
  // Great parent component
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Link to={"/admin/patient-List"} className="text-primary text-lg">
          <IoCaretBackCircleOutline />
        </Link>
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

          <CustomLink
            className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
            to={`patient-info/${id}`}
          >
            <h1 className="ml-1 mt-1">Patient Info</h1>
          </CustomLink>

          <div className="text-xs text-secondary font-normal patient-nav mb-2">
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
              to={`patient-authorization/${id}`}
            >
              <h1 className="ml-1 mt-1">Authorization</h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-2">
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
              to={`patient-document/${id}`}
            >
              <h1 className="ml-1 mt-1">Documents</h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-2">
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
              to={`patient-portal/${id}`}
            >
              <h1 className="ml-1 mt-1">Patient Portal</h1>
            </CustomLink>
          </div>
          <div className="text-xs text-secondary font-normal patient-nav mb-2">
            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
              to={`patient-ledger/${id}`}
            >
              <h1 className="ml-1 mt-1">patient Ledger</h1>
            </CustomLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" m-2 p-2  setting-body shadow-md rounded-lg "
        >
          <Outlet />
        </motion.div>
      </div>
    </>
  );
};

export default PatientsInfo;
