import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { FaSignature } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import SignatureModal from "./SignatureManage/SignatureModal";

const PrivateClient = () => {
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
    console.log(notes);
  };
  return (
    <>
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
            <h2>PRIVATE CLIENT INTAKE FORM</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-4">
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Client Name:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  DOB:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Date of Assessment:
                </span>
                <input
                  type="date"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Place of Assessment:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Address:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
            <div className="my-4 grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4">
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Insurance/Id#:
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  School/Employer (if applicable):
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Grade (if applicable):
                </span>
                <input
                  type="text"
                  className="border-b-2 border-blue-600 input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                INTERPRETIVE SUMMARY/PRESENTING PROBLEM:
              </span>
              <div className="mt-3 border-2 border-blue-600">
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
          </div>
          <div>
            <h1 className="form-sub-header">TREATMENT HISTORY</h1>
            <span className="form-input-name text-[#207ac7] w-full">
              Are you currently receiving psychiatric services, professional
              counseling or psychotherapy elsewhere?
            </span>
            <div className="flex items-center mb-4 mt-2">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">
                  Yes
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">No</span>
              </div>
            </div>
          </div>
          <div>
            <span className="form-input-name text-[#207ac7] w-full">
              Have you had previous psychotherapy?
            </span>
            <div className="flex items-center mb-4 mt-2">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">
                  Yes
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">No</span>
              </div>
            </div>
          </div>
          <div>
            <h1>What(previous therapist's name)</h1>
            <div>
              <input
                type="text"
                name="patient"
                className="border-2 border-blue-600 focus:outline-none w-full py-2 px-2 mt-2"
                onClick={() => {
                  // setValue(!value);
                }}
              />
            </div>
          </div>

          <div className="mt-4">
            <span className="form-input-name text-[#207ac7] w-full">
              Are you currently taking prescribed psychiatric medication
              (antidepressants or others)?
            </span>
            <div className="flex items-center mb-4 mt-2">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">
                  Yes
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">No</span>
              </div>
            </div>
          </div>
          <div>
            <h1>If yes, please list</h1>
            <div>
              <div className="mt-3 border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="small"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h1>Prescribed by:</h1>
            <div>
              <div className="mt-3 border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="small"
                  className=""
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-sub-header">HEALTH AND SOCIAL INFORMATION</h1>
            <div className="mt-4">
              <span className="form-input-name text-[#207ac7] w-full">
                Do you currently have a primary physician?
              </span>
              <div className="flex items-center mb-4 mt-2">
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="radio"
                    name="patient"
                    onClick={() => {
                      // setValue(!value);
                    }}
                  />
                  <span className="text-lg ml-1 text-gray-600 font-bold">
                    Yes
                  </span>
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="radio"
                    name="patient"
                    onClick={() => {
                      // setValue(!value);
                    }}
                  />
                  <span className="text-lg ml-1 text-gray-600 font-bold">
                    No
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="form-input-name my-2">If yes, please list</h1>
              <h1 className="form-input-name">phone</h1>
              <div className="mt-3 border-2 border-blue-600">
                <input
                  type="text"
                  name="client_name"
                  className=" input-font py-2 focus:outline-none"
                  {...register("client_name")}
                />
              </div>
            </div>
            <div className="mt-4">
              <span className="form-input-name text-[#207ac7] w-full">
                Are you currently seeing more than one medical health
                specialist?
              </span>
              <div className="flex items-center mb-4 mt-2">
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="radio"
                    name="patient"
                    onClick={() => {
                      // setValue(!value);
                    }}
                  />
                  <span className="text-lg ml-1 text-gray-600 font-bold">
                    Yes
                  </span>
                </div>
                <div className="flex ml-1 mt-1 items-center">
                  <input
                    type="radio"
                    name="patient"
                    onClick={() => {
                      // setValue(!value);
                    }}
                  />
                  <span className="text-lg ml-1 text-gray-600 font-bold">
                    No
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="form-input-name my-2">If yes, please list</h1>

              <div className="mt-3 border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1500}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div>
              <div className="mt-3">
                <span className="form-input-name text-[#207ac7] w-full">
                  When was your last physical?
                </span>
                <div className="mt-4 border-2 border-blue-600">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={1500}
                    rows={2}
                    placeholder=" Notes"
                    size="large"
                    className=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Please list any persistent physical symptoms or health
                  concerns (e.g. chronic pain, headaches, hypertension,
                  diabetes, etc.:
                </span>
                <div className="mt-3 border-2 border-blue-600">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={1500}
                    rows={2}
                    placeholder=" Notes"
                    size="large"
                    className=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Are you currently on medication to manage a physical health
                  concern? If yes, please list:
                </span>
                <div className="mt-3 border-2 border-blue-600">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={1500}
                    rows={2}
                    placeholder=" Notes"
                    size="large"
                    className=""
                  />
                </div>
              </div>

              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Are you having any problems with your sleep habits?
                </span>
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      Yes
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="form-input-name my-2">
                    If yes, check where applicable:
                  </h1>
                  <select
                    className="border-2 border-blue-600 focus:outline-none py-2 w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="single">Sleeping too late</option>
                    <option value="single">Sleeping too much</option>
                    <option value="single">Poor Quality Dream</option>
                    <option value="single">Disturbing Dreams</option>
                    <option value="married">Other</option>
                  </select>
                </div>
              </div>

              {/* <div>
                <div className="flex justify-between">
                  <h1>How many times per week do you excercise? </h1>
                  <div className="border-2 border-blue-600">
                <input
                  type="text"
                  name="client_name"
                  className=" input-font py-2 focus:outline-none"
                  {...register("client_name")}
                />
              </div><h1>How many times per week do you excercise? </h1>
                  <div className="border-2 border-blue-600">
                <input
                  type="text"
                  name="client_name"
                  className=" input-font py-2 focus:outline-none"
                  {...register("client_name")}
                />
              </div>
                 
                </div>
              </div> */}

              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Are you having any difficulty with appetite or eating habits?
                </span>
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      Yes
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="form-input-name my-2">
                    If yes, check where applicable:
                  </h1>
                  <select
                    className="border-2 border-blue-600 focus:outline-none py-2 w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="single">Sleeping too late</option>
                    <option value="single">Sleeping too much</option>
                    <option value="single">Poor Quality Dream</option>
                    <option value="single">Disturbing Dreams</option>
                    <option value="married">Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Have you experienced significant weight change in the last 2
                  months?
                </span>
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      Yes
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Do you regularly use alcohol?
                </span>
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      Yes
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name text-[#207ac7] w-full">
                  In a typical month, how often do you have 4 or more drinks in
                  a 24 hour period?
                </h1>
                <select
                  className="mt-2 border-2 border-blue-600 py-2 w-full"
                  {...register("patients")}
                >
                  <option value="">--</option>
                  <option value="1 times">1 times</option>
                  <option value="2 times">2 times</option>
                  <option value="3 times">3 times</option>
                  <option value="4 times">4 times</option>
                  <option value="5 times">5 times</option>
                  <option value="6 times">6 times</option>
                  <option value="7 times">7 times</option>
                  <option value="8 times">8 times</option>
                </select>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name text-[#207ac7] w-full">
                  How often do you engage recreational drug use?
                </h1>
                <select
                  className="mt-2 border-2 border-blue-600 py-2 w-full"
                  {...register("patients")}
                >
                  <option value="">--</option>
                  <option value="daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                  <option value="Never">Never</option>
                </select>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name text-[#207ac7] w-full">
                  Do you smoke cigarettes or use other tobacco products?
                </h1>
                <select
                  className="mt-2 border-2 border-blue-600 py-2 w-full"
                  {...register("patients")}
                >
                  <option value="">--</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name text-[#207ac7] w-full">
                  Have you had suicidal thoughts recently?
                </h1>
                <select
                  className="mt-2 border-2 border-blue-600 py-2 w-full"
                  {...register("patients")}
                >
                  <option value="">--</option>
                  <option value="">equently</option>
                  <option value="daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                  <option value="Never">Never</option>
                </select>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name text-[#207ac7] w-full">
                  Have you had them in the past?
                </h1>
                <select
                  className="mt-2 border-2 border-blue-600 py-2 w-full"
                  {...register("patients")}
                >
                  <option value="">--</option>
                  <option value="">equently</option>
                  <option value="daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                  <option value="Never">Never</option>
                </select>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  Are you currently in a romantic relationship?
                </span>
                <div className="flex items-center mb-4 mt-2">
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      Yes
                    </span>
                  </div>
                  <div className="flex ml-1 mt-1 items-center">
                    <input
                      type="radio"
                      name="patient"
                      onClick={() => {
                        // setValue(!value);
                      }}
                    />
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name my-2">
                  If yes, how long have you been in this relationship?
                </h1>
                <div className="mt-3 border-2 border-blue-600 py-2">
                  <input
                    type="text"
                    name="client_name"
                    className="w-full input-font focus:outline-none"
                    {...register("client_name")}
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  On a scale of 1-10 (10 being the highest quality), how would
                  you rate your current relationship?
                </span>
                <div className="mt-3 border-2 border-blue-600 ">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={1500}
                    rows={2}
                    placeholder=" Notes"
                    size="large"
                    className=""
                  />
                </div>
              </div>
              <div className="mt-4 ">
                <span className="form-input-name text-[#207ac7] w-full">
                  In the last year, have you experienced any significant life
                  changes or stressors? If yes, please explain:
                </span>
                <div className="mt-3 border-2 border-blue-600">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={1500}
                    rows={2}
                    placeholder=" Notes"
                    size="large"
                    className=""
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="form-input-name my-4 text-[#207ac7] w-full">
                Have you ever experienced any of the following?
              </h1>
              {/* <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="border-2 border-blue-600 py-2 form-input-list-name">
                  Extreme depressed mood
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="border-2 border-blue-600 py-2  form-input-list-name">
                  Dramatic mood swings
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Rapid speech
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Extreme anxiety
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Panic attacks
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Phobias
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Sleep disturbances
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Hallucinations
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Unexplained losses of time
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Frequent body complaints
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Eating disorder
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Body image problems
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Repetitive thoughts (e.g. obsessions)
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Repetitive behaviors (e.g. frequent checking, hand washing)
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border py-[1px] form-input-list-name">
                  Homicidal thoughts
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border form-input-list-name">
                  <div className="md:py-[36px]">Suicidal attempts</div>
                </div>
                <div>
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>

                  <div className="form-input-border ">
                    <h1 className="form-input-name ">If Yes, When?</h1>
                    <input
                      type="text"
                      name="Diagnosis"
                      className=" input-font focus:outline-none"
                      {...register("Diagnosis")}
                    />
                  </div>
                </div>
              </div> */}
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Authored by:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("authored_by")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3 mb-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Name:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("name")}
                          />
                        </div>
                        <div class="flex gap-3 mb-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              BACB Certificate:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("bacb_certificate")}
                          />
                        </div>
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              NPI #:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("npi")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-sub-header">OCCUPATIONAL INFORMATION</h1>
            <span className="form-input-name text-[#207ac7] w-full">
              Are you currently employed?
            </span>
            <div className="flex items-center mb-4 mt-2">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">
                  Yes
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">No</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 my-4">
              <span className="form-input-name  ">
                If yes, who is your currently employer / position?
              </span>
              <input
                type="text"
                className="border-b-2 border-blue-600 input-font py-[2px]  focus:outline-none"
                {...register("Diagnosis")}
              />
              <span className="form-input-name ">
                If yes, are you happy with your current position?
              </span>
              <input
                type="text"
                className="border-b-2 border-blue-600 input-font py-[2px]  focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="my-7">
              <h1 className="form-input-name  w-full">
                INTERPRETIVE SUMMARY/PRESENTING PROBLEM:
              </h1>
              <div className="mt-3 border-2 border-blue-600">
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
          </div>
          <div>
            <h1 className="form-sub-header">RELIGIOUS/SPIRITUAL INFORMATION</h1>
            <span className="form-input-name text-[#207ac7] w-full">
              Are you currently employed?
            </span>
            <div className="flex items-center mb-4 mt-2">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">
                  Yes
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-lg ml-1 text-gray-600 font-bold">No</span>
              </div>
            </div>
            <div>
              <h1 className="form-input-name my-3 w-full">
                If yes, what is your faith?
              </h1>
            </div>

            <div className="border-2 border-blue-600 py-2 w-full ">
              <input
                type="text"
                name="Diagnosis"
                className=" input-font focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="my-4 py-[1px] form-input-list-name">
              If no, do you consider yourself to be spiritual?
            </div>
            <div>
              <select
                className=" border-2 border-blue-600 py-2 w-full"
                {...register("patients")}
              >
                <option value="">--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div>
            <h1 className="form-sub-header">FAMILY MENTAL HEALTH HISTORY</h1>
            <div className="form-input-name text-[#207ac7] w-full">
              Has anyone in your family
              <span className="font-thin text-rose-600 text-sm">
                (either immediate family members or relatives)
              </span>
              experienced difficulties with the following?{" "}
              <span className="font-thin text-rose-600 text-sm">
                (circle any that apply and list family member, e.g. sibling
                parent, uncle, etc.)
              </span>
            </div>
            <div>
              <h1 className="form-input-name my-2 text-[#207ac7] w-full">
                Have you ever experienced any of the following?
              </h1>
              {/* <div className=" grid grid-cols-3 items-center md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Difficulty
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Family member
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Depression
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Bipolar disorder
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Anxiety disorder
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Panic attacks
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Schizophrenia
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Alcohol/substance abuse
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Eating disorders
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Learning disabilities
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Trauma history
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Suicide attempts
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  Chronic illness
                </div>
                <div className="w-full">
                  <select
                    className=" form-select-border w-full"
                    {...register("patients")}
                  >
                    <option value="">--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-input-border w-full py-[1px] form-input-list-name">
                  <input
                    type="text"
                    className=" input-font  w-full focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </div>
              </div> */}
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>{" "}
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Extreme depressed mood
                          </label>
                        </span>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <div>
                          <select
                            className="  w-full focus:outline-none"
                            {...register("patients")}
                          >
                            <option value="">--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/3">
                        <span>
                          <input
                            type="text"
                            className="w-full focus:outline-none"
                            name=""
                            id=""
                          />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-sub-header">OTHER INFORMATION</h1>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                What do you consider to be your strengths?
              </span>
              <div className="mt-3 border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1000}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                What do you like most about yourself?
              </span>
              <div className="mt-3  border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1000}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                What are effective coping strategies that you have learned?
              </span>
              <div className="mt-3  border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1000}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                What are your goals for therapy?
              </span>
              <div className="mt-3  border-2 border-blue-600">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={1000}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className=""
                />
              </div>
            </div>
            <div className="my-5">
              <h1 className="form-sub-header border border-blue-700 py-1">
                SERVICES BEING PROVIDED TO CONSUMER (PLEASE CHECK ALL THAT
                APPLY)
              </h1>
              {/* <div className=" grid grid-cols-2 items-center md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4">
                <div className="flex items-center justify-center border border-blue-700 py-2">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                    Diagnostic Assessment
                  </span>
                </div>

                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Nursing Assessment & Care
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Psychiatric Treatment
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Psychological Testing
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Medication Administration
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Community Support Individual
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Individual Outpatient Services
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Family Outpatient Services
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Group Outpatient Services
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Intensive Family Intervention
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Crisis Stabilization
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Structured Activity Supports
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Psychical Assessment
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Behavior Assistant
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Other
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-center border border-blue-700 py-2">
                    <input
                      type="checkbox"
                      name="checkedActive"
                      {...register("checkedActive")}
                    />
                    <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                      Other
                    </span>
                  </div>
                </div>
              </div> */}
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex items-center   py-2">
                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span className="text-[16px] ml-2 text-gray-700  font-semibold">
                            Diagnostic Assessment
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
        </form>
      </div>
    </>
  );
};

export default PrivateClient;
