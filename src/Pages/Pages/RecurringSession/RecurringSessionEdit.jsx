import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
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
    <div className="h-[100vh]">
      <h1 className="text-lg my-2 text-orange-500">Recurring Session Edit</h1>
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
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-5">
              {/* type  */}
              <div>
                <FormControl>
                  <h1
                    className="text-sm"
                    id="demo-row-radio-buttons-group-label"
                  >
                    Add Type
                  </h1>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Billable"
                      control={<Radio />}
                      label="Billable
"
                    />
                    <FormControlLabel
                      value="Non-Billable"
                      control={<Radio />}
                      label="Non-Billable"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {/* name  */}
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Patient Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("Patient_name")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Auth
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("auth")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Service
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("service")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Provider Name
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("provider_name")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    POS
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("pos")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Time Duration
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("time_duration")}
                >
                  <option value="name"> abcd </option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Status
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("status")}
                >
                  <option value="name"> abcd </option>
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

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    From Time
                  </span>
                </label>
                <div className="border flex">
                  <BsCalendar3WeekFill className=" text-gray-600 bg-gray-200 p-[6px] text-3xl" />
                  <DatePicker
                    className="mx-3 mt-1 text-sm font-normal text-gray-500 text-center"
                    showTimeSelect
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    dateFormat="MM/dd/yyyy  EE hh:mm a"
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    To Time
                  </span>
                </label>
                <div className="border flex">
                  <BsCalendar3WeekFill className=" text-gray-600 bg-gray-200 p-[6px] text-3xl" />
                  <DatePicker
                    className="mx-3 mt-1 text-sm font-normal text-gray-500 text-center"
                    showTimeSelect
                    selected={fromDate}
                    onChange={(date) => setToDate(date)}
                    dateFormat="MM/dd/yyyy  EE hh:mm a"
                  />
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="divider"></div>
            {/* submit  */}
            <button
              className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
            <Link to={"/recurring-session"}>
              <button
                className="px-5 ml-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Back
              </button>
            </Link>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RecurringSessionEdit;
