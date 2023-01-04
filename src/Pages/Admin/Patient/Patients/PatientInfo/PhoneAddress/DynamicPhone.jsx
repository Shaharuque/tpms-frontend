import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicPhone = ({ adData }) => {
  const { phoneFields, phoneRemove, register } = adData;

  return (
    <div>
      {phoneFields.map((field, index) => {
        return (
          <div key={field.id}>
            <label className="label">
              <span className=" label-font">Phone</span>
            </label>
            <div className="flex flex-wrap gap-1 items-center gap-x-2 gap-y-2">
              <div className="w-[180px] ml-1">
                <input
                  type="text"
                  placeholder="Phone"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register(`number.${index}.number`, {
                    // required: true
                  })}
                  defaultValue={field.number}
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
                onClick={() => phoneRemove(index)}
                className="bg-red-500 text-white p-[4px]"
              >
                <RiDeleteBin6Line />
              </button>
            </div>

            <div className="flex ml-1 mt-2 items-center">
              {/* custom toggle  */}
              <label class="inline-flex relative items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={field.checked}
                  {...register(`number.${index}.checked`, {
                    // required: true
                  })}
                  class="sr-only peer"
                />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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
