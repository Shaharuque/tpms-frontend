import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SimpleFileUpload from "react-simple-file-upload";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";

const PatientInformation = () => {
  const [value, setValue] = useState(false);
  const [voiceMsg, setVoiceMsg] = useState(false);
  const [textMsg, setTextMsg] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const [email, setEmail] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [Guarantor, setGuarantor] = useState(false);
  const [file, setFile] = useState();
  const [open, setOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: `bill`,
        middle_name: "luo",
      });
    }, 600);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="patient"
              onClick={() => {
                setValue(!value);
              }}
            />
            <span className="text-xs ml-1 text-gray-600 font-normal">
              Active Patient
            </span>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-3 mr-2 gap-x-2 gap-y-1">
            {/* name  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  First Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="first_name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("first_name")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Middle Name
                </span>
              </label>
              <input
                type="text"
                name="middle_name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("middle_name")}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Last Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="last_name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("last_name")}
              />
            </div>
            {/* DOB */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Date of Birth<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                type="date"
                {...register("check_Date")}
              />
            </div>
            {/* gender */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Gender<span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("gender")}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* RelationShip */}
            <div>
              <label className="label">
                <span className="label-text flex items-center text-xs text-gray-600 text-left">
                  RelationShip
                  <AiOutlineQuestionCircle className="text-sm" />
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("gender")}
              >
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 mr-2 gap-x-2 gap-y-1">
            {/* address  */}
            <div className="">
              <>
                <label className="label">
                  <span className="label-text items-center flex text-xs text-gray-600 text-left">
                    Address
                    <AiOutlineQuestionCircle className="text-sm" />
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className="mb-2 flex items-center gap-2">
                  <input
                    type="text"
                    name="add_1"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("add_1")}
                  />
                  <div
                    onClick={() => setOpen(true)}
                    className="bg-secondary text-white p-[6px]"
                  >
                    <FaPlus />
                  </div>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="add_2"
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("add_2")}
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-2 gap-y-1">
                  <div>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("country")}
                    >
                      <option value="NY">NY</option>
                      <option value="UK">UK</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="add_2"
                      className="border  rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("add_2")}
                    />
                  </div>
                </div>

                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="label">
                      <span className="label-text items-center flex text-xs text-gray-600 text-left">
                        Address
                        <AiOutlineQuestionCircle className="text-sm" />
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <div className="mb-2 flex items-center gap-2">
                      <input
                        type="text"
                        name="add_1"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("add_1")}
                      />
                      <div
                        onClick={() => setOpen(false)}
                        className="bg-red-500 text-white p-[6px]"
                      >
                        <RiDeleteBin6Line />
                      </div>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="add_2"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("add_2")}
                      />
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-2 gap-y-1">
                      <div>
                        <select
                          className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                          {...register("country")}
                        >
                          <option value="NY">NY</option>
                          <option value="UK">UK</option>
                        </select>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="add_2"
                          className="border  rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                          {...register("add_2")}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-1  gap-x-2 gap-y-1">
                  {" "}
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        POS<span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
                      {...register("pos")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-600 text-left">
                        Region<span className="text-red-500">*</span>
                      </span>
                    </label>
                    <select
                      className="border rounded-sm px-2 py-[3px] mx-1 text-xs w-full"
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
                  <span className="label-text text-xs text-gray-600 text-left">
                    Phone
                  </span>
                </label>
                <div className="flex flex-wrap gap-1 items-center gap-x-2 ">
                  <div>
                    <input
                      type="text"
                      name="phone"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <select
                      className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-40"
                      {...register("group")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <div
                    onClick={() => setPhoneOpen(true)}
                    className="bg-secondary text-white p-[6px]"
                  >
                    <FaPlus />
                  </div>
                </div>
                <div className="flex ml-1 mt-2 items-center gap-2 flex-wrap ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setVoiceMsg(!voiceMsg);
                      }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-normal">
                      Voice message ok
                    </span>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setTextMsg(!textMsg);
                      }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-normal">
                      Text message ok
                    </span>
                  </div>
                </div>

                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setAppointment(!appointment);
                    }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-normal">
                    Send text/voice appointment reminders
                  </span>
                </div>
              </>
              {phoneOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Phone
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-1 items-center gap-x-2 ">
                    <div>
                      <input
                        type="text"
                        name="phone"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("phone")}
                      />
                    </div>
                    <div>
                      <select
                        className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-40"
                        {...register("group")}
                      >
                        <option value="work">work</option>
                        <option value="home">home</option>
                        <option value="family">family</option>
                      </select>
                    </div>
                    <div
                      onClick={() => setPhoneOpen(false)}
                      className="bg-red-500 text-white p-[6px]"
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <div className="flex ml-1 mt-2 items-center gap-2 flex-wrap ">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setVoiceMsg(!voiceMsg);
                        }}
                      />
                      <span className="text-xs ml-1 text-gray-600 font-normal">
                        Voice message ok
                      </span>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setTextMsg(!textMsg);
                        }}
                      />
                      <span className="text-xs ml-1 text-gray-600 font-normal">
                        Text message ok
                      </span>
                    </div>
                  </div>

                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setAppointment(!appointment);
                      }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-normal">
                      Send text/voice appointment reminders
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
            {/* Email  */}
            <div className=" lg:mx-auto md:mx-0">
              <>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Email
                  </span>
                </label>
                <div className="flex flex-wrap items-center gap-x-2 ">
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                      {...register("email")}
                    />
                  </div>
                  <div>
                    <select
                      className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-40"
                      {...register("group2")}
                    >
                      <option value="work">work</option>
                      <option value="home">home</option>
                      <option value="family">family</option>
                    </select>
                  </div>
                  <div
                    onClick={() => setEmailOpen(true)}
                    className="bg-secondary text-white p-[6px]"
                  >
                    <FaPlus />
                  </div>
                </div>
                <div className="flex ml-1 mt-2 items-center gap-1 flex-wrap ">
                  <div className="">
                    <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setEmail(!email);
                      }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-normal">
                      Email OK
                    </span>
                  </div>
                </div>

                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setEmailSend(!emailSend);
                    }}
                  />
                  <span className="text-xs ml-1 text-gray-600 font-normal">
                    Send email appointment reminders
                  </span>
                </div>
              </>
              {emailOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Email
                    </span>
                  </label>
                  <div className="flex flex-wrap items-center gap-x-2 ">
                    <div>
                      <input
                        type="text"
                        name="email"
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                        {...register("email")}
                      />
                    </div>
                    <div>
                      <select
                        className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-40"
                        {...register("group2")}
                      >
                        <option value="work">work</option>
                        <option value="home">home</option>
                        <option value="family">family</option>
                      </select>
                    </div>
                    <div
                      onClick={() => setEmailOpen(false)}
                      className="bg-red-500 text-white p-[6px]"
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <div className="flex ml-1 mt-2 items-center gap-1 flex-wrap ">
                    <div className="">
                      <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setEmail(!email);
                        }}
                      />
                      <span className="text-xs ml-1 text-gray-600 font-normal">
                        Email OK
                      </span>
                    </div>
                  </div>

                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="checkbox"
                      name="patient"
                      onClick={() => {
                        setEmailSend(!emailSend);
                      }}
                    />
                    <span className="text-xs ml-1 text-gray-600 font-normal">
                      Send email appointment reminders
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <>
            <label className="label">
              <span className="label-text text-xs text-gray-700 text-left">
                About Patient
              </span>
            </label>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-1 mr-2 gap-x-2 gap-y-1">
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Race &amp; Ethnicity Details
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("race_details")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Preferred Language
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("language")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Date First Seen
                  </span>
                </label>
                <input
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  type="date"
                  {...register("first_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Referred By
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                  {...register("referred_by")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xs text-gray-600 text-left">
                    Assignment
                  </span>
                </label>
                <select
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
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
              type="checkbox"
              name="patient"
              onClick={() => {
                setGuarantor(!Guarantor);
              }}
            />
            <span className="text-xs ml-1 text-gray-600 font-normal">
              Is Guarantor Available?
            </span>
          </div>
          <h1 className="text-sm font-medium my-1 ml-1">Guarantor Info</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-1 mr-2 gap-x-2 gap-y-1">
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  First Name
                </span>
              </label>
              <input
                type="text"
                name="guarantor_first_name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("guarantor_first_name")}
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                name="guarantor_last_name"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("guarantor_last_name")}
              />
            </div>
            {/* DOB */}
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Check Date
                </span>
              </label>
              <input
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                type="date"
                {...register("guarantor_check_Date")}
              />
            </div>
          </div>

          {/* --------------------------  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-1 mr-2 gap-x-2 gap-y-1">
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-700 text-left">
                  Address
                </span>
              </label>
              <div className="mb-2">
                <input
                  type="text"
                  name="add_1"
                  className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full "
                  {...register("add_1")}
                />
              </div>
            </div>
            <div className="my-auto text-xs bg-secondary text-white ml-1 py-2 mb-2 text-center rounded-md">
              <button>Same as patient address</button>
            </div>
          </div>

          {/* --------------------------- */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-1 mr-2 gap-x-2 gap-y-1">
            <div className="mb-2">
              <input
                type="text"
                name="add_2"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("add_2")}
              />
            </div>
            <div>
              <select
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("country")}
              >
                <option value="NY">NY</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div className="mb-2">
              <input
                type="text"
                name="add_2"
                className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                {...register("add_2")}
              />
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-1 mr-2 gap-x-2 gap-y-1">
            <textarea
              name="comment"
              className="border text-sm p-1 mt-3 ml-1 h-24 w-full"
            >
              Notes
            </textarea>
            <div className="mx-auto">
              <SimpleFileUpload
                apiKey={`b7deee9a71131791da71b4a74e6169c2`}
                onSuccess={setFile}
              />
              <p className="mt-1 text-sm text-center">Upload Signature</p>
            </div>
          </div>
          <div className="mb-5">
            {" "}
            {/* submit  */}
            <button
              className=" py-[5px] mt-7 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
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
