import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";

const AuthorizationEditModal = ({ handleClose, open, editableRow }) => {
  const { register, handleSubmit, reset } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  //   console.log(editableRow);
  useEffect(() => {
    setTimeout(() => {
      reset({
        // description: `${row.original.description}`,
        // expiry_Date: `${row.original.upload_date}`,
      });
    }, 500);
  }, [reset, editableRow]);
  return (
    <div>
      <div>
        <div>
          <Modal
            // fullScreen={fullScreen}
            open={open}
            centered
            width={800}
            footer={false}
            closable={false}
            bodyStyle={{ padding: "0" }}
          >
            <div className="px-5 py-2 box">
              <div className="flex items-center justify-between">
                <h1 className="text-lg text-left text-orange-400 ">
                  Edit Document
                </h1>
                <IoCloseCircleOutline
                  onClick={handleClose}
                  className="text-gray-600 font-semibold  text-2xl hover:text-primary"
                />
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                        Service
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("service")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                        Service Sub-Type
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("service_sub_type")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                        CPT Code
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("cpt_code")}
                    >
                      <option value="single">single</option>
                      <option value="married">married</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 font-medium text-left">
                          M1
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m1"
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("m1")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 font-medium text-left">
                          M2
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m2"
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("m2")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 font-medium text-left">
                          M3
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m3"
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("m3")}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-600 font-medium text-left">
                          M4
                        </span>
                      </label>
                      <input
                        type="text"
                        name="m4"
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("m4")}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label className="label">
                        <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                          Billed Per
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("per_unit")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="mt-[35px]">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                        {...register("minute")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 font-medium text-left">
                        Rate
                      </span>
                    </label>
                    <input
                      type="text"
                      name="rate"
                      className="border border-gray-300 rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("rate")}
                    />
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text flex items-center text-xs text-gray-600 font-medium text-left">
                      Maximum Frequency allowed
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-1 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>

                    <div className="text-sm font-bold my-auto px-3 ml-1">
                      AND
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>

                    <div className="text-sm font-bold my-auto px-3 ml-1">
                      AND
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 border border-gray-300 p-1">
                    <div className="  text-sm font-semibold my-auto px-3">
                      Maximum
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="hours">Hours</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium my-auto px-3 mx-1">
                      Per
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px] text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>
                    <div className="border text-sm font-medium px-3 mx-1">
                      Is
                    </div>
                    <div className="">
                      <select
                        className="border border-gray-300 rounded-sm px-2 py-[3px]  text-xs w-full"
                        {...register("hours")}
                      >
                        <option value="single">single</option>
                        <option value="married">married</option>
                      </select>
                    </div>

                    <div className="text-sm font-bold my-auto px-3 ml-1">
                      AND
                    </div>
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 font-medium text-left">
                      Notes
                    </span>
                  </label>
                  <textarea
                    onChange={(e) => setNotes(e.target.value)}
                    name="comment"
                    className="border border-gray-300 text-xs p-2  ml-1 h-24 w-full"
                  >
                    Notes
                  </textarea>
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
      </div>
    </div>
  );
};

export default AuthorizationEditModal;
