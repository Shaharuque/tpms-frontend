import React, { useEffect, useState } from "react";
import ProviderContactInfo from "./ProviderContactInfo";
import ProviderEmargencyContact from "./ProviderEmargencyContact";
import useToken from "../../../../CustomHooks/useToken";
import axios from "axios";
import { providerIp } from "../../../../Misc/BaseClient";

const ProviderContractContainer = () => {
  const [open, setOpen] = useState(true);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [contactinfodata, setContactInfoData] = useState([]);

  const { token } = useToken();
  const contactDetailsHandle = () => {
    setOpen(!open);
    setEmergencyOpen(false);
  };
  const emergencyContactHandle = () => {
    setEmergencyOpen(!emergencyOpen);
    setOpen(false);
  };

  // /api/v1/provider/contact/info

  // api call
  useEffect(() => {
    const getProviderData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/contact/info`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      setContactInfoData(data);
      console.log("check data", data);
    };
    getProviderData();
  }, [token]);

  console.log("hello i am root ");
  return (
    <div>
      {/*Contact details part */}
      <button
        onClick={contactDetailsHandle}
        className="w-full py-1.5 px-2 text-white text-start font-normal text-xs leading-tight rounded shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out mb-4"
      >
        Contact Details
      </button>
      {open && (
        <>
          <ProviderContactInfo emoloyeeData={contactinfodata?.employee}></ProviderContactInfo>
        </>
      )}
      {/*Emergency contact details part */}
      <button
        onClick={emergencyContactHandle}
        className="w-full py-1.5 px-2 text-white text-start font-normal text-xs leading-tight rounded shadow-md bg-gradient-to-r from-secondary to-primary  hover:to-secondary transition duration-150 ease-in-out"
      >
        Emergency Contact Details
      </button>
      {emergencyOpen && (
        <>
          <ProviderEmargencyContact emdata={contactinfodata?.employee_em}></ProviderEmargencyContact>
        </>
      )}
    </div>
  );
};

export default ProviderContractContainer;
