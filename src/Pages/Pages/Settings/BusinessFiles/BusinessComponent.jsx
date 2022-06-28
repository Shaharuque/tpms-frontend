import React, { memo, useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import BusinessActionModal from "./BusinessActionModal";

const BusinessComponent = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  console.log("row=", row);

  return (
    <div>
      <div className="flex justify-center">
        <button className="text-sm mx-1 text-secondary">
          <AiOutlineEye />
        </button>
        <button onClick={handleClickOpen} className="text-secondary">
          <AiOutlineEdit />
        </button>
        <button className="text-sm mx-1 text-secondary">
          <AiOutlineDelete />
        </button>
      </div>
      {openEditModal && (
        <BusinessActionModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></BusinessActionModal>
      )}
    </div>
  );
};

export default memo(BusinessComponent);
