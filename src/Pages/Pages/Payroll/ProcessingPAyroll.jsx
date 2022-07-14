import { Switch } from "@mui/material";
import React, { useState } from "react";

const ProcessingPAyroll = () => {
  const [type, setType] = useState(false);
  const [combo, setCombo] = useState(false);

  const handleType = (e) => {
    setType(!type);
  };
  return (
    <div className="h-[100vh]">
      <h1 className="text-xs mb-3 ml-1 ">Choose Payroll Submission Period</h1>
      <div className="flex items-center gap-5">
        <div>
          <select
            onChange={(e) => handleType(e)}
            name="type"
            className="border rounded-sm px-2 py-2 mx-1 text-xs "
          >
            <option value="Select Tx type">Select payroll period</option>
            <option value="Behavior Therapy"></option>
          </select>
        </div>
        <div>
          <Switch size="small" onClick={() => setCombo(!combo)} />
          <label
            className="form-check-label inline-block ml-2 text-sm text-gray-500"
            htmlFor="flexSwitchCheckDefault"
          >
            Current Staff
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProcessingPAyroll;
