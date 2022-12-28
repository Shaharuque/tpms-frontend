import { Switch } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";

const PrimaryEmail = ({ adData }) => {
  const { handleEmailClick, setActive, active, register } = adData;
  return (
    <>
      <div className=" lg:mx-auto md:mx-0">
        <>
          <label className="label">
            <span className=" label-font">Email New</span>
          </label>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div>
              <input
                type="text"
                name="email"
                className="input-border input-font w-full focus:outline-none"
                {...register("email")}
              />
            </div>
            <div>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("group2")}
              >
                <option value="work">work</option>
                <option value="home">home</option>
                <option value="family">family</option>
              </select>
            </div>
            <button
              onClick={() => {
                handleEmailClick();
              }}
              className="bg-secondary text-white p-[4px] "
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-xs ml-1 text-gray-700 font-medium">
              Email OK
            </span>
          </div>

          <div className="flex ml-1 mt-1 items-center">
            {/* <input
                    type="checkbox"
                    name="patient"
                    onClick={() => {
                      setEmailSend(!emailSend);
                    }}
                  /> */}
            <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            />
            <span className="text-xs ml-1 text-gray-700 font-medium">
              Send email appointment reminders
            </span>
          </div>
        </>
      </div>
    </>
  );
};

export default PrimaryEmail;
