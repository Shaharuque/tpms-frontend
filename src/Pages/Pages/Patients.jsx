import React from "react";
import { Link } from "react-router-dom";

const Patients = () => {
  return (
    <div className="h-[100vh]">
      <Link to={"/patient-info"}> Click Here </Link>
    </div>
  );
};

export default Patients;
