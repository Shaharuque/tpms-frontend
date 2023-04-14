import { Switch } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditInsuranceSelect = () => {
  const [checkBox, setCheckBox] = useState();
  const [value, setValue] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-5 gap-2">
          <div className="flex items-center mt-7">
            <Switch
              size="small"
              onClick={() => {
                setValue(!value);
              }}
            />
            <span className="ml-2">Is Electronic</span>
          </div>
          <div className="flex items-center mt-7">
            <Switch
              size="small"
              onClick={() => {
                setValue(!value);
              }}
            />
            <span className="ml-2">Active</span>
          </div>
          <div className="flex items-center mt-7">
            <Switch
              size="small"
              onClick={() => {
                setValue(!value);
              }}
            />
            <span className="ml-2">is time required Code</span>
          </div>
          <div>
            <div className="flex items-center mt-7">
              <Switch
                size="small"
                onClick={() => {
                  setValue(!value);
                }}
              />
              <span className="ml-2">is time required Code</span>
            </div>
          </div>
        </div>
        <div>
          <label className="label">
            <span className=" label-font">Insurance Type</span>
          </label>
          <select
            className="input-border input-font  focus:outline-none "
            {...register("insurance_type")}
          >
            <option value=""></option>
            <option value="1">Associate degree</option>
          </select>
        </div>
        <div className="w-[100%] px-2 sm:w-[75%]">
          <div className=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 my-5 gap-3">
            <h3 className=" font-medium text-base my-2">Tax Type</h3>
            <h3 className="mx-auto font-medium text-base my-2">Box 24J</h3>
            <h3 className="mx-auto font-medium text-base my-2">ID Qualifier</h3>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">IF</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">Mental Health</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">Behavioral therapy</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">MT</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapy</option>
              <option value="female">Female</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">MT</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                // id={`custom-checkbox-${index}`}
                // name={name}
                // value={name}
                onChange={() => setCheckBox()}
              />
              <h3 className="text-sm font-normal ">Physical Therapy</h3>
            </div>

            <input
              type="text"
              name="max_day"
              className="input-border text-gray-600 rounded-sm py-[1px] text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("max_day")}
            />
            <select
              className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-200 py-[1px] mt-3"></div>
        <div className=" flex items-center mt-5">
          <button className=" pms-button mr-2" type="submit">
            Go
          </button>

          <button className="pms-close-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditInsuranceSelect;
