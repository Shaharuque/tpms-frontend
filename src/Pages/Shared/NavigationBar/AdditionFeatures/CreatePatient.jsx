import { Dialog } from "@mui/material";
import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";

const CreatePatient = ({ handleClose, patientClicked }) => {
  console.log(patientClicked);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Modal
        open={patientClicked} //aikhaney true na likey ekta state ana lagbey tar value 'true'
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={500}
        closable={false}
        className="box rounded-xl"
      >
        <div className="px-5 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-left text-orange-400">
              Create Patient
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs  text-gray-600 text-left">
                    First Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1  text-xs w-full"
                  {...register("first_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Last Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("last_name")}
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    DOB<span className="text-red-500">*</span>
                  </span>
                </label>

                <input
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  name="dob"
                  type="date"
                  {...register("dob")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Gender<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-sm w-full"
                  {...register("gender")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    POS<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-sm w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="label-text font-medium items-center flex text-xs text-gray-600 text-left">
                    Email Address
                    <AiOutlineQuestionCircle className="text-sm" />
                  </span>
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="email_Address"
                    className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-3/4"
                    {...register("email_Address")}
                  />
                  <div>
                    <select
                      className="border border-gray-300 rounded-sm px-2 py-[3px] text-sm "
                      {...register("email")}
                    >
                      <option value=""></option>
                      <option value="work">Work</option>
                      <option value="home">Home</option>
                    </select>
                  </div>
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    // checked={value ? true : false}
                    name="patient"
                    // onClick={() => {
                    //   setValue(!value);
                    // }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-medium">
                    Send me an email reminder
                  </span>
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium items-center flex text-xs text-gray-600 text-left">
                    Phone Number
                    <AiOutlineQuestionCircle className="text-sm" />
                  </span>
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="phone_number"
                    className="border border-gray-300 rounded-sm px-2 py-[5px] mx-1 text-xs w-3/4"
                    {...register("phone_number")}
                  />
                  <div>
                    <select
                      className="border border-gray-300 rounded-sm px-2 py-[3px] text-sm "
                      {...register("phone")}
                    >
                      <option value=""></option>
                      <option value="work">Work</option>
                      <option value="home">Home</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="checkbox"
                      // checked={value ? true : false}
                      name="patient"
                      // onClick={() => {
                      //   setValue(!value);
                      // }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-medium">
                      Send me a text message
                    </span>
                  </div>
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    // checked={value ? true : false}
                    name="patient"
                    // onClick={() => {
                    //   setValue(!value);
                    // }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-medium">
                    Send me a voice message
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Create & Continue
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
      <hr />
    </div>
  );
};

export default CreatePatient;
