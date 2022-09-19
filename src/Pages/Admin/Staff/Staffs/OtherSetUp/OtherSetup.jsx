import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const OtherSetup = () => {
  const [note, setNote] = useState("");

  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: `bill`,
        middle_name: "luo",
      });
    }, 600);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    console.log(note);
  };
  return (
    <div className="md:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Other Setup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
          {/* name  */}
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Max Hours For Day
              </span>
            </label>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Max Hours For Week
              </span>
            </label>
            <input
              type="text"
              name="max_week"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_week")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                ADP Employee Id
              </span>
            </label>
            <input
              type="text"
              name="employ_id"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("employ_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Provider Level
              </span>
            </label>
            <input
              type="text"
              name="provider_lvl"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("provider_lvl")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Custom2
              </span>
            </label>
            <input
              type="text"
              name="Custom2"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("Custom2")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Custom3
              </span>
            </label>
            <input
              type="text"
              name="Custom3"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("Custom3")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Custom4
              </span>
            </label>
            <input
              type="text"
              name="Custom4"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("Custom4")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Custom5
              </span>
            </label>
            <input
              type="text"
              name="Custom5"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("Custom5")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Custom6
              </span>
            </label>
            <input
              type="text"
              name="Custom6"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("Custom6")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Highest Degree
              </span>
            </label>
            <input
              type="text"
              name="highest_degree"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("highest_degree")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Degree Level
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                External Software Id
              </span>
            </label>
            <input
              type="text"
              name="software_id"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("software_id")}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Signature Valid From
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("valid_from")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Signature Valid To
              </span>
            </label>
            <input
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              type="date"
              {...register("valid_to")}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Upload File
              </span>
            </label>
            <input
              type="file"
              className=" px-2 py-[5px] mx-1 text-xs w-full"
              {...register("fileName")}
            />
          </div>
        </div>
        <div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Is eligible for paid time off
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Exempt Staff
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Gets paid holidays
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Is Parttime
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Is Contractor
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            />
            <span className="text-xs ml-1  text-gray-600 font-normal">
              Prevent Provider Render Without Notes(for catalyst users)
            </span>
          </div>
        </div>
        <div className="other-box my-5">
          {/* <div className="">
            <h1 className="text-sm font-medium"></h1>

           
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
          </div> */}
          <div className="flex items-center justify-around gap-2 mb-2 ">
            <h3 className="text-xs font-medium w-80">Tax Type</h3>
            <h3 className="text-xs font-medium w-80">Box 24J</h3>
            <h3 className="text-xs font-medium w-80">ID Qualifier</h3>
          </div>
          <div className="flex items-center gap-2 mb-2 ">
            <h3 className="text-xs font-normal w-80">IF</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">Mental Health</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">Behavioral therapy</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">MT</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapy</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">MT</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-normal w-80">Physical Therapy</h3>
            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
            />
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <div className="">
            <h1 className="text-sm font-medium">Box 24J</h1>

            <input
              type="text"
              name="max_day"
              className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
              {...register("max_day")}
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
        </div>
      </form>
    </div>
  );
};

export default OtherSetup;
