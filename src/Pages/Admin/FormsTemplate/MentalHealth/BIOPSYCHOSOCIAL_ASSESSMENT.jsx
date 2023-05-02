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
          {" "}
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 mt-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div className=" font-semibold text-base">
                        <span className="form-inner-head">C. ALLERGIES </span>
                        (List all and reactions):
                      </div>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Explain..."
                        size="large"
                        className="w-full p-5 form-input-textarea-border-none my-3"
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className="form-inner-head">D. NUTRITIONAL </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Recent weight gain/loss (# of pounds and over what
                          time period):
                        </label>
                      </span>

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
                          Weight Gained (lbs.)
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
                          Weight Lost (lbs.)
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
                          Time Period
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
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
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Change in eating habits:
                        </label>
                      </span>
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
                        <label for="rec_name" className=" font-bold text-base">
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
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Eat portion of dairy, fruit/vegetables, lean protein
                          at least once per day?
                        </label>
                      </span>
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
                        <label for="rec_name" className=" font-bold text-base">
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
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Difficulty securing food because of limited resources:
                        </label>
                      </span>
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
                        <label for="rec_name" className=" font-bold text-base">
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
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className="form-inner-head">
                          E. EATING DISORDERS
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Do you make yourself sick because you <br /> feel{" "}
                          uncomfortably full?
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
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Do you worry that you have lost <br /> control over
                          how much you eat?
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
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Have you recently lost more than <br /> 15 lbs. in a
                          3-month period?
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
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className="form-inner-head">
                          F. PHYSICAL PAIN{" "}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Are you in any physical pain?
                        </label>
                      </span>

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
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Does it prevent you from engaging in daily living
                          activities?
                        </label>
                      </span>

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
                      <div className=" font-semibold text-base mt-1">
                        (If yes, Explain):
                      </div>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Explain..."
                        size="large"
                        className="w-full p-5 form-input-textarea-border-none "
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div>
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Does it prevent you from engaging in daily living
                          activities?
                        </label>
                      </span>

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
                      <div className=" font-semibold text-base mt-1">
                        (If yes, Explain):
                      </div>
                      <br />
                      <textarea
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={300}
                        rows={3}
                        placeholder="Explain..."
                        size="large"
                        className="w-full p-5 form-input-textarea-border-none "
                      />
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className="form-inner-head">
                          G. FAMILY MEMBERS MEDICAL/PSYCHIATRIC HISTORY
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          G. FAMILY MEMBERS MEDICAL/PSYCHIATRIC HISTORY
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Family Member
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Medical/Psychiatric Issues
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Mother
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span className=" text-base font-semibold flex items-center justify-center">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Father
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span className=" text-base font-semibold flex items-center justify-center">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Siblings
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span className=" text-base font-semibold flex items-center justify-center">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Grandparents
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span className=" text-base font-semibold flex items-center justify-center">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          Others
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <span className=" text-base font-semibold flex items-center justify-center">
                        <input
                          type="text"
                          className=" w-full border-none focus:outline-none"
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="">
                      <div>
                        <span className=" text-base font-semibold flex items-center justify-center">
                          H. SLEEPING BEHAVIORS
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div>
                        <label
                          for="rec_name"
                          className=" font-bold text-base flex items-center justify-center"
                        >
                          Weight Lost (lbs.)
                        </label>
                      </div>
                    </td>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="">
                      <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "> 
                        <div>
                          <div>
                            <input
                              type="text"
                              placeholder="Enter Here..."
                              className="  border-none focus:outline-none w-full"
                              {...register("dob")}
                            />
                          </div>
                        </div>
                      </td>
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
