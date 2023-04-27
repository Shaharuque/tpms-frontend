import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ParentTrainingSession = () => {
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
          <h1>PARENT TRAINING SESSION NOTE</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>

      {/* form heading part  */}

      <div className="my-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h1 className="form-inner-head my-4">Client Information:</h1>
              <div class="flex flex-col ">
                <div class="sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-2 border-blue-600 ">
                        <tbody>
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-3">
                                <label
                                  for="client_name"
                                  className=" font-bold text-base"
                                >
                                  Client Name:
                                </label>
                                <input
                                  type="text"
                                  className="border-none focus:outline-none"
                                  {...register("client_name")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap gap-2">
                                <label
                                  for="dob"
                                  className=" font-bold text-base"
                                >
                                  DOB:
                                </label>
                                <input
                                  type="date"
                                  className=" border-none focus:outline-none"
                                  {...register("dob")}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                              <div className="flex flex-wrap  gap-2">
                                <label
                                  for="age"
                                  className=" font-bold text-base"
                                >
                                  Age:
                                </label>
                                <input
                                  type="text"
                                  className=" border-none focus:outline-none"
                                  {...register("Age")}
                                />
                              </div>
                            </td>{" "}
                          </tr>
                          <tr className="border-b border-2 border-blue-600 ">
                            <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                              <div className="flex flex-col gap-3">
                                <span>
                                  <label
                                    for="diagnosis"
                                    className=" font-bold text-base"
                                  >
                                    Diagnosis:
                                  </label>
                                  <input
                                    type="text"
                                    className="  border-none focus:outline-none "
                                    {...register("diagnosis")}
                                  />
                                </span>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                              <div className="flex flex-col  gap-2">
                                <span>
                                  <label
                                    for="insured_id"
                                    className=" font-bold text-base"
                                  >
                                    Insured Id:
                                  </label>
                                  <input
                                    type="text"
                                    className=" border-none focus:outline-none "
                                    {...register("insured_id")}
                                  />
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-inner-head my-4">PROVIDER INFORMATION:</h1>
            <div>
              <div>
               
                <div class="flex flex-col ">
                  <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-2 border-blue-600 ">
                          <tbody>
                            <tr className="border-b border-2 border-blue-600 ">
                              <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                                <div className="flex flex-col gap-3">
                                  <span>
                                    <label
                                      for="provider_name"
                                      className=" font-bold text-base"
                                    >
                                      Provider Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="  border-none focus:outline-none "
                                      {...register("provider_name")}
                                    />
                                  </span>
                                </div>
                              </td>
                              <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                                <div className="flex flex-col  gap-2">
                                  <span>
                                    <label
                                      for="credentials"
                                      className=" font-bold text-base"
                                    >
                                      Credentials :
                                    </label>
                                    <input
                                      type="text"
                                      className=" border-none focus:outline-none "
                                      {...register("credentials")}
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">INDIVIDUAL PRESENT:</h1>
            <div class="flex flex-col ">
              <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-2 border-blue-600 ">
                      <tbody>
                        <tr className="border-b border-2 border-blue-600 ">
                          <td className="text-sm text-gray-900 font-light px-2   border-r border-2 border-blue-600 ">
                            <div className="flex flex-wrap  gap-3">
                              <label
                                for="caregiver"
                                className=" font-bold text-base"
                              >
                               Caregiver:

                              </label>
                              <input
                                type="text"
                                className="border-none focus:outline-none"
                                {...register("caregiver")}
                              />
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                            <div className="flex flex-wrap gap-2">
                              <label for="client_name_2" className=" font-bold text-base">
                              Client Name:
                              </label>
                              <input
                                type="text"
                                className=" border-none focus:outline-none"
                                {...register("client_name_2")}
                              />
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                            <div className="flex items-center flex-wrap font-bold  ">
                              <div>
                                <div className="flex ml-1  mr-1 items-center ">
                                  <input
                                    type="checkbox"
                                    name="bcba"
                                    {...register("bcba")}
                                  />
                                  <span className="form-input-name ml-1">
                                    BCBA
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex ml-1  mr-1 items-center ">
                                  <input
                                    type="checkbox"
                                    name="RBT"
                                    {...register("RBT")}
                                  />
                                  <span className="form-input-name ml-1">
                                    RBT
                                  </span>
                                </div>
                              </div>
                              <div>
                                <div className="flex ml-1  mr-1 items-center ">
                                  <input
                                    type="checkbox"
                                    name="Other"
                                    {...register("Other")}
                                  />
                                  <span className="form-input-name ml-1">
                                    Other
                                  </span>
                                </div>
                              </div>

                              <input
                                type="text"
                                name="client_name"
                                placeholder="Explain..." 
                                className="border bg-none p-2   focus:outline-none"
                                {...register("others")}
                              />
                            </div>
                          </td>{" "}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="form-inner-head my-4">
              PARENT TRAINING SESSION DATE:
            </h1>
            <div class="flex flex-col ">
              <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-2 border-blue-600 ">
                      <tbody>
                        <tr className="border-b border-2 border-blue-600 ">
                          <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                            <div className="flex flex-wrap  gap-3">
                              <label
                                for="service_date"
                                className=" font-bold text-base"
                              >
                               Service Date :

                              </label>
                              <input
                                type="date"
                                className="border-none focus:outline-none"
                                {...register("service_date")}
                              />
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                            <div className="flex flex-wrap gap-2">
                              <label for="service_start_time" className=" font-bold text-base">
                              Service Start Time:
                              </label>
                              <input
                                type="time"
                                className=" border-none focus:outline-none"
                                {...register("service_start_time")}
                              />
                            </div>
                          </td>
                          <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                          <div className="flex flex-wrap gap-2">
                              <label for="service_end_time" className=" font-bold text-base">
                              Service End Time :
                              </label>
                              <input
                                type="time"
                                className=" border-none focus:outline-none"
                                {...register("service_end_time")}
                              />
                            </div>
                          </td>{" "}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">PARENT TRAINING PROVIDED</h1>
            <div className="flex items-center">
              <div className="flex ml-1  mr-1 items-center ">
                <input type="checkbox" name="bcba" {...register("bcba")} />
                <span className="form-input-name font-bold ml-1">In Person</span>
              </div>
              <div>
                <div className="flex ml-1  mr-1 items-center ">
                  <input type="checkbox" name="RBT" {...register("RBT")} />
                  <span className="form-input-name font-bold ml-1">Remote</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="form-inner-head my-4">PARENT TRAINING OVERVIEW:</h1>

            <div className="mt-3">
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Notes"
                size="large"
                className="border-2 border-blue-600"
              />
            </div>
          </div>
          <div>
            <h1 className="form-inner-head my-4">FEEDBACK TO PARENT:</h1>

            <div className="mt-3">
              <TextArea
                onChange={(e) => setNotes(e.target.value)}
                maxLength={300}
                rows={5}
                placeholder=" Notes"
                size="large"
                className="border-2 border-blue-600"
              />
            </div>
          </div>
          <div>
               
                <div class="flex flex-col ">
                  <div class="sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-2 border-blue-600 ">
                          <tbody>
                            <tr className="border-b border-2 border-blue-600 ">
                              <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                                <div className="flex flex-col gap-3">Provider
                                  <span>
                                    <label
                                      for="provider_name"
                                      className=" font-bold text-base"
                                    >
                                      Provider Name:
                                    </label>
                                    <input
                                      type="text"
                                      className="  border-none focus:outline-none "
                                      {...register("provider_name")}
                                    />
                                  </span>
                                </div>
                              </td>
                              <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                                <div className="flex flex-col  gap-2">
                                  <span>
                                    <label
                                      for="provider_credentials"
                                      className=" font-bold text-base"
                                    >
                                     Provider Credentials :
                                    </label>
                                    <input
                                      type="text"
                                      className=" border-none focus:outline-none "
                                      {...register("provider_credentials")}
                                    />
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </form>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 items-center justify-between my-5">
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

export default ParentTrainingSession;
