import TextArea from "antd/lib/input/TextArea";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const SupervisionNonbillableBrct = () => {
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
      <div className="form-border 2xl:w-[80%] w-full mx-auto p-5 bg-white">
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
            <h1>SUPERVISION NON-BILLABLE BRCT</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div class="overflow-x-auto">
              <span className="form-inner-head">CLIENT INFORMATION:</span>
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Client Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            DOB:
                          </label>
                        </span>

                        <input
                          type="date"
                          className="  border-none focus:outline-none "
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Age:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("age")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Diagnosis:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-auto border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("diagnosis")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="overflow-x-auto mt-5 mb-5">
              <span className="form-inner-head">
                SUPERVISOR/SUPERVISEE INFORMATION:
              </span>
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Supervisor's Name (BCBA/BCaBA):
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("supervisor_name(BCBA/BCaBA)")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Registered Behavior Technician's Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("registered_behavior_name")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow-x-auto mb-5">
              <span className="form-inner-head">SUPERVISED SESSION DATE:</span>
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service Date:
                          </label>
                        </span>

                        <input
                          type="date"
                          className="border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("service_date")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service Start Time:
                          </label>
                        </span>

                        <input
                          type="time"
                          className=" w-full border-none focus:outline-none "
                          {...register("service_start_time")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service End Time:
                          </label>
                        </span>

                        <input
                          type="time"
                          className=" w-full border-none focus:outline-none "
                          {...register("service_end_time")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              {" "}
              <span className="form-inner-head ">
                PARENT TRAINING PROVIDED:
              </span>
              <div class="flex flex-wrap gap-5 lg:gap-0 mt-2 mb-4">
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("in_person")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    In Person
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("remote")}
                  />
                  <label for="inline-radio" class="ml-2 form-input-name">
                    Remote
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <span className="form-inner-head">SUPERVISION OVERVIEW:</span>
              <div className="mt-3 mb-3   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("supervision_overview")}
                />
              </div>
            </div>

            <div className="mt-5">
              <span className="form-inner-head">FEEDBACK FROM SUPERVISOR:</span>
              <div className="mt-3 mb-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("feedback_form_supervision")}
                />
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 mt-4">
                EVALUATION OF SUPERVISEE PERFORMANCE:
              </h1>

              <div>
                <p className=" font-normal text-base my-2">
                  1) Refrains from speaking about client during session and in
                  front of client *
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-base font-medium text-black dark:text-black"
                    >
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
                      {...register("ni")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-base font-medium text-black dark:text-black"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <p className=" text-lg  font-normal my-2">
                  Maintains professional and courteous interactions with:
                  Clients/consumers Other service providers/ Coworkers:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_1")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_1")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_1")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_1")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Maintains appropriate attire & demeanor Initiates professional
                  self-improvement:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_2")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_2")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_2")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_2")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Accepts supervisory feedback appropriately:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_3")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_3")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_3")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_3")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Seeks supervision appropriately/ asks questions when needed:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_4")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_4")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_4")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_4")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Timely submission of tasks assigned:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_5")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_5")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_5")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_5")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <p className=" text-lg  font-normal my-2">
                  Communicates effectively:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_6")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_6")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_6")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_6")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Demonstrates appropriate sensitivity to nonbehavioral
                  providers{" "}
                  <span className="text-sm text-red-600">
                    (teachers, other healthcare providers, caregivers etc)
                  </span>{" "}
                  :
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_7")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_7")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_7")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_7")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Acquisition of target behavior-analytic skills:
                </p>
                <div class="flex mb-4">
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("s_8")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register("ni_8")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" u_8")}
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div class="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4"
                      {...register(" na_8")}
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="overflow-x-auto mt-5 mb-5">
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Provider Full Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("provider_full_name")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Provider Credentials:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("provider_credentials")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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

export default SupervisionNonbillableBrct;
