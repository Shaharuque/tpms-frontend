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
    <div className="sm:h-[100vh]">
      <div>
        <div className="flex items-center flex-wrap gap-2 justify-between mb-3">
          <h1 className="text-lg my-2 text-orange-500">
            Recurring Session Edit
          </h1>
          <Link
            to={"/admin/m-posting"}
            className="  flex items-center pms-button justify-center"
          >
            <IoCaretBackCircleOutline className="mr-1 text-lg" /> Back
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
                    <span className=" label-font">Select Payee type</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none"
                    {...register("payee_type")}
                  >
                    <option value="name"> Payor </option>
                    <option value="name"> Client </option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Payee</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none"
                    {...register("payee")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                {/* Deposit Date  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className=" label-font">Deposit Date</span>
                  </label>
                  <input
                    className="input-border input-font w-full focus:outline-none"
                    type="date"
                    {...register("deposit_Date")}
                  />
                </div>
                {/* Payment Method  */}
                <div>
                  <label className="label">
                    <span className=" label-font">Payment Method</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none"
                    {...register("payment_method")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Check #  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className=" label-font">Check #</span>
                  </label>
                  <input
                    type="number"
                    name="check"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("check")}
                  />
                </div>
                {/* Check Date  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className=" label-font">Check Date</span>
                  </label>
                  <input
                    className="input-border input-font w-full focus:outline-none"
                    type="date"
                    {...register("check_Date")}
                  />
                </div>
                {/* Amount  */}
                <div>
                  {" "}
                  <label className="label">
                    <span className=" label-font">Amount</span>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    className="input-border input-font w-full focus:outline-none"
                    {...register("amount")}
                  />
                </div>

                {/* Unallocated Amount  */}
                <div>
                  <label className="label">
                    <span className=" label-font">Unallocated Amount</span>
                  </label>
                  <input
                    type="number"
                    readOnly
                    name="unallocated_amount"
                    className="input-border input-font w-full focus:outline-none bg-slate-300"
                    {...register("unallocated_amount")}
                  />
                </div>
                {/* File  */}
                <div className=" ">
                  <label className="label">
                    <span className=" label-font">File</span>
                  </label>
                  <input
                    type="file"
                    className=" border bg-white rounded-sm  text-xs"
                    {...register("fileName")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Amount</span>
                  </label>
                  <TextArea rows={5} placeholder=" Notes" size="large" />
                </div>

                <div>{/* <textarea ref={register} /> */}</div>
              </div>

              <div className="mb-5 flex justify-start">
                <div className=" flex items-end justify-end mt-2">
                  <button className="pms-button mr-2" type="submit">
                    Save
                  </button>

                  <button className="pms-close-button" onClick={onCancel}>
                    Close
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
