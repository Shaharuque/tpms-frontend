import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

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
          open={handleClose}
          // onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className="px-5 py-2 box  sm:w-[500px]">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">Credential</h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 text-2xl hover:text-primary"
              />
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Credential
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
              s
            </form>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default CredentialsModal;
