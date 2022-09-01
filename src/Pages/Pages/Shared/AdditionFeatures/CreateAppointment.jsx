import { Dialog, Switch } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";

const CreateAppointment = ({ handleClose }) => {
  const [billable, setBillable] = useState(true);
  const [recurrence, setRecurrence] = useState(false);
  const [daily, setDaily] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // --------------------------------------------------Multi-Select-------------------------------
  const [value, setValue] = useState([]);
  const data = ["Eugenia", "Bryan", "Linda"].map((item) => ({
    label: item,
    value: item,
  }));
  return (
    <div>
      <Dialog
        open={handleClose}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="px-5 py-2 box sm:w-[500px]">
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
              <span className="text-xs ml-1 text-gray-600 font-medium">
                Active Patient
              </span>
              <div className="col-span-2">
                <Switch
                  defaultChecked
                  size="small"
                  onClick={() => {
                    setBillable(!billable);
                  }}
                />
                <label
                  className="form-check-label inline-block font-medium ml-2 text-xs text-gray-600"
                  htmlFor="flesmwitchCheckDefault"
                >
                  {billable ? "Billable" : "Non-Billable"}
                </label>
              </div>

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
              {billable ? (
                <select
                  className="border border-gray-300 col-span-2 rounded-sm px-2 py-[1px] mx-1 text-xs w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              ) : (
                <div className="col-span-2 ml-1">
                  <CustomMultiSelection
                    data={data}
                    value={value}
                    setValue={setValue}
                  ></CustomMultiSelection>
                </div>
              )}
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

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-5 mr-2 gap-1">
              <div className="">
                <Switch
                  size="small"
                  onClick={() => {
                    setRecurrence(!recurrence);
                  }}
                />
                <label
                  className="form-check-label  font-medium inline-block ml-2 text-xs text-gray-600"
                  htmlFor="flesmwitchCheckDefault"
                >
                  Recurrence Pattern?
                </label>
              </div>
              <div>
                {recurrence && (
                  <input
                    className="border border-gray-300 col-span-2 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                    type="date"
                    {...register("check_Date")}
                  />
                )}
              </div>
              {recurrence && (
                <>
                  <div>
                    <Switch
                      size="small"
                      onClick={() => {
                        setDaily(!daily);
                      }}
                    />
                    <label
                      className="form-check-label font-medium inline-block ml-2 text-xs text-gray-600"
                      htmlFor="flesmwitchCheckDefault"
                    >
                      Daily
                    </label>
                  </div>
                  {daily && (
                    <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-1">
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          SU
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          MO
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          TU
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          WE
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          TH
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          FR
                        </span>
                      </div>
                      <div className="flex ml-1 mt-1 items-center">
                        <input
                          type="checkbox"
                          // checked={value ? true : false}
                          name="patient"
                          // onClick={() => {
                          //   setValue(!value);
                          // }}
                        />
                        <span className="text-xs ml-1 text-gray-600 font-normal">
                          SA
                        </span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Add Appointment
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default CreateAppointment;
