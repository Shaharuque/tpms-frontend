import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCopy } from "react-icons/fi";
import { useGetWorkingScheduleQuery, useUpdateWorkingScheduleMutation } from "../../../../../features/Stuff_redux/workingSchedule/workingScheduleApi";
import useToken from "../../../../../CustomHooks/useToken";
import { useParams } from "react-router-dom";
import BlockOffTime from "./BlockOffTime";
import { toast } from "react-toastify";
import { Switch } from "antd";

const timeConvertForInput = (receivedTime) => {
  if (receivedTime === null) return null;
  const timeString = new Date(receivedTime)?.toLocaleTimeString();
  const [time, period] = timeString.split(" "); // Split the string into time and period (AM/PM)
  let [hours, minutes, seconds] = time.split(":").map(Number); // Split the time into hours, minutes, and seconds

  if (period === "PM" && hours !== 12) {
    // If the period is PM and the hours are not already in 24-hour format
    hours += 12; // Add 12 hours to convert to 24-hour format
  } else if (period === "AM" && hours === 12) {
    // If the period is AM and the hours are 12 (midnight)
    hours = 0; // Set the hours to 0 (since 12:00 AM is the start of the day)
  }

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`; // Format the time as HH:mm:ss

  return formattedTime;
};

const WorkSchedule = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const { token } = useToken();
  const { id: staffId } = useParams();
  const [check, setCheck] = useState(false);

  //get working schedule
  const { data: workingSchedule, isLoading, isSuccess } = useGetWorkingScheduleQuery({ id: staffId, token: token });

  //for craeting working schedule
  const [updateWorkingSchedule, { isSuccess: createSuccess, isError: createError }] = useUpdateWorkingScheduleMutation();

  const { mon_start, mon_end, tue_start, tue_end, wed_start, wed_end, thu_start, thu_end, sun_start, sun_end, sat_start, sat_end, fri_start, fri_end } =
    workingSchedule || {};

  //For testing purpose it basically convert the UTC time format to local timeformat As, we are getting data from DB as UTC time format
  // const monStartTime = new Date(mon_start)?.toLocaleString();
  // const monEndTime = new Date(mon_end)?.toLocaleString();

  // const utcTimestamp = new Date("2023-05-15T16:39:00.000Z");
  // // Define the options object with the time zone
  // const options = { timeZone: "America/New_York" };
  // // Convert the UTC timestamp to the local time format
  // const localTimestamp = utcTimestamp.toLocaleString("en-US", options);
  // // Print the local timestamp
  // console.log(localTimestamp);

  //Initial value render
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        mon_start: timeConvertForInput(mon_start),
        mon_end: timeConvertForInput(mon_end),
        tue_start: timeConvertForInput(tue_start),
        tue_end: timeConvertForInput(tue_end),
        wed_start: timeConvertForInput(wed_start),
        wed_end: timeConvertForInput(wed_end),
        thu_start: timeConvertForInput(thu_start),
        thu_end: timeConvertForInput(thu_end),
        sun_start: timeConvertForInput(sun_start),
        sun_end: timeConvertForInput(sun_end),
        sat_start: timeConvertForInput(sat_start),
        sat_end: timeConvertForInput(sat_end),
        fri_start: timeConvertForInput(fri_start),
        fri_end: timeConvertForInput(fri_end),
      });
    }, 0);
  }, [reset, mon_start, mon_end, tue_start, tue_end, wed_start, wed_end, thu_start, thu_end, sun_start, sun_end, sat_start, sat_end, fri_start, fri_end]);

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      ...data,
      employee_id: staffId,
    };
    if (payload) {
      updateWorkingSchedule({
        token: token,
        payload: payload,
      });
    }
    // reset();
  };
  useEffect(() => {
    if (createSuccess) {
      toast.success("successfully updated the working schedule", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    } else if (createError) {
      toast.error("server error occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [createSuccess, createError]);

  //Bypass work schedule validation
  useEffect(() => {
    if (check) {
      toast.success("successfully bypassed working schedule", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [check]);
  return (
    <div className="">
      <div className="flex items-center">
        <h1 className="text-lg mt-2 text-left text-orange-400">Work Schedule</h1>
        <div className="flex items-center gap-2 ml-4 mt-1">
          <Switch checked={check} onChange={() => setCheck(!check)} size="small" />
          <span className="text-sm text-gray-400">Bypass Work Schedule Validation</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* working hours  */}

        <div className="my-5 mx-5">
          <h1 className="">Select Working Hours</h1>
          <div>
            {" "}
            <div className=" my-2 mr-2 gap-5 overflow-scroll">
              <div className="flex items-center my-3 gap-2">
                <h5 className="text-sm text-gray-500 w-[80px] mr-5 ">Day</h5>
                <h5 className="text-sm text-gray-500 w-[125px] px-1">Start Time</h5>

                <h5 className="text-sm text-gray-500 w-[130px] mr-5 ">End Time</h5>
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Monday</h5>
                <input
                  type="time"
                  name="mon_start_time"
                  // value={time?.mon_end_time}
                  format="h:mm A"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("mon_start")}
                />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input
                  type="time"
                  name="mon_end_time"
                  format="h:mm A"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]"
                  {...register("mon_end")}
                />
                <div className="flex items-center gap-2 text-sm font-normal">
                  <FiCopy className="text-secondary" /> Copy time to all
                </div>
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Tuesday</h5>
                <input type="time" name="tus_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("tue_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="tus_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("tue_end")} />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Wednesday</h5>
                <input type="time" name="wed_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("wed_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="wed_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("wed_end")} />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Thursday</h5>
                <input type="time" name="thur_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("thu_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="thur_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("thu_end")} />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Friday</h5>
                <input type="time" name="fri_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("fri_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="fri_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("fri_end")} />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Saturday</h5>
                <input type="time" name="sat_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("sat_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="sat_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("sat_end")} />
              </div>
              <div className="flex items-center my-1 gap-2">
                <h5 className="text-sm text-gray-600 w-[80px] mr-5 ">Sunday</h5>
                <input type="time" name="sun_start" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("sun_start")} />

                <span className="text-sm text-gray-600 w-[30px] text-center">to</span>
                <input type="time" name="sun_end" className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-[105px]" {...register("sun_end")} />
              </div>
            </div>
            {/* submit  */}
            <input className="pms-button mb-3" type="submit" value={"Save"} />
          </div>
        </div>
      </form>
      <BlockOffTime></BlockOffTime>
    </div>
  );
};

export default WorkSchedule;
