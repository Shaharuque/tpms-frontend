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
      <form onSub mit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 my-3 mr-2 gap-x-6 gap-y-3 ">
          {/* First Name with all the validation  */}
          <div>
            <label className="label">
              <span className=" label-font">
                First Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("first_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Middle Name</span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Last Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Nick Name</span>
            </label>
            <input
              type="text"
              name="nick_name"
              className="input-border input-font w-full focus:outline-none"
              {...register("nick_name")}
            />
          </div>
          {/* DOB */}
          <div>
            <label className="label">
              <span className=" label-font">
                Date of Birth<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("check_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">SSN</span>
            </label>
            <input
              type="text"
              name="ssn"
              className="input-border input-font w-full focus:outline-none"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className=" label-font">
                Office Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="input-border input-font w-full focus:outline-none"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Office Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_email"
              className="input-border input-font w-full focus:outline-none"
              {...register("office_email")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className=" label-font">
                Drivers License & Expiration Date
              </span>
            </label>
            <input
              type="text"
              name="driving_license"
              className="input-border input-font w-full focus:outline-none"
              {...register("driving_license")}
            />
          </div>
          <div className="md:mt-[38px]">
            {" "}
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("license_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input-border input-font w-full focus:outline-none"
              {...register("title")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className=" label-font">Hiring Date with Company</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("hiring_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Credential Type</span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                Tx Type <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="input-border input-font  w-full focus:outline-none"
              {...register("tx_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Individual NPI</span>
            </label>
            <input
              type="text"
              name="npi"
              className="input-border input-font w-full focus:outline-none"
              {...register("npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">CAQH Id</span>
            </label>
            <input
              type="text"
              name="caqh_id"
              className="input-border input-font w-full focus:outline-none"
              {...register("caqh_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Service Area Zip</span>
            </label>
            <input
              type="text"
              name="zip"
              className="input-border input-font w-full focus:outline-none"
              {...register("zip")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Termination Date</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("termination_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Language(s)</span>
            </label>
            <input
              type="text"
              name="language"
              className="input-border input-font w-full focus:outline-none"
              {...register("language")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Taxonomy Code</span>
            </label>
            <input
              type="text"
              name="taxonomy_code"
              className="input-border input-font w-full focus:outline-none"
              {...register("taxonomy_code")}
            />
          </div>

          <div>
            <label className="label">
              <span className=" label-font">
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
          <div className="sm:col-span-2">
            <label className="label">
              <span className=" label-font">Notes</span>
            </label>
            <TextArea rows={4} placeholder="maxLength is 6" size="middle" />
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

export default Bio;
