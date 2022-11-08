import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import Loading from "../../../../../Loading/Loading";
import { fetchData, PostfetchData } from "../../../../../Misc/Helper";

// import InsuranceDetails from "./InsuranceDetails";

const AddTreatments = () => {
  // const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [allTreatmentData, setAllTreatmentData] = useState(null);
  const [selectedTreatmentData, setSelectedTreatmentData] = useState(null);
  const [passSelectedInsurance, setpassSelectedInsurance] = useState(null);
  const [passAllInsurance, setpassAllInsurance] = useState(null);

  //multiple get api will be called together to increase performance
  //parallel API calling
  const fetchWithPromiseAll = async () => {
    const GetTreatmentPromise = fetchData("admin/ac/setting/get/all/treatment");
    const SelectedTreatmentPromise = fetchData(
      "admin/ac/setting/get/selected/treatment"
    );
    const [GetTreatments, SelectedTreatments] = await Promise.all([
      GetTreatmentPromise,
      SelectedTreatmentPromise,
    ]);
    setAllTreatmentData(GetTreatments);
    setSelectedTreatmentData(SelectedTreatments);
  };

  useEffect(() => {
    fetchWithPromiseAll();
  }, []);

  console.log(allTreatmentData, selectedTreatmentData);

  // useEffect(() => {
  //   const treatmentsApiCalling = async () => {
  //     const getAllTreatments = await fetchData(
  //       "admin/ac/setting/get/all/treatment"
  //     );
  //     const getSelectedTreatments = await fetchData(
  //       "admin/ac/setting/get/selected/treatment"
  //     );
  //     // console.log(getSelectedTreatments);
  //     setAllTreatmentData(getAllTreatments);
  //     setSelectedTreatmentData(getSelectedTreatments);
  //   };
  //   treatmentsApiCalling();
  // }, []);

  if (!allTreatmentData && !selectedTreatmentData) {
    return <Loading></Loading>;
  }

  const handleAdding = (e) => {
    let target = e.target;
    // let name = target.name;
    let value = Array.from(
      target.selectedOptions,
      (option) => option.value * 1
    );
    setSelectedKeys(value);
  };

  const handleRemoving = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    setfacilityselectedkeys(value);
  };

  const handleSelectedValue = () => {
    console.log("add button click get data", selectedKeys);
  };

  const handleRemoveValue = (e) => {
    console.log("Remove  button click get data", facilityselectedkeys);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Treatments</h1>

          {/* new code added */}
          <select
            multiple={true}
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleAdding(e);
              // console.log("handlechange data check", e.target.value)
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {allTreatmentData?.data?.all_insurance?.length > 0 &&
              allTreatmentData?.data?.all_insurance.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.payor_name}
                </option>
              ))}
          </select>
          <br />
          <button
            // onClick={() => {
            //   InsuranceView();
            // }}
            className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            View Details
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center my-4">
          <button
            onClick={() => handleSelectedValue()}
            className="px-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md mb-2 flex"
          >
            ADD
            <DoubleRightOutlined className="ml-2" />
          </button>
          <button
            onClick={(e) => {
              handleRemoveValue(e);
            }}
            className="px-2 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md flex"
          >
            <DoubleLeftOutlined className="mr-2" />
            REMOVE
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Treatments
          </h1>
          <select
            multiple
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleRemoving(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {/* calling same api  */}
            {selectedTreatmentData?.data?.selected_treatment?.length > 0 &&
              selectedTreatmentData?.data?.selected_treatment.map(
                (item, index) => (
                  <option
                    key={item.id}
                    className="px-2 text-sm"
                    value={item.id}
                  >
                    {item.treatment_name}
                  </option>
                )
              )}
          </select>
          {/* </FormControl> */}
          <br />
          <button
            // onClick={() => {
            //   FacilityInsurance();
            // }}
            className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
      {/* {(passAllInsurance?.status === "success" ||
        passSelectedInsurance?.status === "success") && (
        <InsuranceDetails
          AllInsurance={passAllInsurance}
          SelectedInsurance={passSelectedInsurance}
        ></InsuranceDetails>
      )} */}
    </div>
  );
};

export default AddTreatments;
