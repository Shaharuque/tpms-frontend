import React, { useState } from "react";
import Clearance from "./Credentials/Clearance/Clearance";
import Credential from "./Credentials/Credential/Credential";
import Qualification from "./Credentials/Qualification/Qualification";

const Credentials = () => {
  const [credentialOpen, setCredentialOpen] = useState(true);
  const [clearenceOpen, setClearenceOpen] = useState(false);
  const [qualificationOpen, setQualificationOpen] = useState(false);
  const handleCredential = () => {
    setCredentialOpen(!credentialOpen);
    setClearenceOpen(false);
    setQualificationOpen(false);
  };
  const handleClearence = () => {
    setClearenceOpen(!clearenceOpen);
    setCredentialOpen(false);
    setQualificationOpen(false);
  };
  const handleQualification = () => {
    setQualificationOpen(!qualificationOpen);
    setCredentialOpen(false);
    setClearenceOpen(false);
  };
  return (
    <div className={"h-[100vh]"}>
      <div>
        <Credential
          handleCredential={handleCredential}
          credentialOpen={credentialOpen}
        ></Credential>
      </div>
      <div>
        <Clearance
          handleClearence={handleClearence}
          clearenceOpen={clearenceOpen}
        ></Clearance>
      </div>
      <div>
        <Qualification
          handleQualification={handleQualification}
          qualificationOpen={qualificationOpen}
        ></Qualification>
      </div>
    </div>
  );
};

export default Credentials;
