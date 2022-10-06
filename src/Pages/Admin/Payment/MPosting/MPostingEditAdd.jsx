import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import { IoCaretBackCircleOutline } from "react-icons/io5";

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
    <div className="h-[100vh]">
      <div>
        <div className="flex items-center flex-wrap gap-2 justify-between mb-3">
          <h1 className="text-lg my-2 text-orange-500">
            Recurring Session Edit
          </h1>
          <Link
            to={"/admin/m-posting"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
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
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 my-5 mr-2 gap-6">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Select Payee type
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("payee_type")}
                  >
                    <option value="name"> Payor </option>
                    <option value="name"> Client </option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Payee
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("payee")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                {/* Deposit Date  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Deposit Date
                    </span>
                  </label>
                  <input
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    type="date"
                    {...register("deposit_Date")}
                  />
                </div>
                {/* Payment Method  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Payment Method
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("payment_method")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Check #  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Check #
                    </span>
                  </label>
                  <input
                    type="number"
                    name="check"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("check")}
                  />
                </div>
                {/* Check Date  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Check Date
                    </span>
                  </label>
                  <input
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    type="date"
                    {...register("check_Date")}
                  />
                </div>
                {/* Amount  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Amount
                    </span>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("amount")}
                  />
                </div>

                {/* Unallocated Amount  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Unallocated Amount
                    </span>
                  </label>
                  <input
                    type="number"
                    readOnly
                    name="unallocated_amount"
                    className="input-border bg-slate-200 text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("unallocated_amount")}
                  />
                </div>
                {/* File  */}
                <div className=" ">
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      File
                    </span>
                  </label>
                  <input
                    type="file"
                    className=" border bg-white rounded-sm  text-xs"
                    {...register("fileName")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Amount
                    </span>
                  </label>
                  <TextArea
                    maxLength={2}
                    rows={7}
                    placeholder=" Notes"
                    size="large"
                  />
                </div>

                <div>{/* <textarea ref={register} /> */}</div>
              </div>

              <div className="mb-5">
                <div className=" flex items-end justify-start mt-2">
                  <button
                    className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                    type="submit"
                  >
                    Save
                  </button>

                  <button
                    className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                    autoFocus
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MPostingEditAdd;
