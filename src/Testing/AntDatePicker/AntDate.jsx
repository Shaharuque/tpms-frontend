import { DatePicker } from "antd";
import React from "react";
function onChange(date, dateString) {
  console.log(date, dateString);
}

const AntDate = () => {
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
};

export default AntDate;
