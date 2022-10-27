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
              <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                Client Full Name :
              </h1>
              <input
                type="text"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                Date
              </h1>
              <input
                type="date"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                Start Time
              </h1>
              <input
                type="time"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
            <div className="">
              <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
                End Time
              </h1>
              <input
                type="time"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
            </div>
          </div>
          <div className="my-3">
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              Setting :
            </h1>
            <div className="flex items-center">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Home
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Community
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  Clinic/Office
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[15px] ml-1 text-gray-700 gap-1 font-medium">
                  School
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              1. Signs/Symptoms Observed{" "}
              <span className="text-rose-500">(check all that apply)</span>:
            </h1>
            <div className=" flex items-center flex-wrap gap-x-1  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Rec. Language Impairment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Exp Language Impairment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Social Skills Deficits
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Repetitive Behaviors
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Restricted Interests
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Hyper/Hypo-reactivity to sensory input
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              2. Goals for Session
              <span className="text-rose-500">
                (check all that apply, at least one modification must be
                checked)
              </span>
              :
            </h1>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Build rapport with client/family/tech
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify acquisition goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify any component of Behavior Intervention Plan
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify parent goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify Reinforcement Schedule
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify maintenance goal and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
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
          <div className="my-5">
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              3. Targeted Domains
              <span className="text-rose-500">(check all that apply)</span>:
            </h1>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Language/Communication
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify acquisition goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify any component of Behavior Intervention Plan
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Social Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Play Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Adaptive Skills
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
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
          <div className="my-5">
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              4. ABT/RBT’s Techniques Utilized
              <span className="text-rose-500">(check all that apply)</span>:
            </h1>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Discrete Trial (DTT)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Natural Environment Teaching (NET)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Verbal Behavior (VB)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify parent goal, teaching technique, and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify Reinforcement Schedule
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Modify maintenance goal and/or procedure
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
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
                <span className="text-[16px] flex  ml-1 text-gray-700 gap-1 font-medium">
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
          <div className="my-5">
            <h1 className="form-input-name my-5 ml-1 text-[#207ac7] w-full">
              5. Overall Response to Treatment
              <span className="text-rose-500">(check all that apply)</span>:
            </h1>
            <div className="text-rose-500 font-regular text-lg">
              Client responded positively to ABA therapy today exhibited by:
            </div>
            <div className=" flex items-center flex-wrap gap-x-1 gap-y-2  my-2">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Absence of Problem Behavior
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Decrease of Problem Behavior
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Mastery of Targets
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Mastery of Goals
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Maintenance of Mastered Goals
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Rapid Progress Toward Goals
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-1 text-gray-700 gap-1 font-medium">
                  Steady Progress towards Goals
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicTreatment;
