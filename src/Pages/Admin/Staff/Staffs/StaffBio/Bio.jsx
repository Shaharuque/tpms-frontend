import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Bio = () => {
  const [note, setNote] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm();

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
    <div className="md:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Bio's</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
          {/* First Name with all the validation  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                First Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="first_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("first_name", {
                required: "This input is required.",
                minLength: {
                  value: 4,
                  message: "This input must exceed 4 characters",
                },
              })}
            />
            <label className="label">
              <span className="label-text-alt">
                {errors.first_name?.type === "required" && (
                  <p className=" text-xs text-red-500">
                    {errors.first_name.message}
                  </p>
                )}
                {errors.first_name?.type === "minLength" && (
                  <p className=" text-xs text-red-500">
                    {errors.first_name.message}
                  </p>
                )}
              </span>
            </label>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Middle Name
              </span>
            </label>
            <input
              type="text"
              name="middle_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("middle_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Last Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="last_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("last_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Nick Name
              </span>
            </label>
            <input
              type="text"
              name="nick_name"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("nick_name")}
            />
          </div>
          {/* DOB */}
          <div>
            {" "}
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Date of Birth<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("check_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                SSN
              </span>
            </label>
            <input
              type="text"
              name="ssn"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("ssn")}
            />
          </div>
          {/* phone & email  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Office Phone <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_phone"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("office_phone")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Office Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="office_email"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("office_email")}
            />
          </div>
          {/* driving license */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Drivers License & Expiration Date
              </span>
            </label>
            <input
              type="text"
              name="driving_license"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("driving_license")}
            />
          </div>
          <div className="md:mt-8">
            {" "}
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("license_Date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("title")}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Hiring Date with Company
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("hiring_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Credential Type
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("credential_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Tx Type <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("tx_type")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Individual NPI
              </span>
            </label>
            <input
              type="text"
              name="npi"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("npi")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                CAQH Id
              </span>
            </label>
            <input
              type="text"
              name="caqh_id"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("caqh_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Service Area Zip
              </span>
            </label>
            <input
              type="text"
              name="zip"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("zip")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Termination Date
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("termination_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Language(s)
              </span>
            </label>
            <input
              type="text"
              name="language"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("language")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Taxonomy Code
              </span>
            </label>
            <input
              type="text"
              name="taxonomy_code"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("taxonomy_code")}
            />
          </div>
          {/* <div>
            <FormControl>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Gender <span className="text-red-500">*</span>
                </span>
              </label>

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Billable"
                  control={<Radio />}
                  label="Billable
"
                />
                <FormControlLabel
                  value="Non-Billable"
                  control={<Radio />}
                  label="Non-Billable"
                />
              </RadioGroup>
            </FormControl>
          </div> */}

          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
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
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Notes
              </span>
            </label>
            <textarea
              // onChange={(e) => setNote(e.target.value)}
              name="comment"
              className="border text-sm p-1 mt-1 ml-1 h-24 w-full"
              {...register("comment")}
            ></textarea>
          </div>

          {/* <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Notes
              </span>
            </label>
            <Controller
              name="note"
              label="Notes"
              multiline
              maxRows={7}
              control={control}
              render={({ Notes }) => <TextField {...Notes} />}
              register={"note"}
            />
          </div> */}
        </div>
        <div className="mt-10">
          <button
            className=" py-[5px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            type="submit"
          >
            Save
          </button>
          <button
            className=" py-[5px]  px-4 ml-3 text-xs font-normal bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-md"
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
