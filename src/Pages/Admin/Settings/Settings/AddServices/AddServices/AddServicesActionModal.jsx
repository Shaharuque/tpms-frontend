import * as React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";
export default function AddServicesActionModal({ handleClose, open }) {
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
        width={500}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Add/Edit Service
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium  text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="flex items-center text-sm gap-5"> */}
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ls-3 my-5 mr-2 gap-5">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Tx Type
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[2px] mx-1 text-xs w-full"
                  {...register("tx_type")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Service Type
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[2px] mx-1 text-xs w-full"
                  {...register("service_type")}
                >
                  <option value="Mr">Billable</option>
                  <option value="Mrs">Unbillable</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Service
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Service"
                  name="service"
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("service")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Billed Per
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[2px] mx-1 text-xs w-full"
                  {...register("billed_per")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Duration
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[2px] mx-1 text-xs w-full"
                  {...register("duration")}
                >
                  <option value="Mr">5min</option>
                  <option value="Mrs">10min</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 font-medium text-left">
                    Mileage
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Cpt Code"
                  name="Mileage"
                  className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                  {...register("Mileage")}
                />
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
}
