// Authorization edit
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { DateRangePicker } from "rsuite";
import { Switch } from "antd";

const AddAuthorization = () => {
  const patientId = localStorage.getItem("p_key");
  console.log(patientId);
  const [value, setValue] = useState(false);
  const [notes, setNotes] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [active, setActive] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    console.log(notes);
  };

  const handleClose = () => {
    reset();
  };

  return (
    <div className="md:h-[100vh]">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {/* Changes needed */}
        <Link
          to={`/admin/patient/patient-authorization/${patientId}`}
          className="text-primary text-lg"
        >
          <IoCaretBackCircleOutline />
        </Link>
        <div className="text-xs font-medium">
          <span className="text-sm font-semibold text-primary">Amro LLC |</span>
          <span className="text-orange-400 font-semibold"> DOB :</span>
          09/28/2021 |
          <span className="text-orange-400 font-semibold"> Phone : </span>
          (894)-023-8043 |
          <span className="text-orange-400 font-semibold"> Address : </span>
          1222, OTtn, With Jersey City NJ 32809
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-medium mx-1">Add Auth</h1>
        <Link to={`/admin/patient/patient-authorization/${patientId}`}>
          <button className="px-2 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs font-medium  hover:to-secondary text-white rounded-md">
            <IoCaretBackCircleOutline className="mr-1 text-sm" />
            Back
          </button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 mr-2 gap-x-6 gap-y-1">
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Description<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="description"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("description")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Insurance
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("insurance")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Tx Type
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("tx_type")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  SUPV. Provider
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("sup_provider")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Selected date
                </span>
              </label>
              <div className="ml-1">
                <DateRangePicker
                  onChange={(date) => {
                    console.log(date);
                  }}
                  placeholder="Select Date"
                />
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Authorization Number<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="authorization_number"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("authorization_number")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  UCI / Insurance ID<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="uci_id"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("uci_id")}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  COB
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                {...register("cob")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div className="">
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Upload Authorization
                </span>
              </label>
              <input
                type="file"
                className=" ml-1 py-[5px]  text-xs w-full"
                {...register("fileName")}
              />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-4 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Diagnosis1<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("diagnosis1")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Diagnosis2
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis2"
                  // className="border border-gray-300 rounded-sm py-[5px] mx-2 text-xs w-full"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("diagnosis2")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-2 gap-x-4 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Diagnosis3<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis3"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("diagnosis3")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Diagnosis4
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis4"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("diagnosis4")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-4 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Deductible
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("deductible")}
                />
              </div>
              <div className="mt-[30px]">
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  />
                  <span className="text-[14px] ml-1 text-gray-600 font-medium">
                    In Network
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  CoPay
                </span>
              </label>
              <input
                type="text"
                name="copay"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("copay")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  CMS 4 (Insured Name)
                </span>
              </label>
              <input
                type="text"
                name="cms4"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("cms4")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  CMS 11 (Group No)
                </span>
              </label>
              <input
                type="text"
                name="cms11"
                className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                {...register("cms11")}
              />
            </div>
            <div className="ml-2 mt-5">
              <div className="my-1">
                <Switch
                  size="small"
                  checked={active ? true : false}
                  onClick={() => setActive(!active)}
                />
                <span className="text-[14px] font-medium text-gray-500 mx-3">
                  Active
                </span>
              </div>
              <div>
                <Switch
                  size="small"
                  checked={placeHolder ? true : false}
                  onClick={() => setPlaceHolder(!placeHolder)}
                />
                <span className="text-[14px] font-medium text-gray-500 mx-3">
                  Placeholder
                </span>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                  Notes
                </span>
              </label>
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                name="comment"
                className="border border-gray-300 text-xs p-2  ml-1 h-24 w-full"
              ></textarea>
            </div>
          </div>
          {/* submit  */}
          <button
            className=" py-[5px] font-normal px-3 mr-1 text-xs ml-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
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
        </form>
      </motion.div>
    </div>
  );
};

export default AddAuthorization;
