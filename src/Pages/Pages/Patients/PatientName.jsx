import React from "react";
import { Link } from "react-router-dom";

const PatientName = ({ row }) => {
  console.log(row);
  return (
    <Link
      to={`/admin/patient/${row.original.id}/patient-info/${row.original.id}`}
      className="text-secondary"
    >
      {row.original.Patient}
    </Link>
  );
};

export default PatientName;
