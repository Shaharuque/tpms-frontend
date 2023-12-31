import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import SessionAddNote from "./SessionAddNote";
import SessionViewNote from "./SessionViewNote";
import EditSession from "./EditSession";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";

const ActionPart = ({ row }) => {
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

  console.log(visible, setVisible);
  //   const handleContactClose = () => {
  //     setOpenContactModal(false);
  //   };
  return (
    <div ref={ref}>
      <BsThreeDots
        onClick={handleOpenAction}
        className="text-secondary mx-auto text-sm"
      />
      {visible && (
        <div className="absolute bg-white border shadow-md px-3 py-4  right-[39px] w-[175px]">
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

export default ActionPart;
