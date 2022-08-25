import React, { useState } from "react";
import { BsVectorPen } from "react-icons/bs";
import SignatureModal from "./SignatureModal";

const ProviderNameAction = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <>
        <div className="font-normal text-xs flex items-center justify-center gap-2">
          Patient name
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
    </div>
  );
};

export default ProviderNameAction;
