import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ABAEvaluation = () => {
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
              <h1>
              ABA/EVALUATION MEDICAL <br /> RELEASE{" "}
                
              </h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
             


              <p className="text-sm font-normal mt-2">
              I/We, the undersigned, do hereby authorize Signature Behavioral Health to authorize emergency medical treatment for our child, by a licensed physician or dentist in the event we cannot be contacted. In giving Signature Behavioral Health permission to authorize emergency treatment, I/we do not hold Signature Behavioral Health responsible for the treatment given to the above-named individual. I/we will assume full financial responsibility for the emergency care and/or transportation for said child and will not hold Signature Behavioral Health financially responsible.
              </p>

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
  )
}

export default ABAEvaluation