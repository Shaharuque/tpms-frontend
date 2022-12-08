import { Modal } from "antd";
import * as React from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
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
                  <span className="modal-label-name">Tx Type</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("tx_type")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Service Type</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("service_type")}
                >
                  <option value="Mr">Billable</option>
                  <option value="Mrs">Unbillable</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Service</span>
                </label>
                <input
                  type="number"
                  placeholder="Service"
                  name="service"
                  className="modal-input-field ml-1 w-full"
                  {...register("service")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Billed Per</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("billed_per")}
                >
                  <option value="Mr">Behavioral therapy</option>
                  <option value="Mrs">Physical Therapy</option>
                  <option value="Miss">Mental Health</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="modal-label-name">Duration</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("duration")}
                >
                  <option value="Mr">5min</option>
                  <option value="Mrs">10min</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="modal-label-name">Mileage</span>
                </label>
                <input
                  type="number"
                  placeholder="Cpt Code"
                  name="Mileage"
                  className="modal-input-field ml-1 w-full"
                  {...register("Mileage")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button className=" pms-button mr-2" type="submit">
                Save
              </button>

              <button className="pms-close-button" onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
