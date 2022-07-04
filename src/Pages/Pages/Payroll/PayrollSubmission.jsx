import React, { useState } from "react";

const PayrollSubmission = () => {
  const [type, setType] = useState(false);

  const handleType = (e) => {
    setType(!type);
  };
  return (
    <>
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
      </div>
    </>
  );
};

export default PayrollSubmission;
