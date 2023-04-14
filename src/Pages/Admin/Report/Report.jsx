import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiArrowLeftRightLine } from "react-icons/ri";
import CustomDateRange from "../../Shared/CustomDateRange/CustomDateRange";

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

  //-----------Date Range Picker-----------------
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

  return (
    <div className="h-[170vh]">
      <form onSubmit={handlePlaceOrder}>
        <div className="flex flex-wrap items-center my-3 mr-2 gap-x-3 gap-y-1 ">
          <div>
            <label className="label">
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
              <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                <div className="w-[200px]">
                  <div>
                    <label className="label">
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                        Selected date
                      </span>
                    </label>
                    <div className="">
                      <div className="flex  justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                        <input
                          value={
                            startDate
                              ? `${startMonth} ${startDay}, ${startYear}`
                              : `Start Date`
                          }
                          readOnly
                          onClick={() => setOpenCalendar(true)}
                          // {...register("start_date")}
                          className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-2/5 cursor-pointer"
                        />
                        <RiArrowLeftRightLine
                          onClick={() => setOpenCalendar(true)}
                          className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium w-1/5"
                        ></RiArrowLeftRightLine>
                        <input
                          // defaultValue={"5-10-2034"}
                          value={
                            endDate
                              ? `${endMonth} ${endDay}, ${endYear}`
                              : `End Date`
                          }
                          readOnly
                          onClick={() => setOpenCalendar(true)}
                          // {...register("end_date")}
                          className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-2/5 cursor-pointer"
                        />
                      </div>

                      {/* Multi date picker component called */}
                      <div
                        ref={refClose}
                        // className="absolute z-10 md:ml-[-20%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s "
                        className="absolute z-10 lg:ml-[0%] md:ml-[-30%] mt-1"
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
              className="pms-button mt-[24px]"
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
