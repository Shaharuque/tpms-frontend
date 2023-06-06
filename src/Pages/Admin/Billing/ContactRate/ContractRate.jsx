import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { Table } from "antd";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  useGetAllPayorsMutation,
  useGetAllSelectedTreatmentMutation,
  useGetAllServicesMutation,
  useGetAllSettingSubActivityMutation,
} from "../../../../features/Billing_redux/ContactRate_redux/ContactRateApi";
import useToken from "../../../../CustomHooks/useToken";
import { baseIp } from "../../../../Misc/BaseClient";
import ShimmerLoader from "../../../../Loading/ShimmerLoader";

const CoactiveractRate = () => {
  const [select, setSelect] = useState("");
  const [contactRateList, setContactRateList] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { token } = useToken();
  const [loading, setLoading] = useState(false);
  const [selectedPayorName, setSelectedPayorName] = useState("");

  console.log("select", select);

  const [getAllPayors, { data: allPayors, isLoading: dataLoading }] = useGetAllPayorsMutation();
  const [getAllServices, { data: allServices, isLoading: serviceLoading }] = useGetAllServicesMutation();
  const [getAllSettingSubActivity, { data: allSettingSubActivity, isLoading: subActivityLoading }] = useGetAllSettingSubActivityMutation();
  const [getAllSelectedTreatment, { data: allSelectedTreatment, isLoading: selectedTreatmentLoading }] = useGetAllSelectedTreatmentMutation();
  //Getting all payors list
  useEffect(() => {
    getAllPayors(token);
  }, [getAllPayors, token]);
  //Getting all services list
  useEffect(() => {
    getAllServices(token);
  }, [token, getAllServices]);
  //Getting all setting service sub-type list
  useEffect(() => {
    getAllSettingSubActivity(token);
  }, [token, getAllSettingSubActivity]);
  //getting all setting selected treatment list
  useEffect(() => {
    getAllSelectedTreatment(token);
  }, [token, getAllSelectedTreatment]);

  //Getting Contact rate data list
  useEffect(() => {
    const getContactRates = async () => {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: `${baseIp}/contract/rate/list`,
        headers: {
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: {
          payorId: select,
        },
      });
      const data = res?.data?.data;
      setContactRateList(data);
      setLoading(false);
    };
    if (select) {
      getContactRates();
    }
  }, [token, select]);

  console.log("Final Data Api", contactRateList);

  const column = [
    {
      title: "Tx Type",
      dataIndex: "tx_type",
      key: "tx_type",
      width: 100,
      // filters: [{}],
      // filteredValue: filteredInfo.tx_type || null,
      // onFilter: (value, record) => record.tx_type.includes(value),
      render: (_, { treatment_type }) => {
        return <div className="flex justify-center">{allSelectedTreatment?.data?.find((item) => parseInt(item.id) === treatment_type)?.treatment_name}</div>;
      },
      sorter: (a, b) => {
        return a.tx_type > b.tx_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "tx_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      index: 2,
      title: "service",
      dataIndex: "service",
      key: "service",
      width: 100,
      // filters: [
      //   {
      //     text: "Malesuada",
      //     value: "Malesuada",
      //   },
      // ],
      // filteredValue: filteredInfo.service || null,
      // onFilter: (value, record) => record.service.includes(value),
      render: (_, { activity_type }) => {
        return <div className="flex justify-center">{allServices?.data?.find((item) => item.id === activity_type)?.description}</div>;
      },
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Service Sub Type",
      key: "sub_Service",
      dataIndex: "sub_Service",
      width: 120,
      // filters: [{}],
      // filteredValue: filteredInfo.sub_Service || null,
      // onFilter: (value, record) => record.sub_Service.includes(value),
      render: (_, { sub_activity }) => {
        return (
          <div className="flex justify-center">{allSettingSubActivity?.data?.find((item) => parseInt(item.id) === sub_activity)?.sub_activity || "N/A"}</div>
        );
      },
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.sub_Service > b.sub_Service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "sub_Service" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "CPT Code",
      key: "cpt_code",
      dataIndex: "cpt_code",
      width: 80,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.cpt_code > b.cpt_code ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt_code" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "M1",
      key: "M1",
      dataIndex: "M1",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.M1 > b.M1 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "M1" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { M1 }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{M1}</div>;
      },
    },
    {
      title: "M2",
      key: "m2",
      dataIndex: "m2",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.m2 > b.m2 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "m2" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { m2 }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{m2}</div>;
      },
    },

    {
      title: "M3",
      key: "m3",
      dataIndex: "m3",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.m3 > b.m3 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "m3" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { m3 }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{m3}</div>;
      },
    },
    {
      title: "M4",
      key: "m4",
      dataIndex: "m4",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.m4 > b.m4 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "m4" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { m4 }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{m4}</div>;
      },
    },

    {
      title: "Rate Per",
      key: "rate_per",
      dataIndex: "rate_per",
      width: 100,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.rate_per > b.rate_per ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "rate_per" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "contracted Rate",
      key: "contracted_rate",
      dataIndex: "contracted_rate",
      width: 120,
      render: (_, { contracted_rate }) => {
        return <div className="flex justify-end">{contracted_rate.toFixed(2)}</div>;
      },
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.contracted_rate > b.contracted_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "contracted_rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "billing_rate",
      key: "billed_rate",
      dataIndex: "billed_rate",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.billed_rate > b.billed_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "billed_rate" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { billed_rate }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{billed_rate.toFixed(2)}</div>;
      },
    },
    {
      title: "inc per",
      key: "increasing_percentage",
      dataIndex: "increasing_percentage",
      width: 70,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.increasing_percentage > b.increasing_percentage ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "increasing_percentage" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Active",
      key: "active",
      dataIndex: "active",
      width: 60,
      render: (_, { active }) => {
        return (
          <div className="mx-auto">
            {active === 1 ? (
              <span className="font-normal flex justify-center items-center text-green-600">Yes</span>
            ) : (
              <span className="font-normal flex justify-center items-center text-gray-500">No</span>
            )}
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.active > b.active ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "active" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "degree",
      key: "degree_level",
      dataIndex: "degree_level",
      width: 120,
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.degree_level > b.degree_level ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "degree_level" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { active }) => {
        return (
          <div className="flex justify-center gap-2">
            <Link to={"/admin/billing/rate-list-add-edit/544"} className="text-secondary">
              <AiOutlineEdit />
            </Link>
            <button className="text-sm mx-1 text-rose-600">
              <AiOutlineDelete />
            </button>
          </div>
        );
      },
    },
  ];

  const clearFilters = () => {
    setFilteredInfo({});
  };
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const handleInsuranceChange = (e) => {
    setSelect(`${e.target.value}`);
  };

  return (
    <div className={!select ? "h-[100vh]" : "h-[150vh]"}>
      <h1 className="text-[16px] text-orange-400 px-1">Contact Rate</h1>
      <div className="md:flex mb-2 mt-5 flex-wrap  items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="mb-3 ml-[-2px ]">
            <label className="label">
              <span className="label-font-tabbing text-left">Select Insurance</span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] foactive-medium ml-1  lg:w-[200px] focus:outline-none"
              disabled={dataLoading ? true : false}
              onChange={(e) => handleInsuranceChange(e)}
              name="post"
            >
              <option value=""></option>
              {allPayors?.data?.map((item, index) => {
                return (
                  <option key={index} value={item?.payor_id}>
                    {item?.payor_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <Link to={"/admin/billing/rate-list-add"}>
          <button className="pms-button">+ Add Rate</button>
        </Link>
      </div>
      {select && (
        <div className="my-5">
          <h1 className="text-lg text-orange-400 my-2">Rate List</h1>
          <div className="overflow-scroll">
            <>
              {loading ? (
                <ShimmerLoader></ShimmerLoader>
              ) : (
                <Table
                  pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                  rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                  size="small"
                  bordered
                  className=" text-xs font-normal"
                  columns={column}
                  dataSource={contactRateList}
                  scroll={{
                    y: 650,
                  }}
                  onChange={handleChange}
                />
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoactiveractRate;
