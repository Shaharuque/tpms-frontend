import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useForm } from "react-hook-form";

const ERAActionModal = ({ handleClose, open, row }) => {
  const [password, setPassword] = useState(false);
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
          <h1 className="text-lg  text-left text-orange-400">Export Report</h1>
          <div className="divider"></div>
          <h1 className=" text-sm font-medium">
            You can encrypt your file with password to prevent unauthorized
            access to your data.
          </h1>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              // checked={value ? true : false}
              name="patient"
              onClick={() => {
                setPassword(!password);
              }}
            />
            <span className="text-xs ml-1 text-gray-600 font-normal">
              crypt with password
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {password && (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Password
                    </span>
                  </label>
                  <input
                    placeholder="Enter Password to encrypt with"
                    type="text"
                    name="password"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("password")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    placeholder="Confirm the password"
                    type="text"
                    name="confirm_password"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("confirm_password")}
                  />
                </div>
              </div>
            )}
            <div className="divider"></div>
            <div className="modal-action">
              {/* <input type="submit" /> */}
              <button
                className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Continue
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

export default memo(ERAActionModal);
