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

      {/* <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Remember me</span> 
          <input type="checkbox" class="toggle"  />
        </label>
      </div> */}

    </div>
  );
};

export default memo(PatientStatusAction);
