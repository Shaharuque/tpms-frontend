import { Dialog } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";

const CreatePatient = ({ handleClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Dialog
        open={handleClose}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="p-5 box sm:w-[500px]">
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
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    First Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("first_name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Last Name<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("last_name")}
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 mr-2 gap-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
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
                  <span className="label-text text-xs text-gray-600 text-left">
                    Gender<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-sm w-full"
                  {...register("gender")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    POS<span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[3px] mx-1 text-sm w-full"
                  {...register("pos")}
                >
                  <option value=""></option>
                  <option value="single">single</option>
                  <option value="married">married</option>
                </select>
              </div>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-1 mr-2 gap-1">
              <div className="flex">
                <div>
                  <label className="label">
                    <span className="label-text items-center flex text-xs text-gray-600 text-left">
                      Email Address
                      <AiOutlineQuestionCircle className="text-sm" />
                    </span>
                  </label>
                  <input
                    type="text"
                    name="email_Address"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-3/4"
                    {...register("email_Address")}
                  />
                </div>
                <div>
                  <select
                    className="border rounded-sm px-2 py-[3px] mx-1 mt-[34px] text-sm "
                    {...register("gender")}
                  >
                    <option value=""></option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                  </select>
                </div>
              </div>
              <div className="flex">
                <div>
                  <label className="label">
                    <span className="label-text items-center flex text-xs text-gray-600 text-left">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="text"
                    name="email_Address"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-3/4"
                    {...register("email_Address")}
                  />
                </div>
                <div>
                  <select
                    className="border rounded-sm px-2 py-[3px] mx-1 mt-[34px] text-sm "
                    {...register("gender")}
                  >
                    <option value=""></option>
                    <option value="single">single</option>
                    <option value="married">married</option>
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
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  Send me an email reminder
                </span>
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
                  <span className="text-xs ml-1 text-gray-600 font-normal">
                    Send me a text message
                  </span>
                </div>
              </div>
              <div></div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="checkbox"
                  // checked={value ? true : false}
                  name="patient"
                  // onClick={() => {
                  //   setValue(!value);
                  // }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  Send me a voice message
                </span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="modal-action">
              <button
                className=" py-[5px]  px-3 ml-3 text-sm font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
                onClick={handleClose}
              >
                Save
              </button>

              <button
                className=" py-[5px]  px-3 ml-3 text-sm font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
                autoFocus
                onClick={handleClose}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </Dialog>
      <hr />
    </div>
  );
};

export default CreatePatient;
