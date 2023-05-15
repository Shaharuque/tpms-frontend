import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const MyClientRights = () => {
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
              <h1>MY CLIENT RIGHTS</h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <ul class="ml-6 text-sm font-normal list-decimal mt-2 ">
                <li>To be treated with dignity, respect, and consideration;</li>
                <li>
                  Not to be discriminated against based on race, national
                  origin, religion, gender, sexual orientation, age, disability,
                  marital status, diagnosis, or source of payment;
                </li>
                <li>
                  To receive treatment that:
                  <ul class="ml-6 list-disc">
                    <li>
                      Supports and respects the client's individuality, choices,
                      strengths, and abilities;
                    </li>
                    <li>
                      Supports the client's personal liberty and only restricts
                      the client's personal liberty according to a court order;
                      by the client's general consent; or as permitted in this
                      Chapter; and
                    </li>
                    <li>
                      Is provided in the least restrictive environment that
                      meets the client's treatment needs;
                    </li>
                  </ul>
                  If you choose to watch the assessment, we ask that you not
                  provide any answers or additional help to your child. The goal
                  of the assessment is to gain an understanding of your child’s
                  strengths and areas for improvement.
                </li>
                <li>
                  Not to be prevented or impeded from exercising the client's
                  civil rights unless the client has been adjudicated
                  incompetent or a court of competent jurisdiction has found
                  that the client is unable to exercise a specific right or
                  category of rights;
                </li>
                <li>
                  To submit grievances to agency staff members and complaints to
                  outside entities and other individuals without constraint or
                  retaliation;
                </li>
                <li>
                  To have grievances considered by a licensee in a fair, timely,
                  and impartial manner;
                </li>
                <li>
                  To seek, speak to, and be assisted by legal counsel of the
                  client's choice, at the client's expense;
                </li>
                <li>
                  To receive assistance from a family member, designated
                  representative, or other individual in understanding,
                  protecting, or exercising the client's rights;
                </li>
                <li>
                  If enrolled by the Department or a regional behavioral health
                  authority as an individual who is seriously mentally ill, to
                  receive assistance from human rights advocates provided by the
                  Department or the Department's designee in
                  understanding,protecting, or exercising the client's rights;
                </li>
                <li>
                  To have the client's information and records kept confidential
                  and released only as permitted under R9-20-211
                </li>
                <li>
                  To privacy in treatment, including the right not to be
                  fingerprinted, photographed, or recorded without general
                  consent,except:
                  <ul class="ml-6 list-disc">
                    <li>
                      For photographing for identification and administrative
                      purposes, as provided by A.R.S. § 36-507(2);
                    </li>
                    <li>
                      For a client receiving treatment according to A.R.S. Title
                      36, Chapter 37;
                    </li>
                    <li>
                      For video recordings used for security purposes that are
                      maintained only on a temporary basis; or
                    </li>
                    <li>As provided in R9-20-602(A)(5);</li>
                  </ul>
                </li>
                <li>
                  To review, upon written request, the client's own record
                  during the agency's hours of operation or at a time agreed
                  upon by the clinical director, except as described in
                  R9-20-211(A)(6);
                </li>
                <li>
                  To review the following at the agency or at the Department:
                  <ul class="ml-6 list-disc">
                    <li>This Chapter;</li>
                    <li>
                      The report of the most recent inspection of the premises
                      conducted by the Department;
                    </li>
                    <li>
                      A plan of correction in effect as required by the
                      Department;
                    </li>
                    <li>
                      If the licensee has submitted a report of inspection by a
                      nationally recognized accreditation agency in lieu of
                      having an inspection conducted by the Department, the most
                      recent report of inspection conducted by the nationally
                      recognized accreditation agency; and
                    </li>
                    <li>
                      If the licensee has submitted a report of inspection by a
                      nationally recognized accreditation agency in lieu of
                      having an inspection conducted by the Department, a plan
                      of correction in effect as required by the nationally
                      recognized accreditation agency;
                    </li>
                  </ul>
                </li>
                <li>
                  To be informed of all fees that the client is required to pay
                  and of the agency's refund policies and procedures before
                  receiving a behavioral health service, except for a behavioral
                  health service provided to a client experiencing a crisis
                  situation;
                </li>
                <li>
                  To receive a verbal explanation of the client's condition and
                  a proposed treatment, including the intended outcome, the
                  nature of the proposed treatment, procedures involved in the
                  proposed treatment, risks or side effects from the proposed
                  treatment, and alternatives to the proposed treatment;
                </li>
                <li>
                  To be offered or referred for the treatment specified in the
                  client's treatment plan;
                </li>
                <li>
                  To receive a referral to another agency if the agency is
                  unable to provide a behavioral health service that the client
                  requests or that is indicated in the client's treatment plan;
                </li>
                <li>
                  To give general consent and, if applicable, informed consent
                  to treatment, refuse treatment or withdraw general or informed
                  consent to treatment, unless the treatment is ordered by a
                  court according to A.R.S. Title 36, Chapter 5, is necessary to
                  save the client's life or physical health, or is provided
                  according to A.R.S. § 36-512;
                </li>

                <li>
                  To be free from:
                  <ul class="ml-6 list-disc">
                    <li>Abuse;</li>
                    <li>Neglect;</li>
                    <li>Exploitation;</li>
                    <li>Coercion;</li>
                    <li>Manipulation;</li>
                    <li>
                      Retaliation for submitting a complaint to the Department
                      or another entity;
                    </li>
                    <li>
                      Discharge or transfer, or threat of discharge or transfer,
                      for reasons unrelated to the client's treatment
                      needs,except as established in a fee agreement signed by
                      the client or the client’s parent, guardian, custodian, or
                      agent;
                    </li>
                    <li>
                      Treatment that involves the denial of:
                      <ul class="ml-6 list-disc">
                        <li>Food,</li>
                        <li>The opportunity to sleep, or</li>
                        <li>The opportunity to use the toilet; and</li>
                        <li>
                          Restraint or seclusion, of any form, used as a means
                          of coercion, discipline, convenience, or retaliation;
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  To participate or, if applicable, to have the client's parent,
                  guardian, custodian or agent participate in treatment
                  decisions and in the development and periodic review and
                  revision of the client's written treatment plan;
                </li>
                <li>
                  To control the client's own finances except as provided by
                  A.R.S. § 36-507(5);
                </li>
                <li>
                  To participate or refuse to participate in religious
                  activities;
                </li>
                <li>
                  To refuse to perform labor for an agency, except for
                  housekeeping activities and activities to maintain health and
                  personal hygiene;
                </li>
                <li>
                  To be compensated according to state and federal law for labor
                  that primarily benefits the agency and that is not part of the
                  client's treatment plan;
                </li>
                <li>
                  To participate or refuse to participate in research or
                  experimental treatment;
                </li>
                <li>
                  To give informed consent in writing, refuse to give informed
                  consent, or withdraw informed consent to participate in
                  research or in treatment that is not a professionally
                  recognized treatment;
                </li>
                <li>
                  To refuse to acknowledge gratitude to the agency through
                  written statements, other media, or speaking engagements at
                  public gatherings;
                </li>
                <li>
                  To receive behavioral health services in a smoke-free
                  facility, although smoking may be permitted outside the
                  facility. Persons with developmental disabilities have the
                  same rights as other US citizens including:
                  <ul class="ml-6 list-disc">
                    <li>To be treated with dignity and respect.</li>
                    <li>
                      To expect that the personnel caring for them will be
                      current in skills and knowledge of their field of
                      employment.
                    </li>
                    <li>
                      To be served without regard to age, race, color, creed,
                      sex, nationality, ancestry and disability.
                    </li>
                    <li>
                      Protection from physical, psychological, verbal, or sexual
                      abuse
                    </li>
                    <li>Access to public education</li>
                    <li>Equal employment opportunities & compensation</li>
                    <li>Placement evaluations</li>
                    <li>Own, sell, lease property, marry, petition</li>
                    <li>Presumption of Legal Competency</li>
                    <li>
                      Residential Program clients: right to humane, clean
                      environment, communication, visits, personal property,
                      live in least restrictive environment
                    </li>
                    <li>Right to withdraw from service</li>
                    <li>
                      Right to be informed of rights upon admission to service
                    </li>
                  </ul>
                </li>
              </ul>

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
  );
};

export default MyClientRights;
