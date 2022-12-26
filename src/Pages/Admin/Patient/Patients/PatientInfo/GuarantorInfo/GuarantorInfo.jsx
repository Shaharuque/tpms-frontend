import React from "react";

const GuarantorInfo = ({ register, checkLocation, SameasPatientBtn, hook }) => {
  console.log(checkLocation);
  return (
    <div className="my-2">
      <h1 className="text-sm font-medium my-1 ml-1">Guarantor Info</h1>
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-1"> */}
      <div className="flex flex-wrap gap-x-4 gap-y-4 items-center">
        <div>
          <label className="label">
            <span className=" label-font">First Name</span>
          </label>
          <input
            type="text"
            name="guarantor_first_name"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register("guarantor_first_name")}
          />
        </div>

        <div>
          <label className="label">
            <span className=" label-font">Last Name</span>
          </label>
          <input
            type="text"
            name="guarantor_last_name"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register("guarantor_last_name")}
          />
        </div>
        {/* DOB */}
        <div>
          {" "}
          <label className="label">
            <span className=" label-font">Check Date</span>
          </label>
          <input
            className="input-border input-font  w-full focus:outline-none"
            type="date"
            {...register("guarantor_check_Date")}
          />
        </div>
        {/* </div> */}

        {/* ---------------------------------*/}
        {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-1"> */}
        <div>
          <label className="label">
            <span className=" label-font">Address</span>
          </label>

          <input
            type="text"
            placeholder="Street"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register(checkLocation ? "GuaratorStreet" : "null")}
          />
        </div>

        {/* <div className="my-auto text-xs bg-secondary text-white ml-1 py-1 mb-2 text-center w-full rounded-md"> */}
        <div className="pms-button mt-[17px]">
          <button
            onClick={() => {
              SameasPatientBtn();
            }}
          >
            Same as patient address
          </button>
        </div>
      </div>

      {/* --------------------------- */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 my-1 mr-2 gap-x-6 gap-y-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="City"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            defaultValue={hook?.City}
            {...register(checkLocation ? "GuaratorCity" : "dj")}
          />
        </div>
        <div>
          <select
            className="input-border input-font  w-full focus:outline-none"
            {...register(checkLocation ? "GuratorCountry" : "null")}
          >
            <option value="NY">NY</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Zip"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register(checkLocation ? "GuratorZip" : "dj")}
          />
        </div>
      </div>
    </div>
  );
};

export default GuarantorInfo;
