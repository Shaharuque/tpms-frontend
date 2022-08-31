import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "rsuite";

const ApplyPayment = () => {
  const [sortBy, setSortBy] = useState("");

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="h-[100vh]">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-2 mr-2 gap-3">
          <div className="flex item-center flex-wrap">
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-600 text-left">
                  Post By
                </span>
              </label>
              <select
                onChange={handleSortBy}
                name="type"
                className="border border-gray-300 rounded-sm py-[5px] font-normal px-2 w-36 text-xs "
              >
                <option value=""></option>
                <option value="claim_no">Claim No</option>
                <option value="patient">Patient</option>
              </select>
            </div>
            {sortBy === "claim_no" && (
              <div>
                <label className="label">
                  <span className="label-text font-medium text-xs text-gray-600 text-left">
                    Claim No
                  </span>
                </label>
                <input
                  placeholder="Claim No"
                  className="border border-gray-300 rounded-sm font-medium px-2 py-[5px] mx-1 text-xs w-full"
                  type="text"
                  {...register("claim")}
                />
              </div>
            )}

            {sortBy === "patient" && (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Patient
                    </span>
                  </label>
                  <select
                    className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-full"
                    {...register("patient_name")}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-600 text-left">
                      Selected date
                    </span>
                  </label>
                  <div className="ml-1">
                    <DateRangePicker
                      onChange={(date) => {
                        console.log(date);
                      }}
                      placeholder="Select Date"
                    />
                  </div>
                </div>
              </div>
            )}
            <div>
              <button
                className=" mr-1 py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Ok
              </button>
              <button className=" py-[5px] mt-[35px] px-2 text-xs font-medium bg-gradient-to-r  from-red-700 to-red-400  hover:to-red-700 text-white rounded-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyPayment;
