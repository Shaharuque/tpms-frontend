import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProcessingClaim = () => {
  const [insurance, setInsurance] = useState(false);
  const [active, setActive] = useState(false);
  const [insuranceSelect, setInsuranceSelect] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleGO = () => {
    setInsurance(true);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-400">Processing Claim(s)</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-wrap items-center gap-2">
            <div>
              {" "}
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  To Date
                </span>
              </label>
              <input
                className="border rounded-sm px-2 py-1 mx-1 text-xs w-full"
                type="date"
                {...register("date")}
              />
            </div>
            {/* go*/}
            <button
              onClick={handleGO}
              className=" py-1 mt-8 w-14 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Go
            </button>
            {insurance && (
              <>
                {/* insurance  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Insurance
                    </span>
                  </label>
                  <select
                    onChange={(e) => setInsuranceSelect(e.target.value)}
                    name="type"
                    className="border rounded-sm px-2 w-36 py-1 text-xs "
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {/* Sort By  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Sort By
                    </span>
                  </label>
                  <select
                    onChange={handleSortBy}
                    name="type"
                    className="border rounded-sm px-2 w-36 py-1 text-xs "
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {active && (
                  <>
                    {" "}
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          {sortBy}
                        </span>
                      </label>
                      <select
                        // onChange={(e) => setInsuranceSelect(e.target.value)}
                        name="type"
                        className="border rounded-sm px-2 w-36 py-1 text-xs "
                      >
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                      </select>
                    </div>
                    {/* Sort By  */}
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-500 text-left">
                          Sort By
                        </span>
                      </label>
                      <select
                        onChange={handleSortBy}
                        name="type"
                        className="border rounded-sm px-2 w-36 py-1 text-xs "
                      >
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                      </select>
                    </div>
                    {active && (
                      <>
                        {" "}
                        <div>
                          <label className="label">
                            <span className="label-text text-xs text-gray-500 text-left">
                              {sortBy}
                            </span>
                          </label>
                          <select
                            // onChange={(e) => setInsuranceSelect(e.target.value)}
                            name="type"
                            className="border rounded-sm px-2 w-36 py-1 text-xs "
                          >
                            <option value="all">All</option>
                            <option value="patient">Patient</option>
                            <option value="provider">Provider</option>
                          </select>
                        </div>
                      </>
                    )}
                  </>
                )}
                {/* submit  */}
                <button
                  className=" py-1 mt-8 w-16 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Run
                </button>
                <button className=" py-1 mt-8 w-16 text-sm bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProcessingClaim;
