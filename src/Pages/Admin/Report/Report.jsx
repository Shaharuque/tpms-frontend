import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Report = () => {
  const [type, setType] = useState("");

  const handleType = (e) => {
    setType(e);
  };
  console.log(type);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    // console.log(event.target.date.value);
    // console.log(event.target.tx_type.value);
    // console.log(event.target.type.value);
  };

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
      <span className="modal-label-name">Patient Name</span>
      {/* <select className="border border-gray-300  col-span-2 rounded-sm px-2 py-[1px] mx-1 text-[12px] w-full">
        <option value=""></option>
        <option value="single">single</option>
        <option value="married">married</option>
      </select> */}
      <input type="text" className="modal-input-field w-1/4" />

      <form onSubmit={handlePlaceOrder}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 my-3 mr-2 gap-x-6 gap-y-1 ">
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                All Report
              </span>
            </label>
            <select
              name="tx_type"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value="0"></option>
              <option value="Insurance Collection">Insurance Collection</option>
              <option value="Payment Deposits">Payment Deposits</option>
              <option value="Payment Deposit Breakdown">
                Payment Deposit Breakdown
              </option>
              <option value="Billed Sessions">Billed Sessions</option>
              <option value="Sessions Pending Billing">
                Sessions Pending Billing
              </option>
              <option value="Max Total Auth Utilization">
                Max Total Auth Utilization
              </option>
              <option value="Authorization Breakdown">
                Authorization Breakdown
              </option>
              <option value="Provider Session Notes">
                Provider Session Notes
              </option>
              <option value="Schedule">Schedule</option>
              <option value="Patient Schedule">Patient Schedule</option>
              <option value="Staff Schedule">Staff Schedule</option>
              <option value="Schedule Billable">Schedule Billable</option>
              <option value="AR Ledger with Balance">
                AR Ledger with Balance
              </option>
              <option value="Aging by IBD (initial billed date)">
                Aging by IBD (initial billed date)
              </option>
              <option value="Primary AR">Primary AR</option>
              <option value="Payee Rate list">Payee Rate list</option>
              <option value="Patient AR-Ledger w/ Note Payee">
                Patient AR-Ledger w/ Note Payee
              </option>
              <option value="Expired Auths">Expired Auths</option>
              <option value="Expiring Auths">Expiring Auths</option>
              <option value="Patient Responsibility">
                Patient Responsibility
              </option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Type
              </span>
            </label>
            <select
              onChange={(e) => setType(e.target.value)}
              name="type"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
            >
              <option value=""></option>
              <option value="specific_date">Specific Date</option>
              <option value="date_range">Date Range</option>
            </select>
          </div>
          {type && (
            <>
              {type === "date_range" ? (
                <div>
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
                        value={
                          endDate
                            ? `${endMonth} ${endDay}, ${endYear}`
                            : "End Date"
                        }
                        readOnly
                        onClick={() => setOpen((open) => !open)}
                        className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div
                    ref={refClose}
                    className="absolute z-10  2xl:ml-[20] shadow-xl"
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
              ) : (
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Select Date
                    </span>
                  </label>
                  <input
                    // onChange={(e) => setInsuranceSelect(e.target.value)}
                    type="date"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  />
                </div>
              )}
            </>
          )}
          <div>
            <input
              className="hover:shadow-lg rounded-md bg-secondary text-white py-2 text-xs px-3 mt-7"
              type="submit"
              value="Export"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Report;
