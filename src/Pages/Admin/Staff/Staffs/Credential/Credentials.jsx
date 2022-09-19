import React from "react";
import CredentialsBoxOne from "./Credentials/CredentialsBoxOne";

const Credentials = () => {
  return (
    <div className="h-[100vh]">
      <CredentialsBoxOne name="Credential"></CredentialsBoxOne>
      <CredentialsBoxOne name="Clearance"></CredentialsBoxOne>
      <CredentialsBoxOne name="Qualification"></CredentialsBoxOne>
    </div>
  );
};

export default Credentials;
