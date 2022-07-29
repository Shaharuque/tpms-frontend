import React from "react";
import ContactDetailsOne from "./ContactDetails/ContactDetailsOne";
import ContactDetailsTwo from "./ContactDetails/ContactDetailsTwo";

const ContactDetails = () => {
  return (
    <div className="md:h-[100vh]">
      <h1 className=" text-orange-400">Contact Details</h1>
      <ContactDetailsOne></ContactDetailsOne>
      <ContactDetailsTwo></ContactDetailsTwo>
    </div>
  );
};

export default ContactDetails;
