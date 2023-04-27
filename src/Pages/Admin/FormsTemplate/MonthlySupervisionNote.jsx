import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const MonthlySupervisionNote = () => {
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
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
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
            <h1>MONTHLY SUPERVISION NOTE</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <div className="flex  flex-row justify-between flex-wrap ">
                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="clname" className="form-inner-head my-2">
                      Client Name:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      type="input"
                      className="  border-b-2  border-blue-600 focus:outline-none "
                      {...register("client_name")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 www">
                  {" "}
                  <span>
                    <label for="date" className="form-inner-head my-2">
                      Date:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      {...register("date")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="time" className="form-inner-head my-2">
                      Time:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      id="time"
                      type="time"
                      name="time"
                      {...register("time")}
                    />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="rbt" className="form-inner-head my-2">
                      RBT(s) Supervised:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      type="input"
                      className="  border-b-2  border-blue-600 focus:outline-none "
                      {...register("rbt_supervised")}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                <h1 className="form-inner-head my-2">Formate:</h1>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("in_person")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    In Person
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("remote")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Remote
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("group")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Group
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("team_meeting")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Team Meeting
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                <h1 className="form-inner-head my-2">Formate:</h1>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("data_review")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Data Review
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("Observation")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Observation
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("protocol_demonstration")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Protocol Demonstration/Modification
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("team_meeting_1")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Team Meeting
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">
                GOALS REVIEWED{" "}
                <span className="text-red-600 text-xs text">
                  {" "}
                  (fill in progress update)
                </span>
                :
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("goals_reviewed")}
                />
              </div>
            </div>{" "}
            <div className="flex flex-wrap mt-4 mb-4">
              <h1 className="form-inner-head my-2">
                Overall Response to Treatment:
              </h1>
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="checkbox"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("making_process")}
                />
                <label
                  for="inline-radio"
                  className="ml-2 text-base font-medium text-black dark:text-black"
                >
                  Making Progress
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="checkbox"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("regression")}
                />
                <label
                  for="inline-radio"
                  className="ml-2 text-base font-medium text-black dark:text-black"
                >
                  Regression
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="checkbox"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("maintaining")}
                />
                <label
                  for="inline-2-radio"
                  className="ml-2 text-base font-medium text-black dark:text-black"
                >
                  Maintaining
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="checkbox"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("n/a")}
                />
                <label
                  for="inline-2-radio"
                  className="ml-2 text-base font-medium text-black dark:text-black"
                >
                  N/A
                </label>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">FEEDBACK / SUGGESTIONS:</h1>
              <div className="mt-3 mb-5 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" feedback")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">
                PARENT/CAREGIVER CONCERNS DISCUSSED:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" parent_concerns_discused")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2 mt-5">
                DID RBT PROVIDE SERVICES IN ACCORDANCE WITH BACB GUIDELINES FOR
                RESPONSIBLE CONDUCT FOR BEHAVIOR ANALYSTS?:
              </h1>
              <div className="flex mt-4 ">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("yes")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("no")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-base font-medium text-black dark:text-black"
                  >
                    No
                  </label>
                </div>
              </div>
              <span className="text-red-600 text-xs ">
                If no, please explain conduct and actions taken on back
              </span>
            </div>
            <div>
              <div className="mt-3 mb-5 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" drpsiawbg_analysts")}
                />
              </div>
            </div>
            <div className=" flex  flex-wrap justify-between ">
              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Supervisor Signature:Add Signature
                  <FaSignature className="text-lg" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 www">
                {" "}
                <span>
                  <label for="date" className="form-inner-head my-2">
                    Name:
                  </label>
                </span>{" "}
                <span>
                  <input
                    id="text"
                    className="border-b-2 border-blue-600 focus:border-none"
                    type="text"
                    name="date"
                  />
                </span>
              </div>

              <div className="flex flex-wrap gap-2 www">
                {" "}
                <span>
                  <label for="date" className="form-inner-head my-2">
                    Date:
                  </label>
                </span>{" "}
                <span>
                  <input id="date" type="date" name="date" />
                </span>
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

export default MonthlySupervisionNote;
