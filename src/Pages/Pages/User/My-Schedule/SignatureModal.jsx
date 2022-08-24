import { Dialog } from "@mui/material";
import React from "react";

const SignatureModal = ({ handleClose, open, row }) => {
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5 box">
          <h1 className="text-lg  text-left text-orange-400">Signature</h1>

          <button
            className=" py-[5px] mt-7 px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
            autoFocus
            onClick={handleClose}
          >
            X
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default SignatureModal;
