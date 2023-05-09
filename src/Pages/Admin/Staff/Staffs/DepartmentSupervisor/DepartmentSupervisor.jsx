import { isError } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../../CustomHooks/useToken";
import {
  useGetSupervisorListQuery,
  useUpdateDepartmentMutation,
} from "../../../../../features/Stuff_redux/staffDepartment/departmentApi";

const DepartmentSupervisor = () => {
  const [sortBy, setSortBy] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { token } = useToken();

  const { data: superVisors, isLoading: superVisorLoading } =
    useGetSupervisorListQuery({
      id,
      token,
    });
  useEffect(() => {
    setSortBy(superVisors?.exist_dep?.is_supervisor);
  }, []);

  const [updateDepartment, { isSuccess: updateSuccess, isError: updateError }] =
    useUpdateDepartmentMutation();

  let provider = null;
  if (superVisors?.clients?.length === 0) {
    provider = <div className="text-red-700">Select One</div>;
  } else if (superVisors?.clients?.length > 0) {
    provider = (
      <>
        {superVisors?.clients?.map((s) => {
          return (
            <option key={s?.id} value={s?.id}>
              {s?.full_name}
            </option>
          );
        })}
      </>
    );
  }

  //To show default data in the form
  useEffect(() => {
    setTimeout(() => {
      reset({
        supervisor_id: superVisors?.exist_dep?.supervisor_id,
      });
    }, 500);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      employee_id: id,
      is_supervisor: Number(sortBy),
      supervisor_id: Number(data?.supervisor_id),
    };
    if (payload) {
      updateDepartment({
        token,
        payload,
      });
    }
    console.log("payload", payload);
  };
  console.log("sort by value", sortBy);

  useEffect(() => {
    if (updateSuccess) {
      toast.success("successfully provider dept. supervisor updated", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    } else if (updateError) {
      toast.error("Some Error Occured", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        style: { fontSize: "12px" },
      });
    }
  }, [updateSuccess, updateError]);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg  text-left text-orange-400">Supervisor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-wrap items-center gap-x-2 gap-y-4">
          <div>
            <label className="label">
              <span className="label-font">Is this provider a supervisor?</span>
            </label>
            <select
              defaultValue={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-border input-font w-full focus:outline-none"
              // {...register("is_supervisor")}
            >
              <option value={1}>Yes</option>
              <option value={2}>No</option>
            </select>
          </div>
          {sortBy == 2 && (
            <div>
              <label className="label">
                <span className="label-font">Supervisor</span>
              </label>
              <select
                className="input-border input-font w-full focus:outline-none"
                {...register("supervisor_id")}
              >
                <option value="0"></option>
                {provider}
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
