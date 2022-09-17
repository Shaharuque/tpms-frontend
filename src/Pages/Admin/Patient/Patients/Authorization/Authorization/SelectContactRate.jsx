import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Dialog } from "@mui/material";

const SelectContactRate = ({ handleClose, open, editableRow }) => {
  return (
    <div>
      <div>
        <Dialog
          maxWidth="xl"
          open={open}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box sm:w-[1400px] ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Edit Document
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary "
              />
            </div>

            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Copy
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SelectContactRate;
