import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import TextArea from "antd/lib/input/TextArea";
import RecurringSessionModal from "./RecurringSessionModal";
import { Nav } from "rsuite";
import { NavLink, Outlet } from "react-router-dom";

const ProviderRecurringSessionEdit = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //console.log(errors);

  return (
    <div className="sm:h-[100vh]">
      <div className="flex items-start flex-wrap gap-2 justify-between">
        <h1 className="text-sm md:text-lg text-gray-700">
          Edit Recurring Session
        </h1>
        <div className="pms-button">
          <Link
            to={"/provider/recurring/session"}
            className=" flex items-center"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-2"
        style={{
          transition: "all .3s ease-out",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-4 my-3 mr-2 gap-6">
            {/* name  */}
            <div>
              <label className="label">
                <span className=" label-font">Patient Name</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("patient_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Auth</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("Auth")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Service</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("Service")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Provider Name</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("Provider_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">POS</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("Pos")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className=" label-font">From Date</span>
              </label>
              <input
                className="input-border input-font w-full focus:outline-none"
                type="date"
                {...register("from_Date")}
              />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">To Date</span>
              </label>
              <input
                className="input-border input-font w-full focus:outline-none"
                type="date"
                {...register("To_Date")}
              />
            </div>

            <div className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 ">
              <div>
                <label className="label">
                  <span className=" label-font">From Time</span>
                </label>
                <input
                  className="input-border input-font w-full focus:outline-none"
                  type="time"
                  {...register("from_time")}
                />
              </div>
              <div>
                <label className="label">
                  <span className=" label-font">To Time</span>
                </label>
                <input
                  className="input-border input-font w-full focus:outline-none"
                  type="time"
                  {...register("To_time")}
                />
              </div>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">Status</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("Status")}
              >
                <option value="Rendered">Rendered</option>
                <option value="Show">Show</option>
                <option value="Hold">Hold</option>
                <option value="No Show">No Show</option>
              </select>
            </div>
            {/* <div></div> */}
            <div className="md:col-span-2">
              <label className="label">
                <span className=" label-font">Office Notes</span>
              </label>
              <div className="">
                <TextArea rows={4} placeholder=" Notes" size="large" />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* submit  */}
          <div className="mt-4">
            <button
              onClick={handleClickOpen}
              className=" pms-button mr-2"
              type="submit"
            >
              Save
            </button>
            <Link to={"/admin/recurring-session"}>
              <button className="pms-close-button" autoFocus onClick={reset}>
                CANCEL
              </button>
            </Link>
          </div>

          <div>
            <div className="container width-fix  mx-auto mb-5 mt-5">
              <Nav appearance="tabs" justified className="mt-5 mb-5">
                <NavLink
                  className={(navinfo) =>
                    navinfo.isActive
                      ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                      : "rs-nav-item text-[14px] font-medium"
                  }
                  to={"Single-view"}
                >
                  Single View
                  <span className="bg-orange-400 badge text-white ml-2 rounded-full text-[10px]">
                    view-1
                  </span>
                </NavLink>

                <NavLink
                  className={(navinfo) =>
                    navinfo.isActive
                      ? "rs-nav-item rs-nav-item-active font-medium text-[14px]"
                      : "rs-nav-item text-[14px] font-medium"
                  }
                  to={"day-view"}
                >
                  Day View
                  <span className="bg-orange-400 badge text-white ml-2 text-[10px] rounded-full">
                    view-2
                  </span>
                </NavLink>
              </Nav>
              <Outlet />
            </div>
          </div>
        </form>
      </motion.div>
      {openEditModal && (
        <RecurringSessionModal
          handleClose={handleClose}
          open={openEditModal}
        ></RecurringSessionModal>
      )}
    </div>
  );
};

export default ProviderRecurringSessionEdit;
