import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const FARS_FORM = () => {
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
            <p className="my-2">
              <span className="form-head">Mail: </span>demo@example.com
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Email: </span>demo@example.com
              </Link>
            </p>
            <p className="my-2">
              <span className="form-head">Phone: </span> 000-000-0000
            </p>
            <p className="my-2">
              <Link to={"#"}>
                <span className="form-head">Fax: </span>000.000.0000
              </Link>
            </p>
          </div>
        </div>
        <div className="form-title my-5">
          <h1>FARS FORM</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Client’s Name:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Last:
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
                          Fast :
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
                          Middle
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Initial Evaluation Date from Adult MH Outcome Form at
                          admission to agency:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date
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
                          1. *Social Security #:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
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
                          2. Provider ID #:
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
                          3. *Purpose of Evaluation:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date
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
              </tbody>
            </table>
          </div>
          <div className=" flex flex-wrap gap-4 item-center text-[16px] text-gray-700 font-medium">
            <div>Choices : </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                Admission to Agency
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                6 Month Eval
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                Annual Eval
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                Discharge from Agency
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                Administrative Discharge
              </span>
            </div>
            <div className="flex ml-1  mr-2 items-center ">
              <input
                type="checkbox"
                name="checkedActive"
                {...register("checkedActive")}
              />
              <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                None of the Above
              </span>
            </div>
          </div>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          4. *Evaluation Date:
                        </label>
                      </span>
                      <br />
                      <input
                        type="date"
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
                          5. *District:
                        </label>
                      </span>
                      <br />
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
                          6. *Site ID:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
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
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          7. M-GAF Score:
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          1-99 used for clients who are receiving
                          medications-only service
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          NOTE: If score entered, selection of Rating Scales is
                          Not Required
                        </label>
                      </span>
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
                          8. *FARS Rater ID:
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
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          NOTE: Full Rater ID is required
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Definition for first two digits:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          01- Non Degree Trained Technician
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          04 – MA/MS
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          07 – MD/DO – Board Certified
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          02- Non Degree Trained Technician
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          05 – MA/MS Licensed Practitioner
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span></span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          03- Non Degree Trained Technician
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          06 – PhD/PsyD/EdD – Licensed Practitioner
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-head my-5 w-full">
            <h1>*FARS PROBLEM SEVERITY RATING SCALES:</h1>
          </div>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"9"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Assign a severity Rating Number to each Section to
                          describe the consumer’s problems or assets during the
                          last 3 weeks. Mark an “X” through this section if
                          completing this form at the 3 or 9-month interval
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          1. No Problem
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          2. Less Than Slight
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          3. Slight Problem
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          4. Slight to Moderate
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          5. Moderate Problem
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          6. Moderate to Severe
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          7. Severe Problem
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          8. Severe Extreme
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          9. Extreme Problem
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          a. *Depression:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          f. *Medical/Physical:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          k. *Family Environment:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          p. *Danger to Others:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          b. *Anxiety:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          g. *Traumatic Stress:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          l. *ADL Functioning:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          q. *Danger to Self:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          c. *Hyper Affective:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          h. *Substance Abuse:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          m. *Socio-Legal:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          r. *Security Management:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          d. *Thought Process:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          i. *Interpersonal Relationships:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          n. *Work/School Perform:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base"
                        ></label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          e. *Cognitive Performace
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          j. *Family Relationships:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          o. *Ability to Care for Self:
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base"
                        ></label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="form-head mb-5 w-full">
            <h1>(*MANDATORY FIELDS)</h1>
          </div>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          CBH Representative:
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
                          (Print Name) :
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
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          CBH Representative Signature:
                        </label>
                      </span>

                      <button
                        className="flex items-center text-lg hover:underline hover:text-rose-800 font-medium gap-1 text-[#207ac7]"
                        onClick={handleSignatureProvider}
                      >
                        Provider Signature
                        <FaSignature className="text-lg" />
                      </button>
                    </div>
                  </td>

                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Date:
                        </label>
                      </span>

                      <input
                        type="date"
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
          <h1 className="form-small-title my-5 ml-1 w-full">
            ADULT MH OUTCOMES/FARS FORM SCHEDULE
          </h1>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3 justify-center">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          ~ Upon admission or initiation – MH Outcomes and FARS
                          Section Only
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          ~ 3 months – MH OutcomesOnly
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          ~ 6 months – MH Outcomes and FARS
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          ~ 9 months – MH Outcomes Section Only
                        </label>
                      </span>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          ~ 12 months – MH Outcomes and FARS
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div>
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
          Demo Institution
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

export default FARS_FORM;
