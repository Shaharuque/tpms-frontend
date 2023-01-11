import React, { useState } from "react";
import CompanyDetails from "./CompanyDetails/CompanyDetails";
import ExitingFacilities from "./ExitingFacilities/ExitingFacilities";

const ExistingCompanyInfo = ({ setAddFacilities, addFacilities }) => {
  const [companyDetails, setCompanyDetails] = useState(true);
  const [exitingFacilities, setExitingFacilities] = useState(false);
  const handleExitingFacilities = () => {
    setExitingFacilities(!exitingFacilities);
    setCompanyDetails(false);
  };
  const handleCompanyDetails = () => {
    setCompanyDetails(!companyDetails);
    setExitingFacilities(false);
  };
  return (
    <div>
      <CompanyDetails
        setAddFacilities={setAddFacilities}
        addFacilities={addFacilities}
        handleCompanyDetails={handleCompanyDetails}
        companyDetails={companyDetails}
      ></CompanyDetails>
      <ExitingFacilities
        handleExitingFacilities={handleExitingFacilities}
        exitingFacilities={exitingFacilities}
      ></ExitingFacilities>
    </div>
  );
};

export default ExistingCompanyInfo;
