import React from "react";
import { Link } from "react-router-dom";

const Patients = () => {
  return (
    <div>
      <Link to={"/patient-info"}> Click Here </Link>
    </div>
  );
};

export default Patients;
