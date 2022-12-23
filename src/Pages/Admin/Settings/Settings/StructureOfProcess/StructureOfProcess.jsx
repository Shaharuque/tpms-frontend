import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../../Style/form.css";

const StructureOfProcess = () => {
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
      <div className="form-border  w-full mx-auto p-5 ">
        <div>
          <div className="form-title mb-5">
            <h1>STRUCTURE OF PROCESS</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h1 className="form-inner-head my-2 text-center">
                ANECDOTAL REPORT
              </h1>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-blue-400"
                      >
                        Practice Name
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        NPI (Box # 33 )
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Tax id /Emp#
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Practice Address ( BOX# 32 )
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Billing Address (Box # 33 )
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("Practice_Name")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("npi")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("tax_id")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("practice_address")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("billing_address")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-2 mt-5 bg-blue-600 border-2 border-blue-400">
              <h4 className="text-white text-center font-bold text-lg">
                Client Profile
              </h4>
            </div>
            <div className="flex flex-col flex-wrap lg:flex-row justify-between gap-5">
              <div className="">
                <div className="overflow-x-auto">
                  <table className=" border-2 border-blue-600 ">
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Speciality
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Speciality")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              # of Provider ‘s BCBA & BCaBA
                            </h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center mr-4">
                              <label
                                for="inline-2-radio"
                                className="ml-2 form-input-name"
                              >
                                BCBA
                              </label>
                              <input
                                type="text"
                                className=" border-2 border-black "
                                {...register("bcba")}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center mr-4">
                              <label
                                for="inline-2-radio"
                                className="ml-2 form-input-name"
                              >
                                BCaBA
                              </label>
                              <input
                                type="text"
                                className=" border-2 border-black"
                                {...register("bcaba")}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Average Patient / Month
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Average_Patient_Month")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Average Hrs / Quarter
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Average_Hrs_Quarter")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Average Billing / Quarter
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Average_Billing_Quarter")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Average Billing / Quarter
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Average_Collection_Quarter")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Patient Statement
                            </h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("Patient_Statement_yes")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                yes
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("Patient_Statement_no")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                no
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Patient Statement Sent To
                            </h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("payment_statement_family")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                Family
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("payment_statement_provider")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                Provider
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-lg text-center">
                              Types of Payers
                            </h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("Types_of_Payers_commercial")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                Commercial
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("Types_of_Payers_Regional")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                Regional Centers
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="border-2 border-blue-600 ">
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Billing / Co-ordination
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("billing")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Rejections / Account receivable & Follow up
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("rejections")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Payment posting & Denials
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Payment_posting_Denials")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Patient invoice
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Patient_invoice")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Point of Contact @ Provider Side
                            </h5>
                          </div>
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Pint_of_contact")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Frequency of Client Meeting
                            </h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("weekly")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name"
                              >
                                weekly
                              </label>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <div className="flex items-center justify-center  mr-4">
                              <input
                                id="inline-radio"
                                type="checkbox"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4"
                                {...register("monthly")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2  form-input-name "
                              >
                                Monthly
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Practice Effective From
                            </h5>
                          </div>
                        </td>
                        <td
                          colSpan={"2"}
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="date"
                              className=" border-none focus:outline-none"
                              {...register("Practice_Effective_From")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Software Used
                            </h5>
                          </div>
                        </td>
                        <td
                          colSpan={"2"}
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("Software_Used")}
                            />
                          </div>
                        </td>
                      </tr>{" "}
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="text-wrap font-bold text-center">
                              Software Login details
                            </h5>
                          </div>
                        </td>
                        <td
                          colSpan={"2"}
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                        >
                          <div>
                            <input
                              type="text"
                              className="w-full border-none focus:outline-none"
                              {...register("Software_Login_details")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-2 border-blue-600 ">
                    <thead className="border-b bg-blue-600">
                      <tr>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-blue-400"
                        >
                          SI#
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Provider Name
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Qualification As per NPPES
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          NPI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">1</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_1")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_1")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">2</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_2")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_2")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_2")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">3</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_3")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_3")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_3")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">4</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_4")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_4")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_4")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">5</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_5")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_5")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_5")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">6</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_6")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_6")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_6")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-2 border-blue-600 ">
                    <thead className="border-b bg-blue-600">
                      <tr>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-blue-400"
                        >
                          SI#
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Provider Name
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          Qualification As per NPPES
                        </th>
                        <th
                          scope="col"
                          className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                        >
                          NPI
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">1</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_1.1")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_1.1")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_1.1")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">2</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_2.2")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_2.2")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_2.2")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">3</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_3.3")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_3.3")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_3.3")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">4</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_4.4")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_4.4")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_4.4")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">5</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_5.5")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_5.5")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_5.5")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <h5 className="font-bold text-center">6</h5>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("provider_name_6.6")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("qualification_6.6")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div>
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("npi_6.6")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name  text-blue-700">Billing:-</span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("billing_area")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name  text-blue-700">
                ACCOUNTS RECEIVABLE & FOLLOW UP / REJECTIONS:-
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("  ACCOUNTS_RECEIVABLE_area")}
                />
              </div>
            </div>
            <div>
              <div className="form-title mb-5">
                <h1>INSURANCE SPECIFICATIONS</h1>
                <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <thead className="border-b bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-blue-400"
                      >
                        Insurance Name
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Provider Credential status
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        ERA / EFT Yes / No
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Payer Id
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        TFL/ Appeal Limit
                      </th>
                      <th
                        scope="col"
                        className=" font-bold text-white px-2 py-3 border-r border-2 border-blue-400"
                      >
                        Mailing Address & Fax#
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("date_setting_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("antecedent_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div className="flex">
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              yes
                            </label>
                          </div>
                          <div className="flex items-center  mr-4">
                            <input
                              id="inline-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              className="w-4 h-4"
                              {...register("analyzing_data")}
                            />
                            <label
                              for="inline-radio"
                              className="ml-2  form-input-name "
                            >
                              no
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
                        <div>
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            {...register("consequence_1")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600  ">
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
            <div className="mt-5 px-2">
              <div className="form-title mb-5">
                <h1>PAYMENT POSTING</h1>
                <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
              </div>
              <h5 className="font-bold text-blue-700 text-lg">
                REMITTANCE MODE:-
              </h5>
              <div className="flex flex-wrap mt-4 mb-4">
                <div className="flex items-center  mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("analyzing_data")}
                  />
                  <label for="inline-radio" className="ml-2  form-input-name ">
                    Online
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("modifying_program")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Drop Box
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("adding_goals")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    Provide Mail
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("developing_bip")}
                  />
                  <label for="inline-radio" className="ml-2 form-input-name">
                    ERA
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("developing_plan")}
                  />
                  <label for="inline-2-radio" className="ml-2 form-input-name">
                    FAX
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("developing_plan")}
                  />
                  <label for="inline-2-radio" className="ml-2 form-input-name">
                    Other
                  </label>
                  <input
                    type="text"
                    className="w-[50%] border-2 border-black "
                    {...register("consequence_1")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">
                HOW TO POST AN ERA:-
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("HOW_TO_POST_AN_Era")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">
                HOW TO POST AN EOB:-
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("HOW_TO_POST_AN_EOB")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">
                AUTHORIZATION REQUEST / UPLOADING THE AUTH IN MEDISOFT &
                BENEFITS:-
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("AUTHORIZATION_REQUEST")}
                />
              </div>
            </div>{" "}
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">
                COMMONLY USED REPORTS:-
              </span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="..."
                  size="large"
                  className=""
                  {...register("COMMONLY_USED")}
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">
                BILLING FLOW CHART:-
              </span>
              <div>
                <img
                  src={"https://app.therapypms.com/assets/img/chart.png"}
                  className="mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">SOP SOURCE</span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <div className="flex justify-center">
                  <div className=" xl:w-full">
                    <select
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-4">
              <span className="form-input-name text-blue-700">UPDATES:-</span>
              <div className="mt-3 mb-8   border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Enter Description of Tasks Completed..."
                  size="large"
                  className=""
                  {...register("description_task_complete")}
                />
              </div>
            </div>
            <button className=" bg-blue-700 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              Submit
            </button>
          </div>
        </form>

        <div className="p-3 border mt-2 shadow-lg">
          <p>123 Town Square Place Suite13, Jersey City, NJ 07310</p>
          <p>
            <span className="text-blue-700">
              Phone: 201-479-9876, Fax: 213-895-4889, www.amromed.com{" "}
            </span>
            Copy of State License (If applicable)
          </p>
        </div>
      </div>
    </div>
  );
};

export default StructureOfProcess;
