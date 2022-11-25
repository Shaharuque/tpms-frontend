import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import CustomDateRange from "./CustomDateRange/CustomDateRange";

const Test = () => {
  //Date Range Picker
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpen(false);
    }
  };
  //end outside click
  return (
    <div>
      <h1>test case</h1>
      <div className="w-[300px] mx-auto">
        <label className="label">
          <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
            Date Range
          </span>
        </label>
        <div className="ml-1 text-[14px]">
          <div className="flex flex-wrap justify-between  items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
            <input
              value={
                startDate
                  ? `${startMonth} ${startDay}, ${startYear}`
                  : "Start Date"
              }
              readOnly
              onClick={() => setOpen((open) => !open)}
              className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
            />
            <BsArrowRight
              onClick={() => setOpen((open) => !open)}
              className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
            ></BsArrowRight>
            <input
              value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
              readOnly
              onClick={() => setOpen((open) => !open)}
              className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div
            ref={refClose}
            className="absolute z-10 date-range-box  shadow-xl"
          >
            <CustomDateRange
              range={range}
              setRange={setRange}
              handleCancelDate={handleCancelDate}
              setOpen={setOpen}
            ></CustomDateRange>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
