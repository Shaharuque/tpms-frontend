import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const OtProgressReport = () => {
    const [caregiverSignature, setCaregiverSignature] = useState(false);
    const [providerSignature, setProviderSignature] = useState(false);
    const [ProviderImageURL, setProviderImageURL] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    console.log("ProviderImageURL", ProviderImageURL);
    console.log("imageURL", imageURL);
    const [file, setFile] = useState();
  
    //console.log("file", file);
  
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
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div>
        <div className="form-title mb-5">
          <h1>OT PROGRESS REPORT</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>

        <div>
             <h1 className="form-inner-head my-2">
                BACKGROUND INFORMATION
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter background information Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("reason_for_testing")}
              />
            </div>
          </div>
        <div className="form-title mt-5 mb-5">
          <h1>SUMMARY OF THERAPY</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
          <div>
             <h1 className="form-inner-head my-2">
                LONG TERM GOAL (INSTRUMENT OUTCOMES):
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("long_term_goal")}
              />
            </div>
          </div>

          <div>
             <h1 className="form-inner-head my-2">
             SHORT TERM GOALS (INTERMEDIATE OUTCOMES):
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("short_term_goals")}
              />
            </div>
          </div>

          <div>
             <h1 className="form-inner-head my-2">
               INTERVENTION STRATEGIES
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("Intervention_strategies")}
              />
            </div>
          </div>

          <div>
             <h1 className="form-inner-head my-2">
                RESPONSE TO THERAPY
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("response_to_therapy")}
              />
            </div>
          </div>

          <div>
             <h1 className="form-inner-head my-2">
                TESTING DONE DURING THE SEMESTER
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("testing_done_during_the_semester")}
              />
            </div>
          </div>
          <div>
             <h1 className="form-inner-head my-2">
                RECOMMENDATIONS
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("recommendations")}
              />
            </div>
          </div>
          <div>
             <h1 className="form-inner-head my-2">
                MEDICAL NECESSITY
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("medical_necessity")}
              />
            </div>
          </div>
          <div>
             <h1 className="form-inner-head my-2">
                RECOMMENDATIONS
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("RECOMMENDATIONS_2")}
              />
            </div>
          </div>
          <div>
             <h1 className="form-inner-head my-2">
                LONG TERM GOALS
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register(" long_term_goals_2")}
              />
            </div>
          </div>

          <div>
             <h1 className="form-inner-head my-2">
             SHORT TERM GOALS :
              </h1>
            <div className="mt-3 border-blue-600 border-2 mb-5">
             
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Enter Here ..."
                size="large"
                className="border-0 focus:border-0"
                {...register("short_term_goals_2")}
              />
            </div>
          </div>

          <div>
              
            
            <div className="grid grid-flow-col gap-5">
              <div className=" grid-cols-6 text-center text-blue-600 "><input type="text" className="border-b-2  border-blue-600 w-full "{...register("name_1")} />Name</div>
              <div className=" grid-cols-6 text-center text-blue-600"><input type="text" className="border-b-2  border-blue-600 w-full "{...register("name_2")} />Name</div>
              
            </div>
          </div>

         

        

          <div>
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
              <button
                type="submit"
                className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2"
              >
                <AiFillCloud /> Save
              </button>
              <button className=" bg-cyan-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                <AiOutlinePrinter /> Print
              </button>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
              <div className="text-black">
                Demo Institution{" "}
                <span className=" font-normal">somewhere in america</span>
              </div>
              <div>
                Phone: 000-000-0000, Email: demo@example.com, Fax:
                000.000.0000, example.com
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </>
  )
}

export default OtProgressReport