import React, { useState } from "react";
import { useForm } from "react-hook-form";

const DepartmentSupervisor = () => {
  const [sortBy, setSortBy] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(sortBy);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg  text-left text-orange-400">Supervisor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 mr-2 gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-font">Is this provider a supervisor?</span>
            </label>
            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="input-border input-font w-full focus:outline-none"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {sortBy === "No" && (
            <div>
              <label className="label">
                <span className="label-font">Supervisor</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register(`supervisors`)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          )}
        </div>
        <button className="pms-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default DepartmentSupervisor;
