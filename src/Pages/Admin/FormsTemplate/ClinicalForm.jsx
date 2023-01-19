import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ClinicalForm = () => {
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
            <h1>Clinical FORM</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className="w-full mt-4 mb-4">
              <div className="mt-3    border-blue-600 border-2">
                <span className="form-input-name">Clinical Status</span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className="border-none"
                  {...register("Clinical Status")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-input-name">
                  Who was present during the session
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("present_during_seation")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-input-name">
                  Behavior targeted for decrease
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("target_decrease")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-input-name">
                  Current clinical status{" "}
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("technique_during_seasion")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-inner-head">
                  Goals Targeted(Behaviors for increase) addressed during this
                  session: (For daily progress, please see graphed data)
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("programs_workd_on")}
                />
              </div>{" "}
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-inner-head">
                  Goals Targeted(Behaviors for decrease) addressed during this
                  session noted
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("Reinforcers used")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-inner-head">
                  Techniques Attempted During Session
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("Client Progress")}
                />
              </div>
              <div className=" border-t-0  border-blue-600 border-2">
                <span className="form-inner-head">
                  Progress Toward Treatment Goals
                </span>
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className=""
                  {...register("next_session")}
                />
              </div>
            </div>

            <div class="overflow-x-auto mb-4">
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-1 whitespace-nowrap  border-r border-2 border-blue-600 w-1/4">
                      <div class="flex flex-col gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base text-blue-600"
                          >
                            Length of Supervision of Session
                          </label>
                        </span>

                        <input
                          type="input"
                          className=" w-full px-2 py-2 rounded border border-blue-600 focus:outline-none "
                          placeholder="Enter here..."
                          {...register("session_length")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-1  whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div class="flex flex-col gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base text-blue-600"
                          >
                            Rendering behavioral technician
                          </label>
                        </span>

                        <input
                          type="input"
                          className=" w-full px-2 py-2 rounded border  border-blue-600 focus:outline-none "
                          placeholder="Enter here..."
                          {...register(" number_of_hours_supervised")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-1 whitespace-nowrap  border-r border-2 border-blue-600 w-1/4">
                      <div class="flex flex-col gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base text-blue-600"
                          >
                            Supervisor Providing Supervision
                          </label>
                        </span>

                        <input
                          type="input"
                          className=" w-full px-2 py-2 rounded border border-blue-600 focus:outline-none "
                          placeholder="Enter here..."
                          {...register("session_length")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-1  whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div class="flex flex-col gap-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base text-blue-600"
                          >
                            Feedback/Constructive Criticism Provided
                          </label>
                        </span>

                        <input
                          type="input"
                          className=" w-full px-2 py-2 rounded border  border-blue-600 focus:outline-none "
                          placeholder="Enter here..."
                          {...register(" number_of_hours_supervised")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default ClinicalForm;
