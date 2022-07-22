import React from "react";
import { Link } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";

const PatientAuthAction = ({ row }) => {
  console.log(row);
  return (
    <Link
      to={`/patient/${row.original.id}/patient-authorization/${row.original.id}`}
      className="text-secondary text-sm "
    >
      <FaRegAddressCard className="mx-auto" />
    </Link>
  );
};

export default PatientAuthAction;
