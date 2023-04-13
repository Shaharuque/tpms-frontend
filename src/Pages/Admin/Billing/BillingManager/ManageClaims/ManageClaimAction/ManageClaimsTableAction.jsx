import React, { useState } from "react";
import { AiFillEye, AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import {
  MdHistory,
  MdOutlineEditNote,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import { Menu } from "antd";
import SessionAddNote from "../../../../Appointment/ListView/ListView/SessionAddNote";
import SessionViewNote from "../../../../Appointment/ListView/ListView/SessionViewNote";
import EditSession from "../../../../Appointment/ListView/ListView/EditSession";
import { useOutsideAlerter } from "../../../../../../CustomHooks/useDetectOutsideClick";
import CorrectedClaim from "./CorrectedClaim";
import { RiDownloadLine } from "react-icons/ri";

const ManageClaimsTableAction = ({ row }) => {
  const { ref, visible, setVisible } = useOutsideAlerter(false);
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [editSession, setEditSession] = useState(false);
  //const [open, setOpen] = useState(false);

  const handleOpenAction = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const addNoteHandler = () => {
    setVisible(false);
    setOpenAddNote(true);
  };
  const viewNoteHandler = () => {
    setVisible(false);
    setOpenViewNote(true);
  };
  const editSessionHandler = () => {
    setVisible(false);
    setEditSession(true);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
    setEditSession(false);
  };

  return (
    <div>
      {!editSession && !openAddNote && !openViewNote ? (
        <div className=" bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[170px] rounded-sm">
          <div>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[150px] border border-secondary"
              onClick={() => addNoteHandler()}
            >
              <AiFillEye className="text-sm" /> View HCFA
            </button>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[150px] border border-secondary"
              onClick={viewNoteHandler}
            >
              <RiDownloadLine className="text-sm" /> Downlod EDI
            </button>
            <button
              className="text-xs text-secondary px-2 py-1 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[150px] border border-secondary"
              onClick={editSessionHandler}
            >
              <MdHistory className="text-sm" /> Revalidate 277CA
            </button>

            <button
              className="text-xs text-secondary px-2 mt-2 py-1 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold  w-[150px] border border-secondary gap-1"
              onClick={editSessionHandler}
            >
              <MdOutlineEditNote className="text-sm" /> Corrected Claim
            </button>
          </div>
        </div>
      ) : null}
      {openAddNote && (
        <SessionAddNote
          handleClose={handleClose}
          open={openAddNote}
          editableRow={row}
        ></SessionAddNote>
      )}
      {openViewNote && (
        <SessionViewNote
          handleClose={handleClose}
          open={openViewNote}
          editableRow={row}
        ></SessionViewNote>
      )}
      {editSession && (
        <CorrectedClaim
          handleClose={handleClose}
          open={editSession}
        ></CorrectedClaim>
      )}
    </div>
  );
};

export default ManageClaimsTableAction;
