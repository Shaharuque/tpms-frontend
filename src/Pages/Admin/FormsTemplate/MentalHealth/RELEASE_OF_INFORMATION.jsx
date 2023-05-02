import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Radio } from "antd";

const RELEASE_OF_INFORMATION = () => {
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
    <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
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
          <h1>RELEASE OF INFORMATION FROM CBH TO OTHER ORGANIZATION</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            I,
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            (print name of Client or parent/guardian, if minor child), hereby
            authorize: CBH, Inc. -
            <input
              type="text"
              className=" my-3 form-bottom-border focus:outline-none "
              placeholder="Enter Here..."
              {...register("client_name")}
            />
            (print name of CBH staff) <br /> <br /> To release information
            consisting of (indicate the specific information that may be
            released, i.e. Psychiatric, Medical Records or Information; Social
            History, Psychological Records or Information, Educational or School
            Records, etc)
            <span className=" font-semibold">
              LIST SPECIFICALLY WHAT YOU WANT RELEASED:
            </span>
          </p>
          <div className="overflow-x-scroll my-7">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Assessment (Type and Date) :
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
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Treatment Plan/Review (Type and Date):
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
                          Summary (Type and Date):
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
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Behavioral Analysis (Type and Date):
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
                          Other Testing (Type and Date):
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
                    colSpan={"4"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Other (Explain):
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
                    colSpan={"2"}
                  >
                    <div className="text-[16px] font-medium">
                      Regarding: <br />
                      <Radio.Group onChange={onChange} value={value}>
                        <Radio
                          className="text-[16px] my-1 text-gray-700 gap-1 font-medium"
                          value={1}
                        >
                          Myself
                        </Radio>
                        <Radio
                          className="text-[16px] my-1 text-gray-700 gap-1 font-medium"
                          value={2}
                        >
                          Minor Child
                        </Radio>
                        <Radio
                          className="text-[16px] my-1 text-gray-700 gap-1 font-medium"
                          value={3}
                        >
                          Other(Explain)
                        </Radio>
                        <input
                          type="text"
                          className=" my-3 form-bottom-border focus:outline-none "
                          placeholder="Enter Here..."
                          {...register("client_name")}
                        />
                      </Radio.Group>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-2 border-blue-600 ">
                  <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Check one :
                        </label>
                      </span>
                      <div className="flex ml-1  mr-2 items-center ">
                        <input
                          type="checkbox"
                          name="checkedActive"
                          {...register("checkedActive")}
                        />
                        <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                          Child Name :
                        </span>
                      </div>
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
                    colSpan={"4"}
                  >
                    <div className="flex ml-1  mr-2 items-center ">
                      <input
                        type="checkbox"
                        name="checkedActive"
                        {...register("checkedActive")}
                      />
                      <span className="text-[16px] ml-2 text-gray-700 gap-1 font-medium">
                        Date of Birth
                      </span>
                    </div>
                    <input
                      type="date"
                      className=" w-full border-none focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="form-head my-5 w-full">
              <h1>
                FOR THE PURPOSE OF ASSISTING WITH DIAGNOSIS, TREATMENT, OR
                REHABILITATION TO:
              </h1>
            </div>
            <div className="form-input-border">
              Enter Name and Address of Organization to whom the information is
              being released{" "}
              <input
                type="text"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />
            </div>
            <p className="text-[16px] font-normal my-5">
              I understand that only the above specified information can be
              disclosed by the above specified organization. <br /> <br /> This
              information has been disclosed to you from the records protected
              by Federal confidentiality rules (42 CFR part 2). The federal
              rules prohibit you from making any further disclosure of this
              information unless further disclosure is expressly permitted by
              the 42 CFR part 2. A general authorization for the release of
              medical or other information is not sufficient for this purpose.
              <br /> <br />
              This consent or authorization for release of information shall be
              effective the date of signature and shall expire one year from the
              date of signature, which is (enter date){" "}
              <input
                type="date"
                className=" my-3 form-bottom-border focus:outline-none "
                placeholder="Enter Here..."
                {...register("client_name")}
              />{" "}
              , or at the time services are concluded if before one year, or at
              anytime if revoked by the Client and/or parent/guardian. I also
              understand that I may revoke this consent or authorization at
              anytime, providing I notify the program in writing to this effect.
              Revocation has no effect on action previously taken.
            </p>
          </div>
          <div>
            {" "}
            <div className="form-head my-5 w-full">
              <h1>
                FOR THE PURPOSE OF ASSISTING WITH DIAGNOSIS, TREATMENT, OR
                REHABILITATION TO:
              </h1>
            </div>
            <div className="overflow-x-scroll my-7">
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  {" "}
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            Client’s Name:
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
                      colSpan={"4"}
                    >
                      <div class="flex gap-3">
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
                            Parent/Guardian’s Name:
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
                      colSpan={"4"}
                    >
                      <div class="flex gap-3">
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
                            Witness Name:
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
                      colSpan={"4"}
                    >
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
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
            <p className="text-[16px] font-normal my-5">
              If the Client has difficulty understanding or reading this
              document, please print the name of the person who read this
              document or explained it to the Client in the field above.
              (include signature and date).
            </p>
            <div className="overflow-x-scroll my-7">
              <table class="min-w-full border-2 border-blue-600 ">
                <tbody>
                  {" "}
                  <tr class="border-b border-2 border-blue-600 ">
                    <td class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 ">
                      <div class="flex gap-3">
                        <span>
                          <label
                            for="rec_name"
                            className=" font-bold text-base"
                          >
                            CBH Staff Name:
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
                      colSpan={"4"}
                    >
                      <div class="flex gap-3">
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

export default RELEASE_OF_INFORMATION;
