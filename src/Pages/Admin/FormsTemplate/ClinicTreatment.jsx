import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";

const ClinicTreatment = () => {
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
          <h1>CLINICAL TREATMENT, MANAGEMENT, & MODIFICATION NOTES</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
            <div className="">
              <span className="form-input-name ml-1 text-[#207ac7] w-full">
                Client Full Name :
              </span>
              <input
                type="text"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <span className="form-input-name ml-1 text-[#207ac7] w-full">
                Date
              </span>
              <input
                type="date"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <span className="form-input-name ml-1 text-[#207ac7] w-full">
                Start Time
              </span>
              <input
                type="time"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <span className="form-input-name ml-1 text-[#207ac7] w-full">
                End Time
              </span>
              <input
                type="time"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
          </div>
          <div className="my-3">
            <span className="form-input-name ml-1 text-[#207ac7] w-full">
              Setting :
            </span>
            <div className="flex items-center">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-semibold">
                  Home
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-semibold">
                  Community
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-semibold">
                  Clinic/Office
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-semibold">
                  School
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="form-input-name ml-1 text-[#207ac7] w-full">
              1. Signs/Symptoms Observed{" "}
              <span className="ros">(check all that apply)</span>:
            </span>
            <div className=" flex items-center flex-wrap gap-x-1  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Rec. Language Impairment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Exp Language Impairment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Social Skills Deficits
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Repetitive Behaviors
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Restricted Interests
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Hyper/Hypo-reactivity to sensory input
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Insistence on sameness
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Harm to self or others* *Was an Incident Report filled out
                  within 24 hours?
                </span>
                <div className="flex items-center mb-4 mt-4">
                  <div className="flex ml-1  items-center">
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
                  <div className="flex ml-1  items-center">
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
            </div>
          </div>
          <div>
            <span className="form-input-name ml-1 text-[#207ac7] w-full">
              2. Goals for Session
              <span className="ros">
                (check all that apply, at least one modification must be
                checked)
              </span>
              :
            </span>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Build rapport with client/family/tech
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify acquisition goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify any component of Behavior Intervention Plan
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify parent goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify Reinforcement Schedule
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify maintenance goal and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Baseline/Mastery/Generalization Probes to modify goals,
                  teaching technique, and/or procedure
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Model teaching to technician
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Parent Training
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Assessment of Skills
                  <span className="text-rose-500">
                    (standardized or curriculum-based)
                  </span>
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Inter-observer agreement (IOA) data collection
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-semibold">
                  Other- Describe:
                  <input
                    type="text"
                    className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </span>
              </div>
              <br />
            </div>
          </div>
          <div>
            <span className="form-input-name ml-1 text-[#207ac7] w-full">
              3. Targeted Domains
              <span className="ros">(check all that apply)</span>:
            </span>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Language/Communication
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify acquisition goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify any component of Behavior Intervention Plan
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Social Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Play Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Adaptive Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Baseline/Mastery/Generalization Probes to modify goals,
                  teaching technique, and/or procedure
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Executive Functioning Skills{" "}
                  <span className="text-rose-500">
                    (self-management, organization, tolerance, and inhibition)
                  </span>
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Safety
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Disruptive Behavior
                </span>
              </div>
              <br />

              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-semibold">
                  Other- Describe:
                  <input
                    type="text"
                    className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </span>
              </div>
              <br />
            </div>
          </div>
          <div>
            <span className="form-input-name ml-1 text-[#207ac7] w-full">
              4. ABT/RBT’s Techniques Utilized
              <span className="ros">(check all that apply)</span>:
            </span>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Discrete Trial (DTT)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Natural Environment Teaching (NET)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Verbal Behavior (VB)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify parent goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify Reinforcement Schedule
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Modify maintenance goal and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Baseline/Mastery/Generalization Probes to modify goals,
                  teaching technique, and/or procedure
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Model teaching to technician
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Parent Training
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Assessment of Skills
                  <span className="text-rose-500">
                    (standardized or curriculum-based)
                  </span>
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-semibold">
                  Inter-observer agreement (IOA) data collection
                </span>
              </div>
              <br />
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-semibold">
                  Other- Describe:
                  <input
                    type="text"
                    className="form-bottom-border input-font py-[2px] w-1/2 focus:outline-none"
                    {...register("Diagnosis")}
                  />
                </span>
              </div>
              <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicTreatment;
