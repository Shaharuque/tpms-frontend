import React, { useState } from "react";
import { memo } from "react";
import { Switch } from "antd";

const PatientStatusAction = ({ status }) => {
  let changedStatus;
  if (status === "true") {
    changedStatus = 1;
  } else if (status === "false") {
    changedStatus = 0;
  }
  const [value, setValue] = useState(changedStatus);
  console.log(changedStatus);

  return (
    <div className="flex ">
      <Switch
        size="small"
        checked={value ? true : false}
        onClick={() => setValue(!value)}
      />
      {!value ? (
        <h1 className="ml-1">In-Active</h1>
      ) : (
        <h1 className="ml-1">Active</h1>
      )}
    </div>
  );
};

export default memo(PatientStatusAction);
