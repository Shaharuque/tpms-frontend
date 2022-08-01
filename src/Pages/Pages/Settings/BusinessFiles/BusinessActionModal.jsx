import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
export default function BusinessActionModal({ handleClose, open, row }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5">
          <h1 className="text-lg  text-left text-orange-400">Edit Document</h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-3 text-sm">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                  {...register("description")}
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
                  className=" py-[5px] mx-1 text-xs w-full"
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
                className="py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
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
}
