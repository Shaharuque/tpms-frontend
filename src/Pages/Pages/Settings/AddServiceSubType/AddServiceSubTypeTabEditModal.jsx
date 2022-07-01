import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
export default function AddServiceSubTypeTabEditModal({
  handleClose,
  open,
  row,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  // console.log("row", row.original.place_of_Service);
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-10 box">
          {/* <h1>{row.original.place_of_Service}</h1> */}
          <h1 className="text-lg  text-left text-orange-400">
            Add/Edit Service Sub Type
          </h1>
          <div className="divider"></div>
          {row ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="flex items-center text-sm gap-5"> */}
              <div className="">
                <div>
                  <label className="label">
                    <span className="text-sm">Description</span>
                  </label>
                  <input
                    value={row.original.place_of_Service}
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("description")}
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
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="flex items-center text-sm gap-5"> */}
              <div className="">
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
          )}
        </div>
      </Dialog>
    </div>
  );
}
