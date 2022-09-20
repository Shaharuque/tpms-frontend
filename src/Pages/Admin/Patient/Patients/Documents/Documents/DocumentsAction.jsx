import React, { memo, useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import DocumentsActionModal from "./DocumentsActionModal";

const DocumentsAction = ({ id, fileName }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <div className="flex justify-center gap-2">
        <button className="text-sm mx-1 text-secondary">
          <Link to={`/${fileName}`}>
            <AiOutlineEye />
          </Link>
        </button>
        <button onClick={handleClickOpen} className="text-secondary">
          <AiOutlineEdit />
        </button>
        <button className="text-sm mx-1 text-secondary">
          <AiOutlineDelete />
        </button>
      </div>
      {openEditModal && (
        <DocumentsActionModal
          handleClose={handleClose}
          open={openEditModal}
        ></DocumentsActionModal>
      )}
    </div>
  );
};

export default memo(DocumentsAction);
