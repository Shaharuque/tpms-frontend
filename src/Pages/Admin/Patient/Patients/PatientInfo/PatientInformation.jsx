import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
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
import useToken from "../../../../../CustomHooks/useToken";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GuarantorInfo from "./GuarantorInfo/GuarantorInfo";
import AboutPatient from "./AboutPatient/AboutPatient";
import PrimaryAddress from "./PatientAddress/PrimaryAddress";
import DynamicAddress from "./PatientAddress/DynamicAddress";
import DynamicEmail from "./Emailaddress/DynamicEmail";
import PrimaryEmail from "./Emailaddress/PrimaryEmail";
import DynamicPhone from "./PhoneAddress/DynamicPhone";
import PrimaryPhone from "./PhoneAddress/PrimaryPhone";
import BasicInfo from "./BasicInfo";
import TestingFrom from "./TestingFrom";
const PatientInformation = () => {
  const testingobj = {
    City: "mirpur",
    Street: "usa",
    address: [
      {
        street: "djlasjdiad",
        city: "sflsdf38akdj",
        country: "NY",
        status: false,
        number: 452434724582049,
        zip: 555,
      },
      {
        street: "heilo",
        city: "dmd",
        country: "NY",
        status: true,
        number: 452434724582049,
        zip: 73563,
      },
      {
        street: "h45fglo",
        city: "dlfd",
        country: "UK",
        status: false,
        number: 893839,
        zip: 4545,
      },
      {
        street: "435234o",
        city: "ld",
        country: "UK",
        status: true,
        number: 4794724582049,
        zip: 4523,
      },
    ],
    assignment: "male",
    checkedActive: 1,
    client_dob: "",
    country: "NY",
    dob: "2021-08-05",
    email: "testdfv@sdf.dsf",
    first_date: "",
    first_name: "cbvxdfg",
    fruit: "Male",
    gender: "Male",
    group: "work",
    group2: "work",
    language: "male",
    last_name: "sdgsdg",
    middle_name: null,
    more_zip0: "34",
    more_zip1: "45234",
    phone: "+14353464363",
    pos: "work",
    race_details: "male",
    referred_by: "male",
    region: "work",
    zip: "500",
  };

  const [obj, setobj] = useState(testingobj.address);

  const [restData, setRestData] = useState({});

  const { token } = useToken();
  const [active, setActive] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const [email, setEmail] = useState(false);
  const [emailReminder, setEmailReminder] = useState(false);
  const [Guarantor, setGuarantor] = useState(false);
  const [file, setFile] = useState();
  const [relation, setRelation] = useState("Self");
  const [checkLocation, setLocation] = useState(false);

  // //console.log("obj data", obj);

  // //console.log("phone :", phone);
  //file uploaded issue
  const [signatureUpload, setSignatureUpload] = useState("");
  // //console.log("setSignatureUpload = = =", signatureUpload);
  // file uploaded added

  // testing form
  console.log("resetData", restData);

  const { register, control, handleSubmit, reset, setValue, getValues } =
    useForm({
      defaultValues: {
        address: testingobj.address,
      },
      mode: "onBlur",
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
  });

  // calender hide
  // const { register, handleSubmit, reset, setValue, getValues } = useForm();
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
  // //console.log(date);

  // const month = date ? date.getMonth() + 1 : null;
  // const day = date ? date.getDate() : null;
  // const year = date ? date.getFullYear() : null;

  // const handleCancelDate = () => {
  //   // setOpenCalendar(false);
  //   setDate(null);
  // };

  // Address + icon Click Handeler

  const handleClick = () => {
    // setAddressRendomValue((current) => [...current, Math.ceil(Math.random())]);
    // testingobj.address.push({ street: "", city: "", country: "", zip: "" });
    // //console.log("push", testingobj.address);
    //console.log(obj);
    setobj([...obj, { street: "", city: "", country: "", zip: "" }]);
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
  const addressHandleRemove = (x) => {
    //console.log("findindex", x);
    // const list = [...addressRendomValue];
    // const deltedData = obj.splice(index, 1);
    // //console.log(deltedData);
    // setobj(deltedData)
    // setRestData("");
    // updated code
    // const deleteData = obj.filter((item, index) => index !== x);
    // //console.log("deletedata", deleteData);
    // setobj(deleteData);
    //console.log("deleteData", deleteData);
    // //console.log("obj", obj);
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
  //console.log("patient Info", id);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.patientInfo);
  const patient_details = data?.patientDetails?.clients;
  const loading = data?.loading;
  //console.log("patient details", data);
  //console.log("hone number", patient_details?.phone_number);
  const [phone, setPhone] = useState(patient_details?.phone_number);

  useEffect(() => {
    // action dispatched
    dispatch(getpatientsDetails({ id, token }));
  }, [id, dispatch, token]);

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
  }, [patient_details, reset]);

  const onSubmit = (data) => {
    console.log(data);
    const is_client_active = data?.checkedActive ? 1 : 0;
    const formData = {
      is_client_active,
    };
    console.log(formData);
    // //console.log(file);
  };

  // //console.log("---", addressRendomValue);

  ///relation value handle
  const settingRelation = (e) => {
    // //console.log("selected option", e.target.value);
    //const relation = e.target.value;
    if (e.target.value === "Self") {
      setGuarantor(false);
      document.getElementById("checkbox").checked = false;
    }

    //setRelation(relation);
    setRelation(e.target.value);
  };

  //Guarentor handler code
  const handleChange = (event) => {
    if (event.target.checked) {
      // //console.log("✅ Checkbox is checked");
      setGuarantor(true);
    } else {
      // //console.log("⛔️ Checkbox is NOT checked");
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
    // //console.log("getvalue street", getValues("Street"));
    // //console.log("getvalue city", getValues("City"));
    // //console.log("getvalue country", getValues("country"));
    // //console.log("getvalue zip", getValues("zip"));
  };

  // console.log("obj", obj);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicInfo
            adData={{
              setActive,
              active,
              settingRelation,
              register,
            }}
          />
          {/* testing form */}
          {/* {testingobj?.address.map((item, index) => (
            <TestingFrom
              adData={{
                fields,
                register,
                remove,
                append,
                restData,
                setRestData,
                index,
                reset,
                item,
              }}
            />
          ))} */}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-1 mr-2 gap-x-2 gap-y-1">
            {/* address  */}
            <div className="">
              <>
                <PrimaryAddress
                  append={append}
                  rg={register}

                  // btnclick={handleClick}
                />

                {/* {obj?.length > 0 &&
                  obj.map((item, index) => (
                    <DynamicAddress
                      adData={{
                        restData,
                        setRestData,
                        addressRendomValue,
                        index,
                        reset,
                        item,
                        addressHandleRemove,
                        register,
                      }}
                    />
                  ))} */}

                <DynamicAddress
                  adData={{
                    Controller,
                    fields,
                    register,
                    remove,
                    control,
                    setPhone,
                    phone,
                  }}
                />

                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-4 gap-y-2">
                  <div>
                    <label className="label">
                      <span className=" label-font">
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
                      <span className=" label-font">
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
              <PrimaryPhone
                adData={{
                  handlePhoneClick,
                  appointment,
                  setAppointment,
                  setPhone,
                  phone,
                  reset,
                  setActive,
                  active,
                  register,
                  Controller,
                  control,
                }}
              />
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
                  <DynamicPhone
                    adData={{
                      phoneHandleRemove,
                      appointment,
                      setAppointment,
                      setPhone,
                      phone,
                      index,
                      reset,
                      setActive,
                      active,
                      register,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Email  */}
            <div className=" lg:mx-auto md:mx-0">
              <PrimaryEmail
                adData={{
                  handleEmailClick,
                  reset,
                  setActive,
                  active,
                  register,
                }}
              />
              {emailRendomValue.map((x, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <DynamicEmail
                    adData={{
                      EmailHandleRemove,
                      index,
                      reset,
                      setActive,
                      active,
                      register,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <AboutPatient register={register}></AboutPatient>

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
            <span className="text-sm ml-1 text-gray-700 font-medium">
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
              <GuarantorInfo
                register={register}
                checkLocation={checkLocation}
                SameasPatientBtn={SameasPatientBtn}
                hook={hook}
              ></GuarantorInfo>
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
            <button className="pms-button my-3" type="submit">
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientInformation;
