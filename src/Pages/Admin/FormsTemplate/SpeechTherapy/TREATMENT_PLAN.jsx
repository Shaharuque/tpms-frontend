import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";
import { Radio } from "antd";

const TREATMENT_PLAN = () => {
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
    <div className="form-border 2xl:w-[85%] w-full mx-auto p-5 bg-white">
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
          <h1>TREATMENT PLAN</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap item-center gap-2 justify-between">
            {" "}
            <div class="flex gap-3">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Client Name:
                </label>
              </span>
              <input
                type="text"
                name="checkedActive"
                placeholder="Enter Your name"
                {...register("checkedActive")}
              />
            </div>
            <div class="flex gap-3">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Date:
                </label>
              </span>
              <input
                type="date"
                name="checkedActive"
                {...register("checkedActive")}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center justify-center my-7">
            <div className="flex gap-3 justify-cneter flex-wrap">
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  Type of Treatment Plan:
                </label>
              </span>
              <input
                type="checkbox"
                name="checkedActive"
                placeholder="Enter Your name"
                {...register("checkedActive")}
              />
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  initial
                </label>
              </span>
              <input
                type="checkbox"
                name="checkedActive"
                placeholder="Enter Your name"
                {...register("checkedActive")}
              />
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  ongoing
                </label>
              </span>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowspan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Goal 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Open Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
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
                          className="form-inner-head font-bold text-base"
                        >
                          Target Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Objective 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Intervention 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter Entervention..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowspan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Goal 2:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Open Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
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
                          className="form-inner-head font-bold text-base"
                        >
                          Target Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Objective 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Intervention 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter Entervention..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowspan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Goal 3:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Open Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
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
                          className="form-inner-head font-bold text-base"
                        >
                          Target Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Objective 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Intervention 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter Entervention..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowspan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Goal 4:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Open Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
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
                          className="form-inner-head font-bold text-base"
                        >
                          Target Date:
                        </label>
                      </span>
                      <input
                        type="date"
                        name="text-name"
                        {...register("text-name")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Objective 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter here..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="">
                      <span>
                        <label
                          for="rec_name"
                          className="form-inner-head font-bold text-base"
                        >
                          Intervention 1:
                        </label>
                      </span>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Enter Entervention..."
                        size="large"
                        className="w-full p-5 form-input-textarea-borderNone"
                      />
                    </div>
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

export default TREATMENT_PLAN;
