import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../../../../CustomHooks/useToken";
import { useGetAllStaffQuery } from "../../../../../features/Stuff_redux/contactInfo/contactInfoApi";
import ContactDetailsOne from "./ContactDetails/ContactDetailsOne";
import ContactDetailsTwo from "./ContactDetails/ContactDetailsTwo";

const ContactDetails = () => {
  const [contactDetails, SetContactDetails] = useState(true);
  const [emergency, setEmergency] = useState(false);
  const { token } = useToken();
  const { id } = useParams();
  console.log(id);
  const {
    data: contactData,
    isLoading,
    isError,
    error,
  } = useGetAllStaffQuery({ token, id });
  // console.log("contactData", contactData);
  const handleContactDetails = () => {
    SetContactDetails(!contactDetails);
    setEmergency(false);
  };
  const handleEmergencyDetails = () => {
    setEmergency(!emergency);
    SetContactDetails(false);
  };
  // api fetch

  return (
    <div className="md:h-[100vh]">
      <h1 className=" text-orange-400">Contact Details</h1>
      {contactData?.contact_details && contactData?.status === "success" && (
        <ContactDetailsOne
          handleContactDetails={handleContactDetails}
          contactDetails={contactDetails}
          contactApiData={contactData?.contact_details}
        ></ContactDetailsOne>
      )}
      {/* emergency_contact_details */}

      {contactData?.emergency_contact_details &&
        contactData?.status === "success" && (
          <ContactDetailsTwo
            handleEmergencyDetails={handleEmergencyDetails}
            emergency={emergency}
            emergencyApiData={contactData?.emergency_contact_details}
          ></ContactDetailsTwo>
        )}
    </div>
  );
};

export default ContactDetails;
