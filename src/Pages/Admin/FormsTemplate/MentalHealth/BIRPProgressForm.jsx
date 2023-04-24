import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";
import { Radio, Tabs } from "antd";

const BIRPProgressForm = () => {
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

  const item = [
    {
      label: `ENCOURAGED`,
      key: 1,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `FORMULATED`,
      key: 2,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={10}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `ASSISTED`,
      key: 3,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `REMINDED `,
      key: 4,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `URGED`,
      key: 5,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `ENGAGED `,
      key: 6,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `CONFIRMED`,
      key: 7,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `RESPONDED`,
      key: 8,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `DIRECTED`,
      key: 9,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `ARRANGED`,
      key: 10,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
    {
      label: `RESCHEDULED`,
      key: 11,
      children: (
        <>
          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 {
"
          />
        </>
      ),
    },
  ];

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} className="w-[250px] h-[100px]" alt="" />
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
        <div className="form-title my-5">
          <h1>B.I.R.P. PROGRESS NOTE FORM</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 mt-10 items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-8">
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">
                PERSON(S) INVOLVED
                <h3 className="text-rose-500 text-base my-3 font-normal">
                  (at least one must be selected):
                </h3>
              </h1>
              <div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Consumer
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
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Foster Parents
                  </span>
                </div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Parent/Guardian
                  </span>
                </div>
                <div className="flex ml-1  mr-2 items-center ">
                  <input
                    type="checkbox"
                    name="checkedActive"
                    {...register("checkedActive")}
                  />
                  <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                    Group Home Staff
                  </span>
                </div>
              </div>

              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  CONSUMER'S OVERALL AFFECT:
                </h1>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={1}
                  >
                    Agitated
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={2}
                  >
                    N/A
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={3}
                  >
                    Defiant
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={4}
                  >
                    Suicidal
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={5}
                  >
                    Calm
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={6}
                  >
                    Sad
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={7}
                  >
                    Happy
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={8}
                  >
                    Flat
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={9}
                  >
                    Angry
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={10}
                  >
                    Other
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={11}
                  >
                    Energetic
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={12}
                  >
                    Moody
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={13}
                  >
                    Playful
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={14}
                  >
                    Tired
                  </Radio>
                </Radio.Group>
              </div>

              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  PROGRESS: CONSUMER MET HIS/HER GOAL THIS SESSION:
                </h1>
                <select
                  className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                  {...register("patient")}
                >
                  <option value="">Select</option>
                  <option value="Mr.Anik chowdhary">yes</option>
                  <option value="Duck duck">No</option>
                </select>
              </div>
              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  ADD NEW GOALS FOR:
                </h1>
                <select
                  className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                  {...register("patient")}
                >
                  <option value="">Select</option>

                  <option value="Duck duck">Whitis</option>
                  <option value="Ashni Soni">Serenity</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  CONTACT TYPE:
                </h1>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={1}
                  >
                    Face to Face
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={2}
                  >
                    Phone
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={3}
                  >
                    Attempts
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={4}
                  >
                    Telehealth
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={5}
                  >
                    N/A
                  </Radio>
                </Radio.Group>
              </div>
              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  RELEVANT CHANGES IN MEDICAL CONDITION AND/OR MEDICATIONS
                  (HEALTH AND SAFETY STRESSOR) SINCE LAST VISIT?
                </h1>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={1}
                  >
                    Yes
                  </Radio>
                  <Radio
                    className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                    value={2}
                  >
                    None Reported
                  </Radio>
                </Radio.Group>
              </div>
              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">
                  IF YES, PLEASE EXPLAIN:
                </h1>
                <input
                  className="form-input-border w-full"
                  type="text"
                  {...register("from_time")}
                />
              </div>
              <div>
                <h1 className="form-input-name my-5 ml-1 w-full">COMMENTS:</h1>
                <input
                  className="form-input-border w-full"
                  type="text"
                  {...register("from_time")}
                />
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                INCLUDE MILEAGE INFORMATION?
              </span>
            </div>
            <div>
              <h1 className="form-input-name mt-6 w-full">
                SERVICE PLAN OBJECTIVES/INTERVENTIONS
              </h1>
              <h2 className="font-medium my-3">
                At least one GOAL, OBJECTIVE, and INTERVENTION must be selected.
              </h2>
            </div>
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">Goal</h1>
              <select
                className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                {...register("patient")}
              >
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">yes</option>
                <option value="Duck duck">No</option>
              </select>
            </div>
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">Objective</h1>
              <select
                className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                {...register("patient")}
              >
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">yes</option>
                <option value="Duck duck">No</option>
              </select>
            </div>
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">
                Intervention:
              </h1>
              <select
                className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                {...register("patient")}
              >
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">yes</option>
                <option value="Duck duck">No</option>
              </select>
            </div>
            <div></div>
          </div>
          <div>
            {" "}
            <div className="form-small-title my-5">
              <h1>NON-BILLABLE NOTE?</h1>
            </div>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              maxLength={300}
              rows={5}
              placeholder="Enter here..."
              size="large"
              className="w-full p-5 form-input-textarea"
            />
          </div>
          <div>
            <div className="form-small-title my-5">
              <h1>BEHAVIOR</h1>
            </div>
            <Tabs
              tabBarStyle={{ border: "1px solid #" }}
              tabPosition={"left"}
              items={item}
              className="border border-gray-600"
            />
          </div>
          <div>
            <div className="form-small-title my-5">
              <h1>INTERVENTION</h1>
            </div>
            <Tabs
              tabBarStyle={{ border: "1px solid #" }}
              tabPosition={"left"}
              items={item}
              className="border border-gray-600"
            />
          </div>
          <div>
            <div className="form-small-title my-5">
              <h1>RESPONSE</h1>
            </div>
            <Tabs
              tabBarStyle={{ border: "1px solid #" }}
              tabPosition={"left"}
              items={item}
              className="border border-gray-600"
            />
          </div>
          <div>
            <div className="form-small-title my-5">
              <h1>PLAN</h1>
            </div>
            <Tabs
              tabBarStyle={{ border: "1px solid #" }}
              tabPosition={"left"}
              items={item}
              className="border border-gray-600"
            />
          </div>

          <div>
            <div>
              <div className="form-small-title my-5">
                <h1>STRENGTHS (OPTIONAL):</h1>
              </div>
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder="Enter here..."
                size="large"
                className="w-full p-5 form-input-textarea"
              />
            </div>
            <div>
              <div className="form-small-title my-5">
                <h1>TRANSITIONAL CONSIDERATIONS: (OPTIONAL)</h1>
              </div>
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder="Enter here..."
                size="large"
                className="w-full p-5 form-input-textarea"
              />
            </div>
          </div>

          <div>
            <h1 className="form-input-name my-5  w-full">
              ADDITIONAL COMMENTS/INFORMATION:
              <h3 className="text-rose-500 text-base py-3 font-normal">
                Use this section to put additional information that will be
                printed out on your notes (i.e. County, Case Worker, misc.
                comments)
              </h3>
            </h1>
            <input
              className="form-input-border w-full"
              type="text"
              {...register("from_time")}
            />
          </div>
          <div className=" grid grid-cols-1 mt-10  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-8">
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">
                IF YES, PLEASE EXPLAIN:
              </h1>{" "}
              <select
                className="border border-gray-600 rounded-sm px-2 py-[5px] mx-1 text-[15px] w-full"
                {...register("patient")}
              >
                <option value="">Select</option>
                <option value="Mr.Anik chowdhary">Active</option>
                <option value="Duck duck">No</option>
              </select>
            </div>
            <div>
              <h1 className="form-input-name my-5 ml-1 w-full">
                NEXT APPOINTMENT{" "}
                <span className="text-rose-500 text-sm  font-normal">
                  (Optional)
                </span>
              </h1>{" "}
              <input
                className="form-input-border w-full"
                type="date"
                {...register("from_time")}
              />
            </div>
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

export default BIRPProgressForm;
