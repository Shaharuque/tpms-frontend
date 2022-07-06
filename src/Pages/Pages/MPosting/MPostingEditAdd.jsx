import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const MPostingEditAdd = () => {
  const { id } = useParams();
  console.log("param ", id);
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

  const onCancel = (data) => {
    reset();
  };
  console.log(errors);
  return (
    <div>
      <div>
        <h1 className="text-lg my-2 text-orange-500">Recurring Session Edit</h1>
        <div className="border">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-2"
            style={{
              transition: "all .3s ease-out",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-5">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Select Payee type
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("amount")}
                  />
                </div>
                {/* File  */}
                <div className=" ">
                  <label className="label">
                    <span className="text-sm ml-2 mb-2 mt-[-2px]">File</span>
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
                    className="border rounded-sm px-2 py-2 mx-1 text-xs w-full"
                    {...register("unallocated_amount")}
                  />
                </div>
                <div className="pt-5">
                  <TextField
                    label="Notes"
                    className="w-full p-0"
                    {...register("muiInput")}
                    placeholder="mui/textfield"
                  />
                </div>

                <div>{/* <textarea ref={register} /> */}</div>
              </div>

              {/* submit  */}
              <input
                className="btn btn-primary bg-gradient-to-r from-secondary to-primary my-5 hover:to-secondary text-white "
                type="submit"
                value={"Save"}
              />
              <Link to={"/m-posting"}>
                {" "}
                <button
                  className="px-5  bg-gradient-to-r from-red-700 to-red-400 py-3 ml-3 hover:to-red-700 text-white rounded-md"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </Link>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MPostingEditAdd;
