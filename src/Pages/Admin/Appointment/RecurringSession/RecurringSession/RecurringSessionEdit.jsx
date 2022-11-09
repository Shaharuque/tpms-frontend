import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import TextArea from "antd/lib/input/TextArea";

const RecurringSessionEdit = () => {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //console.log(errors);

  return (
    <div className="sm:h-[100vh]">
      <div className="flex items-start flex-wrap gap-2 justify-between">
        <h1 className="text-sm md:text-lg text-gray-700">
          Edit Recurring Session
        </h1>
        <div className="flex items-center gap-3">
          <Link
            to={"/admin/recurring-session"}
            className=" py-[6px] flex items-center px-2 md:px-4 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
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
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 my-3 mr-2 gap-6">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Patient Name
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
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
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Auth
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
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
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Service
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
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
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Provider Name
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("Provider_name")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  POS
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("Pos")}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  From Date
                </span>
              </label>
              <input
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                type="date"
                {...register("from_Date")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  To Date
                </span>
              </label>
              <input
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                type="date"
                {...register("To_Date")}
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    From Time
                  </span>
                </label>
                <input
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  type="time"
                  {...register("from_time")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    To Time
                  </span>
                </label>
                <input
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  type="time"
                  {...register("To_time")}
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Status
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("Status")}
              >
                <option value="Rendered">Rendered</option>
                <option value="Show">Show</option>
                <option value="Hold">Hold</option>
                <option value="No Show">No Show</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Office Notes
                </span>
              </label>
              <div className="">
                <TextArea
                  maxLength={2}
                  rows={4}
                  placeholder=" Notes"
                  size="large"
                />
              </div>
            </div>
          </div>
          <div className="divider"></div>
          {/* submit  */}
          <div className="mt-4">
            <button className=" pms-button mr-2" type="submit">
              Save
            </button>
            <Link to={"/admin/recurring-session"}>
              <button className="pms-close-button" autoFocus onClick={reset}>
                CANCEL
              </button>
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RecurringSessionEdit;
