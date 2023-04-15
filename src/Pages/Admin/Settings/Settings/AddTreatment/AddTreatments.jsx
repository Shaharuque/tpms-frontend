import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";
import { PostfetchData, fetchData } from "../../../../../Misc/Helper";
import { useSelector } from "react-redux";

// import InsuranceDetails from "./InsuranceDetails";

const AddTreatments = () => {
  const { token } = useToken();
  // const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [allTreatmentData, setAllTreatmentData] = useState(null);
  const [selectedTreatmentData, setSelectedTreatmentData] = useState(null);

  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);

  //multiple get api will be called together to increase performance
  //parallel API calling[Important]
  const fetchWithPromiseAll = async () => {
    const GetTreatmentPromise = await PostfetchData({
      // "admin/ac/setting/get/all/treatment",
      endPoint: "setting/get/all/treatment",
      token,
    });
    const SelectedTreatmentPromise = await PostfetchData({
      // "admin/ac/setting/get/selected/treatment",
      endPoint: "setting/get/all/facility/treatment",
      token,
    });
    const [GetTreatments, SelectedTreatments] = await Promise.all([
      GetTreatmentPromise,
      SelectedTreatmentPromise,
    ]);
    // setAllTreatmentData(GetTreatments);
    // setSelectedTreatmentData(SelectedTreatments);
    console.log(GetTreatments, SelectedTreatments);
  };

  useEffect(() => {
    fetchWithPromiseAll();
  }, []);

  // console.log(allTreatmentData, selectedTreatmentData);
  // if (!allTreatmentData && !selectedTreatmentData) {
  //   return <Loading></Loading>;
  // }

  console.log("all tmt data", allTreatmentData);

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
      <div
        className={
          isToggled
            ? "ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 my-3 mr-2 gap-x-6 gap-y-3 "
            : "ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 "
        }
      >
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Treatments</h1>

          <div>
            <input
              type="text"
              className="border border-gray-600 w-full text-[12px] font-normal p-1 mb-2 rounded-sm"
              placeholder="Search Here"
            />
          </div>

          {/* new code added */}
          <select
            multiple={true}
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleAdding(e);
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
        </div>

        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button // onClick={handleAddItems}
            onClick={() => handleSelectedValue()}
            className="pms-button w-24"
          >
            <div className="flex item-center justify-center">
              ADD
              <HiOutlineArrowRight className="ml-2 text-base" />
            </div>
          </button>
          <button
            onClick={(e) => {
              handleRemoveValue(e);
            }}
            className="pms-close-button w-24"
          >
            <div className="flex item-center justify-center">
              <HiOutlineArrowLeft className="mr-[2px]" />
              REMOVE
            </div>
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Treatments
          </h1>
          <div>
            <input
              type="text"
              className="border border-gray-600 w-full text-[12px] font-normal p-1 mb-2 rounded-sm"
              placeholder="Search Here"
            />
          </div>
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
