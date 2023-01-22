import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const UniqueSupervisionForm = () => {
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
            <h1>SUPERVISION NON-BILLABLE BRCT</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div class="overflow-x-auto">
              <span className="form-inner-head">CLIENT INFORMATION:</span>
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
                            DOB:
                          </label>
                        </span>

                        <input
                          type="date"
                          className="  border-none focus:outline-none "
                          {...register("dob")}
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
                          placeholder="Enter Here..."
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
                            Diagnosis:
                          </label>
                        </span>

                        <input
                          type="text"
                          className=" w-auto border-none focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("diagnosis")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                <div>
                  {" "}
                  <div class="overflow-x-auto">
                    <span className="form-inner-head">CLIENT INFORMATION:</span>
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
                                  DOB:
                                </label>
                              </span>

                              <input
                                type="date"
                                className="  border-none focus:outline-none "
                                {...register("dob")}
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
                                placeholder="Enter Here..."
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
                                  Diagnosis:
                                </label>
                              </span>

                              <input
                                type="text"
                                className=" w-auto border-none focus:outline-none "
                                placeholder="Enter Here..."
                                {...register("diagnosis")}
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
                                  Client Name:
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
                                  DOB:
                                </label>
                              </span>

                              <input
                                type="date"
                                className="  border-none focus:outline-none "
                                {...register("dob")}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr class="border-b border-2 border-blue-600">
                          <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap ">
                            <span>
                              <label
                                for="clname"
                                className="form-input-name my-2"
                              >
                                Session Date:
                              </label>
                            </span>
                            <div className=" border-blue-600 border-2">
                              <TextArea
                                onChange={(e) => setNotes(e.target.value)}
                                maxLength={300}
                                rows={5}
                                placeholder="Enter here..."
                                size="large"
                                className=""
                                {...register("present_during_seation")}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  {" "}
                  <div class="overflow-x-auto">
                    <span className="form-inner-head">CLIENT INFORMATION:</span>
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
                                  DOB:
                                </label>
                              </span>

                              <input
                                type="date"
                                className="  border-none focus:outline-none "
                                {...register("dob")}
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
                                placeholder="Enter Here..."
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
                                  Diagnosis:
                                </label>
                              </span>

                              <input
                                type="text"
                                className=" w-auto border-none focus:outline-none "
                                placeholder="Enter Here..."
                                {...register("diagnosis")}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div class="overflow-x-auto">
                  <span className="form-inner-head">CLIENT INFORMATION:</span>
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
                                DOB:
                              </label>
                            </span>

                            <input
                              type="date"
                              className="  border-none focus:outline-none "
                              {...register("dob")}
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
                              placeholder="Enter Here..."
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
                                Diagnosis:
                              </label>
                            </span>

                            <input
                              type="text"
                              className=" w-auto border-none focus:outline-none "
                              placeholder="Enter Here..."
                              {...register("diagnosis")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

export default UniqueSupervisionForm;
