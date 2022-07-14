import React from "react";

const Timesheet = () => {
  const handlePeriod = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="h-[100vh]">
      <h1 className="text-lg mb-5 text-orange-400">Timesheet(s) Submission</h1>
      <div className="flex flex-wrap gap-2 items-center">
        <div>
          <h1 className="text-xs mb-2 ml-1 ">Choose Payroll Period</h1>
          <select
            onChange={(e) => handlePeriod(e)}
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
          >
            <option value="Select Tx type">Select Payroll Period(s)</option>
          </select>
        </div>
        <div>
          <h1 className="text-xs mb-2 ml-1 ">Staff</h1>
          <select
            onChange={(e) => handlePeriod(e)}
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs "
          >
            <option value="Select Tx type"></option>
          </select>
        </div>
        <div>
          <button className="hover:bg-secondary rounded-md text-sm page py-1 shadow-md text-white bg-secondary mt-6 px-3">
            Day
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timesheet;
