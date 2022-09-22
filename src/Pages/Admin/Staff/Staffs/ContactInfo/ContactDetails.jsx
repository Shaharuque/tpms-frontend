import React, { useState } from "react";
import ContactDetailsOne from "./ContactDetails/ContactDetailsOne";
import ContactDetailsTwo from "./ContactDetails/ContactDetailsTwo";

const ContactDetails = () => {
  const [contactDetails, SetContactDetails] = useState(true);
  const [emergency, setEmergency] = useState(false);
  const handleContactDetails = () => {
    SetContactDetails(!contactDetails);
    setEmergency(false);
  };
  const handleEmergencyDetails = () => {
    setEmergency(!emergency);
    SetContactDetails(false);
  };
  return (
    <div className="md:h-[100vh]">
      <h1 className=" text-orange-400">Contact Details</h1>
      <ContactDetailsOne
        handleContactDetails={handleContactDetails}
        contactDetails={contactDetails}
      ></ContactDetailsOne>
      <ContactDetailsTwo
        handleEmergencyDetails={handleEmergencyDetails}
        emergency={emergency}
      ></ContactDetailsTwo>
    </div>
  );
};

export default ContactDetails;
