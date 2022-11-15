import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ManagementModificationForm = () => {
  const [caregiverSignature, setCaregiverSignature] = useState(false);
  const [providerSignature, setProviderSignature] = useState(false);
  const [ProviderImageURL, setProviderImageURL] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  console.log("ProviderImageURL", ProviderImageURL);
  console.log("imageURL", imageURL);
  const [file, setFile] = useState();

  console.log("file", file);

  const handleSignatureProvider = () => {
    setProviderSignature(true);
  };
  const handleSignatureCaregiver = () => {
    setCaregiverSignature(true);
  };
  const handleSignatureClose = () => {
    setCaregiverSignature(false);
    setProviderSignature(false);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 ">
        <div>
          <div className="flex items-center flex-wrap gap-3 justify-between">
            <img src={logo} alt="" />
            <div className="text-[16px] sm:mr-10 mr-0 ml-10 sm:ml-0">
              <p className="my-1">
                <span className="form-head">Mail: </span>demo@example.com
              </p>
              <p className="my-1">
                <Link to={"#"}>
                  <span className="form-head">Email: </span>demo@example.com
                </Link>
              </p>
              <p className="my-1">
                <span className="form-head">Phone: </span> 000-000-0000
              </p>
              <p className="my-1">
                <Link to={"#"}>
                  <span className="form-head">Fax: </span>000.000.0000
                </Link>
              </p>
            </div>
          </div>
          <div className="form-title mb-5">
            <h1>CLINICAL TREATMENT, MANAGEMENT, & MODIFICATION NOTES</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <div className="flex  flex-row justify-between flex-wrap ">
                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="clname" className="form-inner-head my-2">
                      Client Full Name:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      type="input"
                      className="  border-b-2  border-blue-600 focus:outline-none "
                      {...register("client_full_name")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 www">
                  {" "}
                  <span>
                    <label for="date" className="form-inner-head my-2">
                      Date:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      {...register("date")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="time" className="form-inner-head my-2">
                      Start Time:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      {...register("start_time")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="rbt" className="form-inner-head my-2">
                      End Time:
                    </label>
                  </span>{" "}
                  <span>
                    <input type="time" name="time" {...register("end_time")} />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                <h1 className="form-inner-head my-2">Setting:</h1>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("home")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Home
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("community")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Community
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("clinic_office")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Clinic/Office
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("school")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    School
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                  1. Signs/Symptoms Observed{" "}
                  <span className="text-rose-500">(check all that apply)</span>:
                </h1>
                <div className=" flex items-center flex-wrap gap-x-1  my-2">
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Rec. Language Impairment
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Exp Language Impairment
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Social Skills Deficits
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Repetitive Behaviors
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Restricted Interests
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Hyper/Hypo-reactivity to sensory input
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Insistence on sameness
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Harm to self or others* *Was an Incident Report filled out
                      within 24 hours?
                    </span>
                    <div className="flex items-center mb-4 mt-4">
                      <div className="flex ml-1  items-center">
                        <input
                          type="radio"
                          name="patient"
                          onClick={() => {
                            // setValue(!value);
                          }}
                        />
                        <span className="text-lg ml-1 text-gray-600 font-bold">
                          Yes
                        </span>
                      </div>
                      <div className="flex ml-1  items-center">
                        <input
                          type="radio"
                          name="patient"
                          onClick={() => {
                            // setValue(!value);
                          }}
                        />
                        <span className="text-lg ml-1 text-gray-600 font-bold">
                          No
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                  2. Goals for Session
                  <span className="text-rose-500">
                    (check all that apply, at least one modification must be
                    checked)
                  </span>
                  :
                </h1>
                <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Build rapport with client/family/tech
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify acquisition goal, teaching technique, and/or
                      procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify any component of Behavior Intervention Plan
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify parent goal, teaching technique, and/or procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify Reinforcement Schedule
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify maintenance goal and/or procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Baseline/Mastery/Generalization Probes to modify goals,
                      teaching technique, and/or procedure
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Model teaching to technician
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Parent Training
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Assessment of Skills
                      <span className="text-rose-500">
                        (standardized or curriculum-based)
                      </span>
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Inter-observer agreement (IOA) data collection
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
                      Other- Describe:
                      <input
                        type="text"
                        className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                        {...register("Diagnosis")}
                      />
                    </span>
                  </div>
                  <br />
                </div>
              </div>
              <div className="my-5">
                <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                  3. Targeted Domains
                  <span className="text-rose-500">(check all that apply)</span>:
                </h1>
                <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Language/Communication
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify acquisition goal, teaching technique, and/or
                      procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify any component of Behavior Intervention Plan
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Social Skills
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Play Skills
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Adaptive Skills
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Baseline/Mastery/Generalization Probes to modify goals,
                      teaching technique, and/or procedure
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Executive Functioning Skills{" "}
                      <span className="text-rose-500">
                        (self-management, organization, tolerance, and
                        inhibition)
                      </span>
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Safety
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Disruptive Behavior
                    </span>
                  </div>
                  <br />

                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
                      Other- Describe:
                      <input
                        type="text"
                        className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                        {...register("Diagnosis")}
                      />
                    </span>
                  </div>
                  <br />
                </div>
              </div>
              <div className="my-5">
                <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                  4. ABT/RBT’s Techniques Utilized
                  <span className="text-rose-500">(check all that apply)</span>:
                </h1>
                <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Discrete Trial (DTT)
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Natural Environment Teaching (NET)
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Verbal Behavior (VB)
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify parent goal, teaching technique, and/or procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify Reinforcement Schedule
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Modify maintenance goal and/or procedure
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Baseline/Mastery/Generalization Probes to modify goals,
                      teaching technique, and/or procedure
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Model teaching to technician
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Parent Training
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Assessment of Skills
                      <span className="text-rose-500">
                        (standardized or curriculum-based)
                      </span>
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Inter-observer agreement (IOA) data collection
                    </span>
                  </div>
                  <br />
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
                      Other- Describe:
                      <input
                        type="text"
                        className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                        {...register("Diagnosis")}
                      />
                    </span>
                  </div>
                  <br />
                </div>
              </div>
              <div className="my-5">
                <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                  5. Overall Response to Treatment
                  <span className="text-rose-500">(check all that apply)</span>:
                </h1>
                <div className="text-rose-500 font-regular text-lg">
                  Client responded positively to ABA therapy today exhibited by:
                </div>
                <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Absence of Problem Behavior
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Decrease of Problem Behavior
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Mastery of Targets
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Mastery of Goals
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Maintenance of Mastered Goals
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Rapid Progress Toward Goals
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>
                  <div className="text-rose-500 font-regular text-lg">
                    Client responded positively to ABA therapy today exhibited
                    by:
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>{" "}
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>{" "}
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>{" "}
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>
                  <div className="flex ml-1  mr-2 items-center ">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                      Steady Progress towards Goals
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="form-inner-head my-4">
                    TREATMENT PLAN DETAILS AND PROTOCOL MODIFICATION CONDUCTED
                    <span className="text-sm text-rose-500">
                      (refer to items checked in section #2 to elaborate)
                    </span>
                    :
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    NEW BEHAVIORS OF CONCERN/RECOMMENDATIONS:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-input-name my-2 text-[#207ac7] w-full">
                    Overall Response to Treatment
                    <span className="text-rose-500">
                      (check all that apply)
                    </span>
                    :
                  </h1>

                  <div>
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("remote")}
                        />
                        <label
                          for="inline-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Remote
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("group")}
                        />
                        <label
                          for="inline-2-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Group
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("team_meeting")}
                        />
                        <label
                          for="inline-2-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Team Meeting
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-title mt-5 mb-5">
                <h1>ABT/RBT FEEDBACK</h1>
                <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
              </div>

              <span className="text-rose-500 mb-2">
                (refer to any sections checked on first page if needed)
              </span>
              <div>
                <h1 className="form-input-name my-2 text-[#207ac7] w-full">
                  Overall Response to Treatment
                  <span className="text-rose-500">(check all that apply)</span>:
                </h1>

                <div>
                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4"
                        {...register("remote")}
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-base font-medium text-black dark:text-black"
                      >
                        Remote
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-2-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4"
                        {...register("group")}
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-base font-medium text-black dark:text-black"
                      >
                        Group
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-2-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4"
                        {...register("team_meeting")}
                      />
                      <label
                        for="inline-2-radio"
                        className="ml-2 text-base font-medium text-black dark:text-black"
                      >
                        Team Meeting
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4"
                        {...register("remote")}
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-base font-medium text-black dark:text-black"
                      >
                        Remote
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="checkbox"
                        value=""
                        name="inline-radio-group"
                        className="w-4 h-4"
                        {...register("remote")}
                      />
                      <label
                        for="inline-radio"
                        className="ml-2 text-base font-medium text-black dark:text-black"
                      >
                        Remote:
                      </label>
                      <input
                        id=""
                        type="text"
                        value=""
                        name="inline-radio-group"
                        className="border-b-2 border-blue-600 focus:outline-none"
                        {...register("remote")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <h1 className="form-input-name my-2 text-[#207ac7] w-full">
                    Overall Response to Treatment
                    <span className="text-rose-500">
                      (check all that apply)
                    </span>
                    :
                  </h1>

                  <div>
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("remote")}
                        />
                        <label
                          for="inline-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Remote
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("group")}
                        />
                        <label
                          for="inline-2-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Group
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="inline-2-radio"
                          type="checkbox"
                          value=""
                          name="inline-radio-group"
                          className="w-4 h-4"
                          {...register("team_meeting")}
                        />
                        <label
                          for="inline-2-radio"
                          className="ml-2 text-base font-medium text-black dark:text-black"
                        >
                          Team Meeting
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="form-inner-head my-4">
                    TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
                  </h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="form-title mt-5 mb-5">
                  <h1>ABT/RBT FEEDBACK</h1>
                  <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
                </div>
                <div>
                  <h1 className="form-inner-head my-4">GOAL 1:</h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <h1 className="form-inner-head my-4">GOAL 2:</h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <h1 className="form-inner-head my-4">GOAL 3:</h1>
                  <div className="mt-3 border-2 border-blue-600">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder=" Notes"
                      size="large"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5">
                <div className="last_text">
                  <h1>
                    I agree with the session date, times, and notes listed
                    above.
                  </h1>
                </div>
                <div>
                  <div className=" flex  flex-wrap justify-between gap-2 mt-10">
                    <div>
                      <button
                        className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                        onClick={handleSignatureProvider}
                      >
                        Provider Signature
                        <FaSignature className="text-lg" />
                      </button>
                    </div>


                    <div className="flex flex-wrap gap-2">
                      <div>
                        <span className="form-inner-head">printName:</span>
                        <input
                          type="text"
                          className="border-b-2 border-blue-600 focus:outline-none"
                          name=""
                          id=""
                        />
                      </div>
                      <div>
                        <span className="form-inner-head">Date:</span>
                        <input type="date" name="" id="" />
                      </div>
                    </div>
                  </div>


                  
                </div>
                <div>
                  <div className=" flex  flex-wrap justify-between gap-2 mt-10">
                    <div>
                      <button
                        className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                        onClick={handleSignatureProvider}
                      >
                        Provider Signature
                        <FaSignature className="text-lg" />
                      </button>
                    </div>


                    <div className="flex flex-wrap gap-2">
                      <div>
                        <span className="form-inner-head">printName:</span>
                        <input
                          type="text"
                          className="border-b-2 border-blue-600 focus:outline-none"
                          name=""
                          id=""
                        />
                      </div>
                      <div>
                        <span className="form-inner-head">Date:</span>
                        <input type="date" name="" id="" />
                      </div>
                    </div>
                  </div>


                  <div className="flex items-center justify-between my-12">
                    <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
                      <AiFillCloud /> Save
                    </button>
                    <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
                      <AiOutlinePrinter /> Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        {providerSignature && (
          <SignatureModal
            handleSignatureClose={handleSignatureClose}
            open={providerSignature}
            setImageURL={setProviderImageURL}
            setFile={setFile}
          ></SignatureModal>
        )}

        <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
          <div className="text-black">
            Demo Institution{" "}
            <span className=" font-normal">somewhere in america</span>
          </div>
          <div>
            Phone: 000-000-0000, Email: demo@example.com, Fax: 000.000.0000,
            example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementModificationForm;
