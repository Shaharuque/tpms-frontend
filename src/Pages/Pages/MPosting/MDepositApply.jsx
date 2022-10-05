import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { Switch } from "@mui/material";
import { IoCaretBackCircleOutline } from "react-icons/io5";
// import { Switch } from "antd";

const MDepositApply = () => {
  const [select, setSelect] = useState("claim_no");
  const { id } = useParams();
  //console.log("param ", id);
  const [value, setValue] = React.useState(false);

  const format = "MM/DD/YYYY";
  const [dates, setDates] = React.useState([
    new DateObject().set({ day: 25, format }),
    new DateObject().set({ day: 20, format }),
  ]);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

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
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-3 mr-2 gap-5 ">
          <div>
            <h1 className="text-lg ml-1 ">Post By</h1>
            <select
              onChange={(e) => setSelect(e.target.value)}
              name="post"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
            >
              <option value="claim_no">Claim No</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          {select === "claim_no" ? (
            <div>
              <h1 className="text-lg ml-1 ">Claim No</h1>
              <input
                type="text"
                name="check"
                className="input-border text-gray-600 rounded-sm py-[2px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                {...register("client_code")}
              />
            </div>
          ) : (
            <>
              <div>
                <h1 className="text-lg ml-1 ">Select Patient</h1>
                <select
                  className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
                  {...register("patient")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <h1 className=" ml-1 text-lg">Select Date Range</h1>
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

          <div className=" ml-5">
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
              className="px-2 text-sm py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Show
            </button>
            <Link to={"/admin/m-posting"}>
              <button className="px-2 text-sm py-2 bg-gradient-to-r from-red-700 to-red-400  ml-3 hover:to-red-700 text-white rounded-md">
                Reset
              </button>
            </Link>
          </div>
        </div>
      </form>
      {/* Top part  */}
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="text-xs font-medium">
            <span className="text-[#0AA7B8] font-extrabold">
              Total Amount :
            </span>
            <span className="mr-2"> 233444 </span>
            <span className="text-[#0AA7B8] font-extrabold">
              Amount Applied :{" "}
            </span>
            <span className="mr-2"> 233444 </span>
            <span className="text-[#0AA7B8] font-extrabold">
              Amount Remaining :
            </span>
            <span className="mr-2"> 76555 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MDepositApply;
