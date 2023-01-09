import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const BCBATraineeUSR = () => {
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
            <h1>BCBA TRAINEE UNIQUE SUPERVISION FORM</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  {/* <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-3 border-r border-blue-600"
                      >
                        Date/Setting
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Antecedent
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Behavior
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-3 border-r border-2 border-blue-600"
                      >
                        Consequence
                      </th>
                    </tr>
                  </thead>
                 
                  */}
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-lg text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base  text-blue-600"
                            >
                              Date:
                            </label>
                          </span>

                          <input
                            type="date"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("date")}
                          />
                        </div>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base  text-blue-600"
                            >
                              Time:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("time")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Trainee:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("trainee")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Restricted Hours:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("restricted_hours")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Setting:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("setting")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Number of Clients:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("number_of_clients")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Credential Pursuing:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("credential_pursuing")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Unrestricted Hours:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("unrestricted_hours")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Supervising BCBA:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("supervising BCBA")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              BCBA::
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("bcba")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Session Length:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register("session_length")}
                          />
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                        <div className="flex flex-col">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base text-blue-600"
                            >
                              Number of Hours Supervised:
                            </label>
                          </span>

                          <input
                            type="input"
                            className=" w-full border-b-2  border-blue-600 focus:outline-none "
                            {...register(" number_of_hours_supervised")}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">TYPE OF SUPERVISION:</h1>
              <div className="flex mt-4 mb-4">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("in_person")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    In Person
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("telehealth")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Telehealth
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("group_meeting")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Group Meeting
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="form-title mb-5">
                <h1>EVALUATION OF PERFORMANCE</h1>
                <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
              </div>

              <h1 className="form-inner-head my-2">
                EVALUATION OF SUPERVISEE PERFORMANCE:
              </h1>
              <p className="text-red-600">
                <strong>
                  <span className="text-black">S</span> – satisfactory{" "}
                  <span className="text-black">NI</span> - needs improvement
                  <span className="text-black">U</span> - unsatisfactory{" "}
                  <span className="text-black">N/A</span> – not applicable
                </strong>
              </p>

              <div>
                <p className=" text-lg  font-normal my-2">
                  Arrives on time for supervision:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Maintains professional and courteous interactions with:
                  Clients/consumers Other service providers/ Coworkers:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_1")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_1")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_1")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_1")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Maintains appropriate attire & demeanor Initiates professional
                  self-improvement:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_2")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_2")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_2")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_2")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Accepts supervisory feedback appropriately:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_3")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_3")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_3")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_3")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Seeks supervision appropriately/ asks questions when needed:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_4")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_4")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_4")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_4")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Timely submission of tasks assigned:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_5")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_5")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_5")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_5")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Communicates effectively:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_6")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_6")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_6")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_6")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Demonstrates appropriate sensitivity to nonbehavioral
                  providers{" "}
                  <span className="text-sm text-red-600">
                    (teachers, other healthcare providers, caregivers etc)
                  </span>{" "}
                  :
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_7")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_7")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_7")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_7")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p className=" text-lg  font-normal my-2">
                  Acquisition of target behavior-analytic skills:
                </p>
                <div className="flex mb-4">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("s_8")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      S
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register("ni_8")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      NI
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" u_8")}
                    />
                    <label
                      for="inline-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      U
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                      {...register(" na_8")}
                    />
                    <label
                      for="inline-2-radio"
                      className="ml-2 text-sm font-medium text-black dark:text-black"
                    >
                      N/A
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="form-inner-head my-2">
                TOPICS/FEEDBACK DISCUSSED IN SUPERVISION/FOLLOW UP:
              </h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" FEEDBACK_DISCUSSED_IN_SUPERVISION")}
                />
              </div>
            </div>{" "}
            <div>
              <h1 className="form-inner-head my-2">TASK LIST ITEMS COVERED:</h1>
              <div className="mt-3 border-blue-600 border-2">
                <TextArea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder=" Notes"
                  size="large"
                  className=""
                  {...register(" task_list_item_covered")}
                />
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
          <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
            <AiFillCloud /> Save
          </button>
          <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
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

export default BCBATraineeUSR;
