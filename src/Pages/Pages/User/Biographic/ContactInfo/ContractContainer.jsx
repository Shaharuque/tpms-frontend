import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import EmargencyContact from "./EmargencyContact";

const ContractContainer = () => {
  const [open, setOpen] = useState(true);
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  const contactDetailsHandle = () => {
    setOpen(!open);
    setEmergencyOpen(false);
  };
  const emergencyContactHandle = () => {
    setEmergencyOpen(!emergencyOpen);
    setOpen(false);
  };
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
          <ContactInfo></ContactInfo>
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
          <EmargencyContact></EmargencyContact>
        </>
      )}
    </div>
  );
};

export default ContractContainer;
