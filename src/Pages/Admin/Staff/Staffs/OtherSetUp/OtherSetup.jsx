import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const OtherSetup = () => {
  const [active, setActive] = useState(false);
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
              <span className=" label-font">Max Hours For Day</span>
            </label>
            <input
              type="text"
              name="max_day"
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Max Hours For Week</span>
            </label>
            <input
              type="text"
              name="max_week"
              className="input-border input-font w-full focus:outline-none"
              {...register("max_week")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">ADP Employee Id</span>
            </label>
            <input
              type="text"
              name="employ_id"
              className="input-border input-font w-full focus:outline-none"
              {...register("employ_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Provider Level</span>
            </label>
            <input
              type="text"
              name="provider_lvl"
              className="input-border input-font w-full focus:outline-none"
              {...register("provider_lvl")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom2</span>
            </label>
            <input
              type="text"
              name="Custom2"
              className="input-border input-font w-full focus:outline-none"
              {...register("Custom2")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom3</span>
            </label>
            <input
              type="text"
              name="Custom3"
              className="input-border input-font w-full focus:outline-none"
              {...register("Custom3")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom4</span>
            </label>
            <input
              type="text"
              name="Custom4"
              className="input-border input-font w-full focus:outline-none"
              {...register("Custom4")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom5</span>
            </label>
            <input
              type="text"
              name="Custom5"
              className="input-border input-font w-full focus:outline-none"
              {...register("Custom5")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom6</span>
            </label>
            <input
              type="text"
              name="Custom6"
              className="input-border input-font w-full focus:outline-none"
              {...register("Custom6")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Highest Degree</span>
            </label>
            <input
              type="text"
              name="highest_degree"
              className="input-border input-font w-full focus:outline-none"
              {...register("highest_degree")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Degree Level</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">External Software Id</span>
            </label>
            <input
              type="text"
              name="software_id"
              className="input-border input-font w-full focus:outline-none"
              {...register("software_id")}
            />
          </div>

          <div>
            <label className="label">
              <span className=" label-font">Signature Valid From</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("valid_from")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Signature Valid To</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none"
              type="date"
              {...register("valid_to")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Upload File</span>
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
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is eligible for paid time off
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Exempt Staff
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Gets paid holidays
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Parttime
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Contractor
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <input
              type="checkbox"
              name="service"
              // onClick={() => {
              //   setValue(!value);
              // }}
            /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Prevent Provider Render Without Notes(for catalyst users)
            </span>
          </div>
        </div>
        <div className="other-box ml-2 my-5">
          {/* <div className="">
            <h1 className="text-sm font-medium"></h1>

           
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
            <h3 className="text-xs font-normal"></h3>
          </div> */}
          <div className="flex items-center justify-around gap-2 mb-2 ">
            <h3 className="text-sm font-medium w-80">Tax Type</h3>
            <h3 className="text-sm font-medium w-80">Box 24J</h3>
            <h3 className="text-sm font-medium w-80">ID Qualifier</h3>
          </div>
          <div className="flex items-center gap-2 mb-2 ">
            <h3 className="text-xs font-normal w-80">IF</h3>
            <input
              type="text"
              name="max_day"
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
              className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border input-font w-full focus:outline-none"
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
               className="input-border input-font w-full focus:outline-none"
              {...register("max_day")}
            />
          </div> */}
        </div>
        <div className="mt-10 ml-2">
          <button className=" pms-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtherSetup;
