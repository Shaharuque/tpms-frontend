import React from "react";
import { FaPlus } from "react-icons/fa";

const PrimaryEmail = ({ adData }) => {
  const { emailAppend, register, primaryEmail } = adData;
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
                defaultValue={primaryEmail}
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
                emailAppend();
              }}
              className="bg-secondary text-white p-[4px] "
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            {/* <Switch
              size="small"
              checked={active ? true : false}
              onClick={() => setActive(!active)}
            /> */}

            <label class="inline-flex relative items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                {...register("email_ok")}
                defaultChecked={false}
                class="sr-only peer"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <span className="text-xs ml-1 text-gray-700 font-medium">
              Email OK
            </span>
          </div>

          <div className="flex ml-1 mt-1 items-center">
            <label class="inline-flex relative items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                {...register("send_mail")}
                defaultChecked={true}
                class="sr-only peer"
              />
              <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
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
