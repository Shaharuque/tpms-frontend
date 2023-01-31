import React, { useState } from "react";
import AddBillerLog from "./Components/AddBillerLog";
import BillerLogTable from "./Components/BillerLogTable";

const BillerlogUser = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClose = () => {
    setOpenEditModal(false);
  };
  const handleClickOpen = () => {
    setOpenEditModal(true);
    console.log("hihih");
  };
  return (
    <div className="h-[100vh]">
      <div className="md:flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 font-medium text-orange-400">Company</h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <button onClick={handleClickOpen} className=" pms-button mr-2">
              Create BillerLog User
            </button>
          </label>
        </div>
      </div>

      <BillerLogTable></BillerLogTable>
      {openEditModal && (
        <AddBillerLog
          handleClose={handleClose}
          open={openEditModal}
        ></AddBillerLog>
      )}
    </div>
  );
};

export default BillerlogUser;
