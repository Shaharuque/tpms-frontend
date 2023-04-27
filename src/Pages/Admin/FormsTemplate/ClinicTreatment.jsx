import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import TextArea from "antd/lib/input/TextArea";

const ClinicTreatment = () => {
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
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-3">
              <span>
                <label
                  for="rec_name"
                  className=" font-bold truncate text-blue-600"
                >
                  Client Full Name:
                </label>
              </span>

              <input
                type="text"
                className=" w-full focus:outline-none border-b  border-blue-600 "
                {...register(" recipient_name")}
              />
            </div>
            <div className="flex gap-3">
              <span>
                <label
                  for="rec_name"
                  className=" font-bold truncate text-blue-600"
                >
                  Date:
                </label>
              </span>

              <input
                type="date"
                className=" w-full border-none focus:outline-none "
                {...register(" recipient_name")}
              />
            </div>
            <div className="flex gap-3">
              <span>
                <label
                  for="rec_name"
                  className=" font-bold truncate text-blue-600"
                >
                  Start Name:
                </label>
              </span>

              <input
                type="time"
                className=" w-full border-none focus:outline-none "
                {...register(" recipient_name")}
              />
            </div>
            <div className="flex gap-3">
              <span>
                <label
                  for="rec_name"
                  className=" font-bold truncate text-blue-600"
                >
                  End Name:
                </label>
              </span>

              <input
                type="time"
                className=" w-full border-none focus:outline-none "
                {...register(" recipient_name")}
              />
            </div>
          </div>
          <div className="my-3">
            <div className="flex  ">
              <h1 className="form-input-name my-5 ml-1 text-blue-600">
                Setting :
              </h1>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Home
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Community
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Clinic/Office
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  School
                </span>
              </div>
            </div>
          </div>
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
                  Modify acquisition goal, teaching technique, and/or procedure
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
                  Modify acquisition goal, teaching technique, and/or procedure
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
                    (self-management, organization, tolerance, and inhibition)
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
            <div className="text-rose-500 font-regular text-sm">
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
            </div>
          </div>
          <div>
            <div>
              <h1 className="form-inner-head my-2">
                TREATMENT PLAN DETAILS AND PROTOCOL MODIFICATION CONDUCTED{" "}
                <span className="text-xs text-red-600">
                  (refer to items checked in section #2 to elaborate)
                </span>{" "}
                :
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">
                NEW BEHAVIORS OF CONCERN/RECOMMENDATIONS:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">
                PARENT COMMENTS/QUESTIONS DISCUSSED:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">FOLLOW UP:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>

            <div className="mt-3">
              <h1 className="form-input-name ml-1 text-blue-600">
                ABT/RBT PRESENT{" "}
                <span className="text-xs text-red-600">
                  {" "}
                  (list all full names)
                </span>
                :
              </h1>

              <div className="flex  ">
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                    In person
                  </span>
                </div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                    Remote
                  </span>
                </div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                    Group
                  </span>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h1 className="form-inner-head my-2">
                OBSERVATION NOTES span
                <span className="text-xs text-red-600">
                  (elaboration on any sections checked on first page)
                </span>
                :
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
          </div>

          <div className="form-title mb-5">
            <h1>ABT/RBT FEEDBACK</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
          <span className="text-xs text-red-600">
            ((refer to any sections checked on first page if needed))
          </span>

          <div className="mt-3">
            <h1 className="form-input-name ml-1 text-blue-600">
              ABT/RBT Activity :
            </h1>

            <div className="flex  ">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Data Review
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  observation
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Protocol Demonstration/Modification
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Team Meeting
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Other
                </span>
                <input
                  type="text"
                  name=""
                  className="border-b focus:outline-none  border-blue-600 w-[200px]  px-2"
                  {...register("checkedActive")}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">OBSERVATION NOTES span :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">OBSERVATION NOTES span :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">OBSERVATION NOTES span :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">OBSERVATION NOTES span :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>

            <div className="mt-3">
              <h1 className="form-input-name ml-1 mb-2 text-blue-600">
                IOA Collected? :
              </h1>

              <div className="flex  ">
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                    Yes
                  </span>
                </div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                    No
                  </span>
                </div>
              </div>
              <span className="text-xs text-red-600">
                so, please indicate program and data here or on a separate DTT
                sheet:
              </span>
            </div>

            <div className="my-4">
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
          </div>
          <div>
          <div className="form-title mb-5">
            <h1>ABT/RBT FEEDBACK</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
          <div className="my-4">
              <h1 className="form-inner-head my-2">Goal 1:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">Goal 2 :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>
            <div className="my-4">
              <h1 className="form-inner-head my-2">Goal 3 :</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
              </div>
            </div>

          </div>
        </form>
        
      </div>
    </div>
  );
};

export default ClinicTreatment;
