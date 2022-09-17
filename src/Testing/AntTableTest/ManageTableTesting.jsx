import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useOutsideAlerter } from "../../CustomHooks/useDetectOutsideClick";
import EditSession from "../../Pages/Admin/Appointment/ListView/ListView/EditSession";
import SessionAddNote from "../../Pages/Admin/Appointment/ListView/ListView/SessionAddNote";
import SessionViewNote from "../../Pages/Admin/Appointment/ListView/ListView/SessionViewNote";

const ManageTableTesting = ({ row }) => {
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
      <div className="absolute bg-white border shadow-md px-3 py-4  right-[-20px] w-[150px] rounded-md">
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

export default ManageTableTesting;
