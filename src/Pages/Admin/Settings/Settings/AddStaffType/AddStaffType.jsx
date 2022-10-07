import React from "react";
import MultiSelectionDiv from "../../../../Pages/Settings/SettingComponents/MultiSelectionDiv";

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
