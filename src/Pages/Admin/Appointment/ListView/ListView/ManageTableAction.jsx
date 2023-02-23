import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";
import EditSession from "./EditSession";
import SessionAddNote from "./SessionAddNote";
import SessionViewNote from "./SessionViewNote";
import SessionCopyNote from "./SessionCopyNote";
import AddProgram from "./AddProgram";

const ManageTableAction = ({ row, appointmentId, isLocked }) => {
  console.log("for edit purpose", isLocked);
  const { ref, visible, setVisible } = useOutsideAlerter(false);
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [editSession, setEditSession] = useState(false);
  const [copyNote, setCopyNote] = useState(false);
  const [addProgram, setAddProgram] = useState(false);
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
  const copyNoteHandler = () => {
    setVisible(false);
    setCopyNote(true);
  };
  const addProgramHandler = () => {
    setVisible(false);
    setAddProgram(true);
  };
  const editSessionHandler = () => {
    setVisible(false);
    setEditSession(true);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
    setEditSession(false);
    setCopyNote(false);
    setAddProgram(false);
  };

  return (
    <div>
      {!editSession && !openAddNote && !openViewNote ? (
        <div className=" bg-white py-2 border shadow-xl flex flex-col items-center z-30  w-[130px] rounded-sm">
          <div>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
              onClick={() => addNoteHandler()}
            >
              <AiOutlinePlus className="text-sm" /> Add Note
            </button>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
              onClick={viewNoteHandler}
            >
              <AiOutlineEye className="text-sm" /> View Note
            </button>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
              onClick={copyNoteHandler}
            >
              <FiCopy className="text-sm" /> Copy Note
            </button>
            <button
              className="text-xs text-secondary px-2 py-1 mb-2 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
              onClick={addProgramHandler}
            >
              <AiOutlinePlus className="text-sm" /> Add Program
            </button>

            {isLocked !== 1 && (
              <>
                <button
                  className="text-xs text-secondary px-2 py-1 rounded-sm hover:text-white hover:bg-secondary flex items-center font-bold gap-1 w-[110px] border border-secondary"
                  onClick={editSessionHandler}
                >
                  <MdOutlineModeEditOutline className="text-sm" /> Edit Session
                </button>
              </>
            )}
          </div>
        </div>
      ) : null}
      {openAddNote && (
        <SessionAddNote
          handleClose={handleClose}
          open={openAddNote}
        ></SessionAddNote>
      )}
      {openViewNote && (
        <SessionViewNote
          handleClose={handleClose}
          open={openViewNote}
        ></SessionViewNote>
      )}
      {copyNote && (
        <SessionCopyNote
          handleClose={handleClose}
          open={copyNote}
        ></SessionCopyNote>
      )}
      {addProgram && (
        <AddProgram handleClose={handleClose} open={addProgram}></AddProgram>
      )}
      {editSession && (
        <EditSession
          handleClose={handleClose}
          openEdit={editSession}
          appointmentId={appointmentId}
        ></EditSession>
      )}
    </div>
  );
};

export default ManageTableAction;
