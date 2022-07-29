import React, { useState } from "react";
import { motion } from "framer-motion";
import "../staff.css";
import CredentialsModal from "./CredentialsModal";

const CredentialsBoxOne = ({ name }) => {
  const [tableOpen, setTableOpen] = useState(true);
  const [display, setDisplay] = useState(true);
  const handleTable = () => {
    setTableOpen(!tableOpen);
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
  };
  return (
    <div>
      <h2
        onClick={handleTable}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        {name}
      </h2>
      {tableOpen && (
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            {display && (
              <p className="px-4 py-3 my-4 mx-2 flex items-center justify-between rounded-md text-red-600 font-normal text-xs red-box">
                <p>No {name} Records</p>
                <button
                  onClick={() => setDisplay(false)}
                  className="text-black"
                >
                  X
                </button>
              </p>
            )}
            <div className="my-4 ml-2">
              <button
                className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                onClick={handleClickOpen}
              >
                Add {name}
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {openEditModal && (
        <CredentialsModal
          handleClose={handleClose}
          open={openEditModal}
          name={name}
        ></CredentialsModal>
      )}
    </div>
  );
};

export default CredentialsBoxOne;
