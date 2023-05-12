import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ParentEvaluationPreparationMemo = () => {
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
            PARENT EVALUATION PREPARATION MEMO{" "}
            </h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <p className="text-sm font-normal my-2">Thank you for confirming your evaluation with Signature Behavioral Health! We look forward to providing your family with the best care possible. To prepare for your evaluation we prepared the following checklist for your convenience.</p>
            <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
              <li>The initial component of your child’s assessment is a parent survey. This survey will need to be completed through QGlobal. This document will be sent via QGlobal to your email. Please look for this email and complete it by the deadline included on your link.</li>
              <li>
              Please prepare to fully participate in the interview, however, if you need to take breaks, please feel free to request them as needed.
              </li>
              <li>
              A parent/caregiver must remain in the building at all times.
                
              </li>
              <li>
              The Psychologist may conduct testing solely with your child. During this time the Psychologist may ask you to leave the room. If this occurs, please remain in the lobby.
              </li>
              <li>
              The evaluation may take up to 4 hours to complete, depending on the individual.
              </li>
              <li>If you are in the room at any time during the evaluation, we ask that you not provide any answers or additional help to your child unless requested.</li>
              <li>After the evaluation, the Psychologist will create a detailed report. The time spent writing the report will be charged to your insurance or family directly. You will receive a detailed invoice with billable charges. You will receive the report within 30 days.</li>
              











             
            </ul>


            <p className="text-sm font-normal">A few quick reminders:</p>
            <ul class="ml-6 list-disc">
                  <li>
                  Please adhere to our COVID-policy, wearing proper masks while the Psychologist is present.
                  </li>
                  <li>
                  If you need to cancel or reschedule your appointment, please contact us at info@amromed.com no later than 24 hours prior to your appointment.
                  </li>
                  <li>Additional family members are welcome to observe and be interviewed, however, when needed the Psychologist may a</li>
                 
                </ul>

                <p className="text-sm font-normal">If you have any additional questions or concerns, please do not hesitate to contact us.</p>




               

                <p>Sincerely,</p>

                <div>
                  <input type="submit" value="" className="border-2 border-b font-bold"/>Signature Behavioral Health
                   
                </div>



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

export default ParentEvaluationPreparationMemo