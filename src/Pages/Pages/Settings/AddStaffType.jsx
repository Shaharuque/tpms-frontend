import React from "react";
import MultiSelectionDiv from "./SettingComponents/MultiSelectionDiv";

const AddStaffType = () => {
  return (
    <div>
      <div>
        <MultiSelectionDiv
          selectBox={"All Staff Types"}
          addBox={"Facility Selected Staff Types"}
        ></MultiSelectionDiv>
      </div>
    </div>
  );
};

export default AddStaffType;
