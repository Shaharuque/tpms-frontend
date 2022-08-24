import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import SessionAddNote from "./SessionAddNote";
import SessionViewNote from "./SessionViewNote";
import EditSession from "./EditSession";

const ManageTableAction = ({ row }) => {
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [editSession, setEditSession] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenAction = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
    setEditSession(false);
  };
  //   const handleContactClose = () => {
  //     setOpenContactModal(false);
  //   };
  return (
    <div>
      <BsThreeDots
        onClick={handleOpenAction}
        className="text-secondary mx-auto text-sm"
      />
      {open && (
        <div className="absolute bg-white border shadow-md px-3 py-4  right-[39px] w-[175px]">
          <button
            className="text-sm hover:text-secondary flex items-center font-normal  gap-2"
            onClick={() => setOpenAddNote(true)}
          >
            <AiOutlinePlus /> Add Note
          </button>
          <br />
          <button
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            onClick={() => setOpenViewNote(true)}
          >
            <AiOutlineEye /> View Note
          </button>
          <br />
          <button
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            onClick={() => setEditSession(true)}
          >
            <MdOutlineModeEditOutline /> Edit Session
          </button>
        </div>
      )}
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
        <EditSession
          handleClose={handleClose}
          open={editSession}
          editableRow={row}
        ></EditSession>
      )}
    </div>
  );
};

export default ManageTableAction;
