import { Switch } from "antd";
import React from "react";

const FederalDays = ({ value, handlSwitch }) => {
  return (
    <div>
      <div className="flex my-1 items-center ">
        <Switch
          size="small"
          checked={value ? true : false}
          onClick={handlSwitch}
        />
        <span className="text-[14px] font-medium text-gray-500 mx-3">
          New Year's Day <span className="text-green-500">(January 1)</span>
        </span>
      </div>
    </div>
  );
};

export default FederalDays;
