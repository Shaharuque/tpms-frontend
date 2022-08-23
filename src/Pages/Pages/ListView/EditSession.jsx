import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const EditSession = ({ handleClose, open, editableRow }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({});
    }, 500);
  }, [reset, editableRow]);
  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="p-5 box sm:w-[500px]">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400">
                Edit Appointment
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </div>

            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-5 mr-2 gap-1">
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    Patient Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("patients")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    Auth
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("Auth")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    Service
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("service")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    Provider Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    POS
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    From Date
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  type="date"
                  {...register("check_Date")}
                />
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    From Time
                  </span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-1">
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("to_time")}
                  />
                  <div className="text-xs text-gray-500 mx-auto mt-2">
                    To Time
                  </div>
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("from_time")}
                  />
                </div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-500 text-left">
                    Status
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("status")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>

              <div className="divider"></div>
              <div className="modal-action">
                <button
                  className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Save
                </button>

                <button
                  className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                  onClick={handleClose}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default EditSession;
