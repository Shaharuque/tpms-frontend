import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import { memo } from "react";
import { useForm } from "react-hook-form";

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
        <div className="p-5 box">
          <h1 className="text-lg  text-left text-orange-400">Edit Document</h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("description")}
                />
              </div>

              <div>
                {" "}
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Expiry Date
                  </span>
                </label>
                <input
                  type="date"
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  {...register("expiry_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
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
            <div className="divider"></div>
            <div className="modal-action">
              {/* <input type="submit" /> */}
              <button
                className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleClose}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default memo(DocumentsActionModal);
