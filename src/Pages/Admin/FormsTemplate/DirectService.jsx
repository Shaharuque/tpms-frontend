import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const DirectService = () => {
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
      {" "}
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5">
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
            <h2>DIRECT-SERVICE</h2>
            <h1>PARENT TRAINING NOTE</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>

        {/* form heading part  */}

        <div className="my-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
                <div className=" form-input-border">
                  <div className="flex items-center">
                    <span className="form-input-name ">Child Name:</span>

                    <input
                      type="text"
                      name="client_name"
                      className=" input-font focus:outline-none"
                      {...register("client_name")}
                    />
                  </div>
                </div>

                <div className="form-input-border  ">
                  <div className="flex items-center">
                    <span className="form-input-name ">Attendees:</span>

                    <input
                      type="text"
                      name="Diagnosis"
                      className=" input-font focus:outline-none"
                      {...register("Diagnosis")}
                    />
                  </div>
                </div>

                <div className="form-input-border  ">
                  <div className="flex items-center">
                    <span className="form-input-name ">Start Time:</span>

                    <input
                      type="text"
                      name="Insured"
                      className=" input-font focus:outline-none"
                      {...register("Insured")}
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
                  <div className="form-input-border-date">
                    <div className="flex items-center">
                      <span className="form-input-name ">Date:</span>

                      <input
                        type="date"
                        name="dob"
                        className=" input-font focus:outline-none"
                        {...register("dob")}
                      />
                    </div>
                  </div>
                  <div className="form-input-border-date">
                    <div className="flex items-center">
                      <span className="form-input-name ">End Time:</span>

                      <input
                        type="time"
                        name="age"
                        className=" input-font focus:outline-none"
                        {...register("age")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head mt-4">GOALS FOR SESSION:</h1>
              <p className="text-[#d9534f] text-[1.2rem] font-normal mb-4">
                Check the box to the left of one or more goals that apply to
                this session
              </p>
              <div className="flex  items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Explained specific behavior analytic concept / technique /
                  procedure
                </span>
              </div>
              <div className="flex items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Role played new procedure / technique
                </span>
              </div>
              <div className="flex  items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Gave performance feedback to parent on implementation
                </span>
              </div>
              <div className="flex  items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Modified / created new goal based on parent information
                </span>
              </div>
              <div className="flex  items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Modeled protocol with child (if child present (0368T/0369T)
                </span>
              </div>
              <div className="flex  items-center ">
                <div className="form-input-border ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                </div>

                <span className="form-input-border form-input-name w-full">
                  Other:
                </span>
              </div>
            </div>

            <div>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  Measurement
                </h1>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_1" className="mr-2" />
                    A-1 Prepare for data collection
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_2" className="mr-2" />
                    A-2 Implement continuous measurement procedures (e.g.,
                    frequency, duration)
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_3" className="mr-2" />
                    A-3 Implement discontinuous measurement procedures (e.g.,
                    partial & whole interval, momentary time sampling)
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_4" className="mr-2" />
                    A-4 Implement permanent-product recording procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_5" className="mr-2" />
                    A-5 Enter data and update graphs
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input type="checkbox" name="a_6" className="mr-2" />
                    A-6 Describe behavior and environment in observable and
                    measurable terms
                  </label>
                </div>
              </>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  Assessment
                </h1>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="b_1"
                    />
                    B-1 Conduct preference assessments
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="b_2"
                    />
                    B-2 Assist with individualized assessment procedures (e.g.,
                    curriculum-based, developmental, social skills)
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="b_3"
                    />
                    B-3 Assist with functional assessment procedures
                  </label>
                </div>
              </>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  Skill Acquisition
                </h1>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_1"
                    />
                    C-1 Identify the essential components of a written skill
                    acquisition plan
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_2"
                    />
                    C-2 Prepare for the session as required by the skill
                    acquisition plan
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_3"
                    />
                    C-3 Use contingencies of reinforcement (e.g.,
                    conditioned/unconditioned reinforcement,
                    continuous/intermittent schedules).
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_4"
                    />
                    C-4 Implement discrete-trial teaching procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_4"
                    />
                    C-5 Implement naturalistic teaching procedures (e.g.,
                    incidental teaching)
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_6"
                    />
                    C-6 Implement task analyzed chaining procedures.
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_7"
                    />
                    C-7 Implement discrimination training
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_8"
                    />
                    C-8 Implement stimulus control transfer procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_9"
                    />
                    C-9 Implement prompt and prompt fading procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_10"
                    />
                    C-10 Implement generalization and maintenance procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_11"
                    />
                    C-11 Implement shaping procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="c_12"
                    />
                    C-12 Implement token economy procedures
                  </label>
                </div>
              </>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  Behavior Reduction
                </h1>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_1"
                    />
                    D-1 Identify essential components of a written behavior
                    reduction plan
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_2"
                    />
                    D-2 Describe common functions of behavior
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_3"
                    />
                    D-3 Implement interventions based on modification of
                    antecedents such as motivating operations and discriminative
                    stimuli
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_4"
                    />
                    D-4 Implement differential reinforcement procedures (e.g.,
                    DRA, DRO).
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_5"
                    />
                    D-5 Implement extinction procedures
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="d_6"
                    />
                    D-6 Implement crisis/emergency procedures according to
                    protocol
                  </label>
                </div>
              </>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  E-Documentation and Reporting
                </h1>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="e_1"
                    />
                    E-1 Effectively communicate with a supervisor in an ongoing
                    manner
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="e_2"
                    />
                    E-2 Actively seek clinical direction from supervisor in a
                    timely manner
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="e_3"
                    />
                    E-3 Report other variables that might affect the client in a
                    timely manner
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="e_4"
                    />
                    E-4 Generate objective session notes for service
                    verification by describing what occurred during the
                    sessions, in accordance with applicable legal, regulatory,
                    and workplace requirements.
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="e_5"
                    />
                    E-5 Comply with applicable legal, regulatory, and workplace
                    data collection, storage, transportation, and documentation
                    requirements
                  </label>
                </div>
              </>
              <>
                <h1 className="text-rose-600 text-lg font-medium my-3">
                  Professional Conduct and Scope of Practice
                </h1>

                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="f_1"
                    />
                    F-1 Describe the BACB’s RBT supervision requirements and the
                    role of RBTs in the service-delivery system.
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="f_2"
                    />
                    F-2 Respond appropriately to feedback and maintain or
                    improve performance accordingly
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="f_3"
                    />
                    F-3 Communicate with stakeholders (e.g., family, caregivers,
                    other professionals) as authorized
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="f_4"
                    />
                    F-4 Maintain professional boundaries (e.g., avoid dual
                    relationships, conflicts of interest, social media
                    contacts).
                  </label>
                </div>
                <div className="form-check text-[17px] my-1">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="mx-3 form-check-input"
                      name="f_5"
                    />
                    F-5 Maintain client dignity
                  </label>
                </div>
              </>
            </div>

            <div>
              <h1 className="form-inner-head my-4">SUPERVISION OVERVIEW:</h1>

              <div className="mt-3">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-4">FEEDBACK TO SUPERVISOR:</h1>

              <div className="mt-3">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 items-center justify-between my-5">
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
      </div>{" "}
    </div>
  );
};

export default DirectService;
