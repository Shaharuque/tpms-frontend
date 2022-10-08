import React, { memo, useState } from "react";
import InsuranceEditModal from "./InsuranceEditModal";
import { RiPencilLine } from "react-icons/ri";
const InsuranceEdit = ({ row }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <div className="flex justify-center">
        <button onClick={handleClickOpen} className="text-secondary">
          <RiPencilLine />
        </button>
      </div>
      {/* {openEditModal && (
        <InsuranceEditModal
          handleClose={handleClose}
          open={openEditModal}
          row={row}
        ></InsuranceEditModal>
      )} */}
    </div>
  );
};

export default memo(InsuranceEdit);
