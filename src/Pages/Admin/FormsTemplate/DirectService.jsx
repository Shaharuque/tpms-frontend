import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const DirectService = () => {
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
      {" "}
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
            <h2>DIRECT-SERVICE</h2>
            <h1>PARENT TRAINING NOTE</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>

        {/* form heading part  */}

        <div className="my-3">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                              for="child_name"
                              className=" font-bold text-base"
                            >
                              Child Name:
                            </label>
                            <input
                              type="text"
                              className="  border-none focus:outline-none "
                              {...register("child_name")}
                            />
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div className="flex flex-col  gap-2">
                          <span>
                            <label
                              for="attendees"
                              className=" font-bold text-base"
                            >
                              Attendees:
                            </label>
                            <input
                              type="text"
                              className=" border-none focus:outline-none "
                              {...register("attendees")}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                        <div className="flex flex-wrap  gap-3">
                        
                            <label
                              for="start_time"
                              className=" font-bold text-base"
                            >
                              Start Time:
                            </label>
                            <input
                              type="time"
                              className="border-none focus:outline-none"
                              {...register("start_time")}
                            />
                       
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                        <div className="flex flex-wrap gap-2">
                        
                            <label
                              for="end_time"
                              className=" font-bold text-base"
                            >
                              End Time:
                            </label>
                            <input
                              type="time"
                              className=" border-none focus:outline-none"
                              {...register("end_time")}
                            />
                          
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-r border-2 border-blue-600 ">
                        <div className="flex flex-wrap  gap-2">
                         
                            <label
                              for="date"
                              className=" font-bold text-base"
                            >
                              Date:
                            </label>
                            <input
                              type="date"
                              className=" border-none focus:outline-none"
                              {...register("date")}
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
              <h1 className="form-inner-head mt-4">GOALS FOR SESSION:</h1>
              <p className="text-[#d9534f] text-[.9rem] font-normal mb-4">
                Check the box to the left of one or more goals that apply to
                this session
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input 
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3  ">
                        <div>
                          <span className="form-input form-input-name w-full overflow-hidden font-bold text-lg">
                            Explained specific behavior analytic concept /
                            technique / procedure
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div>
                          <span className="form-input form-input-name w-full font-bold text-lg">
                          Role played new procedure / technique
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div>
                          <span className="form-input form-input-name w-full font-bold text-lg">
                          Gave performance feedback to parent on implementation
                          </span>
                        </div>
                      </td>
                    </tr> <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div>
                          <span className="form-input form-input-name w-full font-bold text-lg">
                          Modified / created new goal based on parent information
                          </span>
                        </div>
                      </td>
                    </tr> <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div>
                          <span className="form-input form-input-name w-full font-bold text-lg">
                          Modeled protocol with child (if child present (0368T/0369T)
                          </span>
                        </div>
                      </td>
                    </tr> <tr className="border-b border-2 border-blue-600 ">
                      <td className="text-sm text-gray-900 font-light px-2 py-3  border-l border-2 border-blue-600 ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-3   ">
                        <div>
                          <span className="form-input form-input-name w-full font-bold text-lg">
                          Other:
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

             
             
              
             
             
            </div>

            <div>
              <h1 className="form-inner-head mt-4">ACTIVITIES:</h1>
              <p className="text-[#d9534f] text-[.9rem] font-normal mb-4">
                What activities did you engage in to help the client move closer
                to his/her goals through parent training? What materials did you
                use? A general summary will suffice.
              </p>
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
              <h1 className="form-inner-head mt-4">NEEDS:</h1>
              <p className="text-[#d9534f] text-[.9rem] font-normal mb-4">
                What activities did you engage in to help the client move closer
                to his/her goals through parent training? What materials did you
                use? A general summary will suffice.
              </p>
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
      </div>{" "}
    </div>
  );
};

export default DirectService;
