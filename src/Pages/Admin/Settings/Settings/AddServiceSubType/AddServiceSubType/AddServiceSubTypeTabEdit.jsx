import React, { memo, useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddServiceSubTypeTabEditModal from "./AddServiceSubTypeTabEditModal";

const AddServiceSubTypeTabEdit = ({ row }) => {
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
        <AddServiceSubTypeTabEditModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></AddServiceSubTypeTabEditModal>
      )}
    </div>
  );
};

export default memo(AddServiceSubTypeTabEdit);
