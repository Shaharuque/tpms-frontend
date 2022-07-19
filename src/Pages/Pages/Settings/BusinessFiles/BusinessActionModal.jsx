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
            <div className="flex items-center text-sm">
              <div>
                <label className="label">
                  <span className="text-sm">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("description")}
                />
              </div>
              <div className=" ">
                <label className="label">
                  <span className="text-sm ml-2 mb-2 mt-[-2px]">
                    Upload File
                  </span>
                </label>
                <input
                  type="file"
                  className=" border bg-white rounded-sm  mx-3 text-xs"
                  {...register("fileName")}
                />
              </div>
            </div>
            <div className="divider"></div>
            <div className="modal-action">
              {/* <input type="submit" /> */}
              <input
                type="submit"
                value={"SAVE"}
                className="px-5  py-2 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              />
              <button
                className="px-5  bg-gradient-to-r from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
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
