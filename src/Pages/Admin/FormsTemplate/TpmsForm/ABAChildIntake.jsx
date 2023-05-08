import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo4.png";
import "../../../Style/form.css";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const ABAChildIntake = () => {
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
              <h1>ABA CHILD INTAKE FORM </h1>
              <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            <div>
              <p>* indicates a required field</p>

              <div>
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate "
                  >
                    This form is to be completed by the Parent/Guardian of the
                    client prior to the initialconsultation visit.
                  </label>
                </span>

                <hr />
              </div>

              <h1 className="form-inner-head mt-2 mb-2">
                DEMOGRAPHIC INFORMATION
              </h1>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Email
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Telephone Number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <div className="flex gap-3 mt-3 mb-3">
                  <span>
                    <label
                      for="rec_name"
                      className=" font-bold text-base truncate"
                    >
                      * Full name(first and last)
                    </label>
                  </span>

                  <input
                    type="text"
                    className=" w-full border-b border-blue-600 focus:outline-none "
                    {...register(" recipient_name")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Preferred/Nick Name of Child/Adolescent
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div>
                {" "}
                <div className="flex gap-3 mt-3 mb-3">
                  <span>
                    <label
                      for="rec_name"
                      className=" font-bold text-base truncate"
                    >
                      * Date Of Birth
                    </label>
                  </span>

                  <input
                    type="date"
                    className=" w-full border-b border-blue-600 focus:outline-none "
                    {...register(" recipient_name")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Gender Identity
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Male
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Transboy
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Transgirl
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Genderqueer
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Gender non-conforming
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Another Response
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Refuse to answer
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Preferred Pronouns of Child/Adolescent
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    She/her/hers
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    He/him/his
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    They/them
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Ze/Zir
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Another Response
                  </label>
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  * Preferred Spoken/Written Language
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Sexual Orientation(if determined/chosen/applicable)
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Racial Identity
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Ethnicity
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <div className="flex gap-3 mt-3 mb-3">
                  <span>
                    <label
                      for="rec_name"
                      className=" font-bold text-base truncate"
                    >
                      Religion(if relevant)
                    </label>
                  </span>

                  <input
                    type="text"
                    className=" w-full border-b border-blue-600 focus:outline-none "
                    {...register(" recipient_name")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Familial Religious Practices(if relevant)
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <h1 className="form-inner-head">MEDICAL INFORMATION</h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Insurance Company Name
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Insurance Policy Number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Insurance Group ID (if applicable)
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Child/Adolescent’s Current Height
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  * Child/Adolescent’s Current Weight
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  * Does your child/adolescent have any current health
                  conditions,including infectious diseases? If yes, please list
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  * List any operations, serious illnesses, injuries (especially
                  head),hospitalizations, allergies, ear infections, or other
                  special conditionsyour child/adolescent has had.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does your child/adolescent have a history of seizures?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  * List any medications your child is currently taking,
                  including thedosage, frequency, and any side effects
                  experienced.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does your child/adolescent have any allergies to
                    medications?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does your child/adolescent have any other allergies
                    (seasonal, food,etc.)?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Name of physician
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        * Physician's address
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Physician's phone number
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does your child currently have any diagnoses?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <hr />

              <h1 className="form-inner-head mb-4">EDUCATIONAL INFORMATION</h1>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does your child attend school?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Name of school
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Classroom type
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Teacher/grade
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div>
                <h1 className="form-inner-head my-2">Address</h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Teacher/grade
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <hr />

              <h1 className="form-inner-head">
                CURRENT/PREVIOUS THERAPY PROVIDER INFORMATION
              </h1>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Behavioral provider name
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Behavioral provider contact name/phone number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Behavioral therapy dates of service
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Please state the therapy outcome with the behavioral therapy
                  provider
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-3 mb-3">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy provider name
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy contact name/phone number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Speech therapy dates of service
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Please state the therapy outcome with the behavioral therapy
                  provider
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-3 mb-3">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy provider name
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy contact name/phone number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Speech therapy dates of service
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Please state the therapy outcome with the behavioral therapy
                  provider
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-3 mb-3">
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy provider name
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-3">
                    <span>
                      <label
                        for="rec_name"
                        className=" font-bold text-base truncate"
                      >
                        Speech therapy contact name/phone number
                      </label>
                    </span>

                    <input
                      type="text"
                      className=" w-full border-b border-blue-600 focus:outline-none "
                      {...register(" recipient_name")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Speech therapy dates of service
                  </label>
                </span>

                <input
                  type="text"
                  className=" w-full border-b border-blue-600 focus:outline-none "
                  {...register(" recipient_name")}
                />
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Please state the therapy outcome with the behavioral therapy
                  provider
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <h1 className="form-inner-head">
                CHILD'S CURRENT BEHAVIORS AND EXPECTED OUTCOMES
              </h1>

              <p>Strengths</p>

              <div>
                <h1 className="form-inner-head my-2">
                  * Please list all of your child's strengths such as drawing,
                  writing, computer, etc.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2 mt-3 mb-3">
                  * Please indicate if your child/adolescent engages in any of
                  the following behaviors (check all that apply):
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Please indicate if your child/adolescent engages in any of
                    the following behaviors (check all that apply):
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Medical history and evaluation(s)
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Mental health evaluations
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Developmental and/or social history
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Educational records
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Progress notes, and treatment or closing summary
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Additionally, please indicate if your child is
                    experiencing any of the following (check all that apply)?
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Medical history and evaluation(s)
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Mental health evaluations
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Developmental and/or social history
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Educational records
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Progress notes, and treatment or closing summary
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group-1"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div>
                <h1 className="form-inner-head my-2">
                  Please state the goals that you have for your child/adolescent
                  while engaging in a behavioral program.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <hr />
              <h1 className="mt-3 mb-3">FAMILY BACKGROUND</h1>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Does either parent/guardian’s job require them to be away
                    from home for long hours or extended periods of time that
                    might prevent them from being involved in ABA services and
                    parent training?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Marital Status:
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Married
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Divorced
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Civil Union
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Remarried
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Separated
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Widowed
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Single
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Cohabitants
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Are there siblings?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <h1 className="form-inner-head">
                Please indicate and describe whether any of the siblings have
                any special needs, diagnoses, or concerns.
              </h1>

              <input
                type="text"
                className=" w-full border-b border-blue-600 focus:outline-none "
                {...register(" recipient_name")}
              />

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Are you also interested-in-seeking in seeking services for
                    any of the siblings with special concerns?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Not applicable
                  </label>
                </div>
              </div>

              <hr />

              <h1 className="form-inner-head mt-3 mb-3">
                PSYCHOLOGICAL HISTORY
              </h1>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Please indicate below whether or not there is a history of
                    the following in your immediate family or in either
                    biological parent’s extended family.
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Planning appropriate treatment or program
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Continuing appropriate treatment or program
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Determining eligibility for benefits or program
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Case review
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Updating files
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Other
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Did the birth mother receive regular prenatal care?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    Has your child/adolescent had an outside psychological or
                    psychiatric evaluation?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Has your child/adolescent ever been hospitalized for a
                    psychiatric condition?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <h1 className="form-inner-head my-2">
                  Please provide us with any other information on the
                  psychological history that you feel would be helpful to us in
                  understanding your child/adolescent.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <hr />

              <h1 className="form-inner-head mt-3 mb-3">
                BIRTH AND DEVELOPMENTAL HISTORY
              </h1>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Were there any complications with the pregnancy?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                   * Was birth at full term?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                   * What was the type of delivery?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                   Were there any complications during delivery?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <h1>* What was your child/adolescent’s birth weight?</h1>
              <input
                type="text"
                className=" w-full border-b border-blue-600 focus:outline-none "
                {...register(" recipient_name")}
              />

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Were there any concerns at birth?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Were there any developmental milestones that your child
                    was delayed in or did not achieve?
                  </label>
                </span>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value=""
                    name="send"
                    className="w-4 h-4"
                    {...register("Receive")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    NO
                  </label>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <h1 className="form-inner-head my-2">
                  Please provide us with any other information on the
                  psychological history that you feel would be helpful to us in
                  understanding your child/adolescent.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <hr />



              <h1 className="form-inner-head mt-3 mb-3">Availability for Therapy: You must complete this section</h1>

              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    * Please write your specific availability for Therapy: This is required for us to identify your therapy team.


                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                  Mondays
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Tuesdays
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Wednesdays
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Thursdays
                  </label>
                </div>{" "}
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Fridays
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    Saturdays
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                   Sundays
                  </label>
                </div>
              </div>



              <div className="flex flex-col gap-4 mt-4 mb-4">
                <span>
                  <label
                    for="rec_name"
                    className=" font-bold text-base truncate"
                  >
                    We provide in-home, community-based, and in-center ABA services(located at 7001 Johnnycake Rd, #106, Windsor Mill, MD 21224. Please indicate which location(s) you are interested in receiving services(you may choose more than 1 option). Please note this is a preference and is not guaranteed. We fulfill location requests for center-based services based on available space and medical necessity.
                  </label>
                </span>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("initial_assessment")}
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                    In Home
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                   Community
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="checkbox"
                    value=""
                    name="inline-radio-group"
                    className="w-4 h-4"
                    {...register("reassessment")}
                  />
                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-black dark:text-black"
                  >
                   Center-Based
                  </label>
                </div>{" "}
               
              </div>


              <h1>* How did you hear of our agency?
</h1>
              <input
                type="text"
                className=" w-full border-b border-blue-600 focus:outline-none "
                {...register(" recipient_name")}
              />

























          

              
<div className="mt-3 mb-3">
                <h1 className="form-inner-head my-2">
                Please list any other information that may be helpful while assessing and/or conducting therapy with your child.
                </h1>
                <div className="mt-3 border-blue-600 border-2">
                  <TextArea
                    onChange={(e) => setNotes(e.target.value)}
                    maxLength={300}
                    rows={5}
                    placeholder=" Notes"
                    size="large"
                    className=""
                    {...register("background_information")}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-2 border-blue-600 ">
                    <tbody>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date:
                              </label>
                            </span>
                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Print Name)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td
                          className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                          colSpan={2}
                        >
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_name")}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-2 border-blue-600 ">
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 w-1/4">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Parent/Guardian #1: (Signature)
                              </label>
                            </span>
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <input
                              onClick={handleSignatureCaregiver}
                              type="text"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                          <div className="flex gap-3">
                            <span>
                              <label
                                for="rec_name"
                                className=" font-bold text-base"
                              >
                                Date:
                              </label>
                            </span>
                            <input
                              type="date"
                              className=" w-full border-none focus:outline-none "
                              {...register("BACB_certificate")}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default ABAChildIntake;
