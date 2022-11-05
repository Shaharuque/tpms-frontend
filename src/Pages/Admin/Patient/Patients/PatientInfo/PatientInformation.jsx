import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SimpleFileUpload from "react-simple-file-upload";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getpatientsDetails } from "../../../../../features/Patient_redux/patientSlice";
import Loading from "../../../../../Loading/Loading";
import TextArea from "antd/lib/input/TextArea";
import { useOutsideAlerter } from "../../../../../CustomHooks/useDetectOutsideClick";
import { Switch } from "antd";
// import Calendar from "react-calendar";
// import "./SingleCalendar.css";
import CustomFileUploader from "../../../../Shared/CustomComponents/CustomFileUploader";

const PatientInformation = () => {
  const [active, setActive] = useState(false);
  const [voiceMsg, setVoiceMsg] = useState(false);
  const [textMsg, setTextMsg] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const [email, setEmail] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [Guarantor, setGuarantor] = useState(false);
  const [file, setFile] = useState();
  const [relation, setRelation] = useState("Self");
  const [checkLocation, setLocation] = useState(false);

  //file uploaded issue
  const [signatureUpload, setSignatureUpload] = useState("");
  console.log("setSignatureUpload = = =", signatureUpload);
  // file uploaded added

  // calender hide
  const { register, handleSubmit, reset, setValue, getValues } = useForm();
  const [hook, setHook] = useState("");

  // Address state
  const [addressRendomValue, setAddressRendomValue] = useState([]);
  // phone state
  const [phoneRendomValue, setPhoneRendomValue] = useState([]);
  // Email State
  const [emailRendomValue, setEmailRendomValue] = useState([]);

  // // testing single calendar
  // const [date, setDate] = useState(new Date());
  // const [openCalendar, setOpenCalendar] = useState(false);
  // const changeDate = (date) => {
  //   setDate(date);
  // };
  // console.log(date);

  // const month = date ? date.getMonth() + 1 : null;
  // const day = date ? date.getDate() : null;
  // const year = date ? date.getFullYear() : null;

  // const handleCancelDate = () => {
  //   // setOpenCalendar(false);
  //   setDate(null);
  // };

  // Address + icon Click Handeler
  const handleClick = () => {
    setAddressRendomValue((current) => [...current, Math.random()]);
  };
  // Phone + icon click handeler
  const handlePhoneClick = () => {
    setPhoneRendomValue((current) => [...current, Math.random()]);
  };

  // email + icon click handeler
  const handleEmailClick = () => {
    setEmailRendomValue((current) => [...current, Math.random()]);
  };

  // address icon delete handeler
  const addressHandleRemove = (index) => {
    // console.log(index);
    const list = [...addressRendomValue];
    list.splice(index, 1);
    setAddressRendomValue(list);
  };

  // Phone icon delete handeler
  const phoneHandleRemove = (index) => {
    const list = [...phoneRendomValue];
    list.splice(index, 1);
    setPhoneRendomValue(list);
  };

  // email icon delete handeler
  const EmailHandleRemove = (index) => {
    const list = [...emailRendomValue];
    list.splice(index, 1);
    setEmailRendomValue(list);
  };
  // Patient Information
  const { id } = useParams();
  // console.log("patient Info", id);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.patientInfo);
  const patient_details = data?.patientDetails?.clients;
  const loading = data?.loading;
  // console.log("patient details", patient_details);

  useEffect(() => {
    // action dispatched
    dispatch(getpatientsDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: patient_details?.client_first_name,
        middle_name: patient_details?.client_middle
          ? patient_details?.client_middle
          : null,
        last_name: patient_details?.client_last_name,
        dob: patient_details?.client_dob,
        // dob: date ? `${month}/${day}/${year}` : null,
        email: patient_details?.email,
        phone: patient_details?.phone_number,
        gender: patient_details?.client_gender,
        fruit: patient_details?.client_gender,
        checkedActive: patient_details?.is_active_client,
      });
    }, 0);
  }, [patient_details?.client_first_name, patient_details?.is_active_client]);

  const onSubmit = (data) => {
    console.log(data);
    const is_client_active = data?.checkedActive ? 1 : 0;
    const formData = {
      is_client_active,
    };
    console.log(formData);
    console.log(file);
  };

  ///relation value handle
  const settingRelation = (e) => {
    //console.log("selected option", e.target.value);
    //const relation = e.target.value;
    if (e.target.value === "Self") {
      setGuarantor(false);
      document.getElementById("checkbox").checked = false;
    }
    //setRelation(relation);
    setRelation(e.target.value);
  };
  // console.log(relation);
  //Guarentor handler code
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
      setGuarantor(true);
    } else {
      console.log("⛔️ Checkbox is NOT checked");
      setGuarantor(false);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const SameasPatientBtn = () => {
    setLocation(true);
    setValue("GuaratorStreet", getValues("Street"));
    setValue("GuaratorCity", getValues("City"));
    setValue("GuratorCountry", getValues("country"));
    setValue("GuratorZip", getValues("zip"));
    console.log("getvalue street", getValues("Street"));
    console.log("getvalue city", getValues("City"));
    console.log("getvalue country", getValues("country"));
    console.log("getvalue zip", getValues("zip"));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex ml-1 mt-1 mr-2 items-center justify-end">
            {/* <input
              type="checkbox"
              name="checkedActive"
              {...register("checkedActive")}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-[15px] ml-1 text-gray-700 gap-1 font-semibold">
              Active Patient
            </span>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-3 mr-2 gap-x-6 gap-y-1 ">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text label-font">
                  First Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="first_name"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("first_name")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text label-font">Middle Name</span>
              </label>
              <input
                type="text"
                name="middle_name"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("middle_name")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text label-font">
                  Last Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="last_name"
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("last_name")}
              />
            </div>
            {/* DOB */}
            <div>
              <label className="label">
                <span className="label-text label-font">
                  Date of Birth<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                className="input-border input-font  w-full focus:outline-none"
                type="date"
                {...register("client_dob")}
              />
              {/* <div ref={ref}>
                <input
                           className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none pb-[0.8px]"
                  // value={`${month}/${day}/${year}`}
                  name="dob"
                  readOnly
                  onClick={() =>
                    setOpenCalendar((openCalendar) => !openCalendar)
                  }
                  {...register("dob")}
                />                                                 
                {openCalendar && (
                  <div className="absolute z-10 rounded">
                    <Calendar onChange={changeDate}></Calendar>
                    <div className="bg-white py-2 text-right rounded-b-[5px]">
                      <button
                        onClick={handleCancelDate}
                        className=" text-white py-1 mr-1 rounded px-2 bg-[#0AA7B8] hover:bg-red-700 hover:border-red-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
            {/* gender */}
            <div className=" ">
              <label className="label">
                <span className="label-text label-font">
                  Gender<span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="input-border input-font  w-full focus:outline-none"
                name="gender"
                {...register("gender")}
              >
                {/*api thekey gathered data jemon thakbey value thik same bhabey assign kortey hobey */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* RelationShip */}
            <div>
              <label className="label">
                <span className="label-text flex items-center label-font  ">
                  RelationShip
                  <AiOutlineQuestionCircle className="text-sm" />
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                onChange={settingRelation}
                className="input-border input-font  w-full focus:outline-none"
              >
                <option value="Self">Self</option>
                <option value="Spouse">Spouse</option>
                <option value="Other">Other</option>
                <option value="Child">Child</option>
                <option value="Grandfather or Grandmother">
                  Grandfather or Grandmother
                </option>
                <option value="Grandson or Granddaughter">
                  Grandson or Granddaughter
                </option>
                <option value="Nephew or Niece">Nephew or Niece</option>
                <option value="Adopter Child">Adopter Child</option>
                <option value="Foster Child">Foster Child</option>
                <option value="Stepson">Stepson</option>
                <option value="Ward">Ward</option>
                <option value="Stepdaughter">Stepdaughter</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-1 mr-2 gap-x-2 gap-y-1">
            {/* address  */}
            <div className="">
              <>
                <label className="label">
                  <span className="label-text flex items-center label-font">
                    Address
                    <AiOutlineQuestionCircle className="text-sm" />
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Street"
                    id="streetval"
                    defaultValue={"America"}
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    {...register("Street")}
                  />
                  <button // onClick={() => setOpen(true)}
                    onClick={handleClick}
                    className="bg-secondary text-white p-[6px]"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    defaultValue={"Buffalo"}
                    {...register("City")}
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
                  <div>
                    <select
                      className="input-border input-font  w-full focus:outline-none"
                      defaultValue={"NY"}
                      {...register("country")}
                    >
                      <option value="NY">NY</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip"
                      className="input-border input-font py-[1px] w-full focus:outline-none"
                      {...register("zip")}
                    />
                  </div>
                </div>

                {addressRendomValue.map((x, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    {/*  */}
                    <label className="label">
                      <span className="label-text flex items-center label-font ">
                        Address
                        <AiOutlineQuestionCircle className="text-sm" />
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <div className="mb-2 flex items-center gap-2">
                      <input
                        type="text"
                        className="input-border input-font py-[1px] w-full focus:outline-none"
                        {...register("Permanent_Street")}
                      />
                      <div // onClick={() => setOpen(false)}
                        onClick={() => {
                          addressHandleRemove(index);
                        }}
                        className="bg-red-500 text-white p-[6px]"
                      >
                        <RiDeleteBin6Line />
                      </div>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder="adfaljdfasd"
                        className="input-border input-font py-[1px] w-full focus:outline-none"
                        {...register("more_City")}
                      />
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
                      <div>
                        <select
                          className="input-border input-font  w-full focus:outline-none"
                          {...register("more_Country")}
                        >
                          <option value="NY">NY</option>
                          <option value="UK">UK</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="input-border input-font py-[1px] w-full focus:outline-none"
                          {...register("more_zip")}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-1">
                  <div>
                    <label className="label">
                      <span className="label-text label-font">
                        POS<span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="input-border input-font py-[1px] w-full focus:outline-none"
                      {...register("pos")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text label-font">
                        Region<span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="input-border input-font py-[1px] w-full focus:outline-none"
                      {...register("region")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                </div>
              </>
            </div>

            {/* phone  */}
            <div className=" lg:mx-auto md:mx-0">
              <>
                <label className="label">
                  <span className="label-text label-font">Phone</span>
                </label>
                <div className="flex flex-wrap gap-1 items-center gap-x-4 ">
                  <div>
                    <input
                      type="text"
                      name="phone"
                      className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full py-[1px] ml-1 focus:outline-none"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <select
                      className="input-border input-font  w-full focus:outline-none"
                      {...register("group")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <button // onClick={() => setPhoneOpen(true)}
                    onClick={() => {
                      handlePhoneClick();
                    }}
                    className="bg-secondary text-white p-[6px]"
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex ml-1 mt-2 items-center gap-2 flex-wrap ">
                  <div className="flex items-center">
                    {/* <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setVoiceMsg(!voiceMsg);
                      }}
                    /> */}
                    <Switch
                      size="small"
                      checked={active ? true : false}
                      onClick={() => setActive(!active)}
                    />
                    <span className="text-xs ml-1 text-gray-700 font-normal">
                      Voice message ok
                    </span>
                  </div>

                  <div className="flex items-center">
                    {/* <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setTextMsg(!textMsg);
                      }}
                    /> */}
                    <Switch
                      size="small"
                      checked={active ? true : false}
                      onClick={() => setActive(!active)}
                    />
                    <span className="text-xs ml-1 text-gray-700 font-normal">
                      Text message ok
                    </span>
                  </div>
                </div>

                <div className="flex ml-1 mt-1 items-center">
                  {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setAppointment(!appointment);
                    }}
                  /> */}
                  <Switch
                    size="small"
                    checked={active ? true : false}
                    onClick={() => setActive(!active)}
                  />
                  <span className="text-xs ml-1 text-gray-700 font-normal">
                    Send text/voice appointment reminders
                  </span>
                </div>
              </>
              {phoneRendomValue.map((x, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="label">
                    <span className="label-text label-font">Phone</span>
                  </label>
                  <div className="flex flex-wrap gap-1 items-center gap-x-4 ">
                    <div>
                      <input
                        type="text"
                        name="phone"
                        className="input-border text-gray-600 rounded-sm  text-[14px] py-[1px] font-medium w-full ml-1 focus:outline-none"
                        {...register("phone")}
                      />
                    </div>
                    <div>
                      <select
                        className="input-border input-font  w-full focus:outline-none"
                        {...register("group")}
                      >
                        <option value="work">work</option>
                        <option value="home">home</option>
                        <option value="family">family</option>
                      </select>
                    </div>
                    <button
                      onClick={() => phoneHandleRemove(index)}
                      className="bg-red-500 text-white p-[6px]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                  <div className="flex ml-1 mt-2 items-center gap-2 flex-wrap ">
                    <div className="flex items-center">
                      {/* <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setVoiceMsg(!voiceMsg);
                        }}
                      /> */}
                      <Switch
                        size="small"
                        checked={active ? true : false}
                        onClick={() => setActive(!active)}
                      />
                      <span className="text-xs ml-1 text-gray-700 font-normal">
                        Voice message ok
                      </span>
                    </div>

                    <div className="flex items-center">
                      {/* <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setTextMsg(!textMsg);
                        }}
                      /> */}
                      <Switch
                        size="small"
                        checked={active ? true : false}
                        onClick={() => setActive(!active)}
                      />
                      <span className="text-xs ml-1 text-gray-700 font-normal">
                        Text message ok
                      </span>
                    </div>
                  </div>

                  <div className="flex ml-1 mt-1 items-center">
                    {/* <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setAppointment(!appointment);
                      }}
                    /> */}
                    <Switch
                      size="small"
                      checked={active ? true : false}
                      onClick={() => setActive(!active)}
                    />
                    <span className="text-xs ml-1 text-gray-700 font-normal">
                      Send text/voice appointment reminders
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/*  */}
            {/* Email  */}
            <div className=" lg:mx-auto md:mx-0">
              <>
                <label className="label">
                  <span className="label-text label-font">Email</span>
                </label>
                <div className="flex flex-wrap items-center gap-x-4 ">
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="input-border input-font py-[1px] w-full focus:outline-none"
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <select
                      className="input-border text-gray-600 rounded-sm text-[14px] font-medium ml-1 w-full focus:outline-none"
                      {...register("group2")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      handleEmailClick();
                    }}
                    className="bg-secondary text-white p-[6px] "
                  >
                    <FaPlus />
                  </button>
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setEmail(!email);
                    }}
                  /> */}
                  <Switch
                    size="small"
                    checked={active ? true : false}
                    onClick={() => setActive(!active)}
                  />
                  <span className="text-xs ml-1 text-gray-700 font-medium">
                    Email OK
                  </span>
                </div>

                <div className="flex ml-1 mt-1 items-center">
                  {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setEmailSend(!emailSend);
                    }}
                  /> */}
                  <Switch
                    size="small"
                    checked={active ? true : false}
                    onClick={() => setActive(!active)}
                  />
                  <span className="text-xs ml-1 text-gray-700 font-medium">
                    Send email appointment reminders
                  </span>
                </div>
              </>

              {emailRendomValue.map((x, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="label">
                    <span className="label-text label-font">Email</span>
                  </label>
                  <div className="flex flex-wrap items-center gap-x-4 ">
                    <div>
                      <input
                        type="text"
                        name="email"
                        className="input-border input-font py-[1px] w-full focus:outline-none"
                        {...register("email")}
                      />
                    </div>
                    <div>
                      <select
                        className="input-border input-font w-full focus:outline-none"
                        {...register("group2")}
                      >
                        <option value="work">work</option>
                        <option value="home">home</option>
                        <option value="family">family</option>
                      </select>
                    </div>
                    <button
                      onClick={() => EmailHandleRemove(index)}
                      className="bg-red-500 text-white p-[6px]"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                  <div className="flex ml-1 mt-2 items-center gap-1 flex-wrap ">
                    <div className="">
                      {/* <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setEmail(!email);
                        }}
                      /> */}
                      <Switch
                        size="small"
                        checked={active ? true : false}
                        onClick={() => setActive(!active)}
                      />
                      <span className="text-xs ml-1 text-gray-700 font-normal">
                        Email OK
                      </span>
                    </div>
                  </div>

                  <div className="flex ml-1 mt-1 items-center">
                    {/* <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setEmailSend(!emailSend);
                      }}
                    /> */}
                    <Switch
                      size="small"
                      checked={active ? true : false}
                      onClick={() => setActive(!active)}
                    />
                    <span className="text-xs ml-1 text-gray-700 font-normal">
                      Send email appointment reminders
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <>
            <label className="label">
              <span className="label-text text-[16px] text-gray-700 text-left font-bold mt-2">
                About Patient
              </span>
            </label>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 mb-1 mr-2 gap-x-6 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text label-font">
                    Race &amp; Ethnicity Details
                  </span>
                </label>
                <select
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("race_details")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text label-font">
                    Preferred Language
                  </span>
                </label>
                <select
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("language")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text label-font">Date First Seen</span>
                </label>
                <input
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  type="date"
                  {...register("first_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text label-font">Referred By</span>
                </label>
                <select
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("referred_by")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text label-font">Assignment</span>
                </label>
                <select
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register("assignment")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </>

          <div className="divider"></div>

          <div className="flex ml-1 mt-1 items-center">
            <input
              disabled={relation === "Self" ? true : null}
              type="checkbox"
              onChange={handleChange}
              // value={isSubscribed}
              // name="patient"
              id="checkbox"
              // onClick={() => {
              //   setGuarantor(!Guarantor);
              // }}
            />
            <span className="text-xs ml-1 text-gray-700 font-normal">
              Is Guarantor Available?
            </span>
          </div>

          {Guarantor && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-sm font-medium my-1 ml-1">Guarantor Info</h1>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text label-font">First Name</span>
                  </label>
                  <input
                    type="text"
                    name="guarantor_first_name"
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    {...register("guarantor_first_name")}
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text label-font">Last Name</span>
                  </label>
                  <input
                    type="text"
                    name="guarantor_last_name"
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    {...register("guarantor_last_name")}
                  />
                </div>
                {/* DOB */}
                <div>
                  {" "}
                  <label className="label">
                    <span className="label-text label-font">Check Date</span>
                  </label>
                  <input
                    className="input-border input-font  w-full focus:outline-none"
                    type="date"
                    {...register("guarantor_check_Date")}
                  />
                </div>
              </div>

              {/* ---------------------------------*/}
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-1">
                <div>
                  <label className="label">
                    <span className="label-text label-font">Address</span>
                  </label>
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Street"
                      className="input-border text-gray-600 rounded-sm  text-[16px] font-medium w-full ml-1 focus:outline-none"
                      {...register(checkLocation ? "GuaratorStreet" : "null")}
                    />
                  </div>
                </div>

                <div className="my-auto text-xs bg-secondary text-white ml-1 py-1 mb-2 text-center w-full rounded-md">
                  <button
                    onClick={() => {
                      SameasPatientBtn();
                    }}
                  >
                    Same as patient address
                  </button>
                </div>
              </div>

              {/* --------------------------- */}
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-1">
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    defaultValue={hook?.City}
                    {...register(checkLocation ? "GuaratorCity" : "dj")}
                  />
                </div>
                <div>
                  <select
                    className="input-border input-font  w-full focus:outline-none"
                    {...register(checkLocation ? "GuratorCountry" : "null")}
                  >
                    <option value="NY">NY</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Zip"
                    className="input-border input-font py-[1px] w-full focus:outline-none"
                    {...register(checkLocation ? "GuratorZip" : "dj")}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-1 mr-2 gap-x-3 gap-y-1">
            <div className="mt-3">
              <TextArea rows={7} placeholder=" Notes" size="large" />
            </div>

            <div className="ml-2 mt-[12px] ">
              <CustomFileUploader
                signatureUpload={signatureUpload}
                setSignatureUpload={setSignatureUpload}
              ></CustomFileUploader>
              <p className="mt-3 text-sm ">Upload Signature</p>
            </div>
          </div>
          <div className="mb-5">
            {/* submit  */}
            <button
              className=" py-[5px] mt-7 px-3 my-1 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
              type="submit"
            >
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientInformation;
