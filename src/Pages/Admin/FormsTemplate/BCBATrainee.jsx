import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const BCBATrainee = () => {
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
            <h1>BCBA TRAINEE SUPERVISION MONTHLY FORM</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <h1 className="form-inner-head my-4">Client Information:</h1>
            <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 ">
              <div className="form-input-border-date">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Date
                </span>
                <input
                  type="date"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border-date">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Time:
                </span>
                <input
                  type="time"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Trainee:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Restricted Hours:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Setting:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Number of Clients:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Credential Pursuing:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Unrestricted Hours:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Supervising BCBA:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  BCBA:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border sm:col-span-2">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Number of Hours Independent
                  <span className="text-rose-500 text-sm">
                    (without supervisor present)
                  </span>
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
              <div className="form-input-border">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Number of Hours Supervised:
                </span>
                <input
                  type="text"
                  className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-4">
                TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
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
            <div>
              <h1 className="form-inner-head my-4">TASK LIST ITEMS COVERED:</h1>
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
        </form>
        <div className=" grid grid-cols-1 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 ">
          <div className=" flex items-center justify-center my-12">
            <div>
              <button
                className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                onClick={handleSignatureProvider}
              >
                Provider Signature
                <FaSignature className="text-lg" />
              </button>
              <div className="flex items-center my-5">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Supervisee/BACB ID#
                </span>
                <input
                  type="text"
                  className="border input-font  w-24 focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <input
                type="date"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
              <div className="form-input-name ml-1 flex items-center justify-center my-5 text-[#207ac7] w-full">
                Date
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center my-6">
            <div className="">
              <button
                className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 mx-auto text-[#207ac7]"
                onClick={handleSignatureCaregiver}
              >
                Caregiver Signature
                <FaSignature className="text-lg" />
              </button>
              <div className="flex items-center my-5">
                <span className="form-input-name ml-1 text-[#207ac7] w-full">
                  Supervisee/BACB ID#
                </span>
                <input
                  type="text"
                  className="border input-font  w-24 focus:outline-none"
                  {...register("Diagnosis")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <input
                type="date"
                className="form-bottom-border input-font py-[2px] w-full focus:outline-none"
                {...register("Diagnosis")}
              />
              <div className="form-input-name ml-1 flex items-center justify-center my-5 text-[#207ac7] w-full">
                Date
              </div>
            </div>
          </div>
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

export default BCBATrainee;
