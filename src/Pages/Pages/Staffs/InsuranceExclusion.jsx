import React from "react";
import StaffMultiSelection from "./StaffMultiSelection";

const InsuranceExclusion = () => {
  return (
    <div>
      <StaffMultiSelection
        selectBox={"All Insurance"}
        addBox={"Facility Selected Insurance"}
      ></StaffMultiSelection>
    </div>
  );
};

export default InsuranceExclusion;
