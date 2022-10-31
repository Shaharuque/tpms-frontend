import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const FBA = () => {
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
            <h1>FBA TEMPLATE <br /> BEHAVIOR ASSESSMENT SERVICE PLAN</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div class="overflow-x-auto">
              <table class="min-w-full border-2 border-blue-600 ">
                {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            ID:
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
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Age:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("age")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            DOB:
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

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Address:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register(" address")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Report Completed on:
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
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Authored by:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("authored_by")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3 mb-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("name")}
                        />
                      </div>
                      <div class="flex gap-3 mb-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            BACB Certificate:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("bacb_certificate")}
                        />
                      </div>
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            NPI #:
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

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap ">
                      <div class="flex gap-3">
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
                          {...register("recipient_name")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Referring Physician:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("referring_physician")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3 mb-2">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Name:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("name_1")}
                        />
                      </div>

                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            NPI:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("npi_1")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Physician Contact Info:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("physician_contact_info")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Intervention Settings:
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
                </tbody>
              </table>
            </div>

            <div class="flex mt-4 mb-4">
              <div class="flex items-center mr-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4"

                  {...register("initial_assessment")}
                />
                <label
                  for="inline-radio"
                  class="ml-2 text-sm font-medium text-black dark:text-black"
                >
                  Initial Assessment
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4"
                  {...register("reassessment")}
                />
                <label
                  for="inline-2-radio"
                  class="ml-2 text-sm font-medium text-black dark:text-black"
                >
                  Reassessment
                </label>
              </div>
            </div>
            {/* <h3 className="text-[17px] font-bold text-blue-600 ">
                <label >BACKGROUND INFORMATION:</label>
              </h3> */}

            <div>
              <h1 className="form-inner-head my-2">BACKGROUND INFORMATION:</h1>
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
              <h1 className="form-inner-head my-2">DOCUMENTS REVIEWED:</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Medical Issues:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("medical_issues")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Reason for Referral:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("reason_for_referral")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2 text-center">
                ANECDOTAL REPORT
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date/Setting
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Antecedent
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Behavior
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Consequence
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_2")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_3")}
                          />
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="form-inner-head my-2 text-center">
                STRENGTHS AND WEAKNESSES
              </h1>
              <h1 className="form-inner-head my-2 mt-3 text-start">
                MEDICATION
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Medication Name
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Dosage
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Purpose
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Side Effects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("medication_name_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("dosage_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("purpose_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("side_effect_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("medication_name_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("dosage_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("purpose_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("side_effect_2")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("medication_name_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("dosage_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("purpose_3")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("side_effect_3")}
                          />
                        </div>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="form-inner-head my-2 text-center">
                BEHAVIOR PLAN COMPONENTS
              </h1>
              <h1 className="form-inner-head my-2 mt-3 text-start">
                PROCEDURAL CHECKLIST
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Behavior Targeted for Reduction
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Function
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behavior_tfr")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-3/5">
                        <div class="flex gap-3 mb-5">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/s:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("function")}
                          />
                        </div>

                        <div class="flex gap-3 mb-5">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Baseline:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("baseline")}
                          />
                        </div>
                        <div class="flex gap-3 mb-5">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Intensity:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("intensity")}
                          />
                        </div>
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Data Measured with:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("data_measured_with")}
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
                ASSESSMENTS CONDUCTED/FUNCTION
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Patterns Identified:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("pattern_identified")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Assessment of Basic Language and Learning
                              Skills-Revised:
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

            <div>
              <h1 className="form-inner-head my-2">
                FAMILY/CAREGIVER INVOLVEMENT
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Goal 1:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_1")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Goal 2:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_2")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Goal 3:
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("goal_3")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">GENERALIZATION TRAINING:</h1>
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
              <h1 className="form-inner-head my-2">
                TARGET PROBLEM BEHAVIOR GOALS:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register("target_problem_behavior_goal")}
                />
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">SKILLS ACQUISITION GOALS</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex flex-col gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Context/Antecedent(s):
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("contexts")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Behavior(s)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("behaviors")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Function/Consequence(s):
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("functions")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex flex-col gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Preventive Strategies (antecedent-based)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("preventive_strategies")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Replacement Skills (related to function)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("replacement_skill")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Management Strategies (consequence-based)
                            </label>
                          </span>

                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("management_strategies")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head my-2">INSTRUCTIONAL GOALS</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex flex-col gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Long Term Objective Status:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Long Term Objective
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap ">
                        <div class="flex flex-col  gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Intermediate Objective
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex  gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("long_term_objective_status")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("long_term_objective")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap w-4/5">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("intermediate_objective")}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex  gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Target Behavior
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Short Term Objective
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Measure
                            </label>
                          </span>
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Status
                            </label>
                          </span>
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Baseline Level
                            </label>
                          </span>
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Current Level
                            </label>
                          </span>
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Mastery Criteria
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex  gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("target_behvior")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("short_term_objective")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("mesuare")}
                          />
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("status")}
                          />
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("baseline_level")}
                          />
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("current_level")}
                          />
                        </div>
                      </td>{" "}
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex   gap-2">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("mastery_criteria")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-3">
              <h1 className="form-inner-head my-2">INTERVENTIONS</h1>
              <h1 className="form-inner-head my-2">PREFERENCE ASSESSMENT</h1>
              <div className="flex items-center  gap-2 mb-2">
                <p>
                  Preference Assessment completed using parent interview, direct
                  observation conducted on
                </p>
                <span>
                  <input
                    type="text"
                    className="border-b border-black focus:outline-none"
                    {...register("ip_assessment")}
                  />
                </span>
              </div>
              <p>
                Observations and preference assessments indicate that client is
                highly motivated by the following reinforcers.
              </p>
            </div>

            <div>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Activities
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("activities")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Food/Drink
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("food")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Games/Toys
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("games")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Social
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("social")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="form-inner-head my-2">RISK ASSESSMENT</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Risk:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Notes
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("risk")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("note")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Benefit:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Notes
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("benefit")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("note_1")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="form-inner-head my-2">
                MAINTAINING AND TRANSFERRING PROGRESS TO ALL RELEVANT SETTINGS
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Generalization:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("generalization")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Maintenance
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("maintenance")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="overflow-x-auto mt-4">
              <table class="min-w-full border-2 border-blue-600 ">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Phase:
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Action Steps
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Criteria
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Time Frame
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Service Reduction Behavior Analyst
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r  border-2 border-blue-600"
                    >
                      Service Reduction Behavior Assistant
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Next Level of Care of Transition Notes
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Phase 1
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("action_step_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("criteria_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("time_frame_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("nlocot_note_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("description_1")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Phase 2
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("action_step_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("criteria_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("time_frame_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("nlocot_note_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("description_2")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Phase 3
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("action_step_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("criteria_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("time_frame_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("nlocot_note_3")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("description_3")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Phase 4
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("action_step_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("criteria_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("time_frame_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("srb_assistant_5")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("nlocot_note_4")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-l border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("description_4")}
                        />
                      </div>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h1 className="form-inner-head my-2">CRISIS PLAN</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
                
              </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Emergency protocol:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("emergency_protocol")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Communication with other providers
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("communication_wo_providers")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="form-inner-head my-2">
                PLEASE CHECK BOXES AS APPLICABLE:
              </h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                                            >
                                                Services
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-lg font-bold text-gray-900 px-2 py-3 border-r"
                                            >
                                                Hours per week/Month
                                            </th>
                                        </tr>
                                    </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Have you communicated with the recipient's
                              prescriber of psychotropic drugs?
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        {/* <div class="flex gap-3">
                                                    <input
                                                        type="text"
                                                        className=" w-full border-none focus:outline-none "
                                                    />
                                                </div> */}
                        <div class="flex mb-1">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("yes")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("no")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>

                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("recipient-declined_na")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Recipient Declined N/A, provider is the prescriber
                            </label>
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("recipient_ino_medications")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              N/A recipient is not on medications
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Have you communicated with the recipient's P.C.P.?
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("yes_1")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("no_1")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>

                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register(" recipient_declined")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Recipient Declined
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Have you documented the communication or recipient
                              declination?
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register(" yes_2")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("no_2")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>

                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("idn_contact")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              N/A, I did not contact P.C.P.
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Have you been in communication with other Behavior
                              Health (B.H.) providers for this recipient?
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex">
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register(" yes_3")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              Yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register(" no_3")}
                            />
                            <label
                              for="inline-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>

                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register(" na")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              N/A
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, please indicate the type of B.H. provider.
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("please_indicate_the_type_of_B.H.")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="form-inner-head my-2 text-center">
                SUMMARY AND RECOMMENDATIONS
              </h1>
              <h1 className="form-inner-head my-2">RATIONALE/JUSTIFICATION:</h1>
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Services
                      </th>
                      <th
                        scope="col"
                        class="text-lg font-bold text-gray-900 px-2 py-3 border-r"
                      >
                        Hours per week/Month
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Lead Analyst: (H2019)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("lead_analyst")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              RBT (H2014)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("RBT")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Total recommended hours
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("total_rhours")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="overflow-x-auto mt-4">
              <table class="min-w-full border-2 border-blue-600 ">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Service Provider
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="text-lg font-bold text-gray-900 px-2 py-3 border-r"
                    >
                      Friday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            BCBA
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("monday_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("tuesday_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("wednesday_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("thursday_1")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("friday_1")}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            RBT
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("monday_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("tuesday_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("wednesday_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("thursday_2")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("friday_2")}
                        />
                      </div>
                    </td>
                  </tr>

                  
                </tbody>
              </table>
            </div>
            <p className="text-lg font-normal mb-3 mt-2">
              Per Rule 59G-1.010, Florida Administrative Code (F.A.C.)
            </p>
            <p className="text-lg font-normal  mt-2">
              CLIENT demonstrates medical necessity for services per the
              Functional Behavior Assessment and as described below,
              demonstrates deficits in verbal behavior, self-care, living
              skills, safety skills, adaptive living skills, and problem
              behaviors that are functioning as a barrier to further development
              and places the CLIENT at risk of significant disability and
              jeopardizes safety. The behavior analysis services described in
              the plan are necessary to protect life and prevent significant
              disability; they are also individualized, specific, and consistent
              with the confirmed diagnosis under treatment, and not more than
              the patient's needs. They are consistent with generally accepted
              professional medical standards as determined by the Medicaid
              program and not are not experimental or investigational. The
              services are reflective of the level of service that can be safely
              furnished, and for which there are currently not equally effective
              and more conservative or less costly treatment is available
              statewide and are furnished in a manner not primarily intended for
              the convenience of the recipient, the recipient's caretaker, or
              the provider
            </p>
            <h1 className="form-inner-head my-2 text-center">
              CONSENT TO TREATMENT
            </h1>
            <p className="text-lg font-normal mt-2">
              I hereby provide my consent to implement the behavior support plan
              for CLIENT developed by Falls Family Center, LLLC on
              ____________________. I understand that the interventions in this
              plan have been designed to result in the reduction of PROBLEM
              BEHAVIORS and enhance CLIENT's skills in communication,
              socialization, independence, and self-advocacy, as well as improve
              his/her overall quality of life. I agree that implementation of
              CLIENT's behavior support plan will occur in the school /home and
              involve the participation of the following individuals: CAREGIVER
              NAME (CAREGIVER RELATIONSHIP TO CLIENT). Commitment of these
              individuals to participate in plan implementation is evidenced by
              their signatures at the bottom of this form.
            </p>

            <p className="text-lg font-normal mt-3 mb-3">
              The interventions included in this behavior support plan include
              modifications to CLIENT’s surroundings and social conditions to
              reduce the likelihood of his/her challenging behavior and improve
              his/her independence, systematic instruction to shape and
              strengthen adaptive skills, and strategies to manage the
              consequences of CLIENT’s behavior so that reinforcement is
              maximized for positive behavior and withheld or minimized for
              problem behavior. Specific strategies include using visuals/token
              boards to increase independence, prompting to increase spontaneous
              skills, and shaping socialization to improve relationships.
            </p>
            <p className="text-lg font-normal mt-3 mb-3">
              I have had an opportunity to review the complete behavior support
              plan verbally and in written form and get clarification in
              response to any questions I have. I agree to be an active
              participant in implementing and/or supporting the implementation
              of this behavior intervention plan, participating in training, and
              monitoring to promote its success. I have been made aware of
              potential risks (including the possibility that CLIENT’s behavior
              may escalate before improving and/or vary across settings based on
              how the plan is implemented, if relevant) and the anticipated
              benefits of intervention. I understand that these procedures can
              only be implemented as written with my approval. I reserve the
              right to refuse or discontinue consent to the plan or specific
              intervention practices at any point without repercussions. If I
              withdraw consent, interventions will be discontinued immediately.
              I recognize the importance of fidelity and consistency, and
              therefore agree to make every effort to implement the plan as
              designed.
            </p>

            <div className="mt-4">
              <div class="overflow-x-auto">
                <table class="min-w-full border-2 border-blue-600 ">
                  {/* <thead class="border-b">
              <tr>
               
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  First
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-3 border-r">
                  Last
                </th>
             </tr>
            </thead> */}
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
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
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("BACB_name")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              BACB Certificate:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
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

export default FBA;
