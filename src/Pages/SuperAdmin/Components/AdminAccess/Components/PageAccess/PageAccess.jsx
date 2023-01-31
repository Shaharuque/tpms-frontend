import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PageAccess = () => {
  const [insuranceApiData, setinsuranceApiData] = useState(null);
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

  // testing spaceee............
  useEffect(() => {
    axios("../../../All_Fake_Api/Transfer.json")
      .then((response) => {
        // console.log("chkd ata", response?.data)
        setinsuranceApiData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {" "}
      <div className="h-[100vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-10 flex items-center gap-4 flex-wrap">
            <div>
              <label className="label">
                <span className=" label-font">Sort By</span>
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
                <span className=" label-font">Admin</span>
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

            <button className=" mt-[27px]  pms-input-button" type="submit">
              OK
            </button>
          </div>
        </form>
        <div>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2x:grid-cols-4 my-2  gap-y-1">
            <div className="w-full">
              <h1 className=" text-sm mb-3 font-medium"> Available Page(s)</h1>
              <select
                multiple={true}
                id="countries_multiple"
                // onChange={(e) => {
                //   handleAdding(e);
                // }}
                className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
              >
                {insuranceApiData?.data?.all_insurance.length > 0 &&
                  insuranceApiData?.data?.all_insurance.map((item, index) => (
                    <option
                      key={item.id}
                      className="px-2 text-sm"
                      value={item.id}
                    >
                      {item.payor_name}{" "}
                    </option>
                  ))}{" "}
              </select>
            </div>

            <div className="flex justify-center items-center">
              <button
                // onClick={() => setSelectedKeys(arr1)}
                // className=" py-[5px] font-normal px-3 my-auto  text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                className="pms-button my-2"
                type="submit"
              >
                Add
              </button>
            </div>
            <div className="w-full">
              <h1 className=" text-sm mb-3 font-medium"> Allocated Page(s)</h1>
              <select
                multiple={true}
                id="countries_multiple"
                // onChange={(e) => {
                //   handleAdding(e);
                // }}
                className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
              >
                {insuranceApiData?.data?.all_insurance.length > 0 &&
                  insuranceApiData?.data?.all_insurance.map((item, index) => (
                    <option
                      key={item.id}
                      className="px-2 text-sm"
                      value={item.id}
                    >
                      {item.payor_name}{" "}
                    </option>
                  ))}{" "}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAccess;
