import React, { useState } from "react";
import { memo } from "react";
import { Switch } from "antd";

const PatientStatusAction = ({ status }) => {
  console.log(status);
  // let changedStatus;
  // if (status === "true") {
  //   changedStatus = 1;
  // } else if (status === "false") {
  //   changedStatus = 0;
  // }
  const [value, setValue] = useState();
  console.log(value);

  return (
    <div className="flex items-center justify-center">
      <label className="inline-flex relative items-center  cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={status ? true : false}
          // onClick={() => setValue((current) => current)}
          onClick={() => setValue(!status)}
          className="sr-only peer"
        />
        <div className="w-[30px] h-[17px] bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      </label>

      {/* <Switch
        size="small"
        // defaultChecked={status ? true : false}
        // // checked={status ? true : false}
        // onClick={() => setValue(!status)}
        defaultChecked={status ? true : false}
        onClick={() => setValue((current) => !current)}
      /> */}
      {/* {!status ? (
        <h1 className="ml-1">In-Active</h1>
      ) : (
        <h1 className="ml-1">Active</h1>
      )} */}
    </div>
  );
};

export default memo(PatientStatusAction);
