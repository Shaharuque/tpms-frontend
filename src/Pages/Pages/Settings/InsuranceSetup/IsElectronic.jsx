import { Switch } from "@mui/material";
import React, { memo, useState } from "react";

const IsElectronic = ({ row }) => {
  const [value, setValue] = useState(false);
  // console.log(value);
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

export default memo(IsElectronic);
