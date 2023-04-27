import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";
import { Radio } from "antd";

const BIOPSYCHOSOCIAL_ASSESSMENT = () => {
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
          <h1>BIOPSYCHOSOCIAL ASSESSMENT</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Mental Health (MH)
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Psychiatric Services
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-inner-head">
            <h1>1. DEMOGRAPHIC INFORMATION:</h1>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
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
                        <label for="rec_name" className=" font-bold text-base">
                          Client MR:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date :
                        </label>
                      </span>

                      <input
                        type="date"
                        placeholder="Enter Here..."
                        className="  border-none focus:outline-none "
                        {...register("dob")}
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Medicaid#:
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          OR Group Insurance#:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date of Birth:
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                    colSpan={"2"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Gender
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
                          None Reported
                        </Radio>
                      </Radio.Group>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                    rowSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Location:
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
                        <label for="rec_name" className=" font-bold text-base">
                          City
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          State
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Zip Code
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600"
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Contact Phone:
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
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <div className="form-inner-head">
                        <h1>A. SERVICE INFORMATION:</h1>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date of Service/Assessment:
                        </label>
                      </span>

                      <input
                        type="date"
                        placeholder="Enter Here..."
                        className="  border-none focus:outline-none "
                        {...register("dob")}
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
                        <label for="rec_name" className=" font-bold text-base">
                          Service/Assessment Type (Check one only):
                        </label>
                      </span>
                      <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          Brief
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Bio-psychosocial
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={3}
                        >
                          In-Depth
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={4}
                        >
                          Others
                        </Radio>
                      </Radio.Group>
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
                    <div class="flex gap-3">
                      <div className="form-inner-head">
                        <h1>B. LOCATION OF SERVICE:</h1>
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
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Service/Assessment Type (Check one only):
                        </label>
                      </span>
                      <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          Office
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Home
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={3}
                        >
                          School
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={4}
                        >
                          Community
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={4}
                        >
                          Others
                        </Radio>
                      </Radio.Group>
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
                    <div class="flex gap-3">
                      <div className="form-inner-head">
                        <h1>C. LANGUAGE /TRANSLATOR NEEDS: </h1>
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
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Service/Assessment Type (Check one only): <br />{" "}
                          Translator
                        </label>
                      </span>
                      <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          No
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Yes
                        </Radio>

                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={4}
                        >
                          Explain
                        </Radio>
                      </Radio.Group>
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Primary language spoken:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Primary language written:
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
                    <div class="flex gap-3">
                      <div className="form-inner-head">
                        <h1>D. SOURCE OF INFORMATION</h1>
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
                      <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          Client
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Parent/Guardian
                        </Radio>

                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={3}
                        >
                          Family Members
                        </Radio>

                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={4}
                        >
                          Identify Collaterals
                        </Radio>
                      </Radio.Group>
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
                    <div class="flex gap-3">
                      <div className="form-inner-head">
                        <h1>E. REFERRAL SOURCE INFORMATION</h1>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Relationship to Client (Explain):
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Name:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Address:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Phone:
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Release of information reviewed and signed:
                        </label>
                      </span>
                      <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          No
                        </Radio>
                        <Radio
                          className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Yes
                        </Radio>
                      </Radio.Group>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          (If the answer is yes): Reason for
                          assessment/referral:
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

export default BIOPSYCHOSOCIAL_ASSESSMENT;
