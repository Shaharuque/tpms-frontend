import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const DischargeSummary = () => {
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
            <h1>Discharge Summary</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className="flex">
              <div>
                <span className="form-input-name ">1)</span>
              </div>

              <div>
                <div className="flex  flex-row gap-4 flex-wrap mb-8">
                  <div className="flex flex-wrap gap-2 ">
                    {" "}
                    <span>
                      <label for="clname" className="form-input-name my-2">
                        Session Date:
                      </label>
                    </span>{" "}
                    <span>
                      <input
                        type="date"
                        className="focus:outline-none "
                        {...register("session_date")}
                      />
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 ">
                    {" "}
                    <span>
                      <label for="time" className="form-input-name my-2">
                        Discharge Date:
                      </label>
                    </span>{" "}
                    <span>
                      <input
                        id="date"
                        type="date"
                        name="time"
                        {...register("discharge_date")}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <span className="form-input-name ">2)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  What is the living situation at discharge?
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter the living situation at discharge..."
                    size="large"
                    className=""
                    {...register("living-situation_discharge")}
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <span className="form-input-name ">3)</span>
              </div>
              <div className="w-full">
                <div className="w-full">
                  <h3 className="form-input-name">
                    What are the Strengths, Needs, Abilities and Preferences of
                    the individual?
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-center w-full mt-2 mb-8 gap-2 lg:gap-5">
                    <div className="w-full max-w-[80px]">
                      <p>
                        <strong>Strengths: ?</strong>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="w-full py-2 px-1 border-2 border-blue-600  focus:outline-none"
                      placeholder="Enter Strengths..."
                      name="strength"
                      {...register("strength")}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-center w-full mb-8 gap-2 lg:gap-5">
                    <div class="w-full max-w-[80px]">
                      <p>
                        <strong>Needs: ?</strong>{" "}
                      </p>
                    </div>
                    <div class="fill-area w-full">
                      <input
                        type="text"
                        className="w-full py-2 px-1 border-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Strengths..."
                        name="needs"
                        {...register("needs")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-center w-full mt-2 mb-8 gap-2 lg:gap-5">
                    <div className="w-full max-w-[80px]">
                      <p>
                        <strong>Abilities: ?</strong>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="w-full py-2 px-1 border-2 border-blue-600  focus:outline-none"
                      placeholder="Enter Strengths..."
                      name="abilities"
                      {...register("abilities")}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-center w-full mt-2 mb-3 gap-2 lg:gap-5">
                    <div className="w-full max-w-[80px]">
                      <p>
                        <strong>Preferences:?</strong>
                      </p>
                    </div>

                    <input
                      type="text"
                      className="w-full py-2 px-1 border-2 border-blue-600  focus:outline-none"
                      placeholder="Enter Strengths..."
                      name="preferences"
                      {...register("preferences")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-8">
              <div>
                <span className="form-input-name ">4)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  What Services and support did Resilient Focused Family Therapy
                  Provide, while in care?
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Services and support did Resilient Focused Family Therapy Provide, while in care..."
                    size="large"
                    className="service_support"
                    {...register("service_support")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">5)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">Significant findings</span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Significant findings..."
                    size="large"
                    className="Significant_findings"
                    {...register("significant_findings")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">6)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  Summary of goals achieved
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Summary of goals achieved..."
                    size="large"
                    className="summary_of_goals_achieved"
                    {...register("summary_of_goals_achieved")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">7)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  Summary of goals not achieved
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Summary of goals not achieved..."
                    size="large"
                    className=""
                    {...register("Summary_of_goals_not_achieved")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">8)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">Current support system</span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Current support system..."
                    size="large"
                    className="Current support system
                    "
                    {...register("current_support_system")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">9)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  Overall Recommendations
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Overall Recommendations..."
                    size="large"
                    className=""
                    {...register("overall_ecommendations")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">10)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  What outside organization did you refer client too? If not
                  referred out, please explain.
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter What outside organization did you refer client too? If not referred out, please explain...."
                    size="large"
                    className=""
                    {...register("refarred_out")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">11)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  What is the plan of services, please include if an appointment
                  was scheduled (Please be specific)?
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter What is the plan of services, please include if an appointment was scheduled (Please be specific)?
                    ..."
                    size="large"
                    className="appointment_scheduled"
                    {...register("appointment_scheduled")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">12)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  Any medical needs post discharge?
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Any medical needs post discharge?
                    ..."
                    size="large"
                    className=""
                    {...register("post_discharge")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">13)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">
                  What is the reason for discontinuing services?
                </span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter What is the reason for discontinuing services?
                    ..."
                    size="large"
                    className=""
                    {...register("discontinuing_service")}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <span className="form-input-name ">14)</span>
              </div>
              <div className="w-full">
                <span className="form-input-name ">Summary of Discharge</span>
                <div className="mt-3 mb-8   border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder="Enter Summary of Discharge
                    ..."
                    size="large"
                    className=""
                    {...register("Summary_of_discharge")}
                  />
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

export default DischargeSummary;
