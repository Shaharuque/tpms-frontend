import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Radio } from "antd";

const CONSENT_TO_TREATMENT = () => {
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
            <p className="my-2">
              <span className="form-head">Mail: </span>demo@example.com
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Email: </span>demo@example.com
              </Link>
            </p>
            <p className="my-2">
              <span className="form-head">Phone: </span> 000-000-0000
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Fax: </span>000.000.0000
              </Link>
            </p>
          </div>
        </div>
        <div className="form-title my-5">
          <h1>CONSENT TO TREATMENT/ CLIENT ACKNOWLEDGEMENT</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="">
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            <span className="form-head my-5 w-full">CONSENT TO TREATMENT</span>{" "}
            <br />{" "}
            <div className="my-5">
              I understand that all the information, including Client
              assessment, treatment notes, etc, are treated with strict
              confidentiality and that no information, either verbal or written,
              will be shared without the written consent of Client or legal
              guardian (if the Client is under the age of 18). I understand that
              individuals responsible for care through CLARITY BEHAVIORAL HEALTH
              will need to have access to confidential information for the
              purpose of assessment and treatment coordination. By law, rules of
              confidentiality do not hold under the following conditions:
            </div>
          </p>
          <div className="font-medium text-[16px] my-5">
            1. If abuse or neglect of a minor, readonly, or elderly person is
            reported or suspected, the provider is legally required to report
            concern to the Department of Children and Families. <br />
            2. If during services, the professional receives information that
            someone’s life is in danger, that professional has a legal duty to
            warn the threatened individual.
            <br />
            3. If CLARITY BEHAVIORAL HEALTH or staff testimony is subpoenaed by
            Court Order, we are required to produce records or appear in court
            to answer questions about the client.
          </div>

          <div className="flex items-center gap-3">
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-semibold">
                I consent to treatment taking place at the following
                location(s):
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-semibold">
                Home
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-semibold">
                School
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-semibold">
                Office
              </span>
            </div>
          </div>

          <div className="text-[16px] my-10">
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder=" INITIAL HERE..."
              {...register("client_name")}
            />
            (Initial here) Financial Responsibility: I understand that I must
            disclose all insurance coverage. If failure to disclose results in a
            denied claim, I will be financially responsible. <br />
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder=" INITIAL HERE..."
              {...register("client_name")}
            />{" "}
            (Initial here) I acknowledge that I have received a copy of CLARITY
            BEHAVIORAL HEALTH’ Notice of Privacy Practices. <br />
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder=" INITIAL HERE..."
              {...register("client_name")}
            />{" "}
            (Initial here)I have received the Clarity Behavioral Health Client
            Handbook. I was given time to ask questions and I understand the
            answers that were given to me. The Client Handbook has information
            on the following subjects:
          </div>
          <div>
            <ul>
              <li>
                . Client Rights and Responsibilities/ CLARITY BEHAVIORAL HEALTH
                Rights and Responsibilities
              </li>
              <li>
                . Client Rights and Responsibilities/ CLARITY BEHAVIORAL HEALTH
                Rights and Responsibilities
              </li>
              <li>
                . Client Rights and Responsibilities/ CLARITY BEHAVIORAL HEALTH
                Rights and Responsibilities
              </li>
            </ul>
          </div>
          <div>
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder=" INITIAL HERE..."
              {...register("client_name")}
            />
            (Initial here) I have been provided with a list of Recommendations
            for Emergencies After Hours.
          </div>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Clarity Behavioral Health staff name:
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
                        <label for="rec_name" className=" font-bold text-base">
                          Signature:
                        </label>
                      </span>

                      <button
                        className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                        onClick={handleSignatureProvider}
                      >
                        Provider Signature
                        <FaSignature className="text-lg" />
                      </button>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Title:
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
                        <label for="rec_name" className=" font-bold text-base">
                          Date:
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
                        <label for="rec_name" className=" font-bold text-base">
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

                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date:
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
                        <label for="rec_name" className=" font-bold text-base">
                          Parent Name :
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
                        <label for="rec_name" className=" font-bold text-base">
                          Signature:
                        </label>
                      </span>

                      <button
                        className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                        onClick={handleSignatureCaregiver}
                      >
                        Caregiver Signature
                        <FaSignature className="text-lg" />
                      </button>
                    </div>
                  </td>

                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date:
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
              </tbody>
            </table>
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5"></div>
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
          Demo Institution
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

export default CONSENT_TO_TREATMENT;
