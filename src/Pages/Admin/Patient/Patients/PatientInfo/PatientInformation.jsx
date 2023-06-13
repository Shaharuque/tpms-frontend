import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getpatientsDetails } from "../../../../../features/Patient_redux/patientSlice";
import Loading from "../../../../../Loading/Loading";
import TextArea from "antd/lib/input/TextArea";
import CustomFileUploader from "../../../../Shared/CustomComponents/CustomFileUploader";
import useToken from "../../../../../CustomHooks/useToken";
import GuarantorInfo from "./GuarantorInfo/GuarantorInfo";
import AboutPatient from "./AboutPatient/AboutPatient";
import PrimaryAddress from "./PatientAddress/PrimaryAddress";
import DynamicAddress from "./PatientAddress/DynamicAddress";
import DynamicEmail from "./Emailaddress/DynamicEmail";
import PrimaryEmail from "./Emailaddress/PrimaryEmail";
import DynamicPhone from "./PhoneAddress/DynamicPhone";
import PrimaryPhone from "./PhoneAddress/PrimaryPhone";
import BasicInfo from "./BasicInfo";

// http://localhost:3000/admin/patient/patient-info/107

const PatientInformation = () => {
  const { token } = useToken();
  const [active, setActive] = useState(false);
  const [Guarantor, setGuarantor] = useState(false);
  const [relation, setRelation] = useState("Self");
  const [checkLocation, setLocation] = useState(false);
  //file uploaded issue
  const [signatureUpload, setSignatureUpload] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.patientInfo);
  console.log("Initial Data Coming from database", data);
  const patient_details = data?.patientDetails?.data?.client_info;
  const patientOtherDetails = data?.patientDetails?.data?.client_other_info;
  const loading = data?.loading;
  const primaryPhone = patient_details?.phone_number;
  const primaryEmail = patient_details?.email;

  console.log("patient details", patient_details);
  console.log("patient other details", patientOtherDetails);

  const [dob, setDob] = useState();
  console.log("dob", dob);
  //for showing default date in real time
  useEffect(() => {
    setDob(patient_details?.client_dob);
  }, [patient_details?.client_dob]);

  useEffect(() => {
    setTimeout(() => {
      console.log("hello world ");
    }, 1000);
  }, [patient_details]);

  console.log("data?.patientDetails?.data?.address-", data?.patientDetails?.data?.address);

  const { register, control, handleSubmit, reset, setValue, getValues } = useForm({
    defaultValues: {
      // address: patient_details?.client_address,
      // number: patient_details?.client_phone,
      // Email: patient_details?.client_email,
      // new code added
      address: data?.patientDetails?.data?.address,
      number: data?.patientDetails?.data?.phones,
      // number: patient_details?.client_phone,
      Email: data?.patientDetails?.data?.emails,
    },
  });

  // this code very important
  useEffect(() => {
    reset({
      number: data?.patientDetails?.data?.phones,
      address: data?.patientDetails?.data?.address,
      Email: data?.patientDetails?.data?.emails,

      // address: patient_details?.client_address,
      // number: patient_details?.client_phone,
      // Email: patient_details?.client_email,
    });
  }, [data?.patientDetails?.data?.address, data?.patientDetails?.data?.emails, data?.patientDetails?.data?.phones, reset]);
  // patient_details?.client_address, patient_details?.client_email, patient_details?.client_phone, reset

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
    // name: "number",
  });

  const {
    fields: phoneFields,
    append: phoneAppend,
    remove: phoneRemove,
  } = useFieldArray({
    control,
    // name: "address",
    name: "number",
  });

  const {
    fields: emailFields,
    append: emailAppend,
    remove: emailRemove,
  } = useFieldArray({
    control,
    name: "Email",
  });

  const [hook, setHook] = useState("");

  useEffect(() => {
    // action dispatched
    dispatch(
      getpatientsDetails({
        payload: {
          patient_id: id,
        },
        token,
      })
    );
  }, [id, dispatch, token]);

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: patient_details?.client_first_name,
        middle_name: patient_details?.client_middle ? patient_details?.client_middle : null,
        last_name: patient_details?.client_last_name,
        login_email: patient_details?.login_email,
        zone: patient_details?.zone,
        gender: patient_details?.client_gender,
        fruit: patient_details?.client_gender,
        checkedActive: patient_details?.is_active_client,
        // address
        client_street: patient_details?.client_street,
        client_city: patient_details?.client_city,
        client_state: patient_details?.client_state,
        client_zip: patient_details?.client_zip,
        // all gurantor
        guarantor_first_name: patient_details?.client_granter?.guarantor_first_name,
        guarantor_last_name: patient_details?.client_granter?.guarantor_last_name,
        guarantor_first_name: patient_details?.client_granter?.guarantor_first_name,
        guarantor_last_name: patient_details?.client_granter?.guarantor_last_name,
        guarantor_check_Date: patient_details?.client_granter?.guarantor_dob,
        GuaratorStreet: patient_details?.client_granter?.g_street,
        GuaratorCity: patient_details?.client_granter?.g_city,
        GuratorCountry: patient_details?.client_granter?.g_state,
        GuratorZip: patient_details?.client_granter?.g_zip,
        relationship: patientOtherDetails?.client_relationship,
      });
      if (patientOtherDetails?.client_relationship !== "Self") {
        setGuarantor(true);
        setRelation(patientOtherDetails?.client_relationship);
      } else {
        setGuarantor(false);
        setRelation(patientOtherDetails?.client_relationship);
      }
    }, 0);
  }, [patientOtherDetails?.client_relationship, patient_details, reset]);

  const onSubmit = (data) => {
    console.log(data);
    const is_client_active = data?.checkedActive ? 1 : 0;
    const formData = {
      is_client_active,
    };
    console.log(formData);
    // //console.log(file);
  };

  ///relation value handle
  const settingRelation = (e) => {
    console.log("e value", e.target.value);
    if (e.target.value === "Self") {
      setGuarantor(false);
      document.getElementById("checkbox").checked = false;
    } else if (e.target.value !== "Self") {
      setGuarantor(true);
    }

    //setRelation(relation);
    setRelation(e.target.value);
  };

  // const settingRelation = (e) => {
  //   if (e.target.value === "Self") {
  //     setGuarantor(false);
  //   } else {
  //     setGuarantor(true);
  //   }

  //   setRelation(e.target.value);
  // };

  // const handleChange = () => {
  //   if (guarantor) {
  //     setGuarantor(false);
  //   } else {
  //     setGuarantor(true);
  //   }
  // };

  // Guarentor handler code
  // const handleChange = (event) => {
  //   console.log("check event", event.target);
  //   if (event.target.checked) {
  //     //console.log("✅ Checkbox is checked");
  //     setGuarantor(true);
  //   } else {
  //     //console.log("⛔️ Checkbox is NOT checked");
  //     setGuarantor(false);
  //   }
  // };

  const handleChange = (event) => {
    if (event.target.checked) {
      setGuarantor(true);
    } else {
      setGuarantor(false);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  const SameasPatientBtn = () => {
    setLocation(true);
    setValue("GuaratorStreet", getValues("client_street"));
    setValue("GuaratorCity", getValues("client_city"));
    setValue("GuratorCountry", getValues("client_state"));
    setValue("GuratorZip", getValues("client_zip"));
    console.log("getvalue street", getValues("Street"));
    console.log("getvalue city", getValues("City"));
    console.log("getvalue country", getValues("country"));
    console.log("getvalue zip", getValues("zip"));
  };

  console.log("patientAdd");

  console.log("fields", phoneFields);
  return (
    <div className={data?.patient_details?.data?.address?.length < 1 ? "" : ""}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicInfo
            adData={{
              dob,
              setDob,
              control,
              Controller,
              setActive,
              active,
              settingRelation,
              register,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-1 mr-2 gap-x-6 gap-y-1">
            {/* <div className="flex flex-wrap my-1 mr-2 md:gap-x-2 gap-y-5"> */}
            {/* address  */}
            <div className="pr-6">
              <PrimaryAddress append={append} rg={register} />
              <br></br>
              {patient_details?.admin_id && (
                <DynamicAddress
                  adData={{
                    fields,
                    register,
                    remove,
                  }}
                />
              )}

              {/* <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 gap-x-4 gap-y-2"> */}
              <div className=" flex items-center justify-between my-1 gap-x-4 gap-y-2">
                <div className="w-full">
                  <label className="label">
                    <span className=" label-font">
                      POS<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select className="input-border input-font py-[1px] w-full focus:outline-none" {...register("pos")}>
                    <option value="Main Office">Main Office</option>
                    <option value="Telehealth">Telehealth</option>
                    <option value="Home">Home</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="label">
                    <span className=" label-font">
                      Region<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select className="input-border input-font py-[1px] w-full focus:outline-none" {...register("zone")}>
                    <option value="2"></option>
                    <option value="6">Main Zone</option>
                    <option value="27">ABC Behavioral Therapy Center</option>
                  </select>
                </div>
              </div>
            </div>
            {/* phone  */}
            <div className="">
              <PrimaryPhone
                adData={{
                  phoneAppend,
                  register,
                  primaryPhone,
                }}
              />
              <br></br>
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
                    phoneFields,
                    phoneRemove,
                    register,
                  }}
                />
              </motion.div>
            </div>
            {/* Email  */}
            <div className="">
              <PrimaryEmail
                adData={{
                  emailAppend,
                  register,
                  primaryEmail,
                }}
              />
              <br></br>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <DynamicEmail
                  adData={{
                    register,
                    emailFields,
                    emailRemove,
                  }}
                />
              </motion.div>
            </div>
          </div>

          <AboutPatient register={register}></AboutPatient>
          <div className="divider"></div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              disabled={relation === "Self" ? true : false}
              type="checkbox"
              // checked={relation !== "Self"}
              onChange={handleChange}
              id="checkbox"
            /> */}
            <input disabled={relation === "Self"} type="checkbox" checked={Guarantor} onChange={handleChange} id="checkbox" />

            <span className="text-sm ml-1 text-gray-700 font-medium">Is Guarantor Available?</span>
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
              <GuarantorInfo register={register} checkLocation={checkLocation} SameasPatientBtn={SameasPatientBtn} hook={hook}></GuarantorInfo>
            </motion.div>
          )}

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-1 mr-2 gap-x-3 gap-y-1">
            <div className="mt-3">
              <TextArea rows={7} placeholder=" Notes" size="large" />
            </div>

            <div className="ml-2 mt-[12px] ">
              <CustomFileUploader signatureUpload={signatureUpload} setSignatureUpload={setSignatureUpload}></CustomFileUploader>
              <p className="mt-3 text-sm ">Upload Signature</p>
            </div>
          </div>
          <div className="mb-24">
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
