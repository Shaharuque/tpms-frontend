import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../../../../CustomHooks/useToken";
import { useGetClearenceQuery } from "../../../../../features/Stuff_redux/credentials/clearenceApi";
import { useGetcredentialsQuery } from "../../../../../features/Stuff_redux/credentials/credentialsApi";
import Loading from "../../../../../Loading/Loading";
import Clearance from "./Credentials/Clearance/Clearance";
import Credential from "./Credentials/Credential/Credential";
import Qualification from "./Credentials/Qualification/Qualification";

const Credentials = () => {
  const [credentialOpen, setCredentialOpen] = useState(true);
  const [clearenceOpen, setClearenceOpen] = useState(false);
  const [qualificationOpen, setQualificationOpen] = useState(false);
  const { token } = useToken();
  const { id } = useParams();

  //get all credential data api
  const { data: credentials, isLoading: credentialsLoading } =
    useGetcredentialsQuery({
      token,
      page: 1,
      id: id,
    });

  //get all clearence data api
  const { data: clearences, isLoading: clearenceLoading } =
    useGetClearenceQuery({
      token,
      page: 1,
      id: id,
    });
  if (credentialsLoading || clearenceLoading) {
    return <Loading></Loading>;
  }
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
          credentials={credentials}
          handleCredential={handleCredential}
          credentialOpen={credentialOpen}
        ></Credential>
      </div>
      <div>
        <Clearance
          clearences={clearences}
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
