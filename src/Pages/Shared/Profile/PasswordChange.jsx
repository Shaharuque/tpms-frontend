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
              <span className="pms-input-name">New Password</span>
            </label>
            <input
              type="password"
              name="new_password"
              className="modal-input-field ml-1 w-full"
              {...register("new_password")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm_password"
              className="modal-input-field ml-1 w-full"
              {...register("confirm_password")}
            />
          </div>
        </div>
        <div className=" flex items-end ml-1 mt-2">
          <button className="pms-button mr-2" type="submit">
            Save
          </button>

          <button className="pms-close-button" onClick={reset}>
            Close
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PasswordChange;
