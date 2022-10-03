import React, { useState } from "react";
import Clearence from "./Clearence";
import CredenTial from "./CredenTial";
import Qualification from "./Qualification";

const CredentialsContainer = () => {
  const [credential, setCredential] = useState(true);
  const [clearence, setClearence] = useState(false);
  const [qualification, setQualification] = useState(false);

  const credentialHandle = () => {
    setCredential(!credential);
    setClearence(false);
    setQualification(false);
  };
  const clearanceHandle = () => {
    setClearence(!clearence);
    setCredential(false);
    setQualification(false);
  };
  const qualificationHandle = () => {
    setQualification(!qualification);
    setClearence(false);
    setCredential(false);
  };
  return (
    <div className="p-2">
      {/*Credentails part */}
      <h4 className="text-md text-left text-orange-400 mb-4">Credentials</h4>
      <button
        onClick={credentialHandle}
        className="w-full py-1.5 px-2 text-white text-start font-normal text-xs leading-tight rounded shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out"
      >
        Credentails
      </button>
      {credential && (
        <>
          <CredenTial></CredenTial>
        </>
      )}
      {/*clearence part */}
      <button
        onClick={clearanceHandle}
        className="w-full py-1.5 px-2 text-white text-start font-normal text-xs leading-tight rounded shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out mt-4"
      >
        Clearance
      </button>
      {clearence && (
        <>
          <Clearence></Clearence>
        </>
      )}
      {/*qualification part */}
      <button
        onClick={qualificationHandle}
        className="w-full py-1.5 px-2 text-white text-start font-normal text-xs leading-tight rounded shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out mt-4"
      >
        Qualification
      </button>
      {qualification && (
        <>
          <Qualification></Qualification>
        </>
      )}
    </div>
  );
};

export default CredentialsContainer;
