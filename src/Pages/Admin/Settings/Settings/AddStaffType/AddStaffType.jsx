// import React, { useEffect, useState } from "react";
// import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
// import Swal from "sweetalert2";
// import useToken from "../../../../../CustomHooks/useToken";
// import Loading from "../../../../../Loading/Loading";
// import { PostfetchData } from "../../../../../Misc/Helper";

// const AddStaffType = () => {
//   const { token } = useToken();
//   const [staffType, setstaffType] = useState();
//   const [selectedStaffType, setselectedStaffType] = useState([]);
//   const [staffSelectedKeys, setStaffSelectedKeys] = useState();
//   const [facilitySelectedKeys, setfacilitySelectedKeys] = useState();
//   const [changeData, setchangeData] = useState(false);

//   const fetchWithPromiseAll = async () => {
//     const Getcptdata = await PostfetchData({
//       endPoint: "admin/ac/setting/staff/type/all",
//       token,
//     });
//     const GetExcludedCptCodes = await PostfetchData({
//       endPoint: "admin/ac/setting/staff/type/selected",
//       token,
//     });
//     setstaffType(Getcptdata);
//     setselectedStaffType(GetExcludedCptCodes);
//   };

//   useEffect(() => {
//     fetchWithPromiseAll();
//     setchangeData(false);
//   }, [changeData]);

//   // console.log("cpt code", staffType?.cpt_code_exclusion)
//   // console.log("excluded code", selectedStaffType)

//   if (!staffType) {
//     return <Loading></Loading>;
//   }

//   const handleAdding = (e) => {
//     let target = e.target;
//     // let name = target.name;
//     let value = Array.from(
//       target.selectedOptions,
//       (option) => option.value * 1
//     );
//     setStaffSelectedKeys(value);
//     setfacilitySelectedKeys();
//   };

//   const handleRemoving = (e) => {
//     let value = Array.from(
//       e.target.selectedOptions,
//       (option) => option.value * 1
//     );
//     setfacilitySelectedKeys(value);
//     setStaffSelectedKeys();
//   };

//   const handleSelectedValue = async (e) => {
//     console.log("selected vlaue", staffSelectedKeys);
//     if (staffSelectedKeys && staffSelectedKeys.length > 0) {
//       const body = {
//         staff_type_id: staffSelectedKeys,
//       };
//       const AddingCptCode = await PostfetchData({
//         endPoint: "admin/ac/setting/staff/type/add",

//         payload: body,
//         token,
//       });
//       console.log("add data func check", AddingCptCode);
//       if (AddingCptCode.status === "success") {
//         Swal.fire({
//           icon: "success",
//           title: AddingCptCode.message,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         setchangeData(true);
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Please Select Staff Type",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   const handleRemoveValue = async (e) => {
//     console.log("remove vlaue", facilitySelectedKeys);
//     // console.log("excluded cpt", selectedStaffType)

//     if (facilitySelectedKeys && facilitySelectedKeys.length > 0) {
//       const body = { assign_type_id: facilitySelectedKeys };
//       const RemoveCptCode = await PostfetchData({
//         endPoint: "admin/ac/setting/staff/type/remove",
//         payload: body,
//         token,
//       });
//       console.log("add data func check", RemoveCptCode);
//       if (RemoveCptCode?.status === "success") {
//         Swal.fire({
//           icon: "success",
//           title: RemoveCptCode.message,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         setchangeData(true);
//       }
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Selected Staff Types",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   // console.log('cptdata', staffType)
//   // console.log('excluded cpt', selectedStaffType)
//   // console.log("selected vlaue",staffSelectedKeys)

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
//         <div>
//           <h1 className="text-sm text-gray-700 my-2">All Staff Types</h1>
//           <div>
//             <input
//               type="text"
//               className="border border-gray-600 w-full text-[12px] font-normal p-1 mb-2 rounded-sm"
//               placeholder="Search Here"
//             />
//           </div>

//           <select
//             multiple={true}
//             id="countries_multiple"
//             onChange={(e) => {
//               console.log("data", e.target.value);
//               handleAdding(e);
//             }}
//             className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
//           >
//             {staffType?.staff_type?.length > 0 &&
//               staffType?.staff_type.map((item, index) => (
//                 <option key={item.id} className="px-2 text-sm" value={item.id}>
//                   {item.type_name}
//                 </option>
//               ))}
//           </select>

//           <br />
//         </div>
//         <div className=" flex flex-col items-center justify-center my-4 gap-2">
//           <button
//             onClick={(e) => handleSelectedValue(e)}
//             className="pms-button w-24"
//             disabled={
//               facilitySelectedKeys?.length > 0 &&
//               staffSelectedKeys === undefined
//             }
//           >
//             <div className="flex item-center justify-center">
//               ADD
//               <HiOutlineArrowRight className="ml-2 text-base" />
//             </div>
//           </button>
//           <button
//             onClick={(e) => {
//               handleRemoveValue(e);
//             }}
//             disabled={staffSelectedKeys?.length > 0}
//             className="pms-close-button w-24"
//           >
//             <div className="flex item-center justify-center">
//               <HiOutlineArrowLeft className="text-base" />
//               REMOVE
//             </div>
//           </button>
//         </div>

