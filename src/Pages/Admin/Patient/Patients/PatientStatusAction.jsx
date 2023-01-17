import React, { useState } from "react";
import { memo } from "react";
import { Switch } from "antd";

const PatientStatusAction = ({ status }) => {
  // console.log("stattus", status);
  let convertedStatus = status ? 1 : 0;

  const [value, setValue] = useState(convertedStatus);
  let BoleanToNumber = value ? 1 : 0;
  console.log(BoleanToNumber);

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
