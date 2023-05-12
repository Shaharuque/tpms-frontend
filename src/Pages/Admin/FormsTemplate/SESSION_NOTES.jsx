import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "./SignatureManage/SignatureModal";
import { Radio } from "antd";

const SESSION_NOTES = () => {
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
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
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
          <h1>SESSION NOTES</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                {" "}
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      colSpan={"3"}
                    >
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                            Start Time:
                          </label>
                        </span>

                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none "
                          {...register("dob")}
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
                            End Time:
                          </label>
                        </span>

                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none "
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Units:
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
                            Service Location:
                          </label>
                        </span>

                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none "
                          {...register("dob")}
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
                            PX Code:
                          </label>
                        </span>

                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none "
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      colSpan={"3"}
                    >
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            All Service Code Descriptions
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1 className="form-inner-head  ml-1 w-full">PROVIDERS:</h1>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  {" "}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
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
                              Provider Name:
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
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
                              Provider NPI:
                            </label>
                          </span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head ml-1 w-full">
                INDIVIDUAL PRESENT:
              </h1>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  {" "}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
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
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              BCBA
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              RBT
                            </Radio>

                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={3}
                            >
                              Other
                            </Radio>
                          </Radio.Group>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              {" "}
              <div class="flex gap-3">
                <label className="form-inner-head my-3">
                  CLIENT BCBA: PROCEDURES USED:
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
                      Skill Acquisition
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
                      Social Skill Acquisition
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
                      Role Play
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
                      Premack Principle
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
                      Stimulus Prompts
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
                      Video Modeling
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
                      Shaping
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
                      Behavior Contract
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
                      Timer
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
                      Token Board
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
                      Self Monitor
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
                      DTT
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
                      Antecedent Manipulation
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
                      Self Management
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
                      Differential Reinforcement
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
                      FCT
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
                      Visual Aid
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
                      Errorless Learning
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
                      NET
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
                      Chaining
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
            <h1 className="form-inner-head  mt-5 w-full">GOALS FOR SESSION:</h1>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                {" "}
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service Type:
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
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Session Notes:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  SESSION SUMMARY:
                </label>
              </span>

              <br />
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder="Enter SUBJECTIVE..."
                size="large"
                className="w-full p-5 form-input-textarea my-3"
              />
            </div>
            <h1 className="form-inner-head  mt-5 w-full">PROVIDERS:</h1>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                {" "}
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Provider Name :
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
                            Provider Credentials :
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
                  </tr>
                </tbody>
              </table>
            </div>
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

export default SESSION_NOTES;
