import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProviderCredenTial from "./ProviderCred/ProviderCredenTial";
import ProviderClearence from "./ProviderClearence/ProviderClearence";
import ProviderQualification from "./providerQualification/ProviderQualification";
import { providerIp } from "../../../../Misc/BaseClient";
import axios from "axios";
import useToken from "../../../../CustomHooks/useToken";
import { useGetProviderCredentialsQuery } from "../../../../features/ProviderPortal/providerCredentail_redux/ProviderCredentialApi";
import { useProvidergetClearenceQuery } from "../../../../features/ProviderPortal/providerCredentail_redux/ProviderClearenceApi";
import { useProvidergetQualificationQuery } from "../../../../features/ProviderPortal/providerCredentail_redux/ProviderQualificationApi";
import Loading from "../../../../Loading/Loading";
const ProviderCredentialsContainer = () => {
  const [credentialOpen, setCredentialOpen] = useState(true);
  const [clearenceOpen, setClearenceOpen] = useState(false);
  const [qualificationOpen, setQualificationOpen] = useState(false);
  // const { token } = useToken();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const { token } = useToken();

  //get all credential data api
  const { data: credentials, isLoading: credentialsLoading } = useGetProviderCredentialsQuery({
    token,
    id: id,
  });

  // get all clearence

  // useProvidergetQualificationQuery

  //get all clearence data api
  const { data: clearences, isLoading: clearenceLoading } = useProvidergetClearenceQuery({
    token,
    page: 1,
  });
  console.log("data", clearences);

  //get all Qualification data api
  const { data: qualification, isLoading: qualificationLoading } = useProvidergetQualificationQuery({
    token,
    page: 1,
    id: id,
  });

  console.log("qualification", qualification);

  if (credentialsLoading || clearenceLoading || qualificationLoading) {
    return <Loading></Loading>;
  }
  // console.log("qualification data", qualification);
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
        <ProviderCredenTial credentials={credentials} handleCredential={handleCredential} credentialOpen={credentialOpen}></ProviderCredenTial>
      </div>
      <div>
        <ProviderClearence clearences={clearences} handleClearence={handleClearence} clearenceOpen={clearenceOpen}></ProviderClearence>
      </div>
      <div>
        <ProviderQualification
          handleQualification={handleQualification}
          qualificationOpen={qualificationOpen}
          qualification={qualification}
        ></ProviderQualification>
      </div>
    </div>
  );
};

export default ProviderCredentialsContainer;
