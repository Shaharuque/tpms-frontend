import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContractRateAdd = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const onCancel = (data) => {
    reset();
  };
  return (
    <div className="h-[100vh]">
      <div>
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
              <div className="flex flex-wrap items-center gap-6 my-5">
                <div className="w-[20%]">
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Select Insurance
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("insurance")}
                  >
                    <option value="name"> Payor </option>
                    <option value="name"> Client </option>
                  </select>
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
                    className=" border bg-white rounded-sm ml-1  text-xs"
                    {...register("fileName")}
                  />
                </div>
              </div>
              <div className="divider"></div>
              <h1 className="text-lg my-2 text-orange-500">Add/Edit Rate:</h1>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5  mr-2 gap-6">
                {/* name  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Select Tx type
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("tx_type")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Service
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("service")}
                  >
                    <option value="name"> abcd </option>
                  </select>
                </div>
                {/* Service Sub-Type  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Service Sub-Type
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("service_sub_type")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* CPT Code  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      CPT Code
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("CPT_Code")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                <div className="flex justify-between gap-2">
                  {/* m1 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                        M1
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m1"
                      className="input-border py-[1px] text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                      {...register("m1")}
                    />
                  </div>
                  {/* m1 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                        M2
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m2"
                      className="input-border py-[1px] text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                      {...register("21")}
                    />
                  </div>

                  {/* m3 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                        M3
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m3"
                      className="input-border text-gray-600 py-[1px] rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                      {...register("m3")}
                    />
                  </div>
                  {/* m4 #  */}
                  <div>
                    {" "}
                    <label className="label">
                      <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                        M4
                      </span>
                    </label>
                    <input
                      type="number"
                      name="m4"
                      className="input-border text-gray-600 rounded-sm py-[1px]  text-[14px] font-medium ml-1  w-full focus:outline-none"
                      {...register("m4")}
                    />
                  </div>
                </div>
                {/* Rate Type  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Rate Type
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("rate_type")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Rate Per  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Rate Per
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("rate_Per")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                {/* Contract Rate */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Contract Rate
                    </span>
                  </label>
                  <input
                    type="number"
                    name="contract_rate"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("contract_rate")}
                  />
                </div>
                {/* Billing Rate */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Billing Rate
                    </span>
                  </label>
                  <input
                    type="number"
                    name="billing_rate"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("billing_rate")}
                  />
                </div>
                {/* % Increase */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      % Increase
                    </span>
                  </label>
                  <input
                    type="number"
                    name="increase"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("increase")}
                  />
                </div>

                {/* Degree Level  */}
                <div>
                  <label className="label">
                    <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                      Degree Level
                    </span>
                  </label>
                  <select
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                    {...register("degree_level")}
                  >
                    <option value="name">EFT</option>
                  </select>
                </div>
                <div className="flex ml-1 gap-3">
                  <div className="flex ml-1 mt-1 mr-2 items-center justify-end">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                      Active
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 mr-2 items-center justify-end">
                    <input
                      type="checkbox"
                      name="addAuth"
                      {...register("addAuth")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                      Add to auth
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
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
                </div>{" "}
                {/* submit  */}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContractRateAdd;
