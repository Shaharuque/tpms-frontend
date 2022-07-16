import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PatientInformation = () => {
  const [value, setValue] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center ">
            <FormControlLabel
              control={<Checkbox />}
              onClick={() => {
                setValue(!value);
              }}
              label="Active Patient"
              className="text-xs"
            />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 my-3 mr-2 gap-2">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Select Payee type
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("payee_type")}
              >
                <option value="name"> Payor </option>
                <option value="name"> Client </option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Payee
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("payee")}
              >
                <option value="name"> abcd </option>
              </select>
            </div>
            {/* Deposit Date  */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Deposit Date
                </span>
              </label>
              <input
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                type="date"
                {...register("deposit_Date")}
              />
            </div>
            {/* Payment Method  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Payment Method
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("payment_method")}
              >
                <option value="name">EFT</option>
              </select>
            </div>
            {/* Check #  */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Check #
                </span>
              </label>
              <input
                type="number"
                name="check"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("check")}
              />
            </div>
            {/* Check Date  */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Check Date
                </span>
              </label>
              <input
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                type="date"
                {...register("check_Date")}
              />
            </div>
            {/* Amount  */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Amount
                </span>
              </label>
              <input
                type="number"
                name="amount"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("amount")}
              />
            </div>
            {/* File  */}
            <div className=" ">
              <label className="label">
                <span className="text-sm ml-2  mt-[-2px]">File</span>
              </label>
              <input
                type="file"
                className=" border bg-white rounded-sm  mx-3 text-xs"
                {...register("fileName")}
              />
            </div>
            {/* Unallocated Amount  */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Unallocated Amount
                </span>
              </label>
              <input
                type="number"
                name="unallocated_amount"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("unallocated_amount")}
              />
            </div>

            <textarea
              name="comment"
              className="border text-sm p-1 mt-3 ml-1 w-full"
            >
              Notes
            </textarea>

            <div>{/* <textarea ref={register} /> */}</div>
          </div>

          <div className="mb-5">
            {" "}
            {/* submit  */}
            <button
              className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientInformation;
