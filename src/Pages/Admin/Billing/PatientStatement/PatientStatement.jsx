import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Table } from "antd";
import axios from "axios";
import SelectClient from "./PatientStatement/SelectClient";
import SelectPayoor from "./PatientStatement/SelectPayoor";
import { RiArrowLeftRightLine } from "react-icons/ri";
import CustomDateRange from "../../../Shared/CustomDateRange/CustomDateRange";
import AllClient from "./PatientStatement/AllClient/AllClient";
const PatientStatement = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selected, setSelected] = useState(null);
  const [tactive, setTactive] = useState(false);
  const [tData, setTData] = useState([]);
  const [selectClient, setSelectClient] = useState(false);
  const [selectPayor, setSelectPayor] = useState(false);
  const [allClient, setAllClient] = useState(false);
  const handleClose = () => {
    setSelectClient(false);
    setSelectPayor(false);
  };

  const handleRelated = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    if (e.target.value === "selective_client") {
      setSelectClient(true);
    } else if (e.target.value === "selective_private_payor") {
      setSelectPayor(true);
    } else {
    }
  };
  console.log(selected);

  const handleSubmit = () => {
    // if (selected === "selective_client") {
    //   setSelectClient(true);
    // } else if (selected === "selective_private_payor") {
    //   setSelectPayor(true);
    // } else {
    //   setAllClient(true);
    // }
    setAllClient(true);
  };

  useEffect(() => {
    axios("../../../All_Fake_Api/PatientStatement.json").then((response) => {
      setTData(response?.data);
    });
  }, []);

  //Date Range Picker-----------------------------------------------------------------------------------------------------------------------
  const [openCalendar, setOpenCalendar] = useState(false);
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
    setOpenCalendar(false);
  };

  const [startD, setStartD] = useState(null);
  const [endD, setEndD] = useState(null);

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

  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click

  //End Date Range Picker--------------------------------------------------------------------------------------------------------------------

  return (
    <div className="h-[170vh]">
      <h1 className="text-lg text-orange-400">Statement</h1>
      <div className="flex justify-between flex-wrap">
        <div className=" flex flex-wrap  my-5 mr-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                Related to
              </span>
            </label>
            <select
              defaultValue={selected}
              onChange={(e) => handleRelated(e)}
              name="related"
              className="input-border text-gray-600 rounded-sm  text-[14px] foactive-medium ml-1  w-full focus:outline-none"
            >
              <option value={null}></option>
              <option value="all_client">All Client</option>
              <option value="selective_client">Selective Client</option>
              <option value="selective_private_payor">
                Selective Private Payor
              </option>
            </select>
          </div>
          <div>
            <div>
              <label className="label">
                <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                  Selected date
                </span>
              </label>
              <div className="ml-1 mt-[3px] w-[260px]">
                <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                  <input
                    value={
                      startDate
                        ? `${startMonth} ${startDay}, ${startYear}`
                        : "Start Date"
                    }
                    readOnly
                    onClick={() => setOpenCalendar(true)}
                    className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                  />
                  <BsArrowRight
                    onClick={() => setOpenCalendar(true)}
                    className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                  ></BsArrowRight>
                  <input
                    value={
                      endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                    }
                    readOnly
                    onClick={() => setOpenCalendar(true)}
                    className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                  />
                </div>

                {/* Multi date picker component called */}
                <div
                  ref={refClose}
                  className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s"
                >
                  {openCalendar && (
                    <CustomDateRange
                      range={range}
                      setRange={setRange}
                      handleCancelDate={handleCancelDate}
                      setOpen={setOpenCalendar}
                    ></CustomDateRange>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* submit  */}
          <button
            className=" mt-[26px] pms-input-button w-16"
            type="submit"
            onClick={handleSubmit}
          >
            Run
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <button className="pms-close-button">Select All</button>
          <button className=" pms-button " type="submit">
            View
          </button>
        </div>
      </div>

      {/* Related to options basis modal is handling here */}
      {allClient && <AllClient></AllClient>}
      {selectClient && (
        <SelectClient
          open={selectClient}
          handleClose={handleClose}
        ></SelectClient>
      )}
      {selectPayor && (
        <SelectPayoor
          open={selectPayor}
          handleClose={handleClose}
        ></SelectPayoor>
      )}
    </div>
  );
};

export default PatientStatement;
