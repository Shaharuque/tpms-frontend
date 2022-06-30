import React, { memo } from "react";

const CmsInput = ({ row }) => {
  console.log(row);
  const inputHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        name="cms"
        className="page w-32 p-1"
        onChange={inputHandle}
        type="text"
      ></input>
    </div>
  );
};

export default memo(CmsInput);
