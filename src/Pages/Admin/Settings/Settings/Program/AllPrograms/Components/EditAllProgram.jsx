import React from "react";
import { useForm } from "react-hook-form";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EditAllProgram = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sm:h-[100vh] m-1">
      <div className=" flex items-center gap-2 justify-between">
        <h1 className="text-lg mt-2 text-left text-orange-400">
          Create Program
        </h1>
        <Link
          to={"/admin/settings/program/all-program"}
          className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
        >
          <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
        </Link>
      </div>
      <form onSub mit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-7 mr-2 gap-x-6 gap-y-3 ">
          <div>
            <label className="label">
              <span className=" label-font">
                Recording Type <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("tx_type")}
            >
              <option value="Speech Therapist"></option>
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Program Category <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("tx_type")}
            >
              <option value="Speech Therapist"></option>
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mt-5 mx-1">
            <input type="checkbox" name="title" {...register("title2")} />
            <label className="label">
              <span className=" label-font">Behavior for Decrease</span>
            </label>
          </div>
          {/* First Name with all the validation  */}
          <div>
            <label className="label">
              <span className=" label-font">
                Program Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Operational Definition</span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Non-Example</span>
            </label>
            <input
              type="text"
              name="last_name"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Antecedent Strategies</span>
            </label>
            <input
              type="text"
              name="nick_name"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("nick_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Consequence Strategies</span>
            </label>
            <input
              type="text"
              name="ssn"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className=" label-font">Replacement Behavior</span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Function of Behavior</span>
            </label>
            <input
              type="text"
              name="office_email"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("office_email")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className=" label-font">Other Information</span>
            </label>
            <input
              type="text"
              name="driving_license"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("driving_license")}
            />
          </div>
        </div>
        <div className="bg-gray-200 py-[1px] mb-5"></div>
        <h1 className="text-lg mt-2 text-left text-orange-400">
          Phase Settings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-7 mr-2 gap-x-6 gap-y-3">
          <div>
            <div className="flex items-center gap-2 mx-1">
              <input type="checkbox" name="title" {...register("title2")} />
              <label className="label">
                <span className=" label-font">
                  Baseline Total Sessions<span className="text-red-500">*</span>
                </span>
              </label>
            </div>
            <input
              type="text"
              name="title"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("title")}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mx-1">
              <input type="checkbox" name="title" {...register("title2")} />
              <label className="label">
                <span className=" label-font">
                  Maintenance Total Sessions
                  <span className="text-red-500">*</span>
                </span>
              </label>
            </div>
            <input
              type="text"
              name="title"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("title")}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mx-1">
              <input type="checkbox" name="title" {...register("title2")} />
              <label className="label">
                <span className=" label-font">
                  Generalization Total Sessions
                  <span className="text-red-500">*</span>
                </span>
              </label>
            </div>
            <input
              type="text"
              name="title"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("title")}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mx-1">
              <input type="checkbox" name="title" {...register("title2")} />
              <label className="label">
                <span className=" label-font">
                  Program Category<span className="text-red-500">*</span>
                </span>
              </label>
            </div>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-200 py-[1px] mb-5"></div>
        <h1 className="text-lg mt-2 text-left text-orange-400">
          Mastery Criteria
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 my-7 mr-2 gap-x-6 gap-y-3 ">
          <div>
            <label className="label">
              <span className=" label-font">
                Frequency <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="npi"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Consecutive<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="caqh_id"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("caqh_id")}
            />
          </div>
          <div className="flex items-center gap-2 mx-1">
            <input type="checkbox" name="title" {...register("title2")} />
            <label className="label">
              <span className=" label-font">Behavior for Decrease</span>
            </label>
          </div>
        </div>

        <div>
          <button className=" pms-button mr-2" type="submit">
            Save
          </button>
          <button onClick={reset} className="pms-close-button">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAllProgram;
