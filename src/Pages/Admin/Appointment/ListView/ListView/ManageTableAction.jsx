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
        <div className=" bg-white border shadow-md flex justify-center py-2 z-30 right-[-20px] w-[135px] rounded-md">
          <div>
            <button
              className="text-sm hover:text-secondary flex items-center font-normal  my-1 gap-2"
              onClick={() => addNoteHandler()}
            >
              <AiOutlinePlus /> Add Note
            </button>
            <button
              className="text-sm hover:text-secondary flex items-center font-normal my-1 gap-2"
              onClick={viewNoteHandler}
            >
              <AiOutlineEye /> View Note
            </button>
            <button
              className="text-sm hover:text-secondary flex items-center font-normal my-1 gap-2"
              onClick={editSessionHandler}
            >
              <MdOutlineModeEditOutline /> Edit Session
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
        <EditSession handleClose={handleClose} open={editSession}></EditSession>
      )}
    </div>
  );
};

export default ManageTableAction;
