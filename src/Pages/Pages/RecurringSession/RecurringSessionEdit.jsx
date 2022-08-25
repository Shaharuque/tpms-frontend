import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const RecurringSessionEdit = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [value, setValue] = React.useState(new Date());
  const [toValue, setToValue] = React.useState(new Date());
  console.log(<fromDate></fromDate>);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <div className="sm:h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Recurring Session Edit</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/recurring-session"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="">
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
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 mr-2 gap-3">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Patient Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-500 text-left">
                    Auth
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-500 text-left">
                    Service
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-500 text-left">
                    Provider Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-500 text-left">
                    POS
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-600 text-left">
                    From Date
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  type="date"
                  {...register("from_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    To Date
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  type="date"
                  {...register("To_Date")}
                />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      From Time
                    </span>
                  </label>
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("from_time")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      To Time
                    </span>
                  </label>
                  <input
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    type="time"
                    {...register("To_time")}
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Status
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("Status")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Office Notes
                  </span>
                </label>
                <textarea
                  name="comment"
                  className="border text-sm p-1  ml-1 w-full"
                ></textarea>
              </div>
            </div>
            <div className="divider"></div>
            {/* submit  */}
            <div className="mt-10">
              <button
                className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>
              <Link to={"/admin/recurring-session"}>
                <button
                  className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                  onClick={reset}
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RecurringSessionEdit;
