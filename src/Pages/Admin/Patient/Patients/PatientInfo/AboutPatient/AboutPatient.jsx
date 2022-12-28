import React from "react";

const AboutPatient = ({ register }) => {
  return (
    <div>
      {" "}
      <>
        <label className="label">
          <span className=" text-[16px] text-gray-700 text-left font-bold mt-2">
            About Patient
          </span>
        </label>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 mb-1 mr-2 gap-x-6 gap-y-1">
          <div>
            <label className="label">
              <span className=" label-font">Race &amp; Ethnicity Details</span>
            </label>
            <select
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("race_details")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Preferred Language</span>
            </label>
            <select
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("language")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Date First Seen</span>
            </label>
            <input
              className="input-border input-font py-[1px] w-full focus:outline-none"
              type="date"
              {...register("first_date")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Referred By</span>
            </label>
            <select
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("referred_by")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Assignment</span>
            </label>
            <select
              className="input-border input-font py-[1px] w-full focus:outline-none"
              {...register("assignment")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutPatient;
