import React, { useState } from "react";
import PayorExistingTable from "./PayorExistingTable/PayorExistingTable";
import PayorInfo from "./PayorInfo/PayorInfo";

const Payor = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
    console.log("hihih");
  };
  return (
    <div className="sm:h-[100vh]">
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 font-medium text-orange-400">
          Add/Edit Payor
        </h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <button onClick={handleClickOpen} className=" pms-button mr-2">
              + Add New Payor
            </button>
          </label>
        </div>
      </div>

      <PayorExistingTable></PayorExistingTable>
      {openEditModal && (
        <PayorInfo handleClose={handleClose} open={openEditModal}></PayorInfo>
      )}
    </div>
  );
};

export default Payor;
