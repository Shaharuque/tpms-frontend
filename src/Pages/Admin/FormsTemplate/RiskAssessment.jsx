import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const RiskAssessment = () => {
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
            <h1>RISK ASSESSMENT</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
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
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex gap-3">
                        <span>
                          <label for="date" className=" font-bold text-base">
                            Date:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none "
                          {...register("date")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Danger to Property:
                          </label>
                        </span>

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
                                {...register("yes")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          None(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Occasional(1)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Frequent(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Continuous(0)
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <TextArea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={2}
                        placeholder=" Notes"
                        size="large"
                        className=""
                        {...register("generalization_training")}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Danger to Property:
                          </label>
                        </span>

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
                                {...register("yes")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          None(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Occasional(1)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Frequent(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Continuous(0)
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <TextArea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={2}
                        placeholder=" Notes"
                        size="large"
                        className=""
                        {...register("generalization_training")}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Danger to Property:
                          </label>
                        </span>

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
                                {...register("yes")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          None(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Occasional(1)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Frequent(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Continuous(0)
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <div className="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Danger to Property:
                          </label>
                        </span>

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
                                {...register("yes")}
                              />
                              <label
                                for="inline-radio"
                                className="ml-2 text-sm font-medium text-black dark:text-black"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          None(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Occasional(1)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Frequent(0)
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
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
                          Continuous(0)
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={4}
                    >
                      <TextArea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={2}
                        placeholder=" Notes"
                        size="large"
                        className=""
                        {...register("generalization_training")}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <div className="border border-blue-600">
                <div className="p-2">
                  <h1 className="text-lg font-bold text-center text-red-600">
                    OTHER RISK FACTORS SCORING GUIDE:
                  </h1>
                  <p>None (0)-no occurrences in last 6 months</p>
                  <p>Occasional (1)-1-2 occurrences in last month</p>
                  <p>Frequent (2)-Weekly occurrences</p>
                  <p>Continuous (3)-Daily occurrences</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mt-4 mb-4">
              <table className="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex items-center mr-4">
                        <label
                          for="inline-radio"
                          className="ml-2 text-sm font-medium text-black dark:text-black"
                        >
                          SUICIDE RISK ASSESSMENT:
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex items-center mr-4">
                        <label
                          for="inline-radio"
                          className="ml-2 text-sm font-medium text-black dark:text-black"
                        >
                          3
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex items-center mr-4">
                        <label
                          for="inline-radio"
                          className="ml-2 text-sm font-medium text-black dark:text-black"
                        >
                          2
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex items-center mr-4">
                        <label
                          for="inline-radio"
                          className="ml-2 text-sm font-medium text-black dark:text-black"
                        >
                          1
                        </label>
                      </div>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div className="flex items-center mr-4">
                        <label
                          for="inline-radio"
                          className="ml-2 text-sm font-medium text-black dark:text-black"
                        >
                          0
                        </label>
                      </div>
                    </td>
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      rowSpan={8}
                    >
                      <div>
                        <label htmlFor="">
                          If score is 8– 21 Client is HIGH RISK for suicide.
                          <br></br>Initiate Baker Act/Transfer of care
                        </label>
                      </div>
                      <TextArea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={2}
                        placeholder=" Notes"
                        size="large"
                        className="mt-5"
                        {...register("generalization_training")}
                      />
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      rowSpan={2}
                    >
                      <label htmlFor="">
                        How strong is your desire to live?
                      </label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">None</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Weak</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Moderate</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">strong</label>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      rowSpan={2}
                    >
                      <label htmlFor="">
                        Do you have more reasons to live or to die?
                      </label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">None</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Weak</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Moderate</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">strong</label>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                  </tr>

                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      rowSpan={2}
                    >
                      <label htmlFor="">
                        How strong is your desire to live?
                      </label>
                    </td>
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      rowSpan={2}
                    >
                      <label htmlFor="">None</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Weak</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">Moderate</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">strong</label>
                    </td>
                  </tr>
                  <tr className="border-b border-2 border-blue-600 ">
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <input type="text" placeholder="Enter Here..." />
                    </td>
                  
                  </tr>


                  <tr className="border-b border-2 border-blue-600 ">
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      rowSpan={2}
                    >
                      <label htmlFor="">
                        How strong is your desire to live?
                      </label>
                    </td>
                    <td
                      className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                     
                    >
                      <label htmlFor="">None</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"  rowSpan={2}>
                      <label htmlFor="">Weak</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"  rowSpan={2}>
                      <label htmlFor="">Moderate</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <label htmlFor="">strong</label>
                    </td>
                  </tr>
                  


               
                </tbody>
              </table>
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h1 className="form-inner-head mt-5 my-2">
                SCORING RESULTS FROM SUICIDE RISK
              </h1>
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
            </div>

            <div>
              <h1 className="form-inner-head mt-5 my-2">
                SCORING RESULTS FROM SUICIDE RISK
              </h1>

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
            </div>

            <div>
              <h1 className="form-inner-head mt-5 my-2">
                SCORING RESULTS FROM SUICIDE RISK
              </h1>

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
            </div>

            <div>
              <h1 className="form-inner-head mt-5 my-2">
                SCORING RESULTS FROM SUICIDE RISK
              </h1>

              <div className="flex flex-col mb-1">
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
            </div>

            <div>
              <h1 className="form-inner-head mt-5 my-2">
                SCORING RESULTS FROM SUICIDE RISK
              </h1>

              <div className="flex flex-col mb-1">
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
            </div>
          </div>
          <button type="submit">ok</button>
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

export default RiskAssessment;
