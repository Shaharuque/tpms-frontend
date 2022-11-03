import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Switch } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../../../Loading/Loading";
import { baseIp, headers } from "../../../../../Misc/BaseClient";
import fetchData, { PostfetchData } from "../../../../../Misc/Helper";
import InsuranceDetails from "./InsuranceDetails";

const AddInsurance = () => {
  // const [TransferData, setTransferData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState();
  const [facilityselectedkeys, setfacilityselectedkeys] = useState();
  const [insuranceApiData, setinsuranceApiData] = useState(null);
  const [treatmentApiData, settreatmentApiData] = useState(null);
  const [passSelectedInsurance, setpassSelectedInsurance] = useState(null);
  const [passAllInsurance, setpassAllInsurance] = useState(null);
  // const [chk, setchk] = useState(false);
  // const [multi, setmulti] = useState([]);
  // const [newdata, setnewdata] = useState({ value: "coconut" });

  //Getting All Insurance using react query get request(GET req)
  // const endPoint = "admin/ac/setting/get/all/insurance";
  // const treatmentEndpoint = "admin/ac/setting/get/all/insurance/treatment";
  // // treatment
  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: insurance,
  //   refetch,
  // } = useQuery(["allInsurance"], () => fetchData(endPoint));
  // console.log("add insurance page data",insurance?.data?.all_insurance);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  // if (isError) {
  //   return <div>Error! {error.message}</div>;
  // }
  // testing space............
  // useEffect(() => {
  //   axios("../../../All_Fake_Api/Transfer.json")
  //     .then((response) => {
  //       // console.log("chkd ata", response?.data)
  //       setTransferData(response?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // const arr1 = [];
  // console.log(arr1);

  // -------------------------

  // testing endpoit calling by useeffect

  useEffect(() => {
    const dynamicApi = async () => {
      const GetInsurance = await fetchData(
        "admin/ac/setting/get/all/insurance"
      );
      const Selectedtreatment = await fetchData(
        "admin/ac/setting/get/selected/treatment"
      );
      setinsuranceApiData(GetInsurance);
      settreatmentApiData(Selectedtreatment);
    };
    dynamicApi();
  }, []);

  if (!insuranceApiData && !treatmentApiData) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   axios.get(`https://app.therapypms.com/api/v1/admin/ac/setting/get/selected/treatment`, {
  //     headers: headers,
  //   }).then((response)=>{
  //     console.log("treatment api response", response?.data )
  //   }).catch((error) => {
  //           console.log(error);
  //   });

  // }, []);
  // const options = {
  //   url: "https://app.therapypms.com/api/v1/admin/login",
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  //   data: JSON.stringify(formdata), //object k stringify korey server side a send kore lagey tai JSON.stringify korey
  // };
  // axios(options).then((response) => {
  //   console.log(response.data);

  const handleAdding = (e) => {
    let target = e.target;
    // let name = target.name;
    let value = Array.from(
      target.selectedOptions,
      (option) => option.value * 1
    );
    // console.log("data value", value)
    setSelectedKeys(value);
    // setchk(false)
    // setmulti({
    //   [name]: value,
    // });
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

  const InsuranceView = () => {
    if (selectedKeys.length > 1) {
      alert("select just one value");
      return setSelectedKeys([0]);
    }

    const body = {
      // insurance_id : selectedKeys
      insurance_id: 219,
    };
    const options = {
      url: `${baseIp}/${"admin/ac/setting/get/all/insurance/details"}`,
      method: "POST",
      headers: headers,
      data: body,
    };
    axios(options).then((response) => {
      
      setpassAllInsurance(response?.data);
      // setpassSelectedInsurance(response?.data);
    });
   
  };


  const FacilityInsurance = () => {
    if (facilityselectedkeys.length > 1) {
      alert("select just one value");
      return setfacilityselectedkeys([0]);
    }

    const body = {
      // insurance_id : selectedKeys
      insurance_id: 1531,
    };
    const options = {
      url: `${baseIp}/${"admin/ac/setting/get/selected/insurance/details"}`,
      method: "POST",
      headers: headers,
      data: body,
    };
    axios(options).then((response) => {
      
      setpassSelectedInsurance(response?.data);
    });
    console.log(" FacilityInsurance  get data", facilityselectedkeys);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3 ">
        <div>
          <h1 className="text-sm text-gray-700 my-2">All Insurance</h1>

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
            {/* {TransferData.length > 0 &&
              TransferData.map((item, index) => (
                <option
                  key={item.id}
                  className="px-2 text-sm"
                  value={item.id}>
                  {item.id}
                  {item.title}
                </option>
              ))} */}

            {insuranceApiData?.data?.all_insurance.length > 0 &&
              insuranceApiData?.data?.all_insurance.map((item, index) => (
                // <option
                //   className="px-2 text-sm"
                //   onClick={(e) => arr1.push(item)}
                //   // onClick={(e) => console.log(e.target.title)}
                //   value={item.id}
                // >
                //   {item.key}
                //   {item.title}
                // </option>
                <option
                  key={item.id}
                  className="px-2 text-sm"
                  //   onClick={(e) => arr1.push(item)}
                  // onClick={(e) => console.log(e.target.title)}
                  value={item.id}
                >
                  {item.payor_name}
                </option>
              ))}
          </select>
          <br />
          <button
            onClick={() => {
              InsuranceView();
            }}
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
            Add
            <DoubleRightOutlined className="ml-2" />
          </button>
          <button
            onClick={(e) => {
              handleRemoveValue(e);
            }}
            className="px-2 mx-3 text-sm py-1 bg-gradient-to-r from-red-700 to-red-500  hover:to-red-700 text-white rounded-md flex"
          >
            <DoubleLeftOutlined className="mr-2" />
            Remove
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
            {treatmentApiData?.data?.selected_treatment.length > 0 &&
              treatmentApiData?.data?.selected_treatment.map((item, index) => (
                <option key={item.id} className="px-2 text-sm" value={item.id}>
                  {item.treatment_name}
                </option>
              ))}
          </select>
          {/* </FormControl> */}
          <br />
          <button
            onClick={() => {
              FacilityInsurance();
            }}
            className="px-5  mr-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
      {passSelectedInsurance?.status === "success" && (
        <InsuranceDetails
        viewtesting={passAllInsurance}
          ViewDetailData={passSelectedInsurance}
        ></InsuranceDetails>
      )}

{/* {     passAllInsurance?.status === "success" && (
        <InsuranceDetails
          // ViewDetailData={passSelectedInsurance}
        ></InsuranceDetails>
      )} */}

    </div>
  );
};

export default AddInsurance;
