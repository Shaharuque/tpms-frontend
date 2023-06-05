import React from "react";
import { DateRangePicker } from "rsuite";

const KPIReportsInsurance = () => {
  return (
    <div className="h-[100vh]">
      <h1 className="text-lg my-2 text-orange-600">KPI Report by Insurance</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 my-3 mr-2 gap-3">
        <div>
          <label className="label">
            <span className="label-text text-xs text-gray-600 text-left">
              Selected date
            </span>
          </label>
          <div className="ml-1">
            <DateRangePicker
              onChange={(date) => {
                console.log(date);
              }}
              placeholder="Select Date"
            />
          </div>
        </div>
        <div>
          <button className=" mr-1 w-1/4 py-[5px] mt-[35px]  text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default KPIReportsInsurance;
