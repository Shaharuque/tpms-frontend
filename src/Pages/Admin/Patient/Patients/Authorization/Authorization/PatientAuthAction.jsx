import React, { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import PatientAuthorizationsTableModal from "../../PatientAuthorizationsTableModal";

const PatientAuthAction = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  //console.log(row);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <>
      <button
        onClick={() => {
          setOpenEditModal(true);
        }}
      >
        <FaRegAddressCard className="text-xs mx-auto text-secondary" />
      </button>
      {openEditModal && (
        <PatientAuthorizationsTableModal
          handleClose={handleClose}
          open={openEditModal}
        ></PatientAuthorizationsTableModal>
      )}
    </>
  );
};

export default PatientAuthAction;
