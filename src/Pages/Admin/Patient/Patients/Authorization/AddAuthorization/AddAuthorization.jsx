// Authorization edit
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Switch } from "antd";
import { BsArrowRight } from "react-icons/bs";
import CustomDateRange from "../../../../../Shared/CustomDateRange/CustomDateRange";
import {
  useGetAuthorizationCreateInfoQuery,
  usePatientAuthorizationCreateMutation,
} from "../../../../../../features/Patient_redux/authorization/authorizationApi";
import useToken from "../../../../../../CustomHooks/useToken";
import BoolConverter from "../../../../../Shared/BoolConverter/BoolConverter";
import { toast } from "react-toastify";

const AddAuthorization = () => {
  const { token } = useToken();
  //As This Id is important so I saved it at localStorage
  const patientId = localStorage.getItem("p_key");
  //console.log(patientId);
  const [notes, setNotes] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [auth, setAuth] = useState(false);
  const [network, setNetwork] = useState(false);
  const [valid, setValid] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(false);

  //Patient Authorization Create Info API
  const {
    data: createInfo,
    isLoading: createInfoLoading,
    isSuccess,
    isError,
  } = useGetAuthorizationCreateInfoQuery({
    token,
    id: patientId,
  });
  //Patient Authorization Save API(create authorization)
  const [
    patientAuthorizationCreate,
    { isSuccess: createSuccess, isError: createError },
  ] = usePatientAuthorizationCreateMutation();

  const allPayors = createInfo?.all_payors;
  const allSupervisor = createInfo?.supervisor;
  const allTreatmentTypes = createInfo?.treatment_types;
  console.log("dropdown data", allPayors);

  //String Date to [mm/dd/yy] converter function
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join("/");
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
  console.log(auth);

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

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: `${startMonth} ${startDay}, ${startYear}`,
        end_date: `${endMonth} ${endDay}, ${endYear}`,
      });
    }, 0);
  }, [endDay, endMonth, endYear, startDay, startMonth, startYear]);

  const onSubmit = (data) => {
    const payload = {
      client_id: parseInt(patientId),
      ...data,
      select_date: `${convert(data?.start_date)} - ${convert(data?.end_date)}`,
      in_network: BoolConverter(network),
      is_valid: BoolConverter(valid),
      is_placeholder: BoolConverter(placeHolder),
      notes,
    };
    if (payload) {
      patientAuthorizationCreate({
        token,
        payload,
      });
    }
    console.log(payload);
  };

  const handleClose = () => {
    reset();
  };

  useEffect(() => {
    if (createSuccess) {
      toast.success("Successfully Authorization Created", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
      reset();
    } else if (createError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    }
  }, [createSuccess, createError]);

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
        <div className="flex items-center gap-2">
          <div className="flex items-center ">
            <Switch
              size="small"
              checked={auth ? true : false}
              onClick={() => setAuth(!auth)}
            />
            <span className="text-[14px] font-medium text-gray-500 mx-3">
              Auth Not Required
            </span>
          </div>
          <Link to={`/admin/patient/patient-authorization/${patientId}`}>
            <button className="px-2 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs font-medium  hover:to-secondary text-white rounded-md">
              <IoCaretBackCircleOutline className="mr-1 text-sm" />
              Back
            </button>
          </Link>
        </div>
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
                {...register("payor_id")}
              >
                {allPayors?.map((payors) => {
                  return (
                    <option key={payors?.id} value={payors?.payor_id}>
                      {payors?.payor_name}
                    </option>
                  );
                })}
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
                {...register("treatment_type")}
              >
                {allTreatmentTypes?.map((treatment) => {
                  return (
                    <option
                      key={treatment?.id}
                      value={treatment?.treatment_name}
                    >
                      {treatment?.treatment_name}
                    </option>
                  );
                })}
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
                {...register("supervisor_id")}
              >
                {allSupervisor?.map((supv) => {
                  return (
                    <option key={supv?.id} value={supv?.employee?.id}>
                      {supv?.employee?.full_name}
                    </option>
                  );
                })}
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
                    {...register("start_date")}
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
                    {...register("end_date")}
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
              {auth ? (
                <div
                  type="text"
                  readOnly
                  name="authorization_number"
                  className="input-border bg-slate-100 input-font py-[1px] w-full focus:outline-none"
                  // {...register("authorization_number")}
                >
                  N/A
                </div>
              ) : (
                <input
                  type="text"
                  name="authorization_number"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("authorization_number")}
                />
              )}
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
                {...register("is_primary")}
              >
                <option value="1">Primary</option>
                <option value="2">Secondary</option>
                <option value="3">Tertiary</option>
              </select>
            </div>

            <div className="">
              <label className="label">
                <span className=" label-font">Upload Authorization</span>
              </label>
              <input
                type="file"
                className=" ml-1 py-[5px]  text-xs w-full"
                {...register("upload_authorization")}
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
                  {...register("diagnosis_one")}
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
                  {...register("diagnosis_two")}
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
                  {...register("diagnosis_three")}
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
                  {...register("diagnosis_four")}
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
                  <Switch
                    checked={network}
                    onChange={() => setNetwork(!network)}
                    size="small"
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
                {...register("cms_four")}
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
                {...register("cms_eleven")}
              />
            </div>
            <div className="ml-2 mt-5">
              <div className="my-1">
                <Switch
                  checked={valid}
                  onChange={() => setValid(!valid)}
                  size="small"
                />
                <span className="text-[14px] font-medium text-gray-500 mx-3">
                  Active
                </span>
              </div>
              <div>
                <Switch
                  checked={placeHolder}
                  onChange={() => setPlaceHolder(!placeHolder)}
                  size="small"
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
