// Authorization edit
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import AuthorizationEditTable from "./AuthorizationEditTable";
import AuthorizationEditModal from "../Authorization/AuthorizationEditModal";
import { Switch } from "antd";
import { BsArrowRight } from "react-icons/bs";
import CustomDateRange from "../../../../../Shared/CustomDateRange/CustomDateRange";
import useToken from "../../../../../../CustomHooks/useToken";
import axios from "axios";
import Loading from "../../../../../../Loading/Loading";
import { RiArrowLeftRightLine } from "react-icons/ri";

const AuthorizationEdit = ({ editdata }) => {
  const { id } = useParams();
  console.log("description id ", id);
  const patientId = localStorage.getItem("p_key");
  // console.log(patientId);
  const [value, setValue] = useState(false);
  const [notes, setNotes] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [active, setActive] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(true);
  const [authEditData, setauthEditData] = useState([]);
  const [startD, setStartD] = useState(null);
  const [endD, setEndD] = useState(null);
  const { token } = useToken();
  const dbId = parseInt(id);

  const editApiCall = async () => {
    const response = await axios.get(
      `https://test-prod.therapypms.com/api/v1/admin/ac/patient/authorization/info/${dbId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
        data: {
          id: dbId,
        },
      }
    );
    setauthEditData(response?.data?.client_authorization_info);
  };

  // Calling Api
  useEffect(() => {
    editApiCall();
  }, []);
  console.log(authEditData);
  // Api Data Destructring
  let selectedDate = authEditData?.selected_date || null;
  const {
    description,
    authorization_name,
    authorization_number,
    uci_id,
    treatment_type,
  } = authEditData || {};

  const handleClose = () => {
    setOpenEditModal(false);
  };

  //Date Range Picker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      // startDate: new Date(),
      startDate: null,
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

  // date range picker Start Date and End Date Modifer Part
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  console.log("calender date", startDate, endDate);
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

  //Date spliter function
  const SingleDate = (x) => {
    const singlyValue = x.split("-", 2);
    return {
      first: singlyValue[0],
      last: singlyValue[1],
    };
  };
  //Date to String Date converter function
  const convertToString = (param) => {
    let splitedData = param.split("/");
    console.log(splitedData);
    const monthNumber = splitedData[0];

    const date = new Date();
    date.setMonth(monthNumber - 1);

    const createDate = date.toLocaleString("en-US", { month: "short" });
    const newDate = `${createDate} ${splitedData[1]}, ${splitedData[2]}`;
    return newDate;
  };
  //String Date to [yy-mm-dd] converter function
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  useEffect(() => {
    if (selectedDate !== null) {
      let result = SingleDate(selectedDate);
      setStartD(convertToString(result?.first));
      setEndD(convertToString(result?.last));
    }
  }, [selectedDate]);
  console.log(startD, endD);

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
        description: description || null,
        tx_type: treatment_type || null,
        authorization_number: authorization_number || null,
        uci_id: uci_id || null,
        start_date: startDate
          ? `${startMonth} ${startDay}, ${startYear}`
          : startD,
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : endD,
      });
    }, 0);
  }, [startD, endD, reset, startDate, endDate]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(notes);
  };

  return (
    <div className="sm:h-[100vh]">
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
        <h1 className="text-lg font-medium mx-1">Edit Auth</h1>
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
          {authEditData ? (
            <>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 mr-2 gap-x-6 gap-y-3">
                <div>
                  <label className="label">
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                      Description<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    defaultValue={authEditData?.authorization_name}
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("description")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                      Selected date
                    </span>
                  </label>
                  <div className="ml-1">
                    <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                      <input
                        value={
                          startDate
                            ? `${startMonth} ${startDay}, ${startYear}`
                            : `${startD}`
                        }
                        readOnly
                        onClick={() => setOpenCalendar(true)}
                        {...register("start_date")}
                        className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                      />
                      <RiArrowLeftRightLine
                        onClick={() => setOpenCalendar(true)}
                        className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium"
                      ></RiArrowLeftRightLine>
                      <input
                        // defaultValue={"5-10-2034"}
                        value={
                          endDate
                            ? `${endMonth} ${endDay}, ${endYear}`
                            : `${endD}`
                        }
                        readOnly
                        onClick={() => setOpenCalendar(true)}
                        {...register("end_date")}
                        className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                      />
                    </div>

                    {/* Multi date picker component called */}
                    <div
                      ref={refClose}
                      className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s "
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                      Authorization Number
                      <span className="text-red-500">*</span>
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                      {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setValue(!value);
                    }}
                  /> */}
                      <Switch
                        size="small"
                        checked={active ? true : false}
                        onClick={() => setActive(!active)}
                      />
                      <span className="text-[14px] ml-1 text-gray-600 font-medium">
                        In Network
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
                    <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
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
            </>
          ) : (
            <Loading />
          )}
        </form>
      </motion.div>

      {id && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="divider"></div>

          {/* Table */}

          {authEditData?.auth_act && authEditData?.auth_act.length > 0 ? (
            <AuthorizationEditTable
              nestedData={authEditData?.auth_act}
            ></AuthorizationEditTable>
          ) : (
            <Loading />
          )}

          <button
            onClick={() => {
              setOpenEditModal(true);
            }}
            className="px-2 my-3 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded-sm"
          >
            + Add Service
          </button>
        </motion.div>
      )}
      {openEditModal && (
        <AuthorizationEditModal
          handleClose={handleClose}
          open={openEditModal}
        ></AuthorizationEditModal>
      )}
    </div>
  );
};

export default AuthorizationEdit;
