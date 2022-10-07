import React, { memo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddServicesActionModal from "./AddServicesActionModal";

const AddServicesAction = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  // console.log("row=", row);

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleClickOpen} className="text-secondary">
          <FiEdit />
        </button>
        <div className="mx-2">|</div>
        <button className="text-sm mx-1  text-red-500">
          <AiOutlineDelete />
        </button>
      </div>
      {openEditModal && (
        <AddServicesActionModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></AddServicesActionModal>
      )}
    </div>
  );
};

export default memo(AddServicesAction);
