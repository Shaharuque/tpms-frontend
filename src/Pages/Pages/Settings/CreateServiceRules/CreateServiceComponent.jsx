import { Switch } from "@mui/material";
import React, { useState } from "react";

const CreateServiceComponent = ({ row }) => {
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
      {!value ? "No" : "Yes"}
    </div>
  );
};

export default CreateServiceComponent;
