import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsVectorPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import ViewNote from "../User/My-Schedule/ViewNote";
import SessionAddNote from "./SessionAddNote";

const ManageTableAction = ({ row }) => {
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenAction = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
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
          <Link
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            to={"/admin"}
          >
            <MdOutlineModeEditOutline /> Edit Session
          </Link>
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
        <ViewNote
          handleClose={handleClose}
          open={openViewNote}
          editableRow={row}
        ></ViewNote>
      )}
    </div>
  );
};

export default ManageTableAction;
