import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const MEDICATION_FLOWSHEET = () => {
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

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
      <div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <img src={logo} className="w-[250px] h-[100px]" alt="" />
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
        <div className="form-title my-5">
          <h1>MEDICATION FLOWSHEET</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Patient Name:
                        </label>
                      </span>

                      <input
                        type="text"
                        className=" w-full border-none focus:outline-none "
                        placeholder="Enter Here..."
                        {...register("client_name")}
                      />
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Allergies:
                        </label>
                      </span>

                      <input
                        type="text"
                        placeholder="Enter Here..."
                        className="  border-none focus:outline-none "
                        {...register("dob")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      DATE
                    </h1>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      MEDICATION
                    </h1>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      REFILLS
                    </h1>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      Start
                    </h1>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      Stop
                    </h1>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      Dosage/Direction/Amount
                    </h1>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <h1
                      for="rec_name"
                      className=" text-center font-bold text-base"
                    >
                      Date/Amount/Initials
                    </h1>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <input
                      type="text"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div>
          <div className="flex flex-wrap   justify-between my-5">
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureProvider}
            >
              Provider Signature
              <FaSignature className="text-lg" />
            </button>
            <button
              className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureCaregiver}
            >
              Caregiver Signature
              <FaSignature className="text-lg" />
            </button>
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
            <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiFillCloud /> Save
            </button>
            <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
              <AiOutlinePrinter /> Print
            </button>
          </div>
        </div>
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
  );
};

export default MEDICATION_FLOWSHEET;
