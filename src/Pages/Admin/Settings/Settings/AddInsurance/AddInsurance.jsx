import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Loading from "../../../../../Loading/Loading";
import { fetchData, PostfetchData } from "../../../../../Misc/Helper";
import InsuranceDetails from "./InsuranceDetails";

const AddInsurance = () => {
  // const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [insuranceApiData, setinsuranceApiData] = useState(null);
  const [selectedInsurance, setselectedInsurance] = useState(null);
  const [passSelectedInsurance, setpassSelectedInsurance] = useState(null);
  const [passAllInsurance, setpassAllInsurance] = useState(null);
  const [addedData, setaddedData] = useState(false);

  // multiple get api will be called together to increase performance
  // parallel API calling
  const fetchWithPromiseAll = async () => {
    const GetInsurancePromise = fetchData("admin/ac/setting/get/all/insurance");
    const SelectedInsurancePromise = fetchData(
      "admin/ac/setting/get/selected/insurance"
    );
    const [GetInsurance, SelectedInsurance] = await Promise.all([
      GetInsurancePromise,
      SelectedInsurancePromise,
    ]);
    setinsuranceApiData(GetInsurance);
    setselectedInsurance(SelectedInsurance);
  };

  useEffect(() => {
    fetchWithPromiseAll();
    setaddedData(false);
  }, [addedData]);

  // console.log(insuranceApiData, selectedInsurance);

  if (!insuranceApiData && !selectedInsurance) {
    return <Loading></Loading>;
  }

  if (addedData) {
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

  const handleSelectedValue = async () => {
    console.log("add button click get data adding", selectedKeys);
    const body = {
      insurance_ids: selectedKeys,
    };
    const AddingInsuranceData = await PostfetchData(
      "admin/ac/setting/add/insurance",
      body
    );
    console.log("add data func check", AddingInsuranceData);
    if (AddingInsuranceData.status === "success") {
      alert('data added')
      setaddedData(true);
    }
  };

  const handleRemoveValue = async () => {
    console.log("Remove  button click get data", facilityselectedkeys);
    const body = {
      selected_insurance_ids: facilityselectedkeys,
    };
    const RemoveSelectedData = await PostfetchData(
      "admin/ac/setting/remove/insurance",
      body
    );
    if (RemoveSelectedData.status === "success") {
      console.log(RemoveSelectedData);
      alert("data remove ");
      setaddedData(true);
    } else {
      alert("another space use");
    }
  };

  const InsuranceView = async () => {
    if (selectedKeys.length > 1) {
      alert("select just one value");
      return setSelectedKeys([0]);
    }
    console.log("data selectedkeys", selectedKeys);

    const body = {
      insurance_id: selectedKeys,
    };
    const fetchpostTest = await PostfetchData(
      "admin/ac/setting/get/all/insurance/details",
      body
    );
    console.log("fetchpostTest", fetchpostTest);
    setpassAllInsurance(fetchpostTest);
    setpassSelectedInsurance({});
  };

  const FacilityInsurance = async () => {
    if (facilityselectedkeys.length > 1) {
      alert("select just one value");
      return setfacilityselectedkeys([0]);
    }

    const body = {
      insurance_id: facilityselectedkeys,
    };
    const fetchpostTestt = await PostfetchData(
      "admin/ac/setting/get/selected/insurance/details",
      body
    );
    setpassSelectedInsurance(fetchpostTestt);
    setpassAllInsurance({});
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

     
          <select
            multiple={true}
            id="countries_multiple"
            onChange={(e) => {
              handleAdding(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {insuranceApiData?.data?.all_insurance.length > 0 &&
              insuranceApiData?.data?.all_insurance.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.payor_name}{" "}
                </option>
              ))}{" "}
          </select>
          
          <br />
          <button
            onClick={() => {
              InsuranceView();
            }}
            className="pms-button"
          >
            View Details
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button
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
              <HiOutlineArrowLeft className="mr-2 text-base" />
              REMOVE
            </div>
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Insurance
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
            {selectedInsurance?.data?.selected_insurance?.length > 0 &&
              selectedInsurance?.data?.selected_insurance.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.payor_name}{" "}
                </option>
              ))}{" "}
          </select>
          <br />
          <button
            onClick={() => {
              FacilityInsurance();
            }}
            className="pms-button"
          >
            View Details
          </button>
        </div>
      </div>
      {(passAllInsurance?.status === "success" ||
        passSelectedInsurance?.status === "success") && (
        <InsuranceDetails
          AllInsurance={passAllInsurance}
          SelectedInsurance={passSelectedInsurance}
        ></InsuranceDetails>
      )}{" "}
    </div>
  );
};

export default AddInsurance;
