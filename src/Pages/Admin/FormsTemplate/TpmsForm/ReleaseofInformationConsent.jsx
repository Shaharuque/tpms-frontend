import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ReleaseofInformationConsent = () => {
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
    <>
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
              <h1>RELEASE OF INFORMATION CONSENT </h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Client's Name :
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * I authorize Signature Behavioral Health to:
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Initial Assessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                   The following information:
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Initial Assessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div> <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div> <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-5">

                <div> <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Client's Name :
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div></div>
                <div> <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Client's Name :
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div></div>

              </div>


              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * I authorize Signature Behavioral Health to:
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Initial Assessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                   The following information:
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Initial Assessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div> <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div> <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Reassessment
                  </label>
                </div>
              </div>

              <p className="text-sm mt-3 mb-3">I understand that this authorization is voluntary, and I may revoke this consent at any time by providing written notice, and after (some states vary, usually 1 year) this consent automatically expires. I have been informed what information will be given, its purpose, and who will receive the information. I understand that I have a right to receive a copy of this authorization. I understand that I have a right to refuse to sign this authorization.</p>


         
              <div className="mt-4">
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
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
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
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
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
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                <button className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiFillCloud /> Save
                </button>
                <button className=" bg-cyan-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiOutlinePrinter /> Print
                </button>
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
                <div className="text-black">
                  Demo Institution{" "}
                  <span className=" font-normal">somewhere in america</span>
                </div>
                <div>
                  Phone: 000-000-0000, Email: demo@example.com, Fax:
                  000.000.0000, example.com
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReleaseofInformationConsent;
