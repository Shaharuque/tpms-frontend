import { Switch } from "antd";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicEmail = ({ adData }) => {
  const { index, register, setActive, active, EmailHandleRemove } = adData;
  return (
    <>
      <label className="label">
        <span className=" label-font">Email</span>
      </label>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div>
          <input
            type="text"
            name="email"
            className="input-border input-font py-[1px] w-full focus:outline-none"
            {...register(`group${index}`)}
          />
        </div>
        <div>
          <select
            className="input-border input-font w-full focus:outline-none"
            {...register(`group2${index}`)}
          >
            <option value="work">work</option>
            <option value="home">home</option>
            <option value="family">family</option>
          </select>
        </div>
        <button
          onClick={() => EmailHandleRemove(index)}
          className="bg-red-500 text-white p-[4px] "
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div className="flex ml-1 mt-2 items-center gap-1 flex-wrap ">
        <div className="">
          {/* <input
                        type="checkbox"
                        name="patient"
                        onClick={() => {
                          setEmail(!email);
                        }}
                      /> */}
          <Switch
            size="small"
            checked={active ? true : false}
            onClick={() => setActive(!active)}
          />
          <span className="text-xs ml-1 text-gray-700 font-normal">
            Email OK
          </span>
        </div>
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
        <span className="text-xs ml-1 text-gray-700 font-normal">
          Send email appointment reminders
        </span>
      </div>
    </>
  );
};

export default DynamicEmail;
