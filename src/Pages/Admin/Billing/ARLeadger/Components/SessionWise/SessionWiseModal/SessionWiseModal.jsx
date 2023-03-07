import React, { useState } from "react";
import { BiPlusCircle, BiCommentDetail } from "react-icons/bi";
import SessionAddNote from "./SessionAddNote";
import SessionArFollowUp from "./SessionArFollowUp";

const SessionWiseModal = ({ record }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openARFollowup, setOpenARFollowup] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleArClickOpen = () => {
    setOpenARFollowup(true);
  };

  const handleArClose = () => {
    setOpenARFollowup(false);
  };
  return (
    <div>
      <div className="flex justify-center gap-2">
        <button
          onClick={handleClickOpen}
          className="text-secondary text-[16px]"
        >
          <BiPlusCircle />
        </button>
        <button
          onClick={handleArClickOpen}
          className="text-sm mx-1 text-secondary"
        >
          <BiCommentDetail />
        </button>
      </div>
      {openEditModal && (
        <SessionAddNote
          handleClose={handleClose}
          open={openEditModal}
        ></SessionAddNote>
      )}
      {openARFollowup && (
        <SessionArFollowUp
          handleClose={handleArClose}
          open={openARFollowup}
        ></SessionArFollowUp>
      )}
    </div>
  );
};

export default SessionWiseModal;
