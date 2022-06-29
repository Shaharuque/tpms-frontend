import React from "react";
import MultiSelectionDiv from "./SettingComponents/MultiSelectionDiv";

const AddTreatments = () => {
  return (
    <div>
      <MultiSelectionDiv
        selectBox={"All Treatments"}
        addBox={"Facility Selected Treatments"}
      ></MultiSelectionDiv>
    </div>
  );
};

export default AddTreatments;
