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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Trainee:
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Start Time:
                          </label>
                        </span>

                        <input
                          type="time"
                          value="00:00"
                          className="  border-none focus:outline-none "
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
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
                          className="  border-none focus:outline-none "
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 w-1/2">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            supervisor:
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
                    <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            End Time:
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

            <div className="flex flex-wrap gap-3 ">
              <div>
                <div className="flex flex-col mt-2 gap-3">
                  <div>
                    {" "}
                    <div class="overflow-x-auto">
                      <table class="min-w-full border-2 border-blue-600 ">
                        <thead>
                          <tr>
                            <th
                              class=" px-2 py-3 border-r border-2 border-blue-600 bg-blue-600 font-bold text-lg text-white "
                              colspan={2}
                            >
                              INDEPENDENT HOURS
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-2 border-blue-600 ">
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Experience Type
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
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
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Setting Name
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <input
                                  type="text"
                                  className=" w-full border-none focus:outline-none "
                                  placeholder="Enter Here..."
                                  {...register("age")}
                                />
                              </div>
                            </td>
                          </tr>
                          <tr class="border-b border-2 border-blue-600 ">
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Activity Category
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <input
                                  type="radio"
                                  className="  border-none focus:outline-none "
                                  {...register("dob")}
                                />
                                <label htmlFor="">Restricted</label>

                                <input
                                  type="radio"
                                  className="  border-none focus:outline-none "
                                  {...register("dob")}
                                />
                                <label htmlFor="">Restricted</label>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-b border-2 border-blue-600 ">
                            <td
                              class="text-sm text-gray-900 font-light px-2 py-3 "
                              colSpan={2}
                            >
                              <span>
                                <label for="clname" className="form-inner-head">
                                  Activity Note{" "}
                                  <span className="text-sm text-red-600">
                                    (client Initials)
                                  </span>{" "}
                                  :
                                </label>
                              </span>
                              <div className=" border-red-600 border-2">
                                <TextArea
                                  onChange={(e) => setNotes(e.target.value)}
                                  maxLength={300}
                                  rows={5}
                                  placeholder="Enter here..."
                                  size="large"
                                  className="w-full"
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
                      <table class="min-w-full border-2 border-blue-600 ">
                        <thead>
                          <tr>
                            <th
                              class=" px-2 py-3 border-r border-2 border-blue-600 bg-blue-600 font-bold text-lg text-white "
                              colspan={2}
                            >
                              MONTH SUPERVISION PERIOD
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b border-2 border-blue-600 ">
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Total Hours of Supervision:
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <input
                                  type="text"
                                  className="  border-none focus:outline-none "
                                  {...register("dob")}
                                />
                              </div>
                            </td>
                          </tr>
                          <tr class="border-b border-2 border-blue-600 ">
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Total Number of Contacts:
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
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
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Individual:
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
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
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Group:
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
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
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
                                <span>
                                  <label
                                    for="rec_name"
                                    className=" font-bold text-base"
                                  >
                                    Total number of Observations of the Trainee
                                    with Clients:
                                  </label>
                                </span>
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                              <div class="flex gap-3">
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

              <div class="overflow-x-auto mt-2">
                <table class="min-w-full border-2 border-blue-600 ">
                  <thead>
                    <tr>
                      <th
                        class=" px-2 py-3 border-r border-2 border-blue-600 bg-blue-600 font-bold text-lg text-white "
                        colspan={2}
                      >
                        SUPERVISED HOURS:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Format:
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Restricted</label>

                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Restricted</label>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Experience Types
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="text"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("age")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Supervision Type
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Individual</label>

                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Group</label>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Activity Category
                            </label>
                          </span>
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Restricted</label>

                          <input
                            type="radio"
                            className="  border-none focus:outline-none "
                            {...register("dob")}
                          />
                          <label htmlFor="">Unrestricted</label>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 "
                        colSpan={2}
                      >
                        <span>
                          <label for="clname" className="form-inner-head">
                            Activity Note{" "}
                            <span className="text-sm text-red-600">
                              (client Initials)
                            </span>{" "}
                            :
                          </label>
                        </span>
                        <div className=" border-red-600 border-2">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={5}
                            placeholder="Enter here..."
                            size="large"
                            className="w-full"
                            {...register("present_during_seation")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td
                        class="text-sm text-gray-900 font-light px-2 py-3 "
                        colSpan={2}
                      >
                        <span>
                          <label for="clname" className="form-inner-head">
                            Activity Note{" "}
                            <span className="text-sm text-red-600">
                              (client Initials)
                            </span>{" "}
                            :
                          </label>
                        </span>
                        <div className=" border-red-600 border-2">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            maxLength={300}
                            rows={5}
                            placeholder="Enter here..."
                            size="large"
                            className="w-full"
                            {...register("present_during_seation")}
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
