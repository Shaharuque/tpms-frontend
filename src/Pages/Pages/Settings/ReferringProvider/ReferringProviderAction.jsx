import React, { memo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ReferringProviderActionModal from "./ReferringProviderActionModal";

const ReferringProviderAction = ({ row }) => {
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
        <ReferringProviderActionModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></ReferringProviderActionModal>
      )}
    </div>
  );
};

export default memo(ReferringProviderAction);
