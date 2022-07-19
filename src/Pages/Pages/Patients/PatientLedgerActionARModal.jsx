import { Dialog } from "@mui/material";
import React from "react";
import img1 from "../../Assets/doctor.png";

const PatientLedgerActionARModal = ({ handleClose, open, row }) => {
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5 box">
          <h1 className="text-lg  text-left text-orange-400">Ar Followup</h1>
          <div className="divider"></div>
          <div className="flex items-center gap-2">
            <img src={img1} className="w-16 h-16" alt="" />
            <div className="border p-2">
              <div className="flex items-center gap-1 ">
                <h1 className="text-orange-400 text-lg font-medium">
                  Ashish test Soni
                </h1>
                <span className=" text-xs bg-gray-500 text-white px-1 rounded-md">
                  Add Info patient
                </span>
                <h5 className="text-xs text-gray-400 ">(09/09/2021 6:09 PM)</h5>
              </div>
              <div className="divider"></div>
              <p>duhfudihfin</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <img src={img1} className="w-16 h-16" alt="" />
            <div className="border p-2">
              <div className="flex items-center gap-1 ">
                <h1 className="text-orange-400 text-lg font-medium">
                  Ashish test Soni
                </h1>
                <span className=" text-xs bg-gray-500 text-white px-1 rounded-md">
                  Add Info patient
                </span>
                <h5 className="text-xs text-gray-400 ">(09/09/2021 6:09 PM)</h5>
              </div>
              <div className="divider"></div>
              <p>duhfin</p>
            </div>
          </div>
          <div className="modal-action">
            {/* <input type="submit" /> */}
            {/* <button
              className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button> */}

            <button
              className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
              autoFocus
              onClick={handleClose}
            >
              CANCEL
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PatientLedgerActionARModal;
