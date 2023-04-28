import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const GssupervisionForm = () => {
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
            <h1>SUPERVISION FORM</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 " colSpan={3}>
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="client_name"
                            className=" font-bold text-base"
                          >
                          Client Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("client_name")}
                        />
                      </div>
                    </td>
                   
                   
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service Date:

                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex  gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                           Start Time:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_2")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex  gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                           End Time:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_2")}
                        />
                      </div>
                    </td>
                   
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Units:

                          </label>
                        </span>

                        <input
                          type="number"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex  gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                          Service Location:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_2")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex  gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                          PX Code:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("goal_2")}
                        />
                      </div>
                    </td>
                   
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600" colSpan={3}>
                      <div className="flex flex-col gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            All Service Code Descriptions:

                          </label>
                        </span>

                        <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=" border-none focus:outline-none "
                  {...register("next_session")}
                />
                      </div>
                    </td>
                
                   
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div className="mt-4 mb-4">
              <label className="form-inner-head">Providers:</label>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Organization Name:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Provider Name:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_2")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              CProvider Credentials:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Provider NPI:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_2")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <label className="form-inner-head">Individual Present:</label>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Caregiver:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex  gap-2">
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
                            {...register("goal_2")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-wrap gap-5 lg:gap-0 mt-2 mb-4">
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
                              class="ml-2 form-input-name font-bold"
                            >
                              BCBA
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
                              class="ml-2 form-input-name font-bold"
                            >
                              RBT
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
                              class="ml-2 form-input-name font-bold"
                            >
                              Other
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              type="text"
                              placeholder="Enter Here..."
                              className="border p-1"
                              {...register("rendering_provider")}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-2 border-blue-600 px-2 py-2 mt-4">
              <span class="form-inner-head">Deficits Addressed</span>

              <div class="flex flex-wrap gap-5 lg:gap-0 mt-2 mb-4">
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
                    class="ml-2 form-input-name font-bold"
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
                    class="ml-2 form-input-name font-bold"
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
                    class="ml-2 form-input-name font-bold"
                  >
                    Rendering Provider
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
                    class="ml-2 form-input-name font-bold"
                  >
                    Rendering Provider
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
                    class="ml-2 form-input-name font-bold"
                  >
                    Rendering Provider
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
                    class="ml-2 form-input-name font-bold"
                  >
                    Rendering Provider
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              
              <div className=" border-t-0  border-blue-600 border-2 p-2">
                <span className="form-inner-head lg:text-base sm:text-xs">
                Problem Behavior Observed
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className="border-none focus:outline-none"
                  {...register("programs_workd_on")}
                />
              </div>{" "}
              <div className=" border-t-0  border-blue-600 border-2 p-2">
                <span className="form-inner-head lg:text-base sm:text-xs">
                Interventions Used
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className="border-none focus:outline-none"
                  {...register("Reinforcers used")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2 p-2">
                <span className="form-inner-head lg:text-base sm:text-xs">
                Progress Noted
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=" border-none focus:outline-none"
                  {...register("Client Progress")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2 p-2">
                <span className="form-inner-head lg:text-base sm:text-xs">
                Feedback Provided to Therapist
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=" border-none focus:outline-none "
                  {...register("next_session")}
                />
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
                  <label
                    for="inline-radio"
                    class="ml-2 form-input-name font-bold"
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
                    class="ml-2 form-input-name font-bold"
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
                    class="ml-2 form-input-name font-bold"
                  >
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

export default GssupervisionForm;
