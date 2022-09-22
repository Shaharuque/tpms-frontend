import React from "react";
import Clearance from "./Credentials/Clearance/Clearance";
import Credential from "./Credentials/Credential/Credential";
import Qualification from "./Credentials/Qualification/Qualification";

const Credentials = () => {
  return (
    <div className="h-[100vh]">
      <Credential></Credential>
      <Clearance></Clearance>
      <Qualification></Qualification>
    </div>
  );
};

export default Credentials;
