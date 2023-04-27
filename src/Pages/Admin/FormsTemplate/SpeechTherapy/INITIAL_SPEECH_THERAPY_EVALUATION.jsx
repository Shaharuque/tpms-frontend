import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";
import { Radio } from "antd";

const INITIAL_SPEECH_THERAPY_EVALUATION = () => {
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

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-border 2xl:w-[85%] w-full mx-auto p-5 bg-white">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} className="w-[250px] h-[100px]" alt="" />
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
        <div className="form-title my-5">
          <h1>INITIAL SPEECH THERAPY EVALUATION/PLAN OF CARE</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex my-2 sm:col-span-2">
              <span>
                <label className="form-input-name-black ">
                  Date of Evaluation :
                </label>
              </span>
              <span>
                <input
                  type="date"
                  className="  border-b-2  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              <span>
                <label className="form-input-name-black ">Patient Name :</label>
              </span>
              <span>
                <input
                  type="text"
                  className="  border-b-2  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              <span>
                <label className="form-input-name-black ">DOB:</label>
              </span>
              <span>
                <input
                  type="date"
                  className="  border-b-2  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Medical Diagnosis:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select Medical Diagnosis</option>
                    </select>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Treatment Diagnosis:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select Treatment Diagnosis</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <div className=" my-2">
              <span>
                <label className="form-input-name-black ">
                  Reason for Referral:
                </label>
              </span>
              <span>
                <input
                  type="text"
                  className="  border-b-2 my-3 border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="my-2">
              <span>
                <label className="form-input-name-black ">
                  Onset Date of Injury / Disorder:
                </label>
              </span>
              <span>
                <input
                  type="date"
                  className="  border-b-2 my-3  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-white font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 bg-blue-600  ">
                    <div class="">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          History
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head-black font-bold text-base"
                        >
                          Medical History:
                        </label>
                      </span>
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2 my-1 w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head-black font-bold text-base"
                        >
                          Surgical History:
                        </label>
                      </span>
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2 my-1 w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head-black font-bold text-base"
                        >
                          Allergies:
                        </label>
                      </span>
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2 my-1 w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" my-2">
            <span>
              <label className="form-input-name-black ">
                Prior Level of Function:
              </label>
            </span>
            <span>
              <input
                type="text"
                className="  border-b-2 my-3 border-blue-600 focus:outline-none w-full"
                {...register("client_name")}
              />
            </span>
          </div>
          <div>
            {" "}
            <div class="flex gap-3">
              <label className="form-inner-head">
                Behavioral Characteristics during Evaluation:
              </label>
            </div>
            <div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Alert
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Cooperative
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Aware of deficits
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Oriented
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Motivated
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Unaware of deficits
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <label className="form-inner-head my-5">SUBJECTIVE:</label>
          </div>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 form-input-textarea"
          />
          <div class="flex gap-3">
            <label className="form-inner-head my-5">Objective:</label>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Standardized Testing
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Patient Questionnaires
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Expressive Language
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Receptive Language
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Reading/Writing
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Cognition
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Voice and Resonance
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Fluency
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Articulation/Motor Speech
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Oral Motor Exam/Cranial Nerve Assessment
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Clinical Swallow Evaluation
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Modified Barium Swallow Study
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex gap-3">
            <label className="form-inner-head my-5">ASSESSMENT::</label>
          </div>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 form-input-textarea"
          />
          <div class="my-7">
            <span>
              <label for="rec_name" className=" font-bold text-base">
                Prognosis for Treatment:
              </label>
            </span>
            <br />
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Excellent
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                Good
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                Fair
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                Poor
              </Radio>
            </Radio.Group>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <div className=" my-2">
              <span>
                <label className="form-inner-head">Frequency of Therapy:</label>
              </span>
              <span>
                <input
                  type="text"
                  className="  border-b-2 my-3 border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="my-2">
              <span>
                <label className="form-inner-head">Duration:</label>
              </span>
              <span>
                <input
                  type="date"
                  className="  border-b-2 my-3  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="my-2">
              <span>
                <label className="form-inner-head">Certification Period:</label>
              </span>
              <span>
                <input
                  type="date"
                  className="  border-b-2 my-3  border-blue-600 focus:outline-none w-full"
                  {...register("client_name")}
                />
              </span>
            </div>
            <div className="my-2">
              <span>
                <label className="form-inner-head">INFORMED CONSENT::</label>
              </span>
              <span>
                <label className="form-input-name-black ">
                  TREATMENT PLAN, INCLUDING BENEFITS, RISK AND ALTERNATIVES
                  DISCUSSED WITH PATIENT AND/OR FAMILY, WHO AGREE TO TREATMENT.
                </label>
              </span>
            </div>
          </div>
          <div>
            {" "}
            <div class="flex gap-3">
              <label className="form-inner-head my-3">
                Interventions/Therapy Techniques:
              </label>
            </div>
            <div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Myofascial Release NMES (Neuromuscular Electrical
                    Stimulation)
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    RMST (Respiratory Muscle Strength Training)
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Speak Out! Program for Parkinson's Disease
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Other:
                  </label>
                </span>
                <span>
                  <input
                    type="text"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-white font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 bg-blue-600  "
                    colSpan={"2"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          CPT Codes for this POC
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select CPT</option>
                    </select>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2  w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select CPT</option>
                    </select>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2  w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select CPT</option>
                    </select>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2  w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <select
                      className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                      {...register("patient")}
                    >
                      <option value="">Select CPT</option>
                    </select>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <br />
                      <input
                        type="text"
                        name="text-name"
                        placeholder="Enter Here"
                        className="p-2  w-full"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head-black font-bold text-base"
                        >
                          LONG TERM GOAL #1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        ></label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head-black font-bold text-base"
                        >
                          #1
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={5}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              NEW
                            </label>
                          </span>
                        </div>
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              IN PROGRESS
                            </label>
                          </span>
                        </div>
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              GOAL MET
                            </label>
                          </span>
                        </div>
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              DISCONTINUED
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5">
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureProvider}
            >
              Provider Signature
              <FaSignature className="text-lg" />
            </button>
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureCaregiver}
            >
              Caregiver Signature
              <FaSignature className="text-lg" />
            </button>
          </div>
          {caregiverSignature && (
            <SignatureModal
              handleSignatureClose={handleSignatureClose}
              open={caregiverSignature}
              setImageURL={setImageURL}
              setFile={setFile}
            ></SignatureModal>
          )}

          {providerSignature && (
            <SignatureModal
              handleSignatureClose={handleSignatureClose}
              open={providerSignature}
              setImageURL={setProviderImageURL}
              setFile={setFile}
            ></SignatureModal>
          )}
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
  );
};

export default INITIAL_SPEECH_THERAPY_EVALUATION;
