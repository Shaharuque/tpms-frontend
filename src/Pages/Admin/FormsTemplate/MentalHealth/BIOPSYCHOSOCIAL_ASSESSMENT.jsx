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
    <div className="form-border 2xl:w-[70%] xl:w-[85%] w-full mx-auto p-5 bg-white">
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
          <div>
            <div className="form-inner-head">
              <h1>2. RESULTS OF RISK ASSESSMENT</h1>
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
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Risk Assessment Results:
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Suicidality:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Low
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Moderate
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={3}
                          >
                            High (Transfer to Emergency Care)
                          </Radio>
                        </Radio.Group>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Other Risk Factors:
                          </label>
                        </span>
                        <br />
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={1}
                          >
                            Low
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={2}
                          >
                            Moderate
                          </Radio>
                          <Radio
                            className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                            value={3}
                          >
                            High (Transfer to Emergency Care)
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
                            If High, immediate referral and disposition
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>3. CHIEF COMPLAINT/PRESENTING PROBLEMS</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            A. Client’s perception of
                            problems/needs/symptoms/behaviors:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            B. Collateral assessments (previous records):
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
          </div>
          <div>
            <div className="form-inner-head">
              <h1>4. PRESENT SYMPTOMS/BEHAVIORS</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Description of current symptoms/behaviors/level of
                            functioning, (description of all/length of time
                            present/impact of above on quality of life).
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
          </div>
          <div>
            <div className="form-inner-head">
              <h1>5. CURRENT STRESSORS</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            A. Environment:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            B. Family:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            C. Cultural Preferences:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            D. Ability to Self-Care:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            E. Language Spoken and Preferred Language:
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
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            F. Community resources accessed by the individual
                            served:
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
          </div>
          <div>
            <div className="form-inner-head">
              <h1>6. BEHAVIORAL HEALTH QUESTIONS:</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            A. Currently in Behavioral Health Services?
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
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If yes, explain:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            B. Currently on Medication for Behavioral Health
                            (i.e. ADHD
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
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If yes, explain:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      colSpan={"2"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            C. Previously in Behavioral Health Services/on
                            Behavioral Health medications:
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
                      <div class="">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            If yes, explain:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>7. TREATMENT HISTORY – (PAST 3-5 YEARS)</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            #
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Services
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Facility/Provider Name
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Dates To/From
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Outcomes
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            1
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            2
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            3
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            4
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            5
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>8. MENTAL STATUS (DESCRIBE EACH)</h1>
            </div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            A. Appearance:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            B. Behavior
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            C. Attitude
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            D. Orientation
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            E. Mood:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            F. Affect
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            G. Thought process/Form:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            H. Thought Content:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            I. Insight/Judgment
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            J. Attention Span:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            K. Intellectual Functioning:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
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
                            L. Psychomotor Behavior:
                          </label>
                        </span>

                        <br />
                        <textarea
                          onChange={(e) => setNotes(e.target.value)}
                          maxLength={300}
                          rows={5}
                          placeholder="Explain..."
                          size="large"
                          className="w-full p-5 form-input-textarea my-3"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="form-inner-head">
              <h1>9. BIOLOGICAL ISSUES/MEDICAL HISTORY – CLIENT</h1>
            </div>
            <div class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
              <div>
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    A. CURRENT MEDICAL CONCERNS
                  </label>
                </span>

                <br />
                <textarea
                  onChange={(e) => setNotes(e.target.value)}
                  maxLength={300}
                  rows={5}
                  placeholder="Explain..."
                  size="large"
                  className="w-full p-5 form-input-textarea my-3"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-x-scroll">
              <table class="min-w-full border-2 border-blue-600 my-8">
                <tbody>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td
                      class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                      colSpan={"5"}
                    >
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            B. CURRENT MEDICATION(S) (LIST ALL):
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            #
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Medication
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Dosage/Frequency
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Prescriber
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            Response
                          </label>
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            1
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            2
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            3
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            4
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base flex items-center justify-center"
                          >
                            5
                          </label>
                        </span>
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Here..."
                          className="  border-none focus:outline-none w-full"
                          {...register("dob")}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
