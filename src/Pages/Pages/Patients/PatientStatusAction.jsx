import { Switch } from "@mui/material";
import React, { useState } from "react";
import { memo } from "react";

const PatientStatusAction = ({ row }) => {
  const status = row?.original?.is_active_client;
  const [value, setValue] = useState(status);

  return (
    <div>
      <Switch
        checked={value ? true : false}
        size="small"
        onClick={() => {
          setValue(!value);
        }}
      />
      {value ? "Active" : "In-active"}
    </div>
  );
};

export default memo(PatientStatusAction);
