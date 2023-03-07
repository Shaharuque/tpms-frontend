import React from "react";
import { FaPlus } from "react-icons/fa";

const PrimaryPhone = ({ adData }) => {
  const { phoneAppend, register, primaryPhone } = adData;
  return (
    <>
      <label className="label">
        <span className=" label-font">Phone</span>
      </label>
      <div className="flex flex-wrap gap-1 items-center gap-x-3 gap-y-2">
        <div className=" ml-1">
          {/* package input field */}
          {/* <PhoneInput
            className="PatientinformationInput"
            country={"us"}
            {...register("phoneinput")}
            value={phone}
            onChange={(e) => {
              // //console.log(e);
              setPhone(e);
            }}
            // inputProps={{ ...register("phoneinput") }}
          /> */}

          <input
            type="text"
            placeholder="Phone"
            defaultValue={primaryPhone}
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register("phone_number")}
          />
        </div>
        <div>
          <select
            className="input-border input-font  w-16 focus:outline-none"
            {...register("group")}
          >
            <option value="Work">Work</option>
            <option value="Mobile">Cell</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <button
          onClick={() => phoneAppend()}
          className="bg-secondary text-white p-[4px]"
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex ml-1 mt-2 items-center">
        {/* custom toggle  */}
         <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            {...register("phonecheck")}
            defaultChecked={true}
            className="sr-only peer"
          />
          <div className="w-[30px] h-[17px] bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
        {/* antd switch code */}
        {/* <Switch
          size="small"
          checked={appointment ? true : false}
          onClick={() => setAppointment(!appointment)}
        /> */}
        <span className="text-xs ml-1 text-gray-700 font-medium">
          SMS Appointment Reminders
        </span>
      </div>
    </>
  );
};

export default PrimaryPhone;
