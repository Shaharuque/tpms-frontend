import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Swal from "sweetalert2";
import Loading from "../../../../../Loading/Loading";
import { PostfetchData, QueryPost, useAddSuperHeroData } from "../../../../../Misc/Helper";
import MultiTransferData from "../SettingsComponent/MultiTransferData";

const AddStaffType = () => {
  // QueryPost('https://ovh.therapypms.com/api/v1/admin/ac/setting/cpt/code/exclusion/get', mutate)
//   const {mutate} = useAddSuperHeroData();
// console.log('query data', mutate)
// mutate();
  


const [staffType, setstaffType] = useState()
const [selectedStaffType, setselectedStaffType] = useState([])
const [staffSelectedKeys, setStaffSelectedKeys] = useState();
const [facilitySelectedKeys, setfacilitySelectedKeys] = useState();
const [changeData, setchangeData] = useState(false)


const fetchWithPromiseAll = async() =>{
   const Getcptdata = await PostfetchData(
  "admin/ac/setting/staff/type/all"
);
 const GetExcludedCptCodes = await PostfetchData(
  "admin/ac/setting/staff/type/selected"
);
  setstaffType(Getcptdata)
  setselectedStaffType(GetExcludedCptCodes)
}

useEffect(() => {
  fetchWithPromiseAll();
  setchangeData(false)
}, [changeData]);

// console.log("cpt code", staffType?.cpt_code_exclusion)
// console.log("excluded code", selectedStaffType)

if (!staffType) {
  return <Loading></Loading>;
}

const handleAdding = (e) => {
  let target = e.target;
  // let name = target.name;
  let value = Array.from(
    target.selectedOptions,
    (option) => option.value * 1
  );
  setStaffSelectedKeys(value)
  setfacilitySelectedKeys()
 
};


const handleRemoving = (e) => {
  let value = Array.from(
    e.target.selectedOptions,
    (option) => option.value * 1
  );
  setfacilitySelectedKeys(value);
  setStaffSelectedKeys()

};




const handleSelectedValue = async(e) =>{
  console.log("selected vlaue",staffSelectedKeys)
  if( staffSelectedKeys && staffSelectedKeys.length > 0){

    const body = {
      "staff_type_id" : staffSelectedKeys
  };
    const AddingCptCode = await PostfetchData(
      "admin/ac/setting/staff/type/add",
      body
    );
    console.log("add data func check", AddingCptCode);
    if (AddingCptCode.status === "success") {
      Swal.fire({
        icon: 'success',
        title: AddingCptCode.message,
        showConfirmButton: false,
        timer: 1500
      })
      setchangeData(true)
    }
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Please Select Staff Type',
      showConfirmButton: false,
      timer: 1500
    })
  }


}

const handleRemoveValue = async(e) =>{
  console.log("remove vlaue",facilitySelectedKeys)
  // console.log("excluded cpt", selectedStaffType)

if( facilitySelectedKeys && facilitySelectedKeys.length > 0){
const body = {"assign_type_id" : facilitySelectedKeys};
const RemoveCptCode = await PostfetchData(
  "admin/ac/setting/staff/type/remove",
  body
);
console.log("add data func check", RemoveCptCode);
if (RemoveCptCode?.status === "success") {
  Swal.fire({
    icon: 'success',
    title: RemoveCptCode.message,
    showConfirmButton: false,
    timer: 1500
  })
  setchangeData(true)
}
}else{
Swal.fire({
  icon: 'error',
  title: 'Selected Staff Types',
  showConfirmButton: false,
  timer: 1500
})
}
 


}

// console.log('cptdata', staffType)
// console.log('excluded cpt', selectedStaffType)
// console.log("selected vlaue",staffSelectedKeys)



  return (
  
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Staff Types</h1>

     
          <select
            multiple={true}
            id="countries_multiple"
            onChange={(e) => {
              handleAdding(e);
            }}
            className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
          >
            {staffType?.staff_type?.length > 0 &&
              staffType?.staff_type.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.type_name}
                </option>
              ))}
          </select>
          
          <br />
        </div>
        <div className=" flex flex-col items-center justify-center my-4 gap-2">
          <button
            onClick={(e) => handleSelectedValue(e)}
            className="pms-button w-24"
            disabled={facilitySelectedKeys?.length > 0 && staffSelectedKeys === undefined }
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
            disabled={staffSelectedKeys?.length > 0}
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
          Facility Selected Staff Types
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
         {selectedStaffType?.selected_staff_type?.length > 0 &&
              selectedStaffType?.selected_staff_type.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.type_name}
                </option>
              ))}
          </select>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AddStaffType;
