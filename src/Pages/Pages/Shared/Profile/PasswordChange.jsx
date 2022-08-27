import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const PasswordChange = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-3 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                New Password
              </span>
            </label>
            <input
              type="text"
              name="new_password"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("new_password")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              name="confirm_password"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("confirm_password")}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>

          <button
            className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
            autoFocus
            onClick={reset}
          >
            CANCEL
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PasswordChange;
