import { Dialog, Switch } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import CustomMultiSelection from "../CustomMultiSelection";

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
  const datat = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));
  return (
    <div>
      <Dialog
        open={handleClose}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5 box sm:w-[500px]">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400">
              Add Appointment
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>

          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-5 mr-2 gap-1">
              <span className="text-xs ml-1 text-gray-600 font-normal">
                Active Patient
              </span>
              <div>
                <Switch
                  defaultChecked
                  size="small"
                  onClick={() => {
                    setBillable(!billable);
                  }}
                />
                <label
                  className="form-check-label inline-block ml-2 text-xs text-gray-500"
                  htmlFor="flesmwitchCheckDefault"
                >
                  {billable ? "Billable" : "Non-Billable"}
                </label>
              </div>

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
              {billable ? (
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("provider")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              ) : (
                <>
                  <CustomMultiSelection
                    data={datat}
                    value={value}
                    setValue={setValue}
                  ></CustomMultiSelection>
                </>
              )}
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
              <div>
                <Switch
                  size="small"
                  onClick={() => {
                    setRecurrence(!recurrence);
                  }}
                />
                <label
                  className="form-check-label inline-block ml-2 text-xs text-gray-500"
                  htmlFor="flesmwitchCheckDefault"
                >
                  Recurrence Pattern?
                </label>
              </div>
              <div>
                {recurrence && (
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
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
                      className="form-check-label inline-block ml-2 text-xs text-gray-500"
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

            <div className="divider"></div>
            <div className="modal-action">
              <button
                className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
                onClick={handleClose}
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
  );
};

export default CreateAppointment;
