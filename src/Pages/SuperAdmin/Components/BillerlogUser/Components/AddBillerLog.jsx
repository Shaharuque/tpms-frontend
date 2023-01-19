import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { IoCloseCircleOutline } from "react-icons/io5";

const AddBillerLog = ({ handleClose, open }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={open}
        centered
        width={400}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className="px-5 py-2 ">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400 ">
              Update Billerlog User
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-semibold  text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className=" flex items-center flex-wrap  my-5 mr-2 gap-6"> */}
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-3 mr-2 gap-x-2 gap-y-1">
              {/* name  */}
              <div>
                <label className="label">
                  <span className="modal-label-name">Full Name(*)</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("full_name")}
                />
              </div>
              {/* Payor*/}
              <div>
                <label className="label">
                  <span className="modal-label-name">Account Email(*)</span>
                </label>
                <input
                  type="text"
                  name="acc_email"
                  className="modal-input-field ml-1 w-full"
                  {...register("acc_email")}
                />
              </div>
              {/* address 1 */}
              <div>
                <label className="label">
                  <span className="modal-label-name">Password (*)</span>
                </label>
                <input
                  type="text"
                  name="password"
                  className="modal-input-field ml-1 w-full"
                  {...register("password")}
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
};

export default AddBillerLog;
