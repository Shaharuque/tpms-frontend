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

const PatientInformation = () => {
  const { token } = useToken();
  const [active, setActive] = useState(false);
  const [Guarantor, setGuarantor] = useState(false);
  const [relation, setRelation] = useState("Self");
  const [checkLocation, setLocation] = useState(false);

  //file uploaded issue
  const [signatureUpload, setSignatureUpload] = useState("");
  const data = useSelector((state) => state.patientInfo);
  const patient_details = data?.patientDetails?.clients;
  const loading = data?.loading;
  const primaryPhone = patient_details?.phone_number;
  const primaryEmail = patient_details?.email;

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

  const { register, control, handleSubmit, reset, setValue, getValues } =
    useForm({
      defaultValues: {
        address: patient_details?.client_address,
        number: patient_details?.client_phone,
        Email: patient_details?.client_email,
      },
    });

  // this code very important
  useEffect(() => {
    reset({
      address: patient_details?.client_address,
      number: patient_details?.client_phone,
      Email: patient_details?.client_email,
    });
  }, [
    patient_details?.client_address,
    patient_details?.client_email,
    patient_details?.client_phone,
    reset,
  ]);

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

  // Patient Information
  const { id } = useParams();
  //console.log("patient Info", id);
  const dispatch = useDispatch();

  console.log("patient_details===", patient_details);
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
        guarantor_first_name:
          patient_details?.client_granter?.guarantor_first_name,
        guarantor_last_name:
          patient_details?.client_granter?.guarantor_last_name,
        guarantor_check_Date: patient_details?.client_granter?.guarantor_dob,
        GuaratorStreet: patient_details?.client_granter?.g_street,
        GuaratorCity: patient_details?.client_granter?.g_city,
        GuratorCountry: patient_details?.client_granter?.g_state,
        GuratorZip: patient_details?.client_granter?.g_zip,
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

  ///relation value handle
  const settingRelation = (e) => {
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

  console.log("fields", fields);
  return (
    <div
      className={patient_details?.client_address.length < 2 ? "h-[100vh]" : ""}
    >
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

          <div className="flex flex-wrap my-1 mr-2 gap-x-36 gap-y-5">
            {/* address  */}
            <div>
              <PrimaryAddress append={append} rg={register} />
              {patient_details?.admin_id && (
                <DynamicAddress
                  adData={{
                    fields,
                    register,
                    remove,
                  }}
                />
              )}

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
                    <option value="Main Office">Main Office</option>
                    <option value="Telehealth">Telehealth</option>
                    <option value="Home">Home</option>
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
                    {...register("zone")}
                  >
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

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
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
            <input
              disabled={relation === "Self" ? true : null}
              type="checkbox"
              onChange={handleChange}
              id="checkbox"
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
