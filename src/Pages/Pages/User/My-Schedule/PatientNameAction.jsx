import React, { useState } from "react";
import { BsVectorPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import SignatureModal from "./SignatureModal";
const PatientNameAction = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <>
      <div className="text-secondary font-normal text-xs flex items-center justify-center gap-2">
        <Link className="" to={"#"}>
          Patient name
        </Link>
        <BsVectorPen onClick={handleClickOpen} className="text-gray-500" />
      </div>
      {openEditModal && (
        <SignatureModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></SignatureModal>
      )}
    </>
  );
};

export default PatientNameAction;
