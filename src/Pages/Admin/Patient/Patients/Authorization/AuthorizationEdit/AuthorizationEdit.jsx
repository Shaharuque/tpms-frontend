// Nested authorization table showed here again Patient Authorization Activity api thekey
// Authorization edit
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Switch } from "antd";
import axios from "axios";
import { RiArrowLeftRightLine } from "react-icons/ri";
import {
  useGetPatientAuthorizationActivityQuery,
  useGetPatientAuthorizationInfoQuery,
  usePatientAuthorizationUpdateMutation,
} from "../../../../../../features/Patient_redux/authorization/authorizationApi";
import useToken from "../../../../../../CustomHooks/useToken";
import CustomDateRange from "../../../../../Shared/CustomDateRange/CustomDateRange";
import Loading from "../../../../../../Loading/Loading";
import AuthorizationEditModal from "../AuthorizationActivityModal/AuthorizationEditModal";
import AuthorizationActivityNestedTable from "./AuthorizationActivityNestedTable/AuthorizationActivityNestedTable";
import BoolConverter from "../../../../../Shared/BoolConverter/BoolConverter";
import { toast } from "react-toastify";
import AuthorizationActivityAddModal from "../AuthorizationActivityModal/AuthorizationActivityAddModal";

const AuthorizationEdit = () => {
  const { id } = useParams();
  // console.log("single authorization data edit id ", id);
  const patientId = localStorage.getItem("p_key");
  // console.log(patientId);
  const [textNotes, setTextNotes] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [addServiceModal, setAddServiceModal] = useState(false);
  const [authEditData, setauthEditData] = useState([]);
  const [treatmentType, setTreatmentType] = useState();
  const [startD, setStartD] = useState(null);
  const [endD, setEndD] = useState(null);
  const { token } = useToken();
  console.log("testing on change txtype", treatmentType);

  //Patient authorization info API(ID wise)
  const {
    data: authorizationInfo,
    isLaoding,
    isError,
  } = useGetPatientAuthorizationInfoQuery({
    token,
    id,
  });
  console.log("authorization info data", authorizationInfo);

  //Patient Authorization Activity nested table data api
  const {
    data: allActivityData,
    isLoading: activityLoading,
    isError: activityError,
  } = useGetPatientAuthorizationActivityQuery({
    token,
    payload: {
      authorization_id: id,
    },
  });

  //Patient Authorization update api
  const [patientAuthorizationUpdate, { isSuccess: updateSuccess, isError: updateError }] = usePatientAuthorizationUpdateMutation();

  // console.log(
  //   "authorization Activity data",
  //   allActivityData?.client_authorization_activity?.data
  // );
  const allAuthorizationActivity = allActivityData?.patientActivities || [];

  // API date Data Destructring
  let selectedDate = authorizationInfo?.client_authorization_info?.selected_date || null;
  // API Destructuring
  const {
    description,
    authorization_name,
    payor_id,
    authorization_number,
    uci_id,
    treatment_type,
    treatment_type_id,
    supervisor_id,
    diagnosis_one,
    diagnosis_two,
    diagnosis_three,
    diagnosis_four,
    deductible,
    in_network,
    copay,
    cms_four,
    cms_eleven,
    is_valid,
    is_placeholder,
    is_primary,
    notes,
  } = authorizationInfo?.client_authorization_info || {};
  console.log("Notes", notes);
  //All payors array
  const txType = authorizationInfo?.treatment_types;
  console.log("all tx types", txType);
  //All supervisor array
  const insurance = authorizationInfo?.all_payors;
  //All treatment types
  const supvProvider = authorizationInfo?.supervisor;

  //initial TxType
  useEffect(() => {
    setTreatmentType(treatment_type);
  }, [treatment_type]);

  //Toggle handler code
  const [network, setNetwork] = useState(BoolConverter(in_network));
  const [valid, setValid] = useState(BoolConverter(is_valid));
  const [place_holder, setPlace_holder] = useState(BoolConverter(is_placeholder));

  useEffect(() => {
    setNetwork(BoolConverter(in_network));
  }, [in_network]);

  useEffect(() => {
    setValid(BoolConverter(is_valid));
  }, [is_valid]);

  useEffect(() => {
    setPlace_holder(BoolConverter(is_placeholder));
  }, [is_placeholder]);

  console.log("after boolconversion call data", network, valid, place_holder);

  const handleClose = () => {
    setAddServiceModal(false);
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
  const startMonth = startDate ? startDate.toLocaleString("en-us", { month: "short" }) : null;
  const endMonth = endDate ? endDate.toLocaleString("en-us", { month: "short" }) : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate ? startDate.getFullYear().toString().slice(2, 4) : null;
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
    //console.log(splitedData);
    const monthNumber = splitedData[0];

    const date = new Date();
    date.setMonth(monthNumber - 1);

    const createDate = date.toLocaleString("en-US", { month: "short" });
    const newDate = `${createDate} ${splitedData[1]}, ${splitedData[2]}`;
    return newDate;
  };
  //String Date to [mm/dd/yy] converter function
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join("/");
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
        authorization_number: authorization_number || null,
        uci_id: uci_id || null,
        start_date: startDate ? `${startMonth} ${startDay}, ${startYear}` : startD,
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : endD,
        is_primary,
        diagnosis_one,
        diagnosis_two,
        diagnosis_three,
        diagnosis_four,
        deductible,
        cms_four,
        cms_eleven,
        copay,
        notes,
      });
    }, 0);
  }, [
    startD,
    endD,
    reset,
    startDate,
    endDate,
    is_primary,
    diagnosis_one,
    diagnosis_two,
    diagnosis_three,
    diagnosis_four,
    deductible,
    cms_four,
    cms_eleven,
    copay,
    authorization_number,
    description,
    endDay,
    endMonth,
    endYear,
    startDay,
    startMonth,
    startYear,
    uci_id,
    notes,
  ]);

  const onSubmit = (data) => {
    const payload = {
      edit_authorization_id: id,
      ...data,
      select_date: `${convert(data?.start_date)} - ${convert(data?.end_date)}`,
      in_network: BoolConverter(network),
      is_valid: BoolConverter(valid),
      is_placeholder: BoolConverter(place_holder),
      notes: textNotes,
    };
    patientAuthorizationUpdate({
      token,
      payload,
    });
    console.log(payload);
  };

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully Authorization Updated", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [updateSuccess, updateError]);

  if (isLaoding) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {/* Changes needed */}
        <Link to={`/admin/patient/patient-authorization/${patientId}`} className="text-primary text-lg">
          <IoCaretBackCircleOutline />
        </Link>
        <div className="text-xs font-medium">
          <span className="text-sm font-semibold text-primary">Amro LLC |</span>
          <span className="text-orange-400 font-semibold"> DOB :</span>
          09/28/2021 |<span className="text-orange-400 font-semibold"> Phone : </span>
          (894)-023-8043 |<span className="text-orange-400 font-semibold"> Address : </span>
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
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 mr-2 gap-x-6 gap-y-3">
              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
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
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                    Insurance
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none" {...register("payor_id")}>
                  {payor_id ? (
                    <option value={payor_id}>
                      {insurance
                        ?.filter((item) => item.payor_id === payor_id)
                        ?.map((payors) => {
                          return payors?.payor_name;
                        })}
                    </option>
                  ) : (
                    <option>Select Payor</option>
                  )}
                  {insurance
                    ?.filter((item) => item.payor_id !== payor_id)
                    ?.map((payors) => {
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
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                    Tx Type
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                  {...register("treatment_type")}
                  onChange={(e) => setTreatmentType(e.target.value)}
                >
                  {treatment_type ? <option value={treatment_type}>{treatment_type}</option> : <option>Select Treatment</option>}
                  {txType
                    ?.filter((item) => parseInt(item.id) !== treatment_type_id)
                    ?.map((treatment) => {
                      return (
                        <option key={treatment?.id} value={treatment?.treatment_name}>
                          {treatment?.treatment_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                    SUPV. Provider
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none"
                  {...register("supervisor_id")}
                >
                  {supervisor_id ? (
                    <option value={supervisor_id}>
                      {supvProvider
                        ?.filter((item) => item.employee_id === supervisor_id)
                        ?.map((supv) => {
                          return supv?.providerName?.full_name;
                        })}
                    </option>
                  ) : (
                    <option>Select Supervisor</option>
                  )}
                  {supvProvider
                    ?.filter((item) => item.employee_id !== supervisor_id)
                    ?.map((supv) => {
                      return (
                        <option key={supv?.id} value={supv?.employee_id}>
                          {supv?.providerName?.full_name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Selected date</span>
                </label>
                <div className="ml-1">
                  <div className="flex  justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                    <input
                      value={startDate ? `${startMonth} ${startDay}, ${startYear}` : `${startD}`}
                      readOnly
                      onClick={() => setOpenCalendar(true)}
                      {...register("start_date")}
                      className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-2/5 cursor-pointer"
                    />
                    <RiArrowLeftRightLine
                      onClick={() => setOpenCalendar(true)}
                      className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium w-1/5"
                    ></RiArrowLeftRightLine>
                    <input
                      // defaultValue={"5-10-2034"}
                      value={endDate ? `${endMonth} ${endDay}, ${endYear}` : `${endD}`}
                      readOnly
                      onClick={() => setOpenCalendar(true)}
                      {...register("end_date")}
                      className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-2/5 cursor-pointer"
                    />
                  </div>

                  {/* Multi date picker component called */}
                  <div ref={refClose} className="absolute z-10 md:ml-[-9%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s ">
                    {openCalendar && (
                      <CustomDateRange range={range} setRange={setRange} handleCancelDate={handleCancelDate} setOpen={setOpenCalendar}></CustomDateRange>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
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
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
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
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                    COB
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <select className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1  w-full focus:outline-none" {...register("is_primary")}>
                  <option value="">Select Any</option>
                  <option value="1">Primary</option>
                  <option value="2">Secondary</option>
                  <option value="3">Tertiary</option>
                </select>
              </div>

              <div className="">
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Upload Authorization</span>
                </label>
                <input type="file" className=" ml-1 py-[5px]  text-xs w-full" {...register("fileName")} />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-4 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                      Diagnosis1<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="diagnosis1"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("diagnosis_one")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Diagnosis2</span>
                  </label>
                  <input
                    type="text"
                    name="diagnosis2"
                    // className="border border-gray-300 rounded-sm py-[5px] mx-2 text-xs w-full"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("diagnosis_two")}
                  />
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mr-2 gap-x-4 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">
                      Diagnosis3<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="diagnosis3"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("diagnosis_three")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Diagnosis4</span>
                  </label>
                  <input
                    type="text"
                    name="diagnosis4"
                    className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                    {...register("diagnosis_four")}
                  />
                </div>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mr-2 gap-x-4 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Deductible</span>
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
                    <Switch checked={network} onChange={() => setNetwork(!network)} size="small" />
                    <span className="text-[14px] ml-1 text-gray-600 font-medium">In Network</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">CoPay</span>
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
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">CMS 4 (Insured Name)</span>
                </label>
                <input
                  type="text"
                  name="cms4"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("cms_four")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">CMS 11 (Group No)</span>
                </label>
                <input
                  type="text"
                  name="cms11"
                  className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
                  {...register("cms_eleven")}
                />
              </div>
              <div className="ml-2 mt-5 flex gap-3 items-center">
                <div className="flex items-center">
                  <Switch checked={valid} onChange={() => setValid(!valid)} size="small" />
                  <span className="text-[14px] ml-2 font-medium text-gray-500">Active</span>
                </div>
                <div className="flex items-center">
                  <Switch checked={place_holder} onChange={() => setPlace_holder(!place_holder)} size="small" />
                  <span className="text-[14px] ml-2 font-medium text-gray-500">Placeholder</span>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-font text-[13px] font-medium text-[#00a1b1] text-left">Notes</span>
                </label>
                <textarea
                  {...register("notes")}
                  onChange={(e) => setTextNotes(e.target.value)}
                  name="comment"
                  className="border border-gray-300 text-sm p-2  ml-1 h-24 w-full"
                ></textarea>
              </div>
            </div>
            {/* submit  */}
            <button className=" pms-button" type="submit">
              Save
            </button>

            <Link to={`/admin/patient/patient-authorization/${patientId}`}>
              <button className=" ml-2 pms-close-button" autoFocus>
                Cancel
              </button>
            </Link>
          </>
        </form>
      </motion.div>
      {id && (
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="divider"></div>

          <div className="flex justify-end">
            <button
              // disabled={treatmentType ? false : true}
              onClick={() => {
                setAddServiceModal(true);
              }}
              className="px-2 my-3 flex items-center py-2 bg-gradient-to-r from-secondary to-primary text-xs  hover:to-secondary text-white rounded"
            >
              + Add Service
            </button>
          </div>

          {/* Table */}
          <AuthorizationActivityNestedTable
            allAuthorizationActivity={allAuthorizationActivity}
            treatment_name={treatmentType}
            defaultTreatment={treatment_type}
            allTreatment={txType}
          ></AuthorizationActivityNestedTable>
        </motion.div>
      )}
      {addServiceModal && (
        <AuthorizationActivityAddModal treatment_name={treatmentType} handleClose={handleClose} open={addServiceModal}></AuthorizationActivityAddModal>
      )}
    </div>
  );
};

export default AuthorizationEdit;
