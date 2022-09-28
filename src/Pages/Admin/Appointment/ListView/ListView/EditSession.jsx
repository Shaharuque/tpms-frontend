//import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";

const EditSession = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({});
    }, 500);
  }, [reset]);
  return (
    <div>
      <div>
        <Modal
          open={open}
          centered
          zIndex={100}
          footer={false}
          closable={false}
          bodyStyle={{ padding: "0" }}
          //onClose={handleClose}
          // aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Add Appointment
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    Patient Name
                  </span>
                </label>
                <select
                  className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("patients")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    Auth
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("Auth")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    Service
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("service")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    Provider Name
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    POS
                  </span>
                </label>
                <select
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    From Date
                  </span>
                </label>
                <input
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[2px] mx-1 text-xs w-full"
                  type="date"
                  {...register("check_Date")}
                />
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    From Time
                  </span>
                </label>
                <div className="grid col-span-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-1">
                  <input
                    className="border border-gray-300  rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("to_time")}
                  />
                  <div className="text-xs text-gray-600 mx-auto mt-2">
                    To Time
                  </div>
                  <input
                    className="border border-gray-300  rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("from_time")}
                  />
                </div>
                <label className="label">
                  <span className="label-text font-medium flex items-center text-xs text-gray-600 text-left">
                    Status
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 col-span-2 py-[1px] mx-1 text-xs w-full"
                  {...register("status")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>

              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button
                  className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                >
                  Save Changes
                </button>

                <button
                  onClick={handleClose}
                  type="button"
                  className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                  autoFocus
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EditSession;
