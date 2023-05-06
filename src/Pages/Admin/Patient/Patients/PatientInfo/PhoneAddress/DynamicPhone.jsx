import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicPhone = ({ adData }) => {
  const { phoneFields, phoneRemove, register } = adData;
  console.log("phoneFields", phoneFields);
  return (
    <div>
      {phoneFields.map((field, index) => {
        return (
          <div key={field.id}>
            <label className="label">
              <span className=" label-font">Phone</span>
            </label>
            <div className="flex  gap-1 items-center gap-x-3 gap-y-2">
              <div className=" ml-1">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register(`number.${index}.number`, {
                    // required: true
                  })}
                  defaultValue={field.phone_number}
                />
              </div>
              <div>
                <select
                  className="input-border input-font w-16 focus:outline-none"
                  {...register("group")}
                >
                  <option value="work">work</option>
                  <option value="home">home</option>
                  <option value="family">family</option>
                </select>
              </div>
              <button
                onClick={() => phoneRemove(index)}
                className="bg-red-500 text-white p-[4px]"
              >
                <RiDeleteBin6Line />
              </button>
            </div>

            <div className="flex ml-1 mt-2 items-center">
              {/* custom toggle  */}
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={field.checked}
                  {...register(`number.${index}.checked`, {
                    // required: true
                  })}
                  className="sr-only peer"
                />
                <div className="w-[30px] h-[17px] bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[13px] after:w-[13px] after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>

              <span className="text-xs ml-1 text-gray-700 font-medium">
                SMS Appointment Reminders
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicPhone;
