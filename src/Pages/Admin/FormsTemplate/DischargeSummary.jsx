import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const DischargeSummary = () => {
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
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 ">
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
            <h1>Discharge Summary</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <div className="flex  flex-row gap-4 flex-wrap mb-8">
                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="clname" className="form-inner-head my-2">
                      Date:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      type="date"
                      className="focus:outline-none "
                      {...register("name")}
                    />
                  </span>
                </div>

           

                <div className="flex flex-wrap gap-2 ">
                  {" "}
                  <span>
                    <label for="time" className="form-inner-head my-2">
                      date:
                    </label>
                  </span>{" "}
                  <span>
                    <input
                      id="date"
                      type="date"
                      name="time"
                      {...register("date_1")}
                    />
                  </span>
                </div>

                
              </div>
            </div>
            
            <div>
              <h1 className="form-inner-head my-2">
              2) REASON FOR TESTING:
              </h1>
              <div className="mt-3 mb-8  border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter The Reason for Testing..."
                  size="large"
                  className=""
                  {...register("reason_of_testing")}
                />
              </div>
            </div>{" "}
          

            <div className="flex  items-center flex-wrap gap-2 ">
                <div className="flex  flex-col flex-wrap gap-2 ">
                  
                  <span>
                    <input
                      type="input"
                      className="  border-b-2  border-blue-600 focus:outline-none "
                      {...register("name_1")}
                    />
                  </span>
                  <span>
                    <label for="clname" className="form-inner-head ml-[50%]">
                       Name
                    </label>
                  </span>
                </div>

                <div className="flex  flex-col flex-wrap gap-2 ">
                  
                  <span>
                    <input
                      type="input"
                      className=" border-b-2  border-blue-600 focus:outline-none "
                      {...register("name_2")}
                    />
                  </span>
                  <span>
                    <label for="clname" className="form-inner-head ml-[50%]">
                       Name
                    </label>
                  </span>
                </div>
                

               
            </div>





            <div className=" flex  flex-wrap justify-between mt-10">
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
                    {...register("name_3")}
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
                  <input id="date" type="date" name="date"
                  {...register("date_3") } />
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
  )
}

export default DischargeSummary
