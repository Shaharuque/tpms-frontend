import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const PayorInfo = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <div>
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
          {/* <div className=" flex items-center flex-wrap  my-5 mr-2 gap-6"> */}
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-7 my-5 mr-2 gap-6">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="payor_name"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("payor_name")}
              />
            </div>
            {/* Payor*/}
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  Payor Id
                </span>
              </label>
              <input
                type="text"
                name="payor_id"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("payor_id")}
              />
            </div>
            {/* address 1 */}
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  Address
                </span>
              </label>
              <input
                type="text"
                name="address"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("address")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  City
                </span>
              </label>
              <input
                type="text"
                name="city"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("city")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  State
                </span>
              </label>
              <input
                type="text"
                name="state"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("state")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
                  Zip
                </span>
              </label>
              <input
                type="number"
                name="zip"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("zip")}
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_medicare"
                {...register("plan_medicare")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Is Plan Medicare
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_MedicaId"
                {...register("plan_MedicaId")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Is Plan MedicaId
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_champus"
                {...register("plan_champus")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Is Plan Champus
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_champVA"
                {...register("plan_champVA")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Is Plan ChampVA
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_group_health_plan"
                {...register("plan_group_health_plan")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Is Plan Group Health Plan
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_feca"
                {...register("plan_feca")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Plan FECA
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <input
                type="checkbox"
                name="plan_other"
                {...register("plan_other")}
              />

              <span className=" text-gray-600 rounded-sm  text-[14px] font-medium  ">
                Plan Other
              </span>
            </div>
          </div>
          <input
            className="pms-button my-3"
            type="submit"
            value={"Save Payor Info"}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default PayorInfo;
