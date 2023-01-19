import React from "react";
import { useForm } from "react-hook-form";
import FacilityManage from "./Components/FacilityManage";

const Facility = () => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    // setTable(true);
  };
  return (
    <div className="h-[100vh]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-10 flex items-center gap-4 flex-wrap">
          <div>
            <label className="label">
              <span className=" label-font">Facility</span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none"
              {...register("patient")}
            >
              <option value=""></option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className=" label-font">
                User Section(From Access Table)
              </span>
            </label>
            <select
              className="input-border input-font w-full focus:outline-none"
              {...register("patient")}
            >
              <option value=""></option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
              <option value="name"> Abcd </option>
            </select>
          </div>
          <div>
            <select
              className="input-border mt-[35px] input-font w-full focus:outline-none"
              {...register("patient")}
            >
              <option value=""></option>
              <option value="name"> Abcd </option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
              <option value="User Section(From Access Table)">
                ABC and Verbal Billing Company D
              </option>
            </select>
          </div>
          <button className=" mt-[27px]  pms-input-button" type="submit">
            OK
          </button>
        </div>
      </form>
      <FacilityManage></FacilityManage>
    </div>
  );
};

export default Facility;
