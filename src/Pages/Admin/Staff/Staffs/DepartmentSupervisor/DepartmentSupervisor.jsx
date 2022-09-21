import React, { useState } from "react";
import { useForm } from "react-hook-form";

const DepartmentSupervisor = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="h-[100vh]">
      <h1 className="text-lg  text-left text-orange-400">Supervisor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Is this provider a supervisor?
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register(`is_supervisor`)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-xs text-gray-600 text-left">
                Supervisor
              </span>
            </label>
            <select
              className="border rounded-sm px-2 py-[4px] mx-1 text-xs w-full"
              {...register(`supervisors`)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <button
          className=" py-[5px] mt-3 px-3 ml-1 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default DepartmentSupervisor;
