import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ParentTrainingSession = () => {
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
          <h2>Supervision Form</h2>
          <h1>SUPERVISION: REGISTERED BEHAVIOR TECHNICIAN</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>

      {/* form heading part  */}

      <div className="my-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="form-inner-head my-4">Client Information:</h1>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
              <div className=" form-input-border">
                <div className="flex items-center">
                  <span className="form-input-name ">Client Name:</span>

                  <input
                    type="text"
                    name="client_name"
                    className=" input-font focus:outline-none"
                    {...register("client_name")}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
                <div className="form-input-border-date">
                  <div className="flex items-center">
                    <span className="form-input-name ">DOB:</span>

                    <input
                      type="date"
                      name="dob"
                      className=" input-font focus:outline-none"
                      {...register("dob")}
                    />
                  </div>
                </div>
                <div className="form-input-border">
                  <div className="flex items-center">
                    <span className="form-input-name ">Age:</span>

                    <input
                      type="number"
                      name="age"
                      className=" input-font focus:outline-none"
                      {...register("age")}
                    />
                  </div>
                </div>
              </div>
              <div className="form-input-border  ">
                <div className="flex items-center">
                  <span className="form-input-name ">Diagnosis:</span>

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
                  <span className="form-input-name ">Insured Id:</span>

                  <input
                    type="text"
                    name="Insured"
                    className=" input-font focus:outline-none"
                    {...register("Insured")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-inner-head my-4">PROVIDER INFORMATION:</h1>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
              <div className=" form-input-border">
                <div className="flex items-center flex-wrap">
                  <span className="form-input-name ">Provider Name:</span>

                  <input
                    type="text"
                    name="client_name"
                    className=" input-font focus:outline-none"
                    {...register("client_name")}
                  />
                </div>
              </div>
              <div className="form-input-border  ">
                <div className="flex items-center flex-wrap">
                  <span className="form-input-name ">Credentials :</span>

                  <input
                    type="text"
                    name="Diagnosis"
                    className=" input-font focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">INDIVIDUAL PRESENT:</h1>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 ">
              <div className="form-input-border">
                <div className="flex items-center">
                  <span className="form-input-name ">Caregiver:</span>

                  <input
                    type="text"
                    name="client_name"
                    className=" input-font focus:outline-none"
                    {...register("client_name")}
                  />
                </div>
              </div>

              <div className="form-input-border">
                <div className="flex items-center">
                  <span className="form-input-name ">Client Name:</span>

                  <input
                    type="text"
                    name="dob"
                    className=" input-font focus:outline-none"
                    {...register("dob")}
                  />
                </div>
              </div>
              <div className="form-input-border">
                <div className="flex items-center flex-wrap ">
                  <div>
                    <div className="flex ml-1  mr-1 items-center ">
                      <input
                        type="checkbox"
                        name="bcba"
                        {...register("bcba")}
                      />
                      <span className="form-input-name ml-1">BCBA</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex ml-1  mr-1 items-center ">
                      <input type="checkbox" name="RBT" {...register("RBT")} />
                      <span className="form-input-name ml-1">RBT</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex ml-1  mr-1 items-center ">
                      <input
                        type="checkbox"
                        name="Other"
                        {...register("Other")}
                      />
                      <span className="form-input-name ml-1">Other</span>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="client_name"
                    className="border bg-none w-28 input-font focus:outline-none"
                    {...register("others")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-inner-head my-4">
              PARENT TRAINING SESSION DATE:
            </h1>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 ">
              <div className="form-input-border-date">
                <div className="flex items-center">
                  <span className="form-input-name ">Service Date :</span>

                  <input
                    type="date"
                    name="session_date"
                    className=" input-font focus:outline-none"
                    {...register("session_date")}
                  />
                </div>
              </div>
              <div className="form-input-border-date">
                <div className="flex items-center">
                  <span className="form-input-name ">Service Start Time:</span>

                  <input
                    type="time"
                    name="time"
                    className=" input-font focus:outline-none"
                    {...register("time")}
                  />
                </div>
              </div>
              <div className="form-input-border-date">
                <div className="flex items-center">
                  <span className="form-input-name ">Service End Time:</span>

                  <input
                    type="time"
                    name="end_time"
                    className=" input-font focus:outline-none"
                    {...register("end_time")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">PARENT TRAINING PROVIDED</h1>
            <div className="flex items-center">
              <div className="flex ml-1  mr-1 items-center ">
                <input type="checkbox" name="bcba" {...register("bcba")} />
                <span className="form-input-name ml-1">In Person</span>
              </div>
              <div>
                <div className="flex ml-1  mr-1 items-center ">
                  <input type="checkbox" name="RBT" {...register("RBT")} />
                  <span className="form-input-name ml-1">Remote</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">PARENT TRAINING OVERVIEW:</h1>

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
            <h1 className="form-inner-head my-4">FEEDBACK TO PARENT:</h1>

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
          <div className=" grid grid-cols-1 my-3 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
            <div className=" form-input-border">
              <div className="flex items-center flex-wrap">
                <span className="form-input-name">Provider Name:</span>
                <input
                  type="text"
                  name="client_name"
                  className=" input-font focus:outline-none"
                  {...register("client_name")}
                />
              </div>
            </div>
            <div className="form-input-border ">
              <div className="flex items-center flex-wrap">
                <span className="form-input-name">Provider Credentials:</span>
                <input
                  type="text"
                  name="Diagnosis"
                  className=" input-font focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
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
    </div>
  );
};

export default ParentTrainingSession;
