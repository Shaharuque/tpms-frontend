import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const DocumentsActionModal = ({ handleClose, open, row }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(row);
  useEffect(() => {
    setTimeout(() => {
      reset({
        description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, row]);

  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="px-5 py-2 box sm:w-[550px]">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Edit Document
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  className="border-secondary border-b-2 rounded-sm px-2 py-[5px] mx-1 text-xs w-full focus:outline-none"
                  {...register("description")}
                />
              </div>

              <div>
                {" "}
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Expiry Date
                  </span>
                </label>
                <input
                  type="date"
                  // className="border border-gray-300 rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  className="border-secondary border-b-2 rounded-sm px-2 py-[4px] mx-1 text-xs w-full focus:outline-none"
                  {...register("expiry_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-semibold text-left">
                    Upload File
                  </span>
                </label>
                <input
                  type="file"
                  className=" px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("fileName")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
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
  );
};

export default memo(DocumentsActionModal);
