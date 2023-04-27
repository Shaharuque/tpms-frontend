import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const SupervisionAssessment = () => {
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
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white ">
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
            <h1>SESSION NOTES</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-4">
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Client Name:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  DOB:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Client Diagnosis:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Payor (Subscriber) Full Name:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Client Full Home Address:
                </span>
                <TextArea
                  rows={2}
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Session Date:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Service location Type:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Service Units this code:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Service Start Time:
                </span>
                <input
                  type="time"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Session End Time:
                </span>
                <input
                  type="Time"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Service location full address: **Must include number, street,
                city, state, zip code**
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                All attendees in session: (First and last names of each)
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Parent/Guardian present during session: Someone over the age of
                18 must be present during entire session.
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <input type="text" name="" id="" />
              </div>
            </div>
            <div>
              <span className="form-input-name ">
                LOCATION OF PARENT MEETING IF RBT IS WORKING 1:1 WITH CLIENT
                DURING SAME TIMEFRAME:
              </span>
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("client")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Room A
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Room B
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Name of the authorized ABA supervisor: Full Name and credentials
                (example Jane Doe, BCBA)
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                CODE USED FOR THIS SESSION: **IF YOU MORE THAN ONE CODE DURING
                SESSION YOU MUST COMPLETE A NOTE FOR EACH CODE.
              </span>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-red-600 ">
                F SUPERVISION IS BEING CONDUCTED DO NOT USE THIS FORM. YOU MUST
                USE SUPERVISION FORM RELATED TO YOUR CREDENTIALING.
              </span>
            </div>
            <div>
              <h1 className="form-inner-head my-2">DOCUMENTS REVIEWED:</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        BOARD CERTIFIED BEHAVIOR ANALYST CODES
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        REGISTERED BEHAVIOR TECHNICIAN CODES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              ABA Direct Therapy by BCBA 97153
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              ABA Direct Therapy by RBT 97153
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior Modification-97155
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              H2019-Direct BlueCare clients Only
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                STRESSOR(S)/EXTRAORDINARY EVENTS/ SIGNIFICANT CHANGES SINCE LAST
                SESSION WITH PROVIDER FILLING OUT THIS NOTE:
              </span>
              <p className="text-red-600">
                Circle responses to all the following:
              </p>
            </div>

            <div className="flex flex-wrap">
              <div>
                <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                  <span className="form-input-name ">1) Medication</span>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("client")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      yes
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("therapist")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      no
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                  <span className="form-input-name ">2) Living situation:</span>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("client")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      yes
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("therapist")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      no
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                  <span className="form-input-name ">3) Insurance:</span>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("client")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      yes
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("therapist")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      no
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                  <span className="form-input-name ">4) Illness:</span>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("client")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      yes
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("therapist")}
                    />
                    <label for="inline-radio" class="ml-2 form-input-name">
                      no
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="form-input-name ">
                5) Other notable changes?:
              </span>
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("client")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    NONE
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Home family activities
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Inappropriate behaviors in school
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Inappropriate behaviors in community
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-red-600">
                If yes to any changes above, please list in detail changes and
                impact on client. Medications changes noted by RBT must be
                communicated to BCBA on date of session.{" "}
                <span className="text-black">
                  (This section is required if YES.)
                </span>
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>

            <div>
              <span className="form-input-name ">
                Danger to:{" "}
                <span className="text-bold">
                  {" "}
                  (circle or highlight response)
                </span>
              </span>
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("client")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    None
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Self
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Others
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Property
                  </label>
                </div>
              </div>
            </div>
            <div>
              <span className="form-input-name ">
                If selected any option besides none select appropriate response:
                Danger = Yes you must select one of the following:
              </span>
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("client")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Ideation
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Plan
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Attempt
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Intent
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("therapist")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Other
                  </label>
                </div>
                <div>
                  <span className="text-red-600 text-sm border-b">
                    ***If YES selected you must notify your supervising BCBA
                    immediately. The BCBA will contact the office if warranted.
                  </span>
                </div>
                <div className="w-full mt-4 mb-4">
                  <span className="form-input-name ">
                    Disposition of client upon arrival: Must be more than "same"
                    and one-word answers:
                  </span>
                  <div className="mt-3 mb-8   border-blue-600 border-2">
                    <TextArea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter Description of Tasks Completed..."
                      size="large"
                      className=""
                      {...register("description_task_complete")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">
                Activities/Goals/Objectives worked on during this session: (Must
                follow treatment plan.)
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        SKILL ACQUISITION
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        BEHAVIOR CONTRACT
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        DIFFERENTIAL REINFORCEMENT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Social Skill Acquisition
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Timer
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              FCT
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Role Play
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Token Board
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Visual Aid
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Premack Principle
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Self Monitor
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Errorless Learning
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Stimulus Prompts
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              DTT
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              NET
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Video Modeling
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Antecedent Manipulation
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Chaining
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Shaping
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Self Management
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" focus:outline-none "
                            {...register("medical_issues")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Other
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                IF OTHER LIST BELOW WHAT PROCEDURES WERE USED:
                <span className="text-black text-sm"></span>
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                2) Treatment Approach/ Measures: How did you work on goal(s)
                from #1? What tools/techniques/supplies did you use?{" "}
                <span className="text-red-600">
                  This section must be more than a sentence or two.
                </span>
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <div>
              <span className="form-inner-head"> NEXT SCHEDULED SESSION:</span>
             <div className="flex flex-wrap justify-between mb-4">
             <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Date:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Time:
                </span>
                <input
                  type="Time"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Location Type:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>

             </div>
            </div>
            <span>
              Provider Signature: Must be signed using signing software or
              printed and signed-cannot be a typed signature:{" "}
              <span className="text-red-600 text-sm">
                By signing you are agreeing that what you are submitting is and
                accurate.
              </span>
            </span>
            <div className=" flex  flex-wrap justify-between mt-10">
              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Provider Signature
                  <FaSignature className="text-lg" />
                </button>
              </div>

              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Caregiver Signature <FaSignature className="text-lg" />
                </button>
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

export default SupervisionAssessment;
