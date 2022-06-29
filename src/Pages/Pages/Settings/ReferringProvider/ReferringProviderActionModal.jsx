import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
export default function ReferringProviderActionModal({
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
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5 box">
          {/* <h1>{row.original.place_of_Service}</h1> */}
          <h1 className="text-lg  text-left text-orange-400">Edit Document</h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 mr-2 gap-5">
              <div>
                <label className="label">
                  <span className="text-sm">Provider First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider First Name"
                  name="first_name"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("first_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-sm">Provider Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Provider First Name"
                  name="last_name"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("last_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-sm">NPI</span>
                </label>
                <input
                  type="number"
                  placeholder="NPI"
                  name="npi"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("npi")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-sm">UPIN</span>
                </label>
                <input
                  type="number"
                  placeholder="UPIN"
                  name="upin"
                  className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                  {...register("upin")}
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
