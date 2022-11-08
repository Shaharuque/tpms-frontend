import React, { useState } from "react";
import { memo } from "react";
import { Switch } from "antd";

const PatientStatusAction = ({ status }) => {
  // let changedStatus;
  // if (status === "true") {
  //   changedStatus = 1;
  // } else if (status === "false") {
  //   changedStatus = 0;
  // }
  const [value, setValue] = useState();
  console.log(value);

  return (
    <div className="flex ">
      <Switch
        size="small"
        checked={status ? true : false}
        // onClick={() => setValue(!status)}
      />
      {!status ? (
        <h1 className="ml-1">In-Active</h1>
      ) : (
        <h1 className="ml-1">Active</h1>
      )}
    </div>
  );
};

export default memo(PatientStatusAction);
