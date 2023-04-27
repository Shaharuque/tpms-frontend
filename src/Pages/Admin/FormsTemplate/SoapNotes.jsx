import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";
import "../../Style/form.css";
import SignatureModal from "./SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
const SoapNotes = () => {
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
            <h1>SOAP NOTES</h1>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div>
            <div>
              <div className="flex flex-wrap justify-between gap-3 ">
                <div>
                  <label className="font-bold">Client Name:</label>
                  <input type="text" placeholder="Enter Your Name Here..." />
                </div>
                <div>
                  <label className="font-bold">DOS:</label>
                  <input type="date" />
                </div>
              </div>
              <div className="flex flex-wrap justify-between mt-2 gap-3 ">
                <div>
                  <label className="font-bold">Therapist:</label>
                  <input type="text" placeholder="Enter Your Name Here..." />
                </div>
                <div>
                  <label className="font-bold">Start Time:</label>
                  <input type="time" placeholder="Enter Your Name Here..." />
                </div>
                <div>
                  <label className="font-bold">End Time:</label>
                  <input type="time" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div>
                <label for="clname" className="form-inner-head">
                  Notes:
                </label>
              </div>

              <div className=" border-blue-600 border-2">
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
            </div>
            <div>
              <div class="overflow-x-auto mt-4">
                <table class="min-w-full border-2 border-blue-600 ">
                  <tbody>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex gap-3">
                          <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Question
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
                              Answer
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
                        class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600"
                        rowSpan={4}
                      >
                        <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Location:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600">
                        <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Date:
                          </label>

                          <input
                            type="date"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600">
                        <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Start Time:
                          </label>

                          <input
                            type="time"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600">
                        <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            End Time:
                          </label>

                          <input
                            type="time"
                            className=" w-full border-none focus:outline-none "
                            placeholder="Enter Here..."
                            {...register("client_name")}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Location of Service:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex  gap-3">
                         <div>
                         <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Supervisor Present?

                            </label>
                          </span>
                          <input
                            type="radio"
                          />
                          <label htmlFor="">Yes</label>
                         </div>
                         <div>
                        
                          <input
                            type="radio"
                          />
                          <label htmlFor="">No</label>
                         </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Location of Service:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                        <div class="flex  gap-3">
                         <div>
                         <span>
                            <label
                              for="rec_name"
                              className=" font-bold text-base"
                            >
                              Supervisor Present?

                            </label>
                          </span>
                          <input
                            type="radio"
                          />
                          <label htmlFor="">Yes</label>
                         </div>
                         <div>
                        
                          <input
                            type="radio"
                          />
                          <label htmlFor="">No</label>
                         </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Targets worked on during session:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            What notable maladaptive behaviors were observed?
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-2 border-blue-600 ">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            If "Other", please describe behaviors:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-2 py-3 border-r border-2 border-blue-600 ">
                      <div class="flex flex-wrap flex-col gap-3">
                          <label
                            for="rec_name"
                            className=" font-bold text-base "
                          >
                            Notes:
                          </label>

                          <div className=" border-blue-600 border-2">
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
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center justify-between my-12">
          <button className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
            <AiFillCloud /> Save
          </button>
          <button className=" bg-cyan-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
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

export default SoapNotes;
