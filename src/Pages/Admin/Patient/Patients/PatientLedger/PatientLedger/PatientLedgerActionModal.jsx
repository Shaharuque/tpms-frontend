import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const PatientLedgerActionModal = ({ handleClose, open, row }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(row);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, row]);
  return (
    <div>
      <div>
        <Dialog
          // fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="p-5 box ">
            <h1 className="text-lg  text-left text-orange-400">
              Edit Document
            </h1>
            <div className="divider"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Description
                  </span>
                </label>
                <div>
                  <input
                    type="text"
                    name="description"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("description")}
                  />
                </div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Follow Up Date
                  </span>
                </label>
                <div>
                  <input
                    type="date"
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    {...register("follow_Date")}
                  />
                </div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Worked Date
                  </span>
                </label>
                <div>
                  <input
                    type="date"
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    {...register("worked_Date")}
                  />
                </div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Notes
                  </span>
                </label>
                <div>
                  <textarea
                    name="comment"
                    className="border text-sm p-1 mt-3 ml-1 h-24 w-full"
                  ></textarea>
                </div>
              </div>
              <div className="divider"></div>
              <div className="modal-action">
                {/* <input type="submit" /> */}
                <button
                  className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Save
                </button>

                <button
                  className=" py-[5px]  px-3 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
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
    </div>
  );
};

export default PatientLedgerActionModal;
