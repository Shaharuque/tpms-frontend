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
        <div className=" bg-white py-2 border shadow-md flex justify-center z-30  w-[135px] rounded-sm">
          <div>
            <button
              className="text-xs text-secondary border px-[20px] py-1 mb-2 rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2"
              onClick={() => addNoteHandler()}
            >
              <AiOutlinePlus /> Add Note
            </button>
            <button
              className="text-xs text-secondary border px-[18px] py-1 mb-2 rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2"
              onClick={viewNoteHandler}
            >
              <AiOutlineEye /> View Note
            </button>
            <button
              className="text-xs text-secondary border px-[14px] py-1 rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2"
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
