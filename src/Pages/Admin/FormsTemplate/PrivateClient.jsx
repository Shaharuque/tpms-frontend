import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";

const PrivateClient = () => {
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
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  DOB:
                </span>
                <input
                  type="date"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Date of Assessment:
                </span>
                <input
                  type="date"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Place of Assessment:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Address:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Phone Number:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
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
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  School/Employer (if applicable):
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div>
                <span className="form-input-name text-[#207ac7] w-full">
                  Grade (if applicable):
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                INTERPRETIVE SUMMARY/PRESENTING PROBLEM:
              </span>
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
                    <span className="text-lg ml-1 text-gray-600 font-bold">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="form-input-name my-2">If yes, please list</h1>
                <div className="mt-3">
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
                <h1 className="form-input-name my-2">Prescribed by:</h1>
                <div className="mt-3">
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
          </div>
          <div>
            <h1 className="form-sub-header">HEALTH AND SOCIAL INFORMATION</h1>
            <div className="mt-4">
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
                  <span className="text-lg ml-1 text-gray-600 font-bold">
                    No
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="form-input-name my-2">If yes, please list</h1>
              <div className="mt-3 form-input-border">
                <input
                  type="text"
                  name="client_name"
                  className=" input-font focus:outline-none"
                  {...register("client_name")}
                />
              </div>
            </div>

            <div>
              <div className="mt-3">
                <span className="form-input-name text-[#207ac7] w-full">
                  When was your last physical?
                </span>
                <div className="mt-4">
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
                <div className="mt-3">
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
                <div className="mt-3">
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
                    className=" form-input-border w-full"
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
                  className="mt-2 form-input-border w-full"
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
                  className="mt-2 form-input-border w-full"
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
                  className="mt-2 form-input-border w-full"
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
                  className="mt-2 form-input-border w-full"
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
                  className="mt-2 form-input-border w-full"
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
                <div className="mt-3 form-input-border">
                  <input
                    type="text"
                    name="client_name"
                    className=" input-font focus:outline-none"
                    {...register("client_name")}
                  />
                </div>
              </div>
              <div className="mt-4">
                <span className="form-input-name text-[#207ac7] w-full">
                  On a scale of 1-10 (10 being the highest quality), how would
                  you rate your current relationship?
                </span>
                <div className="mt-3">
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
                  In the last year, have you experienced any significant life
                  changes or stressors? If yes, please explain:
                </span>
                <div className="mt-3">
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
              <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2">
                <div className="form-input-border py-[1px] form-input-list-name">
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
                <div className="form-input-border py-[1px] form-input-list-name">
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
                className="form-bottom-border input-font py-[2px]  focus:outline-none"
                {...register("Diagnosis")}
              />
              <span className="form-input-name ">
                If yes, are you happy with your current position?
              </span>
              <input
                type="text"
                className="form-bottom-border input-font py-[2px]  focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="my-7">
              <h1 className="form-input-name  w-full">
                INTERPRETIVE SUMMARY/PRESENTING PROBLEM:
              </h1>
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
                with (previous therapist’s name)
              </h1>
            </div>

            <div className="form-input-border w-full ">
              <input
                type="text"
                name="Diagnosis"
                className=" input-font focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="my-4 py-[1px] form-input-list-name">
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
              <div className=" grid grid-cols-3 items-center md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3">
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
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-sub-header">OTHER INFORMATION</h1>
            <div>
              <span className="form-input-name text-[#207ac7] w-full">
                What do you consider to be your strengths?
              </span>
              <div className="mt-3">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={2}
                  placeholder=" Notes"
                  size="large"
                  className="      "
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PrivateClient;
