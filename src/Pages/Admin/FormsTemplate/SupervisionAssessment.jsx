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
            <h1>TREATMENT PLAN FORM</h1>
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
                  Date of Assessment:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Place of Assessment:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Address:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
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
                Description of Tasks Completed
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
                Description of Tasks Completed
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <input type="text" name="" id="" />
              </div>
            </div>
            <div>
              <span className="form-input-name ">
                Description of Tasks Completed
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
                    Client
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
                    Therapist
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("rendering_provider")}
                  />
                  <label for="inline-2-radio" class="ml-2 form-input-name">
                    Rendering Provider
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
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
                Description of Tasks Completed
              </span>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
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
                        First
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        Last
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                Description of Tasks Completed
              </span>
            </div>

            <div className="flex">
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
            </div>
            <div>
              <span className="form-input-name ">) Medication</span>
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

            <div className="w-full mt-4 mb-4">
              <span className="form-input-name ">
                Description of Tasks Completed
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
              <span className="form-input-name ">) Medication</span>
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
              <span className="form-input-name ">) Medication</span>
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
                <div className="w-full mt-4 mb-4">
                  <span className="form-input-name ">
                    Description of Tasks Completed
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
              <h1 className="form-inner-head my-2">DOCUMENTS REVIEWED:</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        First
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        Last
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-bold text-white px-2 py-3 border-r"
                      >
                        Last
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr> <tr class="border-b border-2 border-blue-600 ">
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr> <tr class="border-b border-2 border-blue-600 ">
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr> <tr class="border-b border-2 border-blue-600 ">
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
                              Medical Issues
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
                              Medical Issues
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
                              Medical Issues
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
                Description of Tasks Completed
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
                Description of Tasks Completed
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
