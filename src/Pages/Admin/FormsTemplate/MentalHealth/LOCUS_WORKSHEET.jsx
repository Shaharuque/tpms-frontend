import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../../Assets/logo4.png";
import { Link } from "react-router-dom";
import SignatureModal from "../SignatureManage/SignatureModal";
import { FaSignature } from "react-icons/fa";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";

const LOCUS_WORKSHEET = () => {
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
          <h1>LOCUS WORKSHEET</h1>
          <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
        </div>
      </div>
      <div className="mx-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-scroll">
            <table class="min-w-full border-2 border-blue-600 ">
              <tbody>
                {" "}
                <tr class="border-b border-2 border-blue-600 ">
                  <td
                    class="text-sm text-gray-900 font-light px-2 py-3 whitespace-nowrap border-r border-2 border-blue-600 "
                    colSpan={"3"}
                  >
                    <div class="flex gap-3">
                      <span>
                        <label for="rec_name" className=" font-bold text-base">
                          Rater Name: :
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
          <h1 className=" font-medium my-5">
            Please check the applicable ratings within each dimension and record
            the score in the lower right hand corner. Total your score and
            determine the recommended level of care.
          </h1>
          <div className=" grid grid-cols-1 mt-10 items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-8">
            <div>
              <div>
                <div className="text-[16px]">
                  i. Risk of Harm
                  <div className="pl-3 gap-5">
                    <div className="my-2">1. Minimal Risk of Harm</div>
                    <div className="my-2">2. Low Risk of Harm</div>
                    <div className="my-2">3. Moderate Risk of Harm</div>
                    <div className="my-2">4. Serious Risk of Harm</div>
                    <div className="my-2">5. Extreme Risk of Harm</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  ii. Functional Status
                  <div className="pl-3 gap-5">
                    <div className="my-2">1. MMinimal Impairment</div>
                    <div className="my-2">2. Mild Impairment</div>
                    <div className="my-2">3. Moderate Impairment</div>
                    <div className="my-2">4. Serious Impairment</div>
                    <div className="my-2">5. Severe Impairment</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  iii. Co-Morbidity
                  <div className="pl-3 gap-5">
                    <div className="my-2">1. No Co-Morbidity</div>
                    <div className="my-2">2. Minor Co-Morbidity</div>
                    <div className="my-2">3. Significant Co-Morbidity</div>
                    <div className="my-2">4. Major Co-Morbidity</div>
                    <div className="my-2">5. Severe Co-Morbidity</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  iv. Recovery Environment - Level of Stress
                  <div className="pl-3 gap-5">
                    <div className="my-2">1.Low Stress Environment</div>
                    <div className="my-2">2. Mildly Stress Environment</div>
                    <div className="my-2">
                      3. MModerately Stress Environment
                    </div>
                    <div className="my-2">4. Highly Stress Environment</div>
                    <div className="my-2">5. Extremely Stress Environment</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  v. Recovery Environment - Level of Support
                  <div className="pl-3 gap-5">
                    <div className="my-2">1. Highly Supportive Environment</div>
                    <div className="my-2">2. Supportive Environment</div>
                    <div className="my-2">3. Limited Support Environment</div>
                    <div className="my-2">4. Minimal Support Environment</div>
                    <div className="my-2">5. No Support Environment</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  vi. Treatment and Recovery History
                  <div className="pl-3 gap-5">
                    <div className="my-2">
                      1. Full Response to Treatment & Recovery Mgmt
                    </div>
                    <div className="my-2">
                      2. Significant Response to Treatment & Recovery Mgmt
                    </div>
                    <div className="my-2">
                      3. Moderate Response to Treatment & Recovery Mgmt
                    </div>
                    <div className="my-2">
                      4. Poor Response to Treatment & Recovery Mgmt
                    </div>
                    <div className="my-2">
                      5. Negligible Response to Treatment
                    </div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  vii. Engagement
                  <div className="pl-3 gap-5">
                    <div className="my-2">1. Optimal Engagement</div>
                    <div className="my-2">2. Positive Engagement</div>
                    <div className="my-2">3. Limited Engagement</div>
                    <div className="my-2">4. Minimal Engagement</div>
                    <div className="my-2">5. Unengaged</div>
                  </div>
                  <p>
                    Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="text-[16px]">
                  <p>
                    Composite Score:
                    <input
                      type="text"
                      className=" my-3 form-bottom-border focus:outline-none "
                      placeholder="Enter Here..."
                      {...register("client_name")}
                    />
                  </p>
                  <div className="pl-3 gap-5">
                    <div className="my-2">Level 1 = 10-13</div>
                    <div className="my-2">Level II = 14 - 16</div>
                    <div className="my-2">Level III = 17 - 19</div>
                    <div className="my-2">Level IV = 20 - 22</div>
                    <div className="my-2">Level V = 23 –27</div>
                    <div className="my-2">Level VI = 28 or more</div>
                  </div>
                </div>
              </div>
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

export default LOCUS_WORKSHEET;
