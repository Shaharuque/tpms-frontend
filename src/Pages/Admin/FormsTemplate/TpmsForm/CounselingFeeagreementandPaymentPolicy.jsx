import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const CounselingFeeagreementandPaymentPolicy = () => {
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
    <>
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
            ABA/EVALUATION FEE<br /> DOCUMENT
{" "}
             
            </h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <p className="text-sm font-normal mb-3 mt-2">
            Our agency strives to offer the highest quality of services to you and your family. Considerable care has been taken to ensure our fees and our rates accurately reflect the complexity of our services, the skills, and expertise of staff required for the individual’s care. Our fees are comparable to those of other highly qualified specialists.
            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold"> PRE-AUTHORIZATION: </span>
            If pre-authorization for applied behavior analysis is required through your insurance company we will work with your insurance company to get pre-authorization.
            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold"> OUT-OF-NETWORK:  </span>
                I agree to pay Signature Behavioral Health for all services rendered, this includes copays, out-of-pocket deductibles, and coinsurance fees. If my insurance company provides financial assistance for services, I/we do understand that I/we need to pay the fees at the time services are rendered and allow the insurance company to reimburse me/my family.


            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold"> IN-NETWORK:   </span>
                Signature Behavioral Health is in-network with the following insurance companies: Optum Medicaid ASO and Cigna. I/We will assist in filing all of the claims for applied behavior analysis services, when needed. I/We agree to pay Signature Behavioral Health for all co-pays, deductibles, and coinsurance costs when services are rendered, if required by the insurance company. I understand that I am still responsible for all costs associated with medical experiences that are not covered by insurance.

            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold">LATE FEES AND COLLECTIONS: I </span>
                If payment is not received within 3 days of sending an invoice, a 10% service charge will be added. Additionally, if payments are not received within 15 days, a 25% service fee will be added and services will be suspended. If payment is not received within 30 days, the bill may be sent to a collection agency. Additionally, I/we understand and agree to pay any and all collection costs and/or attorney fees if any delinquent balance is placed with an agency or attorney for collection, suit, or legal action. If a payment plan is necessary to remit payment, I/We must explicitly request it. I/We also acknowledge that confidentiality is waived in matters involving collections and the sharing of information sufficient to pursue recovery of debts owed. Also, if your check is returned by the bank you will be billed a $35.00 returned check fee and alternative arrangements will have to be made to satisfy your obligation. For your convenience, we accept MasterCard, Visa, American Express, Discover, cash, and checks.


            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold"> RATES FOR SERVICES:   </span>
                I understand if Signature Behavioral Health is in-network with my insurance then the rates are different based upon negotiated rates with the provider which. I understand, regardless of negotiated rates, Signature Behavioral Health has their own fee schedule. I also understand, Signature Behavioral Health has the right to update and implement their fee schedule at any time.




            </p>
            <p className="text-sm font-normal  mt-2">
                <span className="font-bold"> CANCELLATION POLICY:   </span>
                At Signature Behavioral Health, we understand that emergencies and illnesses arise which may cause a session to be cancelled. However, you must notify us at least 24 hours in advance of any cancellation. If notification is not made at least 24 hours in advance and there is not a verifiable emergency situation, you will be billed a cancellation fee equal to the amount of your financial responsibility for the regular scheduled session, which will not be reimbursable through insurance. In addition, if a client arrives late to a scheduled appointment, the client will be billed the rate of the full appointment and the wait time will not be charged to insurance and you are responsible for the payment of the time staff were waiting to render services. Repeated failures to attend scheduled sessions or arrive at scheduled sessions may result in termination of services. Failure to remit timely payments will result in a temporary suspension of services, until the account is brought current.

            </p>
            <p className="text-sm font-normal  mt-2">
               
                If you have any questions regarding our Fee Agreement and Payment Policy, please do not hesitate to discuss it with us by contacting 410-774-9840. If you have any questions or concerns regarding billing and insurance, please contact our billing specialist.

            </p>
            <p className="text-sm font-normal  mt-2">
                
                I/We have carefully read and agree to this Fee Agreement and Payment Policy. I/We agree to abide by these terms outlined in this document.


            </p>



           

            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
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
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={2}
                      >
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
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
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
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={2}
                      >
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
                Phone: 000-000-0000, Email: demo@example.com, Fax:
                000.000.0000, example.com
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default CounselingFeeagreementandPaymentPolicy