import React from "react";
import { Link } from "react-router-dom";

const PatientAuthorizationsTableActionModal = ({ row }) => {
  return (
    <div>
      <Link
        to={`/admin/patient/${row.original.id}/patient-authorization/${row.original.id}`}
        className="text-secondary text-xs font-normal "
      >
        Go To Auth
      </Link>
    </div>
  );
};

export default PatientAuthorizationsTableActionModal;
