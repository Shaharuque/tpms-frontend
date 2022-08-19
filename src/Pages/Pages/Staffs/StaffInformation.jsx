import React from "react";
import CustomLink from "../Shared/CustomLink";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import doctor from "../../Assets/doctor.png";

const StaffInformation = () => {
  return (
    <div>
      {" "}
      <>
        {/* Top part  */}
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Link to={"/admin/staffs"} className="text-primary text-lg">
              <IoCaretBackCircleOutline />
            </Link>
            <div className="text-xs font-normal">
              <span className="text-sm font-semibold text-primary">
                {" "}
                Amro LLC |
              </span>{" "}
              <span className="text-orange-400 font-semibold">DOB :</span>{" "}
              09/28/2021 |{" "}
              <span className="text-orange-400 font-semibold">NPI : </span>
              3245678913 |{" "}
              <span className="text-orange-400 font-semibold">Phone : </span>
              787878787878
            </div>
          </div>
          <div className="mr-3">
            <Link to={`/admin/staffs`}>
              <button className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
              </button>
            </Link>
          </div>
        </div>
        {/* top Part end  */}

        <div className="flex lg:flex-nowrap md:flex-wrap flex-wrap justify-between">
          {/* Navbar  */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className=" p-2 setting-nav rounded-md"
          >
            <div className="">
              <div className="">
                <img
                  src={doctor}
                  className="h-24 rounded-full border mb-8 w-24 m-auto"
                  alt=""
                />
              </div>
            </div>
            {/* {patient_info.map((s, i) => (
            <PatientNav id={id} key={i} s={s}></PatientNav>
          ))} */}

            <CustomLink
              className="flex gap-1 hover:text-white pb-1 hover:bg-primary text-xs text-secondary font-normal patient-nav mb-2 items-center"
              to={`staffs-biographic`}
            >
              <h1 className="ml-1 mt-1">Bio's</h1>
            </CustomLink>

            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-contact-details`}
              >
                <h1 className="ml-1 mt-1">Contact Info</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-credentials`}
              >
                <h1 className="ml-1 mt-1">Credentials</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-department`}
              >
                <h1 className="ml-1 mt-1">Department Supervisor(S)</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-payroll`}
              >
                <h1 className="ml-1 mt-1">Payroll Setup</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-other-setup`}
              >
                <h1 className="ml-1 mt-1">Other Setup</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-leave-tracking`}
              >
                <h1 className="ml-1 mt-1">Leave Tracking</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-payor-exclusion`}
              >
                <h1 className="ml-1 mt-1">Insurance Exclusion(S)</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-sub-activity-exclusion`}
              >
                <h1 className="ml-1 mt-1">Service Sub-Type Exclusions</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-client-exclusion`}
              >
                <h1 className="ml-1 mt-1">Patient Exclusion</h1>
              </CustomLink>
            </div>
            <div className="text-xs text-secondary font-normal patient-nav mb-2">
              <CustomLink
                className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
                to={`staffs-portal`}
              >
                <h1 className="ml-1 mt-1">Staff Portal</h1>
              </CustomLink>
            </div>
          </motion.div>
          {/* Navbar END */}

          {/* changeable Box  */}

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
    </div>
  );
};

export default StaffInformation;
