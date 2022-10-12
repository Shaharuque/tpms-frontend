import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";

const PayPeriodAdd = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={600}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Create/Edit Pay Period
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 my-3 mr-2 gap-x-4 gap-y-4">
              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    Select Pay Period length
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("length")}
                >
                  <option value="Mr">Sunday</option>
                  <option value="Mrs">Monday</option>
                  <option value="Miss">Tuesday</option>
                  <option value="Dr">Wednesday</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    Week Day
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("weekdays")}
                >
                  <option value="Mr">Sunday</option>
                  <option value="Mrs">Monday</option>
                  <option value="Miss">Tuesday</option>
                  <option value="Dr">Wednesday</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    Select year
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("year")}
                >
                  <option value="Mr">Sunday</option>
                  <option value="Mrs">Monday</option>
                  <option value="Miss">Tuesday</option>
                  <option value="Dr">Wednesday</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    End Date
                  </span>
                </label>
                <input
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  type="date"
                  {...register("date")}
                ></input>
              </div>
              <div className="mt-4">
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    Check Date
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("year")}
                >
                  <option value="Mr">Sunday</option>
                  <option value="Mrs">Monday</option>
                  <option value="Miss">Tuesday</option>
                  <option value="Dr">Wednesday</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                    After how many days staff can't submit time sheet?
                  </span>
                </label>
                <input
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  type="date"
                  {...register("sheet")}
                ></input>
              </div>
            </div>

            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PayPeriodAdd;