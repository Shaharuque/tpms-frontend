import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Box32 = ({ box32, handleBox32 }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2
        onClick={() => {
          handleBox32();
          console.log(box32);
        }}
        className=" mt-4 text-xs font-normal px-2 py-2 text-white bg-secondary rounded-sm"
      >
        Box No 32
      </h2>
      {box32 && (
        <div className="border bg-teal-50">
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
              <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-1">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-font">Facility Name</span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("address1")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address2"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("address2")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">City</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("city")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">State</span>
                  </label>
                  <select
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("state")}
                  >
                    <option value="Speech Therapist">Speech Therapist</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="label">
                    <span className="label-font">Zip</span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("zip")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">NPI</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("mobile")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font">Taxonomy</span>
                  </label>
                  <input
                    type="text"
                    name="fax"
                    className="input-border input-font w-full focus:outline-none bg-teal-50"
                    {...register("fax")}
                  />
                </div>
              </div>

              <div className="my-5 ">
                <button className="pms-button" type="submit">
                  Save Box 32
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Box32;
