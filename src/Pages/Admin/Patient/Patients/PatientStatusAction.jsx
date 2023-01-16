import React, { useState } from "react";
import { memo } from "react";
import { Switch } from "antd";

const PatientStatusAction = ({ status }) => {
  // console.log("stattus", status);
  let convertedStatus = status === true ? 0 : 1;
  const [value, setValue] = useState(convertedStatus);
  console.log(value);

  return (
    <div className="flex items-center justify-center">
      <Switch
        size="small"
        defaultChecked={value}
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
