import { isError } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import { useUpdateDepartmentMutation } from "../../../../../features/Stuff_redux/staffDepartment/departmentApi";

const DepartmentSupervisor = () => {
  const [sortBy, setSortBy] = useState("1");
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { token } = useToken();
  const [updateDepartment, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdateDepartmentMutation();

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      employee_id: id,
      is_supervisor: Number(sortBy),
    };
    if (payload) {
      updateDepartment({
        token,
        payload,
      });
    }
  };
  console.log(sortBy);

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  }, [updateSuccess, updateError]);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg  text-left text-orange-400">Supervisor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-wrap items-center gap-x-2 gap-y-1">
          <div>
            <label className="label">
              <span className="label-font">Is this provider a supervisor?</span>
            </label>
            <select
              onChange={(e) => setSortBy(e.target.value)}
              className="input-border input-font w-full focus:outline-none"
            >
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          {sortBy === "2" && (
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
        <button className="pms-button  my-3" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default DepartmentSupervisor;
