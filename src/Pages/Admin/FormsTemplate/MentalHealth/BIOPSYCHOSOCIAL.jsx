import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Radio } from "antd";

const BIOPSYCHOSOCIAL = () => {
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

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-border 2xl:w-[85%] w-full mx-auto p-5 bg-white">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} className="w-[250px] h-[100px]" alt="" />
          <div className="text-[16px] sm:mr-10 mr-0 ml-10 sm:ml-0">
            <p className="my-2">
              <span className="form-head">Mail: </span>demo@example.com
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Email: </span>demo@example.com
              </Link>
            </p>
            <p className="my-2">
              <span className="form-head">Phone: </span> 000-000-0000
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Fax: </span>000.000.0000
              </Link>
            </p>
          </div>
        </div>
        <div className="form-title my-5">
          <h1>BIOPSYCHOSOCIAL</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Presenting Problem</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Why are they here? In client's own words when possible. Please
              include current behavior/ past 30 days of client’s behavior)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">History:</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Early symptoms and past diagnosis; describe the onset of
              symptoms)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Risk of Harm:</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (high risks behaviors i.e. SI/HI, Impulse Control, Substance Use,
              Sexual behavior /Perpetrator)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Trauma:</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (i.e. sexual abuse, physical abuse, etc)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comorbidities:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Environmental Stressors:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (i.e. gang activity, poverty, etc)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Deficits in Support System:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (i.e. single parent household)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>

          <div className="my-10">
            <h1 className="form-input-name-black my-1">Transportation:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What service(s) is the client requesting?
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (What do you want to get out of the services?)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>

          <h1 className="text-[20px] font-medium my-3">
            Lifespan/Developmental History
          </h1>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What is the client’s prenatal history?:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Health at birth:</h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Developmental milestones:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Special services received during lifetime:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Other lifespan/developmental issues:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Include mid-life, senior/elder, other issues)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>

          <h1 className="text-[20px] font-medium my-3">
            Education Assessment:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="form-input-name-black my-1">
                School currently attending:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Grade:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Has the client ever been suspended or expelled from school and/or
              bus?:x
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Include both in-school suspensions and out-of-school suspensions)
              If so, include the number of times, dates of suspension and
              duration of suspension.
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>

          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Does the client have frequent absences?:
            </h1>
            <h2 className="text-rose-500 mb-5 text-sm font-normal">
              (Include the number of times consumer has been absent).
            </h2>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>
          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Is the client currently failing, and has the client ever been
              retained?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>
          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Is the client in special education classes?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>

          <h1 className="text-[20px] font-medium my-3">
            Family of Origin History
          </h1>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              HFamily's current and past psychiatric history:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Family's and client's physical/sexual/emotional abuse history:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Family's substance use/abuse history:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Families Presentation of the Problem:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Families Expected Outcome for Services:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Other Providers/Systems involved with:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (List agencies client is involved with or receiving services from.
              For example: CalWORKs, ASOC, Inpatient/outpatient hospitalization,
              Rehab centers, etc; Include the name of the agency and primary
              contact person)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Client's Current and Significant Past Supports:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Social supports, family supports, significant relationships,
              religious and spiritual supports/affiliations.)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Client's Legal History:
            </h1>
            <div className="flex items-center gap-5 flex-wrap my-10">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Informal Probation
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Formal Probation
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Parole
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Child Welfare Services
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Conservatorship
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  D. U. I.
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Restraining Order
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  None reported
                </span>
              </div>
            </div>

            <h2 className="text-rose-500 text-sm font-normal">
              (Describe and, if currently involved, give name of probation
              officer, parole office, or case manager and estimated start and
              end dates.)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Client's Substance Use:
            </h1>{" "}
            <h2 className="text-rose-500 text-sm font-normal">
              (Alcohol and other drugs, check all that apply.)
            </h2>
            <div className="my-5">
              <Radio.Group onChange={onChange} value={value}>
                <Radio
                  className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                  value={1}
                >
                  Yes
                </Radio>
                <Radio
                  className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                  value={2}
                >
                  No
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex items-center gap-5 flex-wrap my-10">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Caffeine
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Tobacco
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Over-the-counter Medication
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Prescription Medication
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Alcohol
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Inhalants
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Hallucinogens
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Marijuana
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Stimulants
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Sedatives
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Tranqulizers
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Cocaine
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Barbituates
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Methamphetamines
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Methadone
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Other
                </span>
              </div>
            </div>
            <h1 className="form-input-name-black my-1">
              Client's history of withdrawal, DTs, blackouts (loss of time),
              seizures, etc. If applicable.
            </h1>{" "}
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Ask and record the response to, "What happens when you stop
              using?":
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What is the longest period of sobriety?:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">When?:</h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <h1 className="text-[30px] font-medium my-3">
            Mental Health Services History
          </h1>
          <div className="p-2 mt-5 bg-blue-600 border-2 border-blue-400">
            <h4 className="text-white text-center font-bold text-lg">
              Mental Status Exam
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-10">
            <div>
              <h1 className="form-input-name-black my-1">Appearance:</h1>
              <div>
                {" "}
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Unremarkable
                  </span>
                </div>
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Unkempt
                  </span>
                </div>
                <div className="flex ml-1 my-3  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Atypical Clothing
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Orientation:</h1>
              <div>
                {" "}
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Person
                  </span>
                </div>
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Place
                  </span>
                </div>
                <div className="flex ml-1 my-3  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Date
                  </span>
                </div>
                <div className="flex ml-1 my-3  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Situation
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Insight:</h1>
              <div>
                {" "}
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Poor
                  </span>
                </div>
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Average
                  </span>
                </div>
                <div className="flex ml-1 my-3  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Good
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Judgment:</h1>
              <div>
                {" "}
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Poor
                  </span>
                </div>
                <div className="flex ml-1 my-3 mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Average
                  </span>
                </div>
                <div className="flex ml-1 my-3  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Good
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comments:</h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Motor Activity:</h1>
            <div className="flex items-center gap-5 flex-wrap my-10">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Unremarkable
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Restless
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Withdrawn
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Slurred
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Speech
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 mt-5 bg-blue-600 border-2 border-blue-400">
            <h4 className="text-white text-center font-bold text-lg">
              Biological Functions:
            </h4>
          </div>
          <div className="flex my-5  mr-2 items-center ">
            <input
              type="checkbox"
              name="checkedActive"
              {...register("checkedActive")}
            />
            <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
              All within normal limits
            </span>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Sleep Pattern: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Appetite: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comments: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Affect:</h1>
            <div className="flex items-center gap-5 flex-wrap my-10">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Unremarkable
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Self
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Critical
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Flat
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Angry
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Euphoric
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Silly
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Irritable
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Depressed
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Hopelessness
                </span>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Depressive-Like Behavior:
            </h1>
            <div className="flex items-center gap-5 flex-wrap my-10">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  None
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Hypoactive
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Fatigue
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Feelings of Worthlessness
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Guilt Feelings
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Feelings of Helpless/Hopeless
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Irritability
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Poor Concentration
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Sadness
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Change in Sexaul Interest
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Loss of Ability to Enjoy (Anhedonia)
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Withdrawn
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Self-Blame/Self-Criticism
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Loss of Interest
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Cryings
                </span>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comments: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Thinking:</h1>
            <div className="flex items-center gap-5 flex-wrap my-7">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Unremarkable
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Distracted
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Delusions
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Hypochondriasis
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Disorganized
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Suspicious
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Obsessions
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Flight of Ideas
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Confused
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Obsessions
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Grandiosity
                </span>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comments: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">ttitude:</h1>
            <div className="flex items-center gap-5 flex-wrap my-7">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Unremarkable
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Egocentric
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Sarcastic
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Resistant
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Controlling
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Hostile
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Negativistic
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Passive
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Passive-Aggressive
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Seductive
                </span>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Comments: </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Medical History/Information:
            </h1>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Medical Conditions:</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (List significant past and present medical conditions, including
              allergies, recent lab results, etc .)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="form-input-name-black my-1">
                Primary Care Physician's Contact Information:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">
                Date of last physical examinations:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="date"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>

          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Current with immunizations?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <h1 className="form-input-name-black my-1">Consumer’s Height:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Consumer’s Weight:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="date"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Consumer Satisfied with Current Weight?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>
          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Ever Diagnosed with an Eating Disorder?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>
          <div className="my-5">
            <h1 className="form-input-name-black my-1">
              Consumer Need a Referral for a Nutritional Assessment?:
            </h1>
            <Radio.Group onChange={onChange} value={value}>
              <Radio
                className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                value={1}
              >
                Yes
              </Radio>
              <Radio
                className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                value={2}
              >
                No
              </Radio>
            </Radio.Group>
          </div>

          <h1 className="text-[20px] font-semibold my-7">Medication History</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="sm:col-span-2 font-medium text-[24px] text-rose-500">
              1
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Medication Name</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Dosage/ Frequency</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Effective</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Compliance</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="form-input-name-black my-1">Prescribed By</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="sm:col-span-2 font-medium text-[24px] text-rose-500">
              2
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Medication Name</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Dosage/ Frequency</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Effective</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Compliance</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="form-input-name-black my-1">Prescribed By</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="sm:col-span-2 font-medium text-[24px] text-rose-500">
              3
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Medication Name</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Dosage/ Frequency</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Effective</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Compliance</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="form-input-name-black my-1">Prescribed By</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="sm:col-span-2 font-medium text-[24px] text-rose-500">
              4
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Medication Name</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Dosage/ Frequency</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Effective</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Compliance</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="form-input-name-black my-1">Prescribed By</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="sm:col-span-2 font-medium text-[24px] text-rose-500">
              5
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Medication Name</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Dosage/ Frequency</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Effective</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-input-name-black my-1">Compliance</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="form-input-name-black my-1">Prescribed By</h1>
              <div className="mt-3 border-blue-600 border-2">
                <input
                  type="text"
                  className=" w-full border-none focus:outline-none p-2"
                  {...register("consequence_1")}
                />
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Daily Living Skills :
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Personal Care, Laundry, Cleaning)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Daily Living Skills :
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (List All Tasks that consumer is able to complete/Strengths)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Does client require assistive technology?
            </h1>
            <div className="my-5">
              <Radio.Group onChange={onChange} value={value}>
                <Radio
                  className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                  value={1}
                >
                  Yes
                </Radio>
                <Radio
                  className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                  value={2}
                >
                  No
                </Radio>
              </Radio.Group>
            </div>
            <h2 className="text-rose-500 text-sm font-normal">
              (If yes, specify what is needed.)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Relationship Analysis:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Consumer's relationship status, gender identity, etc.)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="font-semibold text-[20px] my-1">
              Current Symptoms/Problems
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              Rate severity and duration for each:
            </h2>
          </div>

          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  bg-blue-600 border-2 border-blue-400">
                    <div class="flex gap-3">
                      <div>
                        <h4 className="text-white text-center font-bold text-lg">
                          SEVERITY
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  bg-blue-600 border-2 border-blue-400">
                    <div class="flex gap-3">
                      <div className="">
                        <h4 className="text-white text-center font-bold text-lg">
                          DURATION
                        </h4>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Anxiety
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Panic Attacks
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Phobia Compulsive
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Obessive
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Somatization
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Depression
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Impaired Memory
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Poor Self Care Skills
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Loss of Interest
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Sexual Dysfunction
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Weight Change
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Bizarre Ideation
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Bizarre Behavior
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Paranoid Ideation
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Poor Judgment
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Poor Interpersonal Skills
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Conduct Problems
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          School Problems
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Family Problems
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Indep Living Problems
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base text-blue-600"
                        >
                          Others :
                        </label>
                      </span>
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="text"
                        className=" w-full border-b-2 py-1 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="time"
                        className=" w-full pb-1 border-b-2 border-blue-600 focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Briefly describe identified Symptoms:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Summary of Consumer's SNAPS
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              (Consumer's Goals/Hopes for the Future)
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What things do you like about yourself?:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What things would you like to improve about your
              behaviors/symptoms & how?
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              What accomplishments are you most proud of in your personal life?:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Consumer's and family's expectations from participating in this
              program?:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="font-semibold text-[20px] my-1">
              Summary of consumer's SNAPS
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Strengths, Needs, Abilities and Preferences)
            </h2>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Strengths:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Needs:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Abilities:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Preferences:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Problems List:</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="font-medium text-[25px] my-1">Clinical Summary</h1>
            <h1 className="font-semibold text-[20px] my-1">
              Diagnostic Rationale/Summary of Findings:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Strengths, Needs, Abilities and Preferences)
            </h2>
          </div>
          <div className="my-10">
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Interpretive Summary:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Recommended Services:
            </h1>
            <div className="flex items-center gap-5 flex-wrap my-7">
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Community referrals made, no further services needed
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Medication assessment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Individual therapy
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Family therapy
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Testing
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  By primary care physician
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Brief therapy Long-term
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Collateral
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Day rehab/treatment
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  By ASOC or CSOG psychiatrist
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Long-term therapy
                </span>
              </div>

              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Group
                </span>
              </div>
              <div className="flex ml-1  mr-2 items-center ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                  Other
                </span>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              If community referrals were made, please describe:
            </h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              If client was placed on 1013, please give details:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (IE: Which hospital, how transported, etc.)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">DSM V</h1>

            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Recommendations for Treatment/ Services:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Please indicate what services you are recommended and how each
              service can benefit the client)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div>
            <h1 className="form-input-name-black my-1">
              Projected date of Discharge/Transition:
            </h1>
            <div className="mt-3 border-blue-600 border-2">
              <input
                type="date"
                className=" w-full border-none focus:outline-none p-2"
                {...register("consequence_1")}
              />
            </div>
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">
              Anticipated Stepdown:
            </h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Please include specific step-down linkage in client’s area,
              frequency, of attendance, and contact information of services that
              you will recommend once they have successfully completed services
              with A.C.E)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
          <div className="my-10">
            <h1 className="form-input-name-black my-1">Discharge Plan:</h1>
            <h2 className="text-rose-500 text-sm font-normal">
              (Place all Objectives from the Treatment Plan in this section; the
              steps the individual has agreed to do to accomplish the goals)
            </h2>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full my-5 p-5 form-input-textarea"
            />
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5">
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

export default BIOPSYCHOSOCIAL;
