import React, { useState } from "react";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsVectorPen } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddNoteModal from "./AddNoteModal";

const MyScheduleAction = ({ row }) => {
  const [openAddNote, setOpenAddNote] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenAction = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpenAddNote(false);
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
          <Link
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            to={"/admin"}
          >
            <AiOutlineEye /> View Note
          </Link>
          <br />
          <Link
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            to={"/admin"}
          >
            <GoLocation /> Address
          </Link>
          <br />
          <Link
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            to={"/admin"}
          >
            <MdOutlineModeEditOutline /> Edit Session
          </Link>
          <br />
          <Link
            className="text-sm hover:text-secondary flex items-center font-normal gap-2"
            to={"/admin"}
          >
            <BsVectorPen /> View Signature
          </Link>
        </div>
      )}
      {openAddNote && (
        <AddNoteModal
          handleClose={handleClose}
          open={openAddNote}
          editableRow={row}
        ></AddNoteModal>
      )}
    </div>
  );
};

export default MyScheduleAction;
