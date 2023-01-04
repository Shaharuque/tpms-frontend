import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DynamicEmail = ({ adData }) => {
  const { register, emailFields, emailRemove } = adData;
  return (
    <div>
      {emailFields.map((field, index) => {
        return (
          <div key={field.id}>
            <label className="label">
              <span className=" label-font">Email</span>
            </label>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div>
                <input
                  type="text"
                  name="email"
                  className="input-border input-font py-[1px] w-full focus:outline-none"
                  {...register(`Email.${index}.email`)}
                  defaultValue={field.email}
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
                onClick={() => emailRemove(index)}
                className="bg-red-500 text-white p-[4px] "
              >
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="flex ml-1 mt-2 items-center gap-1 flex-wrap ">
              <div className="">
                <label class="inline-flex relative items-center mb-5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register(`Email.${index}.checked`, {
                      // valueAsNumber: true,
                    })}
                    defaultChecked={field.checked}
                    class="sr-only peer"
                  />
                  <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                {/* <Switch
           size="small"
           checked={active ? true : false}
           onClick={() => setActive(!active)}
         /> */}
                <span className="text-xs ml-1 text-gray-700 font-normal">
                  Email OK
                </span>
              </div>
            </div>

            <div className="flex ml-1 mt-1 items-center">
              {/* <Switch
         size="small"
         checked={active ? true : false}
         onClick={() => setActive(!active)}
       /> */}
              {/* custom tooggel */}
              <label class="inline-flex relative items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  {...register(`Email.${index}.sendMail`)}
                  defaultChecked={field.sendMail}
                  class="sr-only peer"
                />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <span className="text-xs ml-1 text-gray-700 font-normal">
                Send email appointment reminders
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicEmail;
