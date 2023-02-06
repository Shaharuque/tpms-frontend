import React, { memo, useState } from "react";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import useToken from "../../../../../../CustomHooks/useToken";
import { useDocumentDeleteMutation } from "../documentsAPI";
import DocumentsActionModal from "./DocumentsActionModal";

const DocumentsAction = ({ id, fileName }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const { token } = useToken();
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const [documentDelete, { data, isSuccess, isError }] =
    useDocumentDeleteMutation();
  console.log("----", data);
  const handleDelete = (id) => {
    const payload = {
      document_id: id,
    };
    documentDelete({ token, payload });
  };
  return (
    <div>
      <div className="flex justify-center gap-2">
        <button className="text-sm mx-1 text-green-600">
          <Link to={`/${fileName}`}>
            <AiOutlineEye />
          </Link>
        </button>
        <button onClick={handleClickOpen} className="text-secondary">
          <AiOutlineEdit />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="text-sm mx-1 text-rose-600"
        >
          <AiOutlineDelete />
        </button>
      </div>
      {openEditModal && (
        <DocumentsActionModal
          handleClose={handleClose}
          open={openEditModal}
          id={id}
        ></DocumentsActionModal>
      )}
    </div>
  );
};

export default memo(DocumentsAction);
