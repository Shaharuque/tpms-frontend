import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";
import EditSession from "./EditSession";
import SessionAddNote from "./SessionAddNote";
import SessionViewNote from "./SessionViewNote";
import { Menu } from "antd";

const ManageTableAction = ({ row }) => {
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
        <div className=" bg-white border shadow-md px-3 py-4 z-30 right-[-20px] w-[150px] rounded-md">
          <button
            className="text-sm hover:text-secondary flex items-center font-normal  gap-2"
            onClick={() => addNoteHandler()}
          >
            <AiOutlinePlus /> Add Note
          </button>
          <br />
          <button
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            onClick={viewNoteHandler}
          >
            <AiOutlineEye /> View Note
          </button>
          <br />
          <button
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            onClick={editSessionHandler}
          >
            <MdOutlineModeEditOutline /> Edit Session
          </button>
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
        <EditSession handleClose={handleClose} open={editSession}></EditSession>
      )}
    </div>
  );
};

export default ManageTableAction;
