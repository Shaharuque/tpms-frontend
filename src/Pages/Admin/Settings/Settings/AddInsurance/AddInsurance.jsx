import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Swal from "sweetalert2";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";
import { fetchData, PostfetchData } from "../../../../../Misc/Helper";
import InsuranceDetails from "./InsuranceDetails";
import { useSelector } from "react-redux";

const AddInsurance = () => {
  const { token } = useToken();
  console.log(token);
  ///console.log("token from custom hook", token);
  // const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [insuranceApiData, setinsuranceApiData] = useState(null);
  const [selectedInsurance, setselectedInsurance] = useState(null);
  const [passSelectedInsurance, setpassSelectedInsurance] = useState(null);
  const [passAllInsurance, setpassAllInsurance] = useState(null);
  const [addedData, setaddedData] = useState(false);

  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);

  // multiple get api will be called together to increase performance
  // parallel API calling
  const fetchWithPromiseAll = async () => {
    const GetInsurancePromise = fetchData(
      // "admin/ac/setting/get/all/insurance",
      "setting/get/all/insurance",
      token
    );
    const SelectedInsurancePromise = fetchData(
      // "admin/ac/setting/get/selected/insurance",
      "setting/get/facility/selected/insurance",
      token
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

  // console.log("data hello", insuranceApiData, selectedInsurance);

  const handleAdding = (e) => {
    let target = e.target;
    // let name = target.name;
    let value = Array.from(
      target.selectedOptions,
      (option) => option.value * 1
    );
    setSelectedKeys(value);
    setfacilityselectedkeys();
  };

  const handleRemoving = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    setfacilityselectedkeys(value);
    setSelectedKeys();
  };

  console.log("selected key", selectedKeys, "facilaty", facilityselectedkeys);

  const handleSelectedValue = async () => {
    console.log("add button click get data adding", selectedKeys);
    const body = {
      insurance_ids: selectedKeys,
    };

    const AddingInsuranceData = await PostfetchData({
      // endPoint: "admin/ac/setting/add/insurance",
      endPoint: "setting/add/insurance/facility",
      payload: body,
      token,
    });
    console.log("add data func check", AddingInsuranceData);
    if (AddingInsuranceData.status === "success") {
      Swal.fire({
        icon: "success",
        title: AddingInsuranceData?.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setaddedData(true);
    }
  };

  const handleRemoveValue = async () => {
    console.log("Remove  button click get data", facilityselectedkeys);
    const body = {
      insurance_ids: facilityselectedkeys,
    };
    const RemoveSelectedData = await PostfetchData({
      // endPoint: "admin/ac/setting/remove/insurance",
      endPoint: "setting/delete/insurance/facility",
      payload: body,
      token,
    });
    if (RemoveSelectedData.status === "success") {
      console.log(RemoveSelectedData);
      Swal.fire({
        icon: "success",
        title: RemoveSelectedData?.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setaddedData(true);
    } else {
      Swal.fire({
        icon: "error",
        title: RemoveSelectedData?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const InsuranceView = async () => {
    if (selectedKeys.length > 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Select just One Value",
        timer: 1500,
      });
      return setSelectedKeys([0]);
    }
    console.log("data selectedkeys", selectedKeys);

    //body always send to backend as object and json.stringify
    const body = {
      insurance_id: selectedKeys,
    };
    const fetchpostTest = await PostfetchData({
      // endPoint: "admin/ac/setting/get/all/insurance/details",
      endPoint: "setting/all/insurance/details",

      payload: body,
      token,
    });
    console.log("fetchpostTest", fetchpostTest);
    setpassAllInsurance(fetchpostTest);
    setpassSelectedInsurance({});
  };

  const FacilityInsurance = async () => {
    if (facilityselectedkeys.length > 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Select just One Value",
        timer: 1500,
      });
      return setfacilityselectedkeys([0]);
    }

    const body = {
      insurance_id: facilityselectedkeys,
    };
    const fetchpostTestt = await PostfetchData({
      endPoint: "setting/get-payor-selected-facility-details",
      payload: body,
      token,
    });
    setpassSelectedInsurance(fetchpostTestt);
    setpassAllInsurance({});
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
        {/* <div className="ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 "> */}
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>
          <div>
            <input
              type="text"
              className="border border-gray-600 w-full text-[12px] font-normal p-1 mb-2 rounded-sm"
              placeholder="Search Here"
            />
          </div>

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
            disabled={
              selectedKeys === undefined && facilityselectedkeys?.length > 0
            }
            className="pms-button"
          >
            View Details
          </button>
        </div>
        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button
            onClick={() => handleSelectedValue()}
            disabled={
              selectedKeys === undefined && facilityselectedkeys?.length > 0
            }
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
            disabled={
              selectedKeys?.length > 0 && facilityselectedkeys === undefined
            }
            className="pms-close-button w-24"
          >
            <div className="flex item-center justify-center">
              <HiOutlineArrowLeft className="text-base" />
              REMOVE
            </div>
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Insurance
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
            {selectedInsurance?.data?.facility_selected_insurance?.length > 0 &&
              selectedInsurance?.data?.facility_selected_insurance.map(
                (item, index) => (
                  <option
                    key={item.id}
                    className="px-2 text-sm"
                    value={item.id}
                  >
                    {item.payor_name}{" "}
                  </option>
                )
              )}{" "}
          </select>
          <br />
          <button
            onClick={() => {
              FacilityInsurance();
            }}
            disabled={
              selectedKeys?.length > 0 && facilityselectedkeys === undefined
            }
            className="pms-button"
          >
            View Details
          </button>
        </div>
      </div>
      {(passAllInsurance?.status === "success" ||
        passSelectedInsurance?.status === "success") && (
        <div className="m-2">
          <InsuranceDetails
            AllInsurance={passAllInsurance}
            SelectedInsurance={passSelectedInsurance}
          ></InsuranceDetails>
        </div>
      )}{" "}
    </div>
  );
};

export default AddInsurance;
