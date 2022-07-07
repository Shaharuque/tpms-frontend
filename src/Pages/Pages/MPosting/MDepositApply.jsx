import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { Switch } from "@mui/material";

const MDepositApply = () => {
  const [select, setSelect] = useState("claim_no");
  const { id } = useParams();
  console.log("param ", id);
  const [value, setValue] = React.useState(false);

  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

  const onSubmit = (data) => {
    // setSubmitted(data);
    console.log(data);
    reset();
  };

  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  return (
    <div className="h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 my-5 mr-2 gap-5">
          <div>
            <h1 className="text-xs mb-2 ml-1 ">Post By</h1>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="post"
              className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
            >
              <option value="claim_no">Claim No</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          {select === "claim_no" ? (
            <div>
              <h1 className="text-xs mb-2 ml-1 ">Claim No</h1>
              <input
                type="number"
                name="check"
                className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                {...register("client_code")}
              />
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-xs mb-2 ml-1 ">Select Patient</h1>
                <select
                  className="border rounded-sm px-2 py-[6px] mx-1 text-xs w-full"
                  {...register("patient")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <h1 className="text-xs mb-2 ml-1 ">Select Date Range</h1>
                <div className="flex  items-center">
                  <BsCalendar3WeekFill className=" text-gray-600 bg-gray-200 p-[6px] text-3xl" />
                  <DatePicker
                    style={{
                      color: "#5c5c5c",
                      padding: "14px 5px",
                      fontSize: "12px",
                      border: "1px solid #a9a9a9",
                      borderRadius: "0px",
                    }}
                    value={dates}
                    onChange={setDates}
                    range
                    sort
                    format={format}
                    calendarPosition="bottom-center"
                    plugins={[<DatePanel />]}
                  />
                </div>
              </div>
            </>
          )}

          <div className="mt-3 ml-5">
            <div className="flex items-center ">
              <Switch
                size="small"
                onClick={() => {
                  setValue(!value);
                }}
              />
              <h1 className="text-xs ">All Clients</h1>
            </div>
            <div className="flex items-center ">
              <Switch
                size="small"
                onClick={() => {
                  setValue(!value);
                }}
              />
              <h1 className="text-xs ">Include Closed</h1>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Show
            </button>
            <Link to={"/m-posting"}>
              <button className="px-5 mt-6 w-24 text-sm py-2 bg-gradient-to-r from-red-700 to-red-400  ml-3 hover:to-red-700 text-white rounded-md">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MDepositApply;
