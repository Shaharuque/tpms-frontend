import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BoolConverter from "../../../../Shared/BoolConverter/BoolConverter";
import OtherSetUpBottom from "./OtherSetUpBottom/OtherSetUpBottom";

const OtherSetup = () => {
  const [active, setActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        first_name: `bill`,
        middle_name: "luo",
      });
    }, 600);
  }, [reset]);

  const [paidTimeOff, setPaidTimeOff] = useState(BoolConverter(1));
  const [exemptStaff, setExemptStaff] = useState(BoolConverter(2));
  const [paidHoliday, setPaidHoliday] = useState(BoolConverter(null));
  const [isPartTime, setIsPartTime] = useState(BoolConverter(null));
  const [isContractor, setIsContractor] = useState(BoolConverter(null));
  const [providerWithoutNote, setProviderWithoutNote] = useState(
    BoolConverter(1)
  );

  const data = [
    {
      treatment_name: "treatment Name",
      box_24j: "null",
      id_qualifire: "id_qualir  fire",
    },
    {
      treatment_name: "treatment Name fgfgf ",
      box_24j: "null",
      id_qualifire: "id_qualifirrtr e",
    },
    {
      treatment_name: "treatment Namegr",
      box_24j: "null",
      id_qualifire: "id_qualifire fgf",
    },
    {
      treatment_name: "treatment Name 3333",
      box_24j: "null",
      id_qualifire: "id_qu  alifire",
    },
  ];

  const onSubmit = (data) => {
    const payLoad = {
      ...data,
      paid_time_off: BoolConverter(paidTimeOff),
      exemt_staff: BoolConverter(exemptStaff),
      gets_paid_holiday: BoolConverter(paidHoliday),
      is_parttime: BoolConverter(isPartTime),
      is_contractor: BoolConverter(isContractor),
      provider_render_without: BoolConverter(providerWithoutNote),
    };
    console.log(payLoad);
  };

  return (
    <div className="md:h-[100vh]">
      <h1 className="text-lg mt-2 text-left text-orange-400">Other Setup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-4 gap-y-2">
          {/* name  */}
          <div>
            <label className="label">
              <span className=" label-font">Max Hours For Day</span>
            </label>
            <input
              type="text"
              name="max_hour_per_day"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("max_hour_per_day")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Max Hours For Week</span>
            </label>
            <input
              type="text"
              name="max_hour_per_week"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("max_hour_per_week")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">ADP Employee Id</span>
            </label>
            <input
              type="text"
              name="adp_employee_id"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("adp_employee_id")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Provider Level</span>
            </label>
            <input
              type="text"
              name="provider_level"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("provider_level")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">custom2</span>
            </label>
            <input
              type="text"
              name="custom_two"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_two")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom3</span>
            </label>
            <input
              type="text"
              name="custom_three"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_three")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom4</span>
            </label>
            <input
              type="text"
              name="custom_four"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_four")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom5</span>
            </label>
            <input
              type="text"
              name="custom_five"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_five")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Custom6</span>
            </label>
            <input
              type="text"
              name="custom_six "
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("custom_six ")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Highest Degree</span>
            </label>
            <input
              type="text"
              name="heigh_degree"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("heigh_degree")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Degree Level</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none "
              {...register("degree_level")}
            >
              <option value="Speech Therapist">Speech Therapist</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">External Software Id</span>
            </label>
            <input
              type="text"
              name="external_software_id"
              className="input-border input-font w-full focus:outline-none py-[1px]"
              {...register("external_software_id")}
            />
          </div>

          <div>
            <label className="label">
              <span className=" label-font">Signature Valid From</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none py-[1px]"
              type="date"
              {...register("valid_from")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Signature Valid To</span>
            </label>
            <input
              className="input-border input-font w-full focus:outline-none py-[1px]"
              type="date"
              {...register("valid_to")}
            />
          </div>
          <div>
            <label className="label">
              <span className=" label-font">Upload File</span>
            </label>
            <input
              type="file"
              className=" px-2 text-xs w-full"
              {...register("fileName")}
            />
          </div>
        </div>

        {/* --------------------------------- */}
        <div className="my-5">
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={paidTimeOff}
              onClick={() => setPaidTimeOff(!paidTimeOff)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is eligible for paid time off
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={exemptStaff ? true : false}
              onClick={() => setExemptStaff(!exemptStaff)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Exempt Staff
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={paidHoliday}
              onClick={() => setPaidHoliday(!paidHoliday)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Gets paid holidays
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={isPartTime}
              onClick={() => setIsPartTime(!isPartTime)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Parttime
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={isContractor}
              onClick={() => setIsContractor(!isContractor)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Is Contractor
            </span>
          </div>
          <div className="flex ml-1 mt-1 items-center">
            <Switch
              size="small"
              checked={providerWithoutNote}
              onClick={() => setProviderWithoutNote(!providerWithoutNote)}
            />
            <span className="text-sm ml-2  text-gray-600 font-medium">
              Prevent Provider Render Without Notes(for catalyst users)
            </span>
          </div>
        </div>
        <div className="other-box ml-2 my-5">
          <div className="flex items-center justify-around gap-2 mb-2 ">
            <h3 className="text-sm font-medium w-80">Tax Type</h3>
            <h3 className="text-sm font-medium w-80">Box 24J</h3>
            <h3 className="text-sm font-medium w-80">ID Qualifier</h3>
          </div>
          {data.map((d, id) => (
            <OtherSetUpBottom
              key={id}
              data={d}
              register={register}
            ></OtherSetUpBottom>
          ))}
        </div>
        <div className="mt-10 ml-2">
          <button className=" pms-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtherSetup;
