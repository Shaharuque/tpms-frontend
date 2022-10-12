import { Switch } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Bio = () => {
  const [note, setNote] = useState("");
  const [session, setSession] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  console.log(session);
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: `bill`,
        middle_name: "luo",
        comment: "Notes",
      });
    }, 600);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(note);
  };
  return (
    <div className="sm:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Bio's</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 my-3 mr-2 gap-x-6 gap-y-3 ">
          {/* First Name with all the validation  */}
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                First Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Middle Name
              </span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[1px] w-full focus:outline-none"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Last Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Nick Name
              </span>
            </label>
            <input
              type="text"
              name="nick_name"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("nick_name")}
            />
          </div>
          {/* DOB */}
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Date of Birth<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              type="date"
              {...register("check_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                SSN
              </span>
            </label>
            <input
              type="text"
              name="ssn"
              className="input-border text-gray-600 rounded-sm py-[1px]  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Office Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Office Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_email"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("office_email")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Drivers License & Expiration Date
              </span>
            </label>
            <input
              type="text"
              name="driving_license"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("driving_license")}
            />
          </div>
          <div className="md:mt-[38px]">
            {" "}
            <input
              className="input-border text-gray-600 rounded-sm text-[14px]  font-medium w-full focus:outline-none"
              type="date"
              {...register("license_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("title")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Hiring Date with Company
              </span>
            </label>
            <input
              className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              type="date"
              {...register("hiring_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Credential Type
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Tx Type <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px]  font-medium w-full focus:outline-none"
              {...register("tx_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Individual NPI
              </span>
            </label>
            <input
              type="text"
              name="npi"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                CAQH Id
              </span>
            </label>
            <input
              type="text"
              name="caqh_id"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("caqh_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Service Area Zip
              </span>
            </label>
            <input
              type="text"
              name="zip"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("zip")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Termination Date
              </span>
            </label>
            <input
              className="input-border text-gray-600 rounded-sm text-[14px]  font-medium w-full focus:outline-none"
              type="date"
              {...register("termination_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Language(s)
              </span>
            </label>
            <input
              type="text"
              name="language"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("language")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Taxonomy Code
              </span>
            </label>
            <input
              type="text"
              name="taxonomy_code"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("taxonomy_code")}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Gender <span className="text-red-500">*</span>
              </span>
            </label>
            <div className="flex items-center">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  female
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  male
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 my-5">
              <Switch onClick={() => setSession(!session)} size="small" />
              <span>Create Session</span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Notes
              </span>
            </label>
            <TextArea rows={4} placeholder="maxLength is 6" size="middle" />
          </div>
        </div>

        <div className="mt-4">
          <button
            className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
          <button
            className=" py-[5px] px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
            autoFocus
            onClick={reset}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bio;
