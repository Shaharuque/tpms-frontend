import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Table } from "antd";
import axios from "axios";
import SelectClient from "./PatientStatement/SelectClient";
import SelectPayoor from "./PatientStatement/SelectPayoor";
const PatientStatement = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selected, setSelected] = useState(null);
  const [tactive, setTactive] = useState(false);
  const [tData, setTData] = useState([]);
  const [selectClient, setSelectClient] = useState(false);
  const [selectPayor, setSelectPayor] = useState(false);
  const handleClose = () => {
    setSelectClient(false);
    setSelectPayor(false);
  };

  const handleRelated = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  console.log(selected);

  const handleSubmit = () => {
    if (selected === "selective_client") {
      setSelectClient(true);
    } else {
      setSelectPayor(true);
    }
  };

  useEffect(() => {
    axios("../../../All_Fake_Api/PatientStatement.json").then((response) => {
      setTData(response?.data);
    });
  }, []);

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
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-400">Statement</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 my-5 mr-2 gap-5">
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
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
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Select date
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
                  value={
                    endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                  }
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                />
              </div>
            </div>
            <div
              ref={refClose}
              className="absolute z-10 mt-2  2xl:ml-[20] shadow-xl"
            >
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <DateRangePicker
                      onChange={(item) => setRange([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      className="border-2 border-gray-100"
                    />
                  </div>
                  <div className="text-right bg-[#26818F] border-r-2 rounded-b-lg range-date-ok py-0">
                    <button
                      className="px-4 m-2 text-white border border-white rounded hover:border-red-700 hover:bg-red-700"
                      type="submit"
                      onClick={handleCancelDate}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 m-2 text-secondary border border-white bg-white rounded"
                      type="submit"
                      onClick={() => setOpen(false)}
                    >
                      Save
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        {/* submit  */}
        <button
          className=" mt-8 pms-button w-16"
          type="submit"
          onClick={handleSubmit}
        >
          View
        </button>
      </div>

      {/* Related to options basis modal is handling here */}
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
