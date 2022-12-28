import { Switch } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";

const PrimaryPhone = ({ adData }) => {
  const {
    handlePhoneClick,
    appointment,
    setAppointment,
    setPhone,
    phone,
    register,
  } = adData;
  return (
    <>
      <label className="label">
        <span className=" label-font">Phone</span>
      </label>
      <div className="flex flex-wrap gap-1 items-center gap-x-2 gap-y-2">
        <div className="w-[180px] ml-1">
          <PhoneInput
            className="PatientinformationInput"
            country={"us"}
            value={phone}
            onChange={(e) => {
              // //console.log(e);
              setPhone(e);
            }}
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
        <button // onClick={() => setPhoneOpen(true)}
          onClick={() => {
            handlePhoneClick();
          }}
          className="bg-secondary text-white p-[4px]"
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex ml-1 mt-2 items-center">
        {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setAppointment(!appointment);
                    }}
                  /> */}
        <Switch
          size="small"
          checked={appointment ? true : false}
          onClick={() => setAppointment(!appointment)}
        />
        <span className="text-xs ml-1 text-gray-700 font-medium">
          SMS Appointment Reminders
        </span>
      </div>
    </>
  );
};

export default PrimaryPhone;
