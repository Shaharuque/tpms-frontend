import { Switch } from "@mui/material";
import React, { useState } from "react";

const PatientStatusAction = ({ row }) => {
  const [value, setValue] = useState(false);
  console.log(value);
  return (
    <div>
      <Switch
        size="small"
        onClick={() => {
          setValue(!value);
        }}
      />{" "}
      {!value ? "In-Active" : "Active"}
    </div>
  );
};

export default PatientStatusAction;
