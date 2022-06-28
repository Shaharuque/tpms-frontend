import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MultiSelectionDiv from "./SettingComponents/MultiSelectionDiv";

const AddInsurance = () => {
  return (
    <div>
      <MultiSelectionDiv
        selectBox={"All Insurance"}
        addBox={"Facility Selected Insurance"}
      ></MultiSelectionDiv>
    </div>
  );
};

export default AddInsurance;
