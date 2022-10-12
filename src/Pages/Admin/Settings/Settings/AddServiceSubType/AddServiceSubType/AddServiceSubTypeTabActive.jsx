import { Switch } from "@mui/material";
import React, { useState } from "react";

const AddServiceSubTypeTabActive = ({ row }) => {
  const [value, setValue] = useState(false);
  // console.log(value);
  console.log(row);
  return (
    <div>
      {/* {value && <>{row.original.insurance}</>} */}
      <Switch
        size="small"
        onClick={() => {
          setValue(!value);
        }}
      />{" "}
      {!value ? "No" : "Yes"}
    </div>
  );
};

export default AddServiceSubTypeTabActive;