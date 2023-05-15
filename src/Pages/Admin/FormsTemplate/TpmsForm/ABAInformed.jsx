import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ABAInformed = () => {
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
          <h1>
          ABA INFORMED CONSENT <br /> OF CAREGIVERS
          </h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div>
         


         

         

        

       
          <p className="text-sm font-normal mb-3 mt-2">
            <span className="font-bold">Both legal caregivers/guardians must sign this form.</span>
           If there is a legal custody agreement we request a copy of such to stay within the agreed-upon boundaries. If no formal documentation is provided, both parents with legal rights to the child must sign. If only one parent signs, said parent is testifying they are the only legal guardian for the child we will service.
          </p>
          <p className="text-sm font-normal  mt-2">
          I agree to have my child evaluated/treated through Signature Behavioral Health. I understand that these services are based on an applied behavior analysis (ABA) model and will be provided by a professional trained in ABA.
          </p>

          <p className="text-sm font-normal  mt-2">
          I understand that Signature Behavioral Health and its employees are mandated reporters and state laws may require that confidentiality be broken under certain circumstances, specifically, if I am judged by the behavior analyst to be of danger to myself and/or others, gravely disabled, or if there is suspected child abuse or neglect.
          </p>
         
          <p className="text-sm font-normal mt-2">
          I also understand that Signature Behavioral Health specializes in the treatment of autism and related diagnosis, as well as problem behaviors and that if Signature Behavioral Health is unable to meet my particular needs, I will be referred to an appropriate agency or individual. Concerns or complaints about services may be directed to Denisha Gingles, BCBA, Clinical Director, and Owner.
          </p>
          <p className="text-sm font-normal  mt-2">
          I explicitly agree to receive assessment and therapy services from Signature Behavioral Health.
          </p>

         

          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
               
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4" >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                           Parent/Guardian #1: (Print Name)

                          </label>
                        </span>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 " colSpan={2}>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_name")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Parent/Guardian #1: (Signature)

                          </label>
                        </span>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3">
                        <input
                         onClick={handleSignatureCaregiver}
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_certificate")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3">
                      <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Date:

                          </label>
                        </span>
                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_certificate")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4" >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                           Parent/Guardian #1: (Print Name)

                          </label>
                        </span>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 " colSpan={2}>
                      <div className="flex gap-3">
                        <input
                        
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_name")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Parent/Guardian #1: (Signature)

                          </label>
                        </span>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3">
                        <input
                         onClick={handleSignatureCaregiver}
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_certificate")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3">
                      <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Date:

                          </label>
                        </span>
                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("BACB_certificate")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
        <button className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
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
          Phone: 000-000-0000, Email: demo@example.com, Fax: 000.000.0000,
          example.com
        </div>
      </div>
     
        </div>
      </form>
    
    </div>
  </div>
  )
}

export default ABAInformed