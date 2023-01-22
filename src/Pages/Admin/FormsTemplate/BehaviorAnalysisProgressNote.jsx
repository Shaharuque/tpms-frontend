import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const BehaviorAnalysisProgressNote = () => {
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
            <div class="overflow-x-auto">
              <table class="min-w-full border-2 border-blue-600 ">
                {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
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
                          className=" w-full border-none focus:outline-none "
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
                            Authorization period:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."

                          {...register("authorization_period")}
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
                            Staff Name and Credential:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-auto border-none focus:outline-none "
                          placeholder="Enter Here..."

                          {...register("staff_name_and_credential")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex items-center justify-center gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Insurance:
                          </label>
                        </span>

                       <div>
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
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
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
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
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
                            <label
                              for="inline-2-radio"
                              class="ml-2 form-input-name"
                            >
                              Rendering Provider
                            </label>
                          </div>
                        </div>
                       </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Total Authorized Units:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("total_authorized_units")}
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
                            Date:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("physician_contact_info")}
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
                            Time In:
                          </label>
                        </span>

                        <input
                          type="time"
                          className=" w-full border-none focus:outline-none "
                          {...register("intervention_settings")}
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
                            Time Out:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          
                          {...register("physician_contact_info")}
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
                            Total Units:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."

                          {...register("intervention_settings")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label for="rec_name" class=" font-bold text-base">
                            Target Behaviors for Decease:
                          </label>
                        </span>
                        <div class="mt-3 w-full ">
                          <textarea
                            placeholder=" Enter Here..."
                            name=" behaviors_behaviors"
                            class="ant-input ant-input-lg"
                          ></textarea>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label for="rec_name" class=" font-bold text-base">
                            Rate during session:
                          </label>
                        </span>
                        <div class="mt-3 w-full ">
                          <textarea
                            placeholder=" Enter Here..."
                            name=" Notes_1"
                            class="ant-input ant-input-lg"
                          ></textarea>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label for="rec_name" class=" font-bold text-base">
                          Training Addressed During Session:
                          </label>
                        </span>
                        <div class="flex flex-col flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("client")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Functional Communication Training

                            </label>
                          </div>
                          <div class="flex  items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("therapist")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Role Modeling
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
                            <label
                              for="inline-2-radio"
                              class="ml-2 form-input-name"
                            >
                              Social Skill Training
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("client")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Parent Training

                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("client")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Shaping
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("client")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Planned Ignore

                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="checkbox"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("client")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 form-input-name"
                            >
                              Task Analysis

                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                            Token Economy

                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                            Positive Reinforcement

                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                            Environmental Modifications

                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                            Response Blocking

                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                             Tolerance Training
                          </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                             Extinction
                           </label>
                        </div>
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="checkbox"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4"
                            {...register("client")}
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 form-input-name"
                          >
                            other
                          </label>
                        </div>
                        <div class="mt-3 w-full ">
                          <textarea
                            placeholder=" Notes..."
                            name=" Notes_1"
                            class="ant-input ant-input-lg"
                          ></textarea>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label for="rec_name" class=" font-bold text-base">
                          Individualized Behavioral Goals :
                          </label>
                        </span>
                        <div class="mt-3 w-full ">
                          <textarea
                            placeholder=" Notes..."
                            name=" behaviors_behaviors"
                            class="ant-input ant-input-lg"
                          ></textarea>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label for="rec_name" class=" font-bold text-base">
                          Current Rate/Percentage:
                          </label>
                        </span>
                        <div class="mt-3 w-full ">
                          <textarea
                            placeholder=" Notes..."
                            name=" Notes_1"
                            class="ant-input ant-input-lg"
                          ></textarea>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3">
              <span className="form-inner-head">
              SESSION INFORMATION/PROGRESS:

              </span>
              <div className="mt-3 mb-3   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("recommendations_provided_to_parent")}
                />
              </div>
            </div>

            <div className="border-2 mb-3 border-blue-600 px-2 shadow-md">
              <h1 className="form-inner-head">Task Completed</h1>
              <div className="flex flex-wrap gap-5 lg:gap-0 mt-4 mb-4">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("direct_assessment")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name ">
                    Direct Assessment
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("indirect_assessment")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Indirect Assessment
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register("creating_goals_language")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Creating Goals Language
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    class="w-4 h-4"
                    {...register(
                      "creating_behavior_intervention_plan_language"
                    )}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Creating Behavior Intervention Plan Language
                  </label>
                </div>
                <div class="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("creating_report_language")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Creating Report Language
                  </label>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-600 px-2">
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

export default BehaviorAnalysisProgressNote;
