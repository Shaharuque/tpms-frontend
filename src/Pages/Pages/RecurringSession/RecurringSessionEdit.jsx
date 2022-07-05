import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const RecurringSessionEdit = () => {
  const [value, setValue] = React.useState(new Date());
  const [toValue, setToValue] = React.useState(new Date());
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
    <div>
      <h1 className="text-lg my-2 text-orange-500">Recurring Session Edit</h1>
      <div className="border">
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
                  class="textarea textarea-bordered w-full"
                  placeholder=""
                ></textarea>
              </div>

              <div className="">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="From"
                    renderInput={(props) => <TextField {...props} />}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="To"
                    renderInput={(props) => <TextField {...props} />}
                    value={toValue}
                    onChange={(newValue) => {
                      setToValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* submit  */}
            <input
              className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
              type="submit"
              value={"Save"}
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RecurringSessionEdit;
