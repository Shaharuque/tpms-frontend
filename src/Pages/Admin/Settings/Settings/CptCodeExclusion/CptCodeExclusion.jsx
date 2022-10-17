import React from "react";
import MultiTransferData from "../SettingsComponent/MultiTransferData";

const CptCodeExclusion = () => {
  return (
    <div>
      <MultiTransferData
        name1={"Available Cpt Codes"}
        name2={"Excluded Cpt Codes"}
      ></MultiTransferData>
    </div>
  );
};

export default CptCodeExclusion;