//         <div>
//           <h1 className="text-sm text-gray-700 my-2">
//             Facility Selected Staff Types
//           </h1>
//           <div>
//             <input
//               type="text"
//               className="border border-gray-600 w-full text-[12px] font-normal p-1 mb-2 rounded-sm"
//               placeholder="Search Here"
//             />
//           </div>
//           <select
//             multiple
//             id="countries_multiple"
//             // className="h-40"
//             onChange={(e) => {
//               handleRemoving(e);
//             }}
//             className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
//           >
//             {selectedStaffType?.selected_staff_type?.length > 0 &&
//               selectedStaffType?.selected_staff_type.map((item, index) => (
//                 <option key={item.id} className="px-2 text-sm" value={item.id}>
//                   {item.type_name}
//                 </option>
//               ))}
//           </select>
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStaffType;

import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";
import { useSelector } from "react-redux";
import {} from "../../../../../features/Settings_redux/addTreatment/addTreatmentApi";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import {
  useAddCptExclusionMutation,
  useAvailableCptCodesQuery,
  useExcludedCptCodesQuery,
  useRemoveCptExclusionMutation,
} from "../../../../../features/Settings_redux/cptcodeExclusion/cptCodeExclusionApi";
import {
  useAddStaffTypeMutation,
  useGetAllStaffQuery,
  useGetSelectedStaffQuery,
} from "../../../../../features/Settings_redux/ addStaffType/addStaffApi";

const AddStaffType = () => {
  const { token } = useToken();
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [getSearchData, setSearchData] = useState("");
  const [searchSelectedTreatment, setSearchSelectedTreatments] = useState();
  // const [inputValue, setInputValue] = useState("");

  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);

  // //seach
  // const { data: searchTretmentdata } = useTreatmentSearchQuery({
  //   token,
  //   data: {
  //     searchItem: getSearchData,
  //   },
  // });

  // // search selected tretment
  // const { data: searchTreatment } = useSearchSelectedTreatmentQuery({
  //   token,
  //   data: {
  //     searchItem: searchSelectedTreatment,
  //   },
  // });
  // console.log("searchtmdata", searchTreatment);

  const {
    data: getallTreatmentData,
    isSuccess,
    isLoading: getallTreatmentLoading,
  } = useGetAllStaffQuery({ token: token });
  console.log(isSuccess, getallTreatmentData);

  const {
    data: getallFacilityTreatments,
    isLoading: getallFacilityTreatmentsLoading,
  } = useGetSelectedStaffQuery({ token: token });
  console.log(isSuccess, getallFacilityTreatments);

  // add
  const [addStaffType, { data: addResponse }] = useAddStaffTypeMutation();

  useEffect(() => {
    if (addResponse?.status === "success") {
      toast.success(<h1 className="text-[12px]">{addResponse?.message}</h1>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [addResponse?.message, addResponse?.status]);

  // delete
  const [removeCptExclusion, { data: deleteResponse }] =
    useRemoveCptExclusionMutation();
  console.log(addResponse, deleteResponse);

  useEffect(() => {
    if (deleteResponse?.status === "success") {
      toast.error(<h1 className="text-[12px]">{deleteResponse?.message}</h1>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [deleteResponse?.message, deleteResponse?.status]);

  // delete
  // console.log(allTreatmentData, selectedTreatmentData);
  if (getallFacilityTreatmentsLoading && getallTreatmentLoading) {
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

  const handleSelectedValue = () => {
    console.log("add button click get data", selectedKeys);
    addStaffType({
      token,
      data: {
        staffTypeIds: selectedKeys,
      },
    });
  };

  const handleRemoveValue = (e) => {
    console.log("Remove  button click get data", facilityselectedkeys);
    removeCptExclusion({
      token,
      data: {
        cpt_ids: facilityselectedkeys,
      },
    });
  };

  // debounce *****************
  // Define the debounced function
  const SearchTreatmentDebounce = debounce((value) => {
    console.log(`You typed: ${value}`);
    setSearchData(value);
  }, 1000);
  // Handle input change event and call the debounced function
  const handleSearchTreatmnet = (event) => {
    SearchTreatmentDebounce(event.target.value);
  };

  const selectedTreatmnetDebounce = debounce((value) => {
    console.log(`You typed: ${value}`);
    setSearchSelectedTreatments(value);
  }, 1000);
  // Handle input change event and call the debounced function
  const handleSelectedSearch = (event) => {
    selectedTreatmnetDebounce(event.target.value);
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
          <h1 className="text-sm text-gray-700 my-2">All Staff Types</h1>

          <div>
            <input
              // onChange={(e) => setSearchData(e.target.value)}
              onChange={handleSearchTreatmnet}
              // value={inputValue}
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
            {getallTreatmentData?.all_insurance?.length > 0 &&
              getallTreatmentData?.all_insurance.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.type_name}
                </option>
              ))}
          </select>
        </div>

        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button // onClick={handleAddItems}
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
            className="pms-close-button w-24"
            disabled={
              selectedKeys?.length > 0 && facilityselectedkeys === undefined
            }
          >
            <div className="flex item-center justify-center">
              <HiOutlineArrowLeft className="mr-[2px]" />
              REMOVE
            </div>
          </button>
        </div>

        <div>
          <h1 className="text-sm text-gray-700 my-2">
            Facility Selected Staff Types
          </h1>
          <div>
            <input
              onChange={handleSelectedSearch}
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
            {getallFacilityTreatments?.data?.length > 0 &&
              getallFacilityTreatments?.data.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.type_name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddStaffType;
