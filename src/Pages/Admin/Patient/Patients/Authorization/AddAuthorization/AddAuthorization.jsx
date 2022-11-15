// Authorization edit
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Switch } from "antd";
import { BsArrowRight } from "react-icons/bs";
import CustomDateRange from "../../../../../Shared/CustomDateRange/CustomDateRange";

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

  //Date converter function [yy-mm-dd]
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  //Date Range Picker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click

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
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 mr-2 gap-x-6 gap-y-3">
            <div>
              <label className="label">
                <span className=" label-font">
                  Description<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="description"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("description")}
              />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Insurance
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border input-font  w-full focus:outline-none"
                {...register("insurance")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  Tx Type
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border input-font  w-full focus:outline-none"
                {...register("tx_type")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  SUPV. Provider
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border input-font  w-full focus:outline-none"
                {...register("sup_provider")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className=" label-font">Selected date</span>
              </label>
              <div className="ml-1">
                <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                  <input
                    value={
                      startDate
                        ? `${startMonth} ${startDay}, ${startYear}`
                        : "Start Date"
                    }
                    readOnly
                    onClick={() => setOpenCalendar(true)}
                    className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                  />
                  <BsArrowRight
                    onClick={() => setOpenCalendar(true)}
                    className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                  ></BsArrowRight>
                  <input
                    value={
                      endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                    }
                    readOnly
                    onClick={() => setOpenCalendar(true)}
                    className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                  />
                </div>

                {/* Multi date picker component called */}
                <div
                  ref={refClose}
                  className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s"
                >
                  {openCalendar && (
                    <CustomDateRange
                      range={range}
                      setRange={setRange}
                      handleCancelDate={handleCancelDate}
                      setOpen={setOpenCalendar}
                    ></CustomDateRange>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="label">
                <span className=" label-font">
                  Authorization Number<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="authorization_number"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("authorization_number")}
              />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">
                  UCI / Insurance ID<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="uci_id"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("uci_id")}
              />
            </div>

            <div>
              <label className="label">
                <span className=" label-font">
                  COB
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border input-font  w-full focus:outline-none"
                {...register("cob")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>

            <div className="">
              <label className="label">
                <span className=" label-font">Upload Authorization</span>
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
                  <span className=" label-font">
                    Diagnosis1<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("diagnosis1")}
                />
              </div>
              <div>
                <label className="label">
                  <span className=" label-font">Diagnosis2</span>
                </label>
                <input
                  type="text"
                  name="diagnosis2"
                  // className="border border-gray-300 rounded-sm py-[5px] mx-2 text-xs w-full"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("diagnosis2")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-2 gap-x-4 gap-y-1">
              <div>
                <label className="label">
                  <span className=" label-font">
                    Diagnosis3<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="diagnosis3"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("diagnosis3")}
                />
              </div>
              <div>
                <label className="label">
                  <span className=" label-font">Diagnosis4</span>
                </label>
                <input
                  type="text"
                  name="diagnosis4"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("diagnosis4")}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-4 gap-y-1">
              <div>
                <label className="label">
                  <span className=" label-font">Deductible</span>
                </label>
                <input
                  type="text"
                  name="diagnosis1"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
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
                <span className=" label-font">CoPay</span>
              </label>
              <input
                type="text"
                name="copay"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("copay")}
              />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">CMS 4 (Insured Name)</span>
              </label>
              <input
                type="text"
                name="cms4"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("cms4")}
              />
            </div>
            <div>
              <label className="label">
                <span className=" label-font">CMS 11 (Group No)</span>
              </label>
              <input
                type="text"
                name="cms11"
                className="input-border input-font py-[1px] w-full focus:outline-none"
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
                <span className=" label-font">Notes</span>
              </label>
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                name="comment"
                className="border border-gray-300 text-xs p-2  ml-1 h-24 w-full"
              ></textarea>
            </div>
          </div>
          <div className=" flex items-end justify-start mt-2">
            <button className="pms-button mr-2" type="submit">
              Save
            </button>

            <button className="pms-close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddAuthorization;
