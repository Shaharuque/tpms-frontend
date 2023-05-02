import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const TreatmentPlanReview = () => {
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
             TREATMENT PLAN TEVIEW
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
                            Client Name:
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
                            Client MR#:
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
                            Date:
                          </label>
                        </span>

                        <input
                          type="date"
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
                            Social Security #:
                          </label>
                        </span>

                        <input
                          type="text"
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
                            Medicaid # or Group Insurance #:
                          </label>
                        </span>

                        <input
                          type="text"
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
                            Gender:
                          </label>
                        </span>

                        <input
                          type="text"
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
                            Date of Birth:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("authored_by")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Street Address:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("authored_by")}
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
                            City:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("referring_physician")}
                        />
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3 mb-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            State:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("name_1")}
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
                            Contact Phone #:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("physician_contact_info")}
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
                            Parent/Guardian:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("intervention_settings")}
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
                            Primary Clinician:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("physician_contact_info")}
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
                            Date of Master Treatment Plan or last review:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("intervention_settings")}
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
                            Dates of Review Period(Last 3 months):
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("recipient_name")}
                        />
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            to:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" w-full border-none focus:outline-none "
                          {...register("recipient_name")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h1 className="form-inner-head my-2 text-center">
                TREATMENT PLAN REVIEW PROCESS:
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg  text-gray-900 px-2 py-3 border-r border-blue-600"
                        colSpan={2}
                      >
                        This plan is based on a review of goals, objectives, and
                        interventions with the Client and/or the Clients
                        parent/caregiver in the following locations:
                        <div className="flex mb-1">
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
                              className="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Client Home
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
                              className="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Client School
                            </label>
                          </div>

                          <div className="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("recipient-declined_na")}
                            />
                            <label
                              for="inline-2-radio"
                              className="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Office
                            </label>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label
                            for="inline-2-radio"
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            Primary Clinician:
                          </label>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label
                            for="inline-2-radio"
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            Date:
                          </label>
                          <input
                            type="date"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={2}
                      >
                        <div className="flex ">
                          <label
                            for="inline-2-radio"
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            Next Review Period (Next 3 Months):
                          </label>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                          <label
                            for="inline-2-radio"
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            to:
                          </label>
                          <input
                            type="date"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        colSpan={2}
                      >
                        <div className="flex flex-wrap">
                          <label
                            for="inline-2-radio"
                            className="ml-2 text-sm font-medium text-black dark:text-black"
                          >
                            Based on Face-to-Face contact with:
                          </label>
                          <div className="flex mb-1">
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                Client
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                Parent/Guardian
                              </label>
                            </div>

                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("recipient-declined_na")}
                              />
                              <label
                                for="inline-2-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">DIAGNOSTIC IMPRESSIONS:</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        F-Codes:
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Diagnosis:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
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
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
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
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
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
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">
                CERTIFICATION STATEMENT:
              </h1>
              <div className="flex flex-wrap flex-col">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">
                CERTIFICATION STATEMENT:
              </h1>
              <div className="flex flex-wrap">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex mb-1">
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client is at risk for a more intensive, restrictive
                      and costly mental health placement.
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
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      This Client’s condition/functional level cannot be
                      improved with less costly services
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">EXPLANATION OF CHANGES:</h1>
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
              <h1 className="form-inner-head my-2 text-center">
                CURRENT MEDICATIONS:
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                        colSpan={2}
                      >
                        <TextArea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder=" Notes"
                          size="large"
                          className=""
                          {...register("generalization_training")}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td
                        className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={2}
                      >
                        <div>
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
                              className="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              This Client’s condition/functional level cannot be
                              improved with less costly services
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm font-bold text-gray-900  px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Strengths</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weakness</label>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
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
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Type of Service
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Billing Code
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                        colSpan={2}
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Frequency
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r truncate border-2 border-blue-600"
                      >
                        Provider Title
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">
                            TBOS (Therapeutic Behavioral On-Site)
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">(H2019 HO)</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Units</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Weekly</label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">6 Months </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <label htmlFor="">Therapist</label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 ">DISCHARGE CRITERIA</h1>
              <p>
                At this point in the Client’s care, the following are
                considerations for the discharge at case closing:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Problem Areas
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Discharge Goals
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label htmlFor="" className="font-bold">
                            Problem #1:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={2}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register("generalization_training")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label htmlFor="" className="font-bold">
                            Problem #1:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={2}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register("generalization_training")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label htmlFor="" className="font-bold">
                            Problem #1:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={2}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register("generalization_training")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label htmlFor="" className="font-bold">
                            Problem #1:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={2}
                            placeholder=" Notes"
                            size="large"
                            className=""
                            {...register("generalization_training")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-wrap">
                          <label htmlFor="" className="font-bold">
                            Problem #1:
                          </label>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Treatment Problem Areas
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Target Date for Completion
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Baseline Rate/Duration
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Current Rate/Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
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
              <h1 className="form-inner-head my-2 ">TREATMENT PROBLEM SHEET</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Problem #1:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Problem #1:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Problem #1:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Problem #1:</span>
                          <div className="flex mb-1">
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>

                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("recipient-declined_na")}
                              />
                              <label
                                for="inline-2-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                Recipient Declined N/A, provider is the
                                prescriber
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="overflow-x-auto mt-4 mb-4 ">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Obj. #</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Objectives</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Target Date </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Goal met/Not Met</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">1</span>

                         
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Problem #1:</span>
                          <div className="flex mb-1">
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
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
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>

                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("recipient-declined_na")}
                              />
                              <label
                                for="inline-2-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                Recipient Declined N/A, provider is the
                                prescriber
                              </label>
                            </div>
                          </div>

                         
                        <div>
                         

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-0 focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                   
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 " colSpan={4}>
                        <div>
                          <span class="label">Interventions</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-0 focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                     
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="overflow-x-auto mt-4 mb-4 ">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Obj. #</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Objectives</span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Target Date </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Goal met/Not Met</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">1</span>

                         
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                    
                          

                         
                        <div>
                         

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-0 focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                   
                   
                      </td>
                    </tr>

                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 " colSpan={4}>
                        <div>
                          <span class="label">Interventions</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-0 focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                     
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>








            <div>
              <h1 className="text-lg text-red-600 my-2 text-center">
              TREATMENT PLAN REVIEW
              </h1>
              <h1 className="form-inner-head my-2 ">
              STATEMENT OF ELIGIBILITY/MEDICAL NECESSITY:
              </h1>
              <p>I, treating Physician or Licensed Practitioner of Healing Arts certifies that the above-named services are medically necessary and appropriate to client’s diagnosis and treatment needs.</p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  
                  <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">CLIENT NAME:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">DATE:</span>

                          <input
                            type="date"
                            
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">MR #:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">LICENSED PRACTITIONER OF THE HEALING ARTS:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">CREDENTIALS</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">EFFECTIVE DATE</span>

                          <input
                            type="date"
                            
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">PARENT OR LEGAL GUARDIAN</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Date</span>

                          <input
                            type="date"
                         
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">PRIMARY CLINICIAN SIGNATURE & CREDENTIALS:</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Date</span>

                          <input
                            type="date"
                           
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">PSYCHIATRIST (IF INDICATED)</span>

                          <input
                            type="text"
                            placeholder="Enter Here..."
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-bold px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <span class="label">Date</span>

                          <input
                            type="date"
                           
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
    </>
  );
};

export default TreatmentPlanReview;
