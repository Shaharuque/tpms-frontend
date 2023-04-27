import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import SignatureModal from "../SignatureManage/SignatureModal";
import { Radio } from "antd";

const THERAPIST_COMMUNICATION_SESSION_NOTES = () => {
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
          <h1>THERAPIST COMMUNICATION/SESSION NOTES</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {" "}
            <p>
              <u className="">Each section must be filled in its entirety. </u>
              If an area does not apply during a session date, Please write N/A
              or none
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1 my-5">
              <div className="flex flex-wrap gap-3 my-2">
                <div>
                  <label className="form-input-name-black ">
                    Client Full Name:{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                <span>
                  <label className="form-input-name-black ">Date:</label>
                </span>
                <span>
                  <input
                    type="date"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </span>
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                <span>
                  <label className="form-input-name-black ">Start Time:</label>
                </span>
                <span>
                  <input
                    type="time"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </span>
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                <span>
                  <label className="form-input-name-black ">End Time:</label>
                </span>
                <span>
                  <input
                    type="time"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap my-5">
              <div>
                <label className="form-inner-head">Client Full Name: </label>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Home
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Center
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Community
                  </label>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap my-5">
              <div>
                <label className="form-inner-head">People Present</label>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Client
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Therapist
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Parent
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Caregiver
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    BCBA
                  </label>
                </span>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="checkedActive"
                  {...register("checkedActive")}
                />
                <span>
                  <label for="rec_name" className=" font-bold text-base">
                    Other:{" "}
                  </label>
                </span>
                <div>
                  <input
                    type="text"
                    className="  border-b-2  border-blue-600 focus:outline-none w-full"
                    {...register("client_name")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 my-8">
              <tbody>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowSpan={"2"}
                  >
                    <label className="form-inner-head">
                      Any dangerous behaviors <br /> during session? <br />
                      <span className="text-rose-500 font-normal">
                        (circle all that apply)
                      </span>
                    </label>
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
                          Aggression
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
                          Non-compliance
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
                          Leaving area
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Inattention
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
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
                          Difficult to motivate
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
                          Obsessive/preservative
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Other:
                        </label>
                      </span>
                      <div>
                        <input
                          type="text"
                          className="  border-b-2  border-blue-600 focus:outline-none w-full"
                          {...register("client_name")}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <label className="form-inner-head">ABC LOG</label>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"5"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Was an ABC Log completed on new or challenging
                          behaviors?
                        </label>
                      </span>
                      <Radio.Group value={value}>
                        <Radio
                          className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          Yes
                        </Radio>
                        <Radio
                          className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
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
                    rowSpan={"2"}
                  >
                    <label className="form-inner-head">
                      Interventions utilized <br />
                      <span className="text-rose-500 font-normal">
                        (circle all that apply):
                      </span>
                    </label>
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
                          Discrete trial training (DTT)
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
                          Natural Environment <br /> Training (NET)
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
                          Mand training (requests)
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Task analysis (TA)
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
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
                          Behavior Intervention Plan (BIP)
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
                          Shaping Behavior
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
                          Skills Training (BST)
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"2"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Other:
                        </label>
                      </span>
                      <div>
                        <input
                          type="text"
                          className="  border-b-2  border-blue-600 focus:outline-none w-full"
                          {...register("client_name")}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowSpan={"3"}
                  >
                    <label className="form-inner-head">
                      Program areas worked on <br />
                      <span className="text-rose-500 font-normal">
                        (circle all that apply):
                      </span>
                    </label>
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
                          Communication
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
                          Pairing/Rapport
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Social Skills
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
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
                          Adaptive/Self-care
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
                          Play Skills
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Fluency
                        </label>
                      </span>
                    </div>
                  </td>
                </tr>
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
                          Tolerance of Novelty/Changes
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
                          Self-Management/Regulation
                        </label>
                      </span>
                    </div>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Other:
                        </label>
                      </span>
                      <div>
                        <input
                          type="text"
                          className="  border-b-2  border-blue-600 focus:outline-none w-full"
                          {...register("client_name")}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    rowSpan={"2"}
                  >
                    <label className="form-inner-head">
                      Client independent responding <br /> over entire session
                    </label>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <label className="form-inner-head">1</label>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <label className="form-inner-head">2</label>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <label className="form-inner-head">3</label>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <label className="form-inner-head">4</label>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3 justify-center">
                      <label className="form-inner-head">5</label>
                    </div>
                  </td>
                </tr>
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
                          Few correct
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
                          Some correct
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
                          Most correct
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
                          all correct
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
                          None correct
                        </label>
                      </span>
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
                      <label className="form-inner-head">
                        Things that were motivating/wanted
                        <span className="text-rose-500 font-normal">
                          (even if for problem behavior):
                        </span>
                      </label>
                    </div>
                    <textarea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter here..."
                      size="large"
                      className="w-full p-5 form-input-textarea my-2"
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <label className="form-inner-head">What went well?</label>
                    </div>
                    <textarea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter here..."
                      size="large"
                      className="w-full p-5 form-input-textarea my-2"
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <label className="form-inner-head">
                        What was a struggle?
                      </label>
                    </div>
                    <textarea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter here..."
                      size="large"
                      className="w-full p-5 form-input-textarea my-2"
                    />
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <label className="form-inner-head">
                        What do you need or need help with?
                      </label>
                    </div>
                    <textarea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter here..."
                      size="large"
                      className="w-full p-5 form-input-textarea my-2"
                    />
                  </td>
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <label className="form-inner-head">
                        If this was a supervision session check the appropriate
                        box
                      </label>
                    </div>
                    <div>
                      <div class="flex gap-3">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            My questions can wait until next supervision session
                          </label>
                        </span>
                      </div>
                      <div class="flex gap-3">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            I still need more clarification on some things
                          </label>
                        </span>
                      </div>
                      <div class="flex gap-3">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            before my next session All of my questions/concerns
                          </label>
                        </span>
                      </div>
                      <div class="flex gap-3">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            were addressed N/A
                          </label>
                        </span>
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
                      <label className="form-inner-head">
                        Therapist Communication/Comments:
                      </label>
                    </div>
                    <textarea
                      onChange={(e) => setNotes(e.target.value)}
                      maxLength={300}
                      rows={5}
                      placeholder="Enter here..."
                      size="large"
                      className="w-full p-5 form-input-textarea my-2"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            {" "}
            <div class="flex gap-3">
              <label className="form-inner-head">
                PARENT COMMENTS/QUESTIONS:
              </label>
            </div>
            <div>
              <span>
                <label for="rec_name" className=" font-bold text-base">
                  1) Any dangerous behaviors reported since last sessions?
                </label>
              </span>
              <Radio.Group value={value}>
                <Radio
                  className="text-[16px] ml-1 my-1 text-gray-700 gap-1 font-medium"
                  value={1}
                >
                  Yes
                </Radio>
                <Radio
                  className="text-[16px]  my-1 text-gray-700 gap-1 font-medium"
                  value={2}
                >
                  No
                </Radio>
              </Radio.Group>
            </div>
          </div>

          <div class="flex gap-3">
            <label className="form-inner-head">
              <span className="text-rose-500 font-normal">Explain if yes:</span>
            </label>
          </div>

          <textarea
            onChange={(e) => setNotes(e.target.value)}
            maxLength={300}
            rows={5}
            placeholder="Enter here..."
            size="large"
            className="w-full p-5 form-input-textarea my-2"
          />
          <div class="flex gap-3 my-5">
            <label className="form-inner-head">
              <span className="text-rose-500 font-normal"> Note:</span>
              Please forward all parent comments/questions to program
              managers/clinical mangers within 48 hours.
            </label>
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

export default THERAPIST_COMMUNICATION_SESSION_NOTES;
