import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const EditDeposit = () => {
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
  console.log(errors);

  return (
    <div className="sm:h-[100vh]">
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-sm font-semibold my-2 ">Add/Edit Deposit</h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/m-remittance"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="">
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
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 mr-2 gap-3">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Select Payee type
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("patient_name")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
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
                  {...register("Auth")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Deposit Date
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  type="date"
                  {...register("from_Date")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Payment Method
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("Service")}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Check #
                  </span>
                </label>
                <input
                  className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
                  type="text"
                  {...register("check_no")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Check Date
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
                  type="date"
                  {...register("check_Date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Amount
                  </span>
                </label>
                <input
                  className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
                  type="text"
                  {...register("amount")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Unallocated Amount
                  </span>
                </label>
                <input
                  disabled
                  className="border bg-gray-200 border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
                  type="text"
                  {...register("un_amount")}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    Notes
                  </span>
                </label>
                <textarea
                  name="comment"
                  className="border text-sm p-1  ml-1 w-full"
                ></textarea>
              </div>
              <div className=" ">
                <label className="label">
                  <span className="label-text text-xs text-gray-500 text-left">
                    File
                  </span>
                </label>
                <input
                  type="file"
                  className=" border bg-white rounded-sm ml-1  text-xs"
                  {...register("fileName")}
                />
              </div>
            </div>
            {/* submit  */}
            <div className="mt-10">
              <button
                className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>
              <Link to={"/admin/recurring-session"}>
                <button
                  className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                  autoFocus
                  onClick={reset}
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default EditDeposit;
