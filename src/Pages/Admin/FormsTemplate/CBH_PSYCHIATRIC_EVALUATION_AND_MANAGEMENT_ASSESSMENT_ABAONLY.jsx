import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "./SignatureManage/SignatureModal";
import { Radio } from "antd";

const CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT_ABAONLY = () => {
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
          <h1>PSYCHIATRIC EVALUATION AND MANAGEMENT ASSESSMENT</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Client:
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
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
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
                            placeholder="Enter Here..."
                            {...register("client_name")}
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
                              Age:
                            </label>
                          </span>

                          <input
                            type="date"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
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
                              Diagnosis:
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
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
                            placeholder="Enter Here..."
                            {...register("client_name")}
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
                              Staff:
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
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Billing Code:
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
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Time In:
                            </label>
                          </span>

                          <input
                            type="time"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
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
                              Time Out:
                            </label>
                          </span>

                          <input
                            type="time"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-5">
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base">
                      Chief Complaint:
                    </label>
                  </span>

                  <br />
                  <textarea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={3}
                    placeholder="Enter SUBJECTIVE..."
                    size="large"
                    className="w-full p-5 form-input-textarea my-3"
                  />
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base">
                      History of Present Illness: (Describe location, duration,
                      severity, context, associated signs, quality, modifying
                      factors, medications)
                    </label>
                  </span>

                  <br />
                  <textarea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={3}
                    placeholder="Enter SUBJECTIVE..."
                    size="large"
                    className="w-full p-5 form-input-textarea my-3"
                  />
                </div>
              </div>
              <h1 className="form-inner-head  mt-5 w-full">
                DEVELOPMENTAL, FAMILY, SOCIAL HISTORY:
              </h1>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              At what age did the child first do the following?
                              Please indicate approximate month and/or year of
                              age
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Sit alone
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Show interest in or attraction to sounds
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Crawl
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Speak first words
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Stand alone
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Speak in sentences
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div class="">
                          <input
                            type="text"
                            name="checkedActive"
                            placeholder="Enter here . . "
                            className="w-full mb-1 py-1"
                            {...register("checkedActive")}
                          />
                          <span>
                            {" "}
                            <br />
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Stand alone
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 className="form-inner-head  mt-5 w-full">COMMUNICATION</h1>
              <div>
                <h1 className="my-2">
                  Describe child’ current level of communication ( nonverbal,
                  1-2-word phrases, complete sentences?________________________
                </h1>
                <h2 className="my-2">
                  How many words can he/she verbalize?___________________
                </h2>
              </div>
              <h1 className="form-inner-head  mt-5 w-full">
                HOW DOES THE CHILD COMMUNICATE HIS/HER WANTS AND NEEDS? (CHECK
                APPROPRIATE BOXES)
              </h1>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Sentences
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              One or two words
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Signs
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Leading/ Gestures
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Voice output device (AAC)
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              PECS
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Inappropriate behavior
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Request Attention
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Ask for Help
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Request toy/obj
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Request activities
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Refuse/ avoid activity
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Indicate doesn’t want object
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Indicate discomfort
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            ></label>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child label pictures or objects?
                            </label>
                          </span>
                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes how much?
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, how many?
                            </label>
                          </span>
                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, how many?
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child point to pictures/body
                              parts/objects?
                            </label>
                          </span>
                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, how many?
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child follow 1 step instructions?
                            </label>
                          </span>
                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, how many?
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child imitate movements?
                            </label>
                          </span>
                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If yes, how many?
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child imitate sounds?
                            </label>
                          </span>

                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Desire to quit:
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child fill in words or phrases?
                            </label>
                          </span>

                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Desire to quit:
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
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Self-care Skills Describe child’s ability to:
                              Dress self
                            </label>
                          </span>
                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea my-3"
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Personal hygiene (wash hands, brush teeth)
                            </label>
                          </span>
                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea my-3"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Play/Social Skills
                            </label>
                          </span>
                        </div>
                        <div class="flex gap-3 my-1">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Can the child fill in words or phrases?
                            </label>
                          </span>

                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                        <div class="flex gap-3 my-1">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Does the child watch other children?
                            </label>
                          </span>

                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                        <div class="flex gap-3 my-1">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Does the child engage in appropriate play with
                              other children?
                            </label>
                          </span>

                          <br />
                          <Radio.Group onChange={onChange} value={value}>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={1}
                            >
                              Yes
                            </Radio>
                            <Radio
                              className="text-[16px]  text-gray-700 gap-1 font-medium"
                              value={2}
                            >
                              No
                            </Radio>
                          </Radio.Group>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Family History:
                            </label>
                          </span>
                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-border-none my-3"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Social History:
                            </label>
                          </span>
                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-border-none my-3"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"2"}
                      >
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Past psychiatric history (including mental health
                              interventions, prior therapy interventions,
                              medication trials, co-morbid conditions):
                            </label>
                          </span>
                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-border-none my-3"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h1 className="form-inner-head  mt-5 w-full">PROBLEM BEHAVIOR</h1>
            </div>
            <div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Yes
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
                              No
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3"></div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Screaming/crying
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Dropping
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Eloping (running from you)
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Self-stimulation (flapping, rocking, etc.)
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Not following directions
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Aggression (hitting, kicking, scratching others)
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Property destruction (throw/break objects)
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Self-injury (hitting/biting self)
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="checkbox"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                        <div>
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Other
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              per DAY / WEEK / MONTH
                            </label>
                          </span>
                          <br />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Describe
                            </label>
                          </span>
                          <br />
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h1 className="form-inner-head  mt-5 w-full">
              REVIEW OF SYSTEMS (ROS)
            </h1>
            <div class="flex gap-3 my-3">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  ROS reviewed and no pertinent new information
                </label>
              </span>
            </div>
            <h1 className="form-inner-head  mt-5 w-full">
              CHECK HERE IF PERTINENT AT THIS VISIT:
            </h1>
            <div className="flex flex-wrap gap-3 my-3">
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Eyes
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Respiratory
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Ears/Nose/Throat
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Cardiovascular
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Gastrointestinal
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Genitourinary
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Hematologic/Lymph
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Skin
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Neurological
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Endocrine
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Male or Female
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Only
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Allergies
                  </label>
                </span>
              </div>
              <div class="flex gap-3 ">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Musculoskeletal
                  </label>
                </span>
              </div>
            </div>
            <div class="my-5">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Describe details of ROS findings:
                </label>
              </span>

              <br />
              <textarea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={3}
                placeholder="Enter SUBJECTIVE..."
                size="large"
                className="w-full p-5 form-input-textarea my-3"
              />
            </div>
            <h1 className="form-inner-head  mt-5 w-full">
              EXAMINATION SECTION
            </h1>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Ht
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Wt
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            BP
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"3"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className="flex items-center justify-center font-bold text-base"
                          >
                            CONSTITUTIONAL
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            General Appearance:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            WNL
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Abnormal
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If abnormal, describe:
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"3"}
                    >
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Vital Signs: If areas of concern in vital signs,
                            describe:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={3}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea-borderNone my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Mental Status Exam:
                          </label>
                        </span>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Speech
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Abnormal
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Describe any abnormalities:
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
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"3"}
                    >
                      <div>
                        <div class="flex gap-3 ">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Thought Processes:
                            </label>
                          </span>

                          <input
                            type="checkbox"
                            name="checkedActive"
                            {...register("checkedActive")}
                          />
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Abnormal
                            </label>
                          </span>
                        </div>
                        <br />
                        <div className="flex items-center flex-wrap gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Abnormalities :
                            </label>
                          </span>

                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                : Loose
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Tangential
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Circumstantial
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Hallucinations
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Delusions
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Obsessions
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"3"}
                    >
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If other abnormalities, or
                            hallucinations/delusions/obsession, describe:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={3}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea-borderNone my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Suicidal Ideation:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Absent
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Present
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Homicidal Ideation:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Absent
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Present
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Violent Ideation
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Absent
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Present
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If present, describe
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={3}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea-borderNone my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Judgment:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Good
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Fair
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Poor
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Insight:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Good
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Fair
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Poor
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If Judgment and/or Insight is poor, describe:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={3}
                          placeholder="Enter SUBJECTIVE..."
                          size="large"
                          className="w-full p-5 form-input-textarea-borderNone my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"3"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Orientation:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            X 3
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Impaired
                          </Radio>
                        </Radio.Group>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              If impaired, describe:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 className="form-inner-head  mt-5 w-full">
              GENERAL OBSERVATIONS
            </h1>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            General Observations
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Appearance
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Well Groomed
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Unkept
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Disheveled
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Appears younger than age
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Appears older than age
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Build/Stature
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Thin
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Overweight
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Short
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Tall
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Posture
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Slumped
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Rigid
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Tense
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Atypical
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Eye Contact
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Average
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Avoidant
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Intense
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Intermittent
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Activity
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Accelerated
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Slowed
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Stereotyped/Peculiar
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Impulsive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Agitated
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Attitude Toward Examiner
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Cooperative
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Hostile
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Defensive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Manipulative
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Seductive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Mistrustful
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Anxious
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ingratiating
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Confused
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Evasive
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={3}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Attitude Towards Parent/Guardian:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Not Applicable
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Positive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Interaction
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ignores
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ignores
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parents
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Disrespectful
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Demanding
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Immature
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Lack of Spontaneity
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Separation (for Children/Adolescent)
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Not Applicable
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Unremarkable/age appropriate
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Clingy to parent/guardian, but separates
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Cannot separate
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Disinhibited/does not care
                              </label>
                            </span>
                          </div>

                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Immature
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Lack of Spontaneity
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Mood
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Euthymic
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Depressed
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Anxious
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Angry
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Euphoric
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Irritable
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Silly
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Affect
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Full
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Constricted
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Flat
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Inappropriate
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Labile
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Speech:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Clear
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Loud
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Slurred
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Rapid
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Pressured
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Overproductive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Underproductive
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Thought Process:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Logical
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Circumstantial
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Tangential
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Loose
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Racing
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Incoherent
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Concrete
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Blocked
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Flight of Ideas
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Poverty of Content
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Slowed
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Thinking
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Perception:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Illusions
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Depersonalization
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Derealization
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Re-experiencing
                              </label>
                            </span>
                          </div>
                        </div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Hallucinations:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Auditory
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Command
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Visual Olfactory
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Tactile
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Gustatory
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Thought Content:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Preoccupations/
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Obsessional
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Depressive
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Paranoid
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Self-Deprecatory
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Grandiose
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Phobic
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Delusions:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                None reported
                              </label>
                            </span>
                          </div>

                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Control
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Thought Withdrawal
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Thought Insertion
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            ></div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Thought Broadcasting
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Erotic Persecution
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Reference Grandeur
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Somatic
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Religious
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Risk Assessment:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                None Reported or Observed OR Danger To:
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Erotic
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Persecution
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Reference
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Grandeur
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Somatic
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Religious
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Self:
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ideation
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Plan
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Attempt
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Others:
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ideation Plan
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Intent
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Attempt
                              </label>
                            </span>
                          </div>
                        </div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Comment/ Other:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Cognition:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL OR Check all that apply below:
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Impairment of :
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Orientation
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Memory
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Attention/Concentration
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Ability to Abstract
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Fund of Knowledge
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Visuospatial Ability
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Reading and Writing
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Calculation Ability
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Intelligence Estimate:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                MR
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Borderline
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Average
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Above Average
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Insight:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                WNL
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Mostly blames others for
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Difficulty acknowledging presence of psychiatric
                                problems
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Elaboration on Positive Mental Status Findings:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div class="">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Other Pertinent Findings (e.g. blood sugar, other
                              medical) and Lab Work Reviewed:
                            </label>
                          </span>

                          <br />
                          <textarea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={1}
                            placeholder="Enter SUBJECTIVE..."
                            size="large"
                            className="w-full p-5 form-input-textarea-borderNone my-3"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Coordination of Care/Recommendation
                              Plan(Describe):
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Med Management Mental health
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Therapy Targeted Case Management (TCM)
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Psychosocial Rehabilitation (PSR)
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                      colSpan={"2"}
                    >
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Prescription(s) Written:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                None Prescribed Today
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Prescribed, no changes
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Prescribed, new/change – see below/see
                                medication list
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              Explained Rationale, risks/benefits, side effects,
                              and treatment alternatives to client/guardian{" "}
                              <br /> (if new and/or changed medication)?
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Yes
                              </label>
                            </span>
                          </div>
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                No
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                      <div>
                        <div>
                          <span>
                            <div
                              for="rec_name"
                              className=" font-bold text-base mb-2"
                            >
                              For Female Client of Child Bearing Age:
                            </div>
                          </span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Risk/Benefits of Meds and Pregnancy Discussed
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Past Medications
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Dosage
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Purpose
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Current Medications
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Dosage
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Purpose
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-scroll">
                <table class="min-w-full border-2 border-blue-600 my-8 overflow-x-scroll">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                New/Added Medications
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Dosage
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Purpose
                              </label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex items-center flex-wrap gap-3">
                          <div class="flex gap-3 ">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              ></label>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"3"}
                      >
                        <div>
                          <div class="">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Other Pertinent Findings (e.g. blood sugar,
                                other medical) and Lab Work Reviewed:
                              </label>
                            </span>

                            <br />
                            <textarea
                              onChange={(e) => setNotes(e.target.value)}
                              maxLength={300}
                              rows={3}
                              placeholder="Enter SUBJECTIVE..."
                              size="large"
                              className="w-full p-5 form-input-textarea my-3"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"3"}
                      >
                        <div class="my-5 flex items-center flex-wrap gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Follow- Up
                            </label>
                          </span>
                          <div className="flex gap-2">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                No
                              </label>
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="checkbox"
                              name="checkedActive"
                              {...register("checkedActive")}
                            />
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Yes
                              </label>
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                In
                              </label>
                            </span>
                            <input
                              type="text"
                              name="checkedActive"
                              className=" border-b-2"
                              {...register("checkedActive")}
                            />
                          </div>
                          <div className="flex gap-2">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Weeks
                              </label>
                            </span>
                            <input
                              type="text"
                              name="checkedActive"
                              className=" border-b-2"
                              {...register("checkedActive")}
                            />
                          </div>
                          <div className="flex gap-2">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Months
                              </label>
                            </span>
                            <input
                              type="text"
                              name="checkedActive"
                              className=" border-b-2"
                              {...register("checkedActive")}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                        <div className="flex gap-2">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Psychiatrist Signature/Credentials:
                            </label>
                          </span>
                          <input
                            type="text"
                            name="checkedActive"
                            className="border-black border-b-2"
                            {...register("checkedActive")}
                          />
                        </div>
                      </td>
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                        colSpan={"3"}
                      >
                        <div className="flex gap-2">
                          <input
                            type="date"
                            name="checkedActive"
                            className="border-black border-b-2"
                            {...register("checkedActive")}
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
        <div>
          <div className="flex flex-wrap   justify-between my-5">
            <button
              className="flex items-center text-lg  hover:text-rose-800 font-medium gap-1 text-white bg-green-500 py-2 px-3 rounded-md"
              onClick={handleSignatureProvider}
            >
              Mark Completed and Sign
              <FaSignature className="text-lg" />
            </button>
            <button
              className="flex items-center text-lg  hover:text-white font-medium gap-1  text-white bg-rose-600 px-3 rounded-md"
              onClick={handleSignatureCaregiver}
            >
              Cancel X
            </button>
            {/* <button
              className="flex items-center text-lg  hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
              onClick={handleSignatureCaregiver}
            >
              Caregiver Signature
              <FaSignature className="text-lg" />
            </button> */}
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

export default CBH_PSYCHIATRIC_EVALUATION_AND_MANAGEMENT_ASSESSMENT_ABAONLY;
