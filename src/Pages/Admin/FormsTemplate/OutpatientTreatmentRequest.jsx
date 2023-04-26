import React from "react";
import { useForm } from "react-hook-form";
import { AiFillCloud, AiOutlinePrinter } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo4.png";

const OutpatientTreatmentRequest = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="form-border 2xl:w-[70%] w-full mx-auto p-5 bg-white">
        <div>
          <div className="flex items-center flex-wrap gap-3 justify-between">
            <img src={logo} alt="Company Logo Here" />
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
            <h2>OUTPATIENT TREATMENT REQUEST [OTR] FORM:</h2>
            <h5 className="text-[17px] pt-2">DIAGNOSIS</h5>
            <div className="py-[3px] my-3 w-36 mx-auto bg-[#d9534f]"></div>
          </div>
        </div>

        {/* form heading part  */}

        <div className="my-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-bold grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-7">
              <div className="flex">
                <div>
                  <span className="form-input-name ">1)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Risk of Harm-- ?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="risk_of_harm"
                      className="input-font focus:outline-none"
                      {...register("risk_of_harm")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">2)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Functional Status--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="functional_status"
                      className="input-font focus:outline-none"
                      {...register("functional_status")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">3)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Co-Morbidities-- ?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="co_morbidities"
                      className="input-font focus:outline-none"
                      {...register("co_morbidities")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">4)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Environmental Stressors-- ?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="environmental_stressors"
                      className="input-font focus:outline-none"
                      {...register("environmental_stressors")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">5)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Support in the Environment --?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="support_in_the_environment"
                      className="input-font focus:outline-none"
                      {...register("support_in_the_environment")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">6)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Response to Current Treatment Plan--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="response_current-treatment"
                      className="input-font focus:outline-none"
                      {...register("response_current-treatment")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">7)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Level of Care: Acceptance and Engagement--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="acceptance_and_engagement"
                      className="input-font focus:outline-none"
                      {...register("acceptance_and_engagement")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">8)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Transportation Available--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="transportation_available"
                      className="input-font focus:outline-none"
                      {...register("transportation_available")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">9)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Presenting Problems – ?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="presenting_problems"
                      className="input-font focus:outline-none"
                      {...register("presenting_problems")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">10)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Current Need for Treatment--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="current_need_treatment"
                      className="input-font focus:outline-none"
                      {...register("current_need_treatment")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">11)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Detail Member Behavior within Past 30 days--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="detail_member_behavior"
                      className="input-font focus:outline-none"
                      {...register("detail_member_behavior")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <span className="form-input-name ">12)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Current Medications--?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="current_medications"
                      className="input-font focus:outline-none"
                      {...register("current_medications")}
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:col-span-2">
                <div>
                  <span className="form-input-name ">13)</span>
                </div>
                <div className="w-full">
                  <span className="form-input-name ">
                    Treatment History/Facility --?
                  </span>
                  <div className="form-textarea">
                    <textarea
                      type="text"
                      rows="1"
                      name="treatment_history"
                      className="input-font focus:outline-none"
                      {...register("treatment_history")}
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between my-12">
          <button className=" bg-purple-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
            <AiFillCloud /> Save
          </button>
          <button className=" bg-cyan-900 text-white flex items-center px-4 py-2 gap-1 text-lg font-semibold rounded-md my-2">
            <AiOutlinePrinter /> Print
          </button>
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
    </div>
  );
};

export default OutpatientTreatmentRequest;
