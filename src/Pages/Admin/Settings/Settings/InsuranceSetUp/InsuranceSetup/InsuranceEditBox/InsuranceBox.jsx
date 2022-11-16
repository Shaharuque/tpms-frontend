import React, { useState } from "react";
import Box32 from "./Box32";
import Box33 from "./Box33";

const InsuranceBox = () => {
  const [box33, setBox33] = useState(true);
  const [box32, setBox32] = useState(false);
  const handleBox32 = () => {
    setBox32(!box32);
    setBox33(false);
  };
  const handleBox33 = () => {
    setBox33(!box33);
    setBox32(false);
  };
  return (
    <div>
      <Box33 handleBox33={handleBox33} box33={box33}></Box33>
      <Box32 handleBox32={handleBox32} box32={box32}></Box32>
      <div className="bg-gray-200  py-[1px] my-5"></div>
    </div>
  );
};

export default InsuranceBox;
