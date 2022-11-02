import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const SOAP = () => {
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
            <h1>BCBA TRAINEE SUPERVISION MONTHLY FORM</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div className="top-part">
              <div className=" flex justify-between mb-5">
                <div>
                  <label className="text-lg font-bold">Client Name:</label>{" "}
                  <input
                    type="text"
                    className="  border-none focus:outline-none "
                    placeholder="Enter Your Name..."
                    {...register("client_name")}
                  />
                </div>
                <div className="date">
                  <label className="text-lg font-bold">DOS:</label>{" "}
                  <input type="date" {...register("dos")} />
                </div>
              </div>
              <div class=" flex justify-between mb-3">
                <div>
                  <label className="text-lg font-bold">Therapist:</label>{" "}
                  <input
                    type="text"
                    className="  border-none focus:outline-none "
                    placeholder="Enter Your Name..."
                    {...register("therapist")}
                  />
                </div>
                <div class="date">
                  <label className="text-lg font-bold">Start Time:</label>{" "}
                  <input type="time" {...register("start_time")} />
                </div>
                <div class="date">
                  <label className="text-lg font-bold">End Time:</label>{" "}
                  <input type="time" {...register("end_time")} />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold">Notes:</h1>
                <div classNameName="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("notes")}
                  />
                </div>
              </div>
            </div>

            <h1 className="form-inner-head my-4">Client Information:</h1>
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
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Question
                        </label>
                      </span>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Answer
                        </label>
                      </span>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Authored by:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register("authored_by")}
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3 mb-3 ">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Name:
                          </label>
                        </span>

                        <input
                          type="date"
                          className=" border-none focus:outline-none "
                          {...register("name")}
                        />
                      </div>

                      <div class="flex gap-3 mb-3 ">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Start Time:
                          </label>
                        </span>

                        <input type="time" {...register("start_time_1")} />
                      </div>
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            End Time:
                          </label>
                        </span>

                        <input type="time" {...register("end_time_1")} />
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Location of Service:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register("location_of_lervice")}
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Supervisor Present?
                          </label>
                        </span>

                        <div class="flex mt-2 mb-4">
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
                              yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("no")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Caregiver Participated in Session?
                          </label>
                        </span>

                        <div class="flex mt-2 mb-4">
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
                              yes
                            </label>
                          </div>
                          <div class="flex items-center mr-4">
                            <input
                              id="inline-2-radio"
                              type="radio"
                              value=""
                              name="inline-radio-group"
                              class="w-4 h-4"
                              {...register("no_2")}
                            />
                            <label
                              for="inline-2-radio"
                              class="ml-2 text-sm font-medium text-black dark:text-black"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Strategies used during session:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register("strategies_ud_session")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Targets worked on during session:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register("targets_worked_on_during_session")}
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            What notable maladaptive behaviors were observed?
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register(
                              " what_notable_maladaptive_behaviors_were_observed"
                            )}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If "Other", please describe behaviors:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register(" behaviors_behaviors")}
                          />
                        </div>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/2">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Notes:
                          </label>
                        </span>

                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register(" Notes_1")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm  text-gray-900 font-light px-2 py-3 whitespace-nowrap  ">
                      <div class="flex flex-col">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Location:
                          </label>
                        </span>
                        <div className="mt-3 w-full ">
                          <TextArea
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder=" Notes..."
                            size="large"
                            className=""
                            {...register("location")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default SOAP;
