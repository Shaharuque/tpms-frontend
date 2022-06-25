import React, { useState } from "react";
import TimePicker from "react-time-picker";
import Test from "../Components/Test";

const Patients = () => {
  const [value, onChange] = useState("");
  console.log(value);
  return (
    <div>
      <Test></Test>
    </div>
  );
};

export default Patients;
