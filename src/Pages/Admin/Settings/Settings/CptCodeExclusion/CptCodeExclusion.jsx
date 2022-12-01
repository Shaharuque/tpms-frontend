import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Swal from "sweetalert2";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";
import { PostfetchData } from "../../../../../Misc/Helper";
// import MultiTransferData from "../SettingsComponent/MultiTransferData";

const CptCodeExclusion = () => {
  const { token } = useToken();
  const [cptCode, setcptCode] = useState();
  const [excludedCptCode, setexcludedCptCode] = useState([]);
  const [cptSelectedKeys, setcptSelectedKey] = useState();
  const [excludedCptSelectedKeys, setexcludedCptSelectedKey] = useState();
  const [changeData, setchangeData] = useState(false);

  const fetchWithPromiseAll = async () => {
    const Getcptdata = await PostfetchData({
      endPoint: "admin/ac/setting/cpt/code/exclusion/get",
      token,
    });
    const GetExcludedCptCodes = await PostfetchData({
      endPoint: "admin/ac/setting/cpt/code/selected/exclusion",
      token,
    });
    setcptCode(Getcptdata);
    setexcludedCptCode(GetExcludedCptCodes);
  };

  useEffect(() => {
    fetchWithPromiseAll();
    setchangeData(false);
  }, [changeData]);

  // console.log("cpt code", cptCode?.cpt_code_exclusion)
  // console.log("excluded code", excludedCptCode)

  if (!cptCode) {
    return <Loading></Loading>;
  }

  const handleAdding = (e) => {
    let target = e.target;
    // let name = target.name;
    let value = Array.from(
      target.selectedOptions,
      (option) => option.value * 1
    );
    setcptSelectedKey(value);
    setexcludedCptSelectedKey();
  };

  const handleRemoving = (e) => {
    let value = Array.from(
      e.target.selectedOptions,
      (option) => option.value * 1
    );
    setexcludedCptSelectedKey(value);
    setcptSelectedKey();
  };

  const handleSelectedValue = async (e) => {
    console.log("selected vlaue", cptSelectedKeys);
    if (cptSelectedKeys && cptSelectedKeys.length > 0) {
      const body = {
        cpt_id: cptSelectedKeys,
      };
      const AddingCptCode = await PostfetchData({
        endPoint: "admin/ac/setting/cpt/code/exclusion/add",
        payload: body,
        token,
      });
      console.log("add data func check", AddingCptCode);
      if (AddingCptCode.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Added",
          showConfirmButton: false,
          timer: 1500,
        });
        setchangeData(true);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Selected Cpt Codes",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleRemoveValue = async (e) => {
    console.log("remove vlaue", excludedCptSelectedKeys);
    console.log("excluded cpt", excludedCptCode);

    if (excludedCptSelectedKeys && excludedCptSelectedKeys.length > 0) {
      const body = { exclude_cpt_id: excludedCptSelectedKeys };
      const RemoveCptCode = await PostfetchData({
        endPoint: "admin/ac/setting/cpt/code/exclusion/remove",
        payload: body,
        token,
      });
      console.log("add data func check", RemoveCptCode);
      if (RemoveCptCode.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Removed",
          showConfirmButton: false,
          timer: 1500,
        });
        setchangeData(true);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Selected Excluded Cpt Codes",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // console.log('cptdata', cptCode)
  // console.log('excluded cpt', excludedCptCode)
  // console.log("selected vlaue",cptSelectedKeys)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">Available Cpt Codes</h1>

          <select
            multiple={true}
            id="countries_multiple"
            onChange={(e) => {
              handleAdding(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {cptCode?.cpt_code_exclusion?.length > 0 &&
              cptCode?.cpt_code_exclusion.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.cpt_code}
                </option>
              ))}
          </select>

          <br />
        </div>
        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button
            onClick={(e) => handleSelectedValue(e)}
            className="pms-button w-24"
            disabled={
              excludedCptSelectedKeys?.length > 0 &&
              cptSelectedKeys === undefined
            }
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
            disabled={cptSelectedKeys?.length > 0}
            className="pms-close-button w-24"
          >
            <div className="flex item-center justify-center">
              <HiOutlineArrowLeft className="mr-2 text-base" />
              REMOVE
            </div>
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">Excluded Cpt Codes</h1>
          <select
            multiple
            id="countries_multiple"
            // className="h-40"
            onChange={(e) => {
              handleRemoving(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {excludedCptCode?.cpt_code_exclusion?.length > 0 &&
              excludedCptCode?.cpt_code_exclusion.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.cpt_code}
                </option>
              ))}
          </select>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CptCodeExclusion;
