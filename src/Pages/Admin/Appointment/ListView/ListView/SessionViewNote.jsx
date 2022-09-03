import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const SessionViewNote = ({ handleClose, open, editableRow }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({});
    }, 500);
  }, [reset, editableRow]);
  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box sm:w-[400px]">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400">View Notes</h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 text-left">
                    Select Form
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("service")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button
                  className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                  type="submit"
                  onClick={handleClose}
                >
                  Save
                </button>

                <button
                  className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                  autoFocus
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default SessionViewNote;
