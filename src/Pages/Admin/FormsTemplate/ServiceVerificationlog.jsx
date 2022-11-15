import TextArea from "antd/lib/input/TextArea";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const ServiceVerificationlog = () => {
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
            <h1>SERVICE VERIFICATION LOG</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div class="overflow-x-auto mt-5 mb-5">
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
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
                          placeholder="Enter Here..."
                          {...register("CLIENT_NAME")}
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
                            Month:
                          </label>
                        </span>

                        <input
                          type="month"
                          className=" w-full border-none focus:outline-none"
                          {...register("month")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="overflow-x-auto mb-5">
              <span className="form-inner-head">SUPERVISED SESSION DATE:</span>
              <table class="min-w-full border-2 border-blue-600 ">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600 "
                    >
                      Date of Service
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600 "
                    >
                      Time In
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600 "
                    >
                      Time Out
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600 "
                    >
                      Staff Signature
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600 "
                    >
                      Parent/Guardian/Teacher Signature
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <input
                        type="text"
                        className="border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("service_date")}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" flex  flex-wrap justify-between mt-10">
              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Provider Signature
                  <FaSignature className="text-lg" />
                </button>
              </div>

              <div>
                <button
                  className="flex items-center text-lg hover:underline hover:text-rose-800 mx-auto font-medium gap-1 text-[#207ac7]"
                  onClick={handleSignatureProvider}
                >
                  Caregiver Signature <FaSignature className="text-lg" />
                </button>
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
  );
};

export default ServiceVerificationlog;
