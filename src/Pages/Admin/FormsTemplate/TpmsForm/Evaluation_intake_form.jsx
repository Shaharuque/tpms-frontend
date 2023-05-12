import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Radio } from "antd";

const Evaluation_intake_form = () => {
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
  const onSubmit = (data) => {
    console.log(data);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
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
              <h1>SBH NOTICE OF PRIVACY PRACTICES</h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <p className="text-base font-medium my-7">
                This form is to be completed by the Parent/Guardian of the
                client prior to the initialconsultation visit.
              </p>
              <hr />
              <h1 className="form-input-name-black  my-5">
                DEMOGRAPHIC INFORMATION
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Email
                    </label>
                  </span>

                  <input
                    type="email"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Telephone Number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Full name(first
                      and last)
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Preferred/Nick Name of Child/Adolescent
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Date Of Birth
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <hr />
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Gender Identity
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Male
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      Female
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={3}
                    >
                      Transboy
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={4}
                    >
                      Transgirl
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={5}
                    >
                      Genderqueer
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={6}
                    >
                      Gender non-conforming
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={7}
                    >
                      Another Response
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={8}
                    >
                      Refuse to answer
                    </Radio>
                  </Radio.Group>
                </div>
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Preferred
                      Pronouns of Child/Adolescent
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      She/her/hers
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      He/him/his
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={3}
                    >
                      They/them
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={4}
                    >
                      Ze/Zir
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={5}
                    >
                      Another
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={6}
                    >
                      Response
                    </Radio>
                  </Radio.Group>
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Preferred
                      Spoken/Written Language
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Preferred Sexual Orientation(if
                      determined/chosen/applicable)
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div class="">
                  <label for="rec_name" className=" font-bold text-base my-4">
                    <span className="text-rose-500">*</span> Racial Identity
                  </label>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="">
                  <label for="rec_name" className=" font-bold text-base my-4">
                    <span className="text-rose-500">*</span> Ethnicity
                  </label>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <label for="rec_name" className=" font-bold text-base my-4">
                    Religion(if relevant)
                  </label>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Familial Religious Practices(if relevant)
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
              </div>
              <hr />
              <h1 className="form-input-name-black  my-5">
                MEDICAL INFORMATION
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span>{" "}
                      Child/Adolescent’s Current Height
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Does your child/adolescent have any current health
                      conditions,including infectious diseases? If yes, please
                      list
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      List any operations, serious illnesses, injuries
                      (especially head),hospitalizations, allergies, ear
                      infections, or other special conditionsyour
                      child/adolescent has had.
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Does your
                      child/adolescent have a history of seizures?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> List any
                      medications your child is currently taking, including
                      thedosage, frequency, and any side effects experienced.
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Does your
                      child/adolescent have any allergies to medications?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Does your
                      child/adolescent have any other allergies (seasonal,
                      food,etc.)?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Name of physician
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Physician's
                      address
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className="text-rose-500">*</span> Physician's phone
                      number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>
                <div>
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Does your child
                      currently have any diagnoses?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
              </div>
              <hr />
              <h1 className="form-input-name-black  my-5">
                EDUCATIONAL INFORMATION
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                <div className="sm:col-span-2">
                  <div>
                    <div className="my-2 font-bold text-base">
                      <span className="text-rose-500">*</span> Does your child
                      attend school?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Name of school
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Classroom type
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Teacher/grade
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Address
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      School phone number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
              </div>
              <hr />

              <h1 className="form-input-name-black  my-5">
                CURRENT/PREVIOUS THERAPY PROVIDER INFORMATION
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Behavioral provider contact name/phone number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Behavioral provider name
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Behavioral therapy dates of service
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Please state the therapy outcome with the behavioral
                      therapy provider
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Speech therapy provider name
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Speech therapy contact name/phone number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Speech therapy dates of service
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Please state the therapy outcome with the speech therapy
                      provider
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Occupational therapy provider name
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Occupational therapy contact name/phone number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Occupational therapy dates of service
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Please state the therapy outcome with the occupational
                      therapy provider
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Other therapy provider name
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div>
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Other therapy contact name/phone number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Other therapy dates of service number
                    </label>
                  </span>

                  <input
                    type="input"
                    className="border-none form-select-border-bottom w-full my-2 py-1"
                    placeholder="Enter here..."
                    {...register("session_length")}
                  />
                </div>{" "}
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      Please state the therapy outcome with the other therapy
                      provider
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
              </div>
              <h1 className="form-input-name-black  my-5">
                CHILD'S CURRENT BEHAVIORS AND EXPECTED OUTCOMES
              </h1>
              <h1 className="form-input-name-black  my-5">Strengths</h1>
              <div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className=" text-rose-500">*</span> Please list all
                      of your child's strengths such as drawing, writing,
                      computer, etc.
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div>
                  <label className="form-inner-head my-3">
                    Please indicate if your child/adolescent engages in any of
                    the following behaviors (check all that apply):
                  </label>
                  <div class="my-5">
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base my-4"
                        >
                          Hitting (e.g., punch, slap, etc.)
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
                          className=" font-bold text-base my-4"
                        >
                          Kicking
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
                          className=" font-bold text-base my-4"
                        >
                          Biting
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
                          className=" font-bold text-base my-4"
                        >
                          Pinching
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
                          className=" font-bold text-base my-4"
                        >
                          Head-butting
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
                          className=" font-bold text-base my-4"
                        >
                          Scratching
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
                          className=" font-bold text-base my-4"
                        >
                          Spitting
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
                          className=" font-bold text-base my-4"
                        >
                          Hitting self with hands or fists
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
                          className=" font-bold text-base my-4"
                        >
                          Kicking self
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
                          className=" font-bold text-base my-4"
                        >
                          Biting self
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
                          className=" font-bold text-base my-4"
                        >
                          Head-butting walls, windows, etc.
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
                          className=" font-bold text-base my-4"
                        >
                          Pulling teeth
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
                          className=" font-bold text-base my-4"
                        >
                          Scratching skin
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
                          className=" font-bold text-base my-4"
                        >
                          Cutting/burning
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
                          className=" font-bold text-base my-4"
                        >
                          Property Destruction
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
                          className=" font-bold text-base my-4"
                        >
                          Eloping
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
                          className=" font-bold text-base my-4"
                        >
                          Sensory concerns
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
                          className=" font-bold text-base my-4"
                        >
                          Sexualized behaviors
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
                          className=" font-bold text-base my-4"
                        >
                          Self-urinating/defecating
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
                          className=" font-bold text-base my-4"
                        >
                          Fecal smearing
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
                          className=" font-bold text-base my-4"
                        >
                          Fecal smearing
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
                          className=" font-bold text-base my-4"
                        >
                          Rectal digging
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
                          className=" font-bold text-base my-4"
                        >
                          Difficulty with toileting
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
                          className=" font-bold text-base my-4"
                        >
                          Defiance or problems with authority
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
                          className=" font-bold text-base my-4"
                        >
                          Problems with eating
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
                          className=" font-bold text-base my-4"
                        >
                          Tantrums
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
                          className=" font-bold text-base my-4"
                        >
                          Screaming/yelling
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
                          className=" font-bold text-base my-4"
                        >
                          Vocalizations
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
                          className=" font-bold text-base my-4"
                        >
                          Repetitive
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
                          className=" font-bold text-base my-4"
                        >
                          behaviors
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
                          className=" font-bold text-base my-4"
                        >
                          Other
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-inner-head my-3">
                    Additionally, please indicate if your child is experiencing
                    any of the following (check all that apply)?
                  </label>
                  <div class="my-5">
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base my-4"
                        >
                          Isolated socially from peers
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
                          className=" font-bold text-base my-4"
                        >
                          Difficulty making friends
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
                          className=" font-bold text-base my-4"
                        >
                          Problems keeping friends
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
                          className=" font-bold text-base my-4"
                        >
                          Sleep problems
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
                          className=" font-bold text-base my-4"
                        >
                          Bedwetting
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
                          className=" font-bold text-base my-4"
                        >
                          Fire setting
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
                          className=" font-bold text-base my-4"
                        >
                          Anxiety
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
                          className=" font-bold text-base my-4"
                        >
                          Sadness or depression
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
                          className=" font-bold text-base my-4"
                        >
                          Hallucinations
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
                          className=" font-bold text-base my-4"
                        >
                          Delusions
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
                          className=" font-bold text-base my-4"
                        >
                          Suicidal ideation/attempts
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
                          className=" font-bold text-base my-4"
                        >
                          Legal situations
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
                          className=" font-bold text-base my-4"
                        >
                          History of physical abuse
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
                          className=" font-bold text-base my-4"
                        >
                          History of sexual abuse
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
                          className=" font-bold text-base my-4"
                        >
                          Alcohol use/abuse
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
                          className=" font-bold text-base my-4"
                        >
                          Drug use/abuse including nicotine and/or illegal drugs
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
                          className=" font-bold text-base my-4"
                        >
                          Difficulty
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
                          className=" font-bold text-base my-4"
                        >
                          concentrating
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="">
                <span>
                  <label for="rec_name" className=" font-bold text-base my-4">
                    Please state the goals that you have for your
                    child/adolescent while engaging in a behavioral program.
                  </label>
                </span>

                <textarea
                  maxLength={300}
                  rows={5}
                  placeholder="Enter here..."
                  size="large"
                  className="w-full p-5 form-input-textarea mt-2 mb-6"
                />
              </div>
              <hr />
              <h1 className="form-input-name-black  my-5">FAMILY BACKGROUND</h1>
              <div>
                <h1 className="form-input-name-black  my-5">Marital Status:</h1>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Marital Status:
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Married
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      Divorced
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={3}
                    >
                      Civil
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={4}
                    >
                      Union
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={5}
                    >
                      Remarried
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={6}
                    >
                      Separated
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={7}
                    >
                      Widowed
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={8}
                    >
                      Single
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={9}
                    >
                      Cohabitants
                    </Radio>
                    <br />
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Are there siblings?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="my-2 font-bold text-base">
                  Please indicate and describe whether any of the siblings have
                  any special needs, diagnoses, or concerns.
                </div>
                <hr className="p-1 my-3" />
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Are you also interested-in-seeking in seeking services for
                      any of the siblings with special concerns?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      Not applicable
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Are there any other individuals residing in the house or
                      that play a significant role on how this child is raised?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <hr className="p-1 my-3" />
                <h1 className="form-input-name-black  my-5">
                  PSYCHOLOGICAL HISTORY
                </h1>
                <div>
                  <label className="form-inner-head my-3">
                    Please indicate below whether or not there is a history of
                    the following in your immediate family or in either
                    biological parent’s extended family.
                  </label>
                  <div class="my-5">
                    <div class="flex gap-3">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span>
                        <label
                          for="rec_name"
                          className=" font-bold text-base my-4"
                        >
                          Autism Spectrum Disorder Learning
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
                          className=" font-bold text-base my-4"
                        >
                          Problems/Disabilities
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
                          className=" font-bold text-base my-4"
                        >
                          ADD/ADHD
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
                          className=" font-bold text-base my-4"
                        >
                          Clinical Depression
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
                          className=" font-bold text-base my-4"
                        >
                          Bipolar Disorder
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
                          className=" font-bold text-base my-4"
                        >
                          Behavior Problems in School
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
                          className=" font-bold text-base my-4"
                        >
                          Anxiety Disorders(e.g., OCD, etc.)
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
                          className=" font-bold text-base my-4"
                        >
                          Intellectual Disability
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
                          className=" font-bold text-base my-4"
                        >
                          Psychosis/Schizophrenia
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
                          className=" font-bold text-base my-4"
                        >
                          Substance Abuse/Dependence
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
                          className=" font-bold text-base my-4"
                        >
                          Other Mental Health Concerns Hitting (e.g., punch,
                          slap, etc.)
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Has your child/adolescent had an outside psychological or
                      psychiatric evaluation?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className=" text-rose-500">*</span> Please list all
                      If yes, please provide the name of assessing provider,
                      including credential/license
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className=" text-rose-500">*</span> If yes, please
                      provide additional information regarding prior
                      psychological testing (including tests performed, dates,
                      outcome, recommendations):
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Has your child/adolescent ever been hospitalized for a
                      psychiatric condition?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className=" text-rose-500">*</span>Please provide us
                      with any other information on the psychological history
                      that you feel would be helpful to us in understanding your
                      child/adolescent.
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
                </div>
                <hr />
                <h1 className="form-input-name-black  my-5">
                  BIRTH AND DEVELOPMENTAL HISTORY
                </h1>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Did the birth mother receive regular prenatal care?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Were there any complications with the pregnancy?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Was birth at full term?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      * What was the type of delivery?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Spontaneous
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      Induced
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      Vaginal
                    </Radio>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      C-Section
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Were there any complications during delivery?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      What was your child/adolescent’s birth weight?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <hr />
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Were there any concerns at birth?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      Were there any developmental milestones that your child
                      was delayed in or did not achieve?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="">
                  <div>
                    <div className="my-2 font-bold text-base">
                      How did you hear of our agency?
                    </div>
                  </div>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={1}
                    >
                      Yes
                    </Radio>
                    <br />
                    <Radio
                      className="text-[16px] ml-2 my-1 text-gray-700 gap-1 font-medium"
                      value={2}
                    >
                      No
                    </Radio>
                  </Radio.Group>
                </div>
                <hr />
                <div class="sm:col-span-2 my-4">
                  <span>
                    <label for="rec_name" className=" font-bold text-base my-4">
                      <span className=" text-rose-500">*</span>Please list any
                      other information that may be helpful while evaluating
                      your child.
                    </label>
                  </span>

                  <textarea
                    maxLength={300}
                    rows={5}
                    placeholder="Enter here..."
                    size="large"
                    className="w-full p-5 form-input-textarea mt-2 mb-6"
                  />
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
                <button className=" bg-purple-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiFillCloud /> Save
                </button>
                <button className=" bg-cyan-900 text-white flex items-center px-2 py-3 gap-1 text-lg font-semibold rounded-md my-2">
                  <AiOutlinePrinter /> Print
                </button>
              </div>

              <div className="flex flex-wrap gap-2 items-center justify-between form-footer">
                <div className="text-black">
                  Demo Institution{" "}
                  <span className=" font-normal">somewhere in america</span>
                </div>
                <div>
                  Phone: 000-000-0000, Email: demo@example.com, Fax:
                  000.000.0000, example.com
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Evaluation_intake_form;
