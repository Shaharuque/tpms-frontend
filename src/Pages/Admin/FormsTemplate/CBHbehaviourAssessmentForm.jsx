import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const CBHbehaviourAssessmentForm = () => {
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
    console.log(notes);
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
              FBA TEMPLATE <br /> BEHAVIOR ASSESSMENT SERVICE PLAN
            </h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                {/* <thead className="border-b">
              <tr>
               
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
             </thead> */}
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Recipient Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register(" recipient_name")}
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
                            Recipient ID:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("id")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Recipient Age:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("age")}
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
                            Recipient DOB:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-auto border-none focus:outline-none "
                          {...register(" date_of_birth")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Date of Assessment:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register(" address")}
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
                            Date of Initial Assessment Report:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("report_completed_on")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Date of Reassessment Report:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("authored_by")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3 mb-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Recipient Address:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("name")}
                        />
                      </div>
                      <div className="flex gap-3 mb-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Recipient Phone:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("bacb_certificate")}
                        />
                      </div>
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Evaluators Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("npi")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap ">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Type of Assessment:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("recipient_name")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex mt-4 mb-4">
              <div className="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("initial_assessment")}
                />
                <label
                  for="inline-radio"
                  className="ml-2 text-sm font-medium text-black dark:text-black"
                >
                  Initial Assessment
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4"
                  {...register("reassessment")}
                />
                <label
                  for="inline-2-radio"
                  className="ml-2 text-sm font-medium text-black dark:text-black"
                >
                  Reassessment
                </label>
              </div>
            </div>
            {/* <h3 className="text-[17px] font-bold text-blue-600 ">
                <label >BACKGROUND INFORMATION:</label>
              </h3> */}

            <div>
              <h1 className="form-inner-head my-2">
                MEDICAL REASONS SUPPORTING THE NEED FOR BA SERVICES/DIAGNOSIS
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">DOCUMENTS REVIEWED</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">BACKGROUND INFORMATION</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">
                COLLABORATION OF SERVICES AND REFERRALS
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">
                MEDICAL PROBLEMS/MEDICATIONS:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Medication
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Dosage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="form-inner-head my-2">EDUCATION STATUS:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">OBSERVATIONS:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Communication
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Daily Living Skills
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Socialization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Communication
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Daily Living Skills
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Socialization
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Socialization
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Socialization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Measure(s): Frequency/Duration
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Criteria:{" "}
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Measure(s): Frequency/Duration
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Criteria:{" "}
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Measure(s): Frequency/Duration
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Criteria:{" "}
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Level:
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Measure(s): Frequency/Duration
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                      <div className="flex flex-wrap flex-col">
                        <label htmlFor="" className="font-bold">
                          Criteria:{" "}
                        </label>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          placeholder="Enter Here"
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">INTENSITY SCALES</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Behavior
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Level 1: No Impact
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Level 3: Moderate
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Level 4: Severe
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Target Behavior/Precursors
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Antecedent/Setting Events
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Hypothesized Function
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("behavior_1")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">ASSESSMENTS CONDUCTED</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Observer
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Setting/Activity
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Tools (e.g., ABC, scatterplot)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">
                ASSESSMENT DATA COLLECTED:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Enter Here"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>

            <h1 className="form-inner-head my-2">
              FAMILY/CAREGIVER INVOLVEMENT
            </h1>

            <div>
              <h1 className="form-inner-head my-2 ">ASSESSMENTS CONDUCTED</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Implementation Goal
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Action Steps
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Person Responsible{" "}
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Date Due
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Family/Staff Involved in Implementation
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Frequency of Fidelity Checks
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Accuracy Criteria{" "}
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Tools Used to Measure Fidelity of Training
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("behavior_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("consequence_1")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Caregiver Goal(s)
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Outcome Measure & Criteria
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Baseline Data{" "}
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Progress Towards Mastery Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("behavior_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("consequence_1")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="form-inner-head my-2">MONITORING OUTCOMES</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Enter Here"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">GENERALIZATION TRAINING</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Enter Here"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">MAINTENANCE PROGRAMS</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Enter Here"
                  size="large"
                  className=""
                  {...register("background_information")}
                />
              </div>
            </div>

            <h1 className="form-inner-head my-2">
              SHORT TERM GOALS/OBJECTIVES
            </h1>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Objectives related to Maladaptive Behaviors
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Baseline
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Current Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Objectives related to Maladaptive Behaviors
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Baseline
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Current Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="form-inner-head mt-2">LONG TERM GOALS/OBJECTIVES</h1>

            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Objectives related to Maladaptive Behaviors
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Baseline
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Current Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-2 border-blue-600 ">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                    >
                      Objectives related to Maladaptive Behaviors
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Baseline
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Current Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date_setting_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div>
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("antecedent_1")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Met
                        </label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          {...register("date_setting_1")}
                        />
                        <label htmlFor="" className="font-bold">
                          Continuing New{" "}
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="text-red-600 font-bold text-centermy-2">
                BEHAVIOR PLAN COMPONENTS
              </h1>
              <h1 className="form-inner-head mt-2">
                HYPOTHESIS-BASED INTERVENTIONS:
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  {/* <thead className="border-b">
              <tr>
               
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 text-center font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={3}
                      >
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Obtain Item/Activity
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Context/Antecedent(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/Consequence(s)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Context/Antecedent(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/Consequence(s)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              What to do when XXXX demonstrates the replacement
                              or desired behaviors:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              What to do when XXXX engages
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={3}
                      >
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Antecedent strategies:
                            </label>
                          </span>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  {/* <thead className="border-b">
              <tr>
               
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 text-center font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={3}
                      >
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Obtain Item/Activity
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Context/Antecedent(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/Consequence(s)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Context/Antecedent(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior(s)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/Consequence(s)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              What to do when XXXX demonstrates the replacement
                              or desired behaviors:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              What to do when XXXX engages
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={3}
                      >
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Antecedent strategies:
                            </label>
                          </span>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("assessment_oblals_revised")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
              <h1 className="form-inner-head my-2">CRISIS STATEMENT</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("generalization_training")}
                />
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2 ">ASSESSMENTS CONDUCTED</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Observer
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Setting/Activity
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Tools (e.g., ABC, scatterplot)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <h1 className="form-inner-head text-center my-2">GENERALIZATION AND TRAINING</h1>
            <div>
              <h1 className="form-inner-head my-2 ">ASSESSMENTS CONDUCTED</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Observer
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Setting/Activity
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Tools (e.g., ABC, scatterplot)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">ASSESSMENTS CONDUCTED</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Observer
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Setting/Activity
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Tools (e.g., ABC, scatterplot)
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Tools (e.g., ABC, scatterplot)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            

           

           



         
           

          

          

        


           

            
          
            <h1 className="form-inner-head my-2 text-center">
              CONSENT TO TREATMENT
            </h1>
            <p className="text-lg font-normal mt-2">
            I hereby provide my consent to implement the behavior support plan for XXXX developed by Clarity Behavioral Health on XXXX. I understand that the interventions in this plan have been designed to result in the reduction of XXXX and enhance XXXX’s skills in XXXX as well as improve his overall quality of life. I agree that implementation of XXXX’s behavior support plan will occur at his home and community and involve the participation of the following individuals: XXXXX. Commitment of these individuals to participate in plan implementation is evidenced by their signatures at the bottom of this form.
            </p>

            <p className="text-lg font-normal mt-3 mb-3">
            The particular interventions included in this behavior support plan include modifications to XXXX’s surroundings and social conditions to reduce the likelihood of his challenging behavior and improve his independence, systematic instruction to shape and strengthen adaptive skills, and strategies to manage the consequences of XXXX’s behavior so that reinforcement is maximized for positive behavior and withheld or minimized for problem behavior.
            </p>
            <p className="text-lg font-normal mt-3 mb-3">
            I have had an opportunity to review the complete behavior support plan verbally and in written form and get clarification in response to any questions I have. I agree to be an active participant in implementing and/or supporting the implementation of this behavior intervention plan, participating in training and monitoring to promote its success. I have been made aware of potential risks including the possibility that XXXX’s behavior may escalate before improving and/or vary across settings based on how the plan is implemented, if relevant and the anticipated benefits of intervention. I understand that these procedures can only be implemented as written with my approval. I reserve the right to refuse or discontinue consent to the plan or specific intervention practices at any point without repercussions. If I withdraw consent, interventions will be discontinued immediately. I recognize the importance of fidelity and consistency, and therefore agree to make every effort to implement the plan as designed.


            </p>

            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  {/* <thead className="border-b">
              <tr>
               
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
             </tr>
            </thead> */}
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              BACB Name:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              BACB Name:
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("BACB_certificate")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex gap-3">
                          <input
                            type="text"
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
            <button type="submit">save</button>
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
    </div>
  );
};

export default CBHbehaviourAssessmentForm;
