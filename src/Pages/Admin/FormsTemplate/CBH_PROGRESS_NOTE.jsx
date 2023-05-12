import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "./SignatureManage/SignatureModal";
import { Radio } from "antd";

const CBH_PROGRESS_NOTE = () => {
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
          <h1>PROGRESS NOTE</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Name of Client:
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
                            DOB
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Client MR #:
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
                              Child
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
                              Youth
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
                              Adult
                            </label>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      colSpan={"2"}
                    >
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Date of Service:
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Service Provider Name:
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
                            Credentials:
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Actual Start Time:
                          </label>
                        </span>

                        <input
                          type="time"
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
                            Actual Stop Time:
                          </label>
                        </span>

                        <input
                          type="time"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Documentation Time:
                          </label>
                        </span>

                        <input
                          type="time"
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
            <label className="form-inner-head my-3">A. SERVICE PROVIDED:</label>
            <div class="text-sm text-gray-900 font-light my-5 px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
              <div class="flex gap-3 overflow-x-scroll">
                <div>
                  {" "}
                  <label for="rec_name" className=" font-bold text-base">
                    Mental Health (MH)
                  </label>
                </div>
                <div class="flex gap-3">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span>
                    <label for="rec_name" className=" font-bold text-base">
                      Individual
                    </label>
                  </span>
                </div>

                <Radio.Group onChange={onChange} value={value}>
                  <Radio className=" font-bold text-base ml-1" value={1}>
                    Family
                  </Radio>
                  <Radio className=" font-bold text-base ml-1" value={2}>
                    Group
                  </Radio>
                  <Radio className=" font-bold text-base ml-1" value={3}>
                    TBOS
                  </Radio>
                </Radio.Group>
              </div>
            </div>
            <label className="form-inner-head my-3">
              B. LOCATION OF SERVICES:
            </label>
            <div class="text-sm text-gray-900 font-light my-5 px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
              <div class="flex gap-3 overflow-x-scroll">
                <div class="flex gap-3">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span>
                    <label for="rec_name" className=" font-bold text-base">
                      Office
                    </label>
                  </span>
                </div>

                <Radio.Group onChange={onChange} value={value}>
                  <Radio className=" font-bold text-base ml-1" value={1}>
                    Home
                  </Radio>
                  <Radio className=" font-bold text-base ml-1" value={2}>
                    Community
                  </Radio>
                  <Radio className=" font-bold text-base ml-1" value={3}>
                    School
                  </Radio>
                  <Radio className=" font-bold text-base ml-1" value={4}>
                    Other
                  </Radio>
                </Radio.Group>
                <div class="flex gap-3">
                  <span>
                    <label for="rec_name" className=" font-bold text-base">
                      (explain)
                    </label>
                  </span>

                  <input
                    type="text"
                    className=" w-full border-none focus:outline-none "
                    placeholder="Enter Here..."
                    {...register("client_name")}
                  />
                </div>
              </div>
            </div>
            <label className="form-inner-head my-3">
              C. OBSERVATIONS OF CLIENT (AFFECT, BEHAVIORS, FUNCTIONING, AND
              SYMPTOMS, OUT OF RANGE OF BASELINE):
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <label className="form-inner-head my-3">D. LEVEL OF RISK:</label>
            <div class="flex gap-3 my-5 flex-wrap">
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    High – Disposition (date/time/place)
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
                    Moderate – Crisis plan attached
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
                    Low
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Baker acted
                  </label>
                </span>
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    yes
                  </label>
                </span>
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    No
                  </label>
                </span>
              </div>
            </div>
            <label className="form-inner-head my-3">
              E. (G) – GOALS/OBJECTIVES LINK TO SERVICE:
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <label className="form-inner-head my-3">
              F. (I) – INTERVENTION(S) PROVIDED:
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <label className="form-inner-head my-3">
              G. (R) – CLIENTS RESPONSE TO INTERVENTIONS:
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <label className="form-inner-head my-3">
              H. (P) – PLAN FOR NEXT STEPS – INCLUDE DATE AND TIME OF NEXT
              APPOINTMENT AS WELL AS THE PLAN:
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <label className="form-inner-head my-3">
              I. (ED) – ESTIMATED DISCHARGE PLAN – DISPOSITION (LENGTH OF
              SERVICE AND DATE):
            </label>
            <input
              type="text"
              className=" w-full border-none focus:outline-none my-4 py-4"
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <div className="flex items-center gap-3 flex-wrap">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Provider Signature
                </label>
              </span>

              <input
                type="text"
                className=" w-full border-none focus:outline-none my-4 py-4"
                placeholder="Enter Here..."
                {...register("client_name")}
              />
            </div>
            <div className="flex items-center gap-3 ">
              <span>
                <label for="rec_name" className=" font-bold text-base w-full ">
                  Provider Name:
                </label>
              </span>

              <input
                type="text"
                className="  border-none focus:outline-none my-4 py-4"
                placeholder="Enter Here..."
                {...register("client_name")}
              />
            </div>
            <div className="flex flex-wrap ga-3">
              {" "}
              <div className="flex items-center gap-3 ">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base w-full "
                  >
                    Credentials:
                  </label>
                </span>

                <input
                  type="text"
                  className="  border-none focus:outline-none my-4 py-4"
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>
              <div className="flex items-center gap-3 ">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base w-full "
                  >
                    Title:
                  </label>
                </span>

                <input
                  type="text"
                  className="  border-none focus:outline-none my-4 py-4"
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>
              <div className="flex items-center gap-3 ">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base w-full "
                  >
                    Date of Note:
                  </label>
                </span>

                <input
                  type="date"
                  className="  border-none focus:outline-none my-4 py-4"
                  placeholder="Enter Here..."
                  {...register("client_name")}
                />
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5">
            <button
              className="flex items-center text-lg  hover:text-rose-800 font-medium gap-1 text-white bg-green-500 py-2 px-3 rounded-md"
              onClick={handleSignatureProvider}
            >
              Mark Completed and Sign
              <FaSignature className="text-lg" />
            </button>
            <button
              className="flex items-center text-lg  hover:text-white font-medium gap-1  text-white bg-rose-600 px-3 rounded-md"
              onClick={handleSignatureCaregiver}
            >
              Cancel X
            </button>
            {/* <button
              className="flex items-center text-lg  hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureCaregiver}
            >
              Caregiver Signature
              <FaSignature className="text-lg" />
            </button> */}
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

export default CBH_PROGRESS_NOTE;
