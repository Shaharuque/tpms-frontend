import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";

const NEW_TWO = () => {
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
          <h1>NEW TWO</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
              />
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>Text Field</h1>
            </div>
            <div>
              <input
                type="text"
                className="form-input-border w-full my-3 py-1 border-none focus:outline-none "
                {...register("dob")}
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

export default NEW_TWO;
