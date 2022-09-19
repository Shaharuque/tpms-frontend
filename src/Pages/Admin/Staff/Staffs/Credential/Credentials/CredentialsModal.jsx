import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CredentialsModal = ({ handleClose, open, name }) => {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="p-5 box">
            <h1 className="text-lg  text-left text-orange-400">Add {name}</h1>
            <div className="divider"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      {name}
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    {...register(`${name}`)}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Date Issued
                    </span>
                  </label>
                  <input
                    type="date"
                    className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                    {...register("date_issue")}
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
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-normal">
                    Credential Not Applicable
                  </span>
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
    </div>
  );
};

export default CredentialsModal;
