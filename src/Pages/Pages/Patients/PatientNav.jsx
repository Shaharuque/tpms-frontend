import React from "react";
import CustomLink from "../Shared/CustomLink";
import "./Patient.css";

const PatientNav = ({ s }) => {
  const { name, link } = s;
  return (
    <div className="text-xs text-secondary font-normal patient-nav mb-2">
      <CustomLink
        className="flex gap-1 hover:text-white pb-1 hover:bg-primary  items-center"
        to={link}
      >
        <h1 className="ml-1 mt-1">{name}</h1>
      </CustomLink>
    </div>
  );
};

export default PatientNav;
