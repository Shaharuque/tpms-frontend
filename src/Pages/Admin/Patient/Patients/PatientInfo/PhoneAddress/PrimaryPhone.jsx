import React from "react";
import { FaPlus } from "react-icons/fa";

const PrimaryPhone = ({ adData }) => {
  const { phoneAppend, register, primaryPhone } = adData;
  return (
    <>
      <label className="label">
        <span className=" label-font">Phone</span>
      </label>
      <div className="flex flex-wrap gap-1 items-center gap-x-2 gap-y-2">
        <div className="w-[180px] ml-1">
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
            className="input-border input-font  w-full focus:outline-none"
            {...register("group")}
          >
            <option value="work">work</option>
            <option value="home">home</option>
            <option value="family">family</option>
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
        <label class="inline-flex relative items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            {...register("phonecheck")}
            defaultChecked={true}
            class="sr-only peer"
          />
          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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
