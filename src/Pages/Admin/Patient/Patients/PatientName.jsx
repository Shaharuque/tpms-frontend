import React from "react";
import { Link } from "react-router-dom";

const PatientName = ({ row }) => {
  // console.log("row", row);
  return (
    <Link
      to={`/admin/patient/patient-info/${row.original.id}`}
      className="text-secondary"
    >
      {row.original.client_full_name}
    </Link>
  );
};

export default PatientName;
