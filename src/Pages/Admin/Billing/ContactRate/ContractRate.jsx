import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { Table } from "antd";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const CoactiveractRate = () => {
  const [select, setSelect] = useState("");
  const [coactiveactData, setcoactiveactData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    axios("../../../All_Fake_Api/contactRate.json").then((response) => {
      setcoactiveactData(response?.data);
    });
  }, []);
  console.log(coactiveactData);

  const column = [
    {
      title: "Tx Type",
      dataIndex: "tx_type",
      key: "tx_type",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.tx_type || null,
      onFilter: (value, record) => record.tx_type.includes(value),
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
      filters: [
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.service || null,
      onFilter: (value, record) => record.service.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Sub Type",
      key: "sub_Service",
      dataIndex: "sub_Service",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.sub_Service || null,
      onFilter: (value, record) => record.sub_Service.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.sub_Service > b.sub_Service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "sub_Service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CPT Code",
      key: "CPT_code",
      dataIndex: "CPT_code",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.CPT_code || null,
      onFilter: (value, record) => record.CPT_code.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.CPT_code > b.CPT_code ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "CPT_code" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "M1",
      key: "M1",
      dataIndex: "M1",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.M1 || null,
      onFilter: (value, record) => record.M1.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.m2 || null,
      onFilter: (value, record) => record.m2.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.m3 || null,
      onFilter: (value, record) => record.m3.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.m4 || null,
      onFilter: (value, record) => record.m4.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.rate_per || null,
      onFilter: (value, record) => record.rate_per.includes(value),
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
      filters: [{}],
      filteredValue: filteredInfo.contracted_rate || null,
      onFilter: (value, record) => record.contracted_rate.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.contracted_rate > b.contracted_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "contracted_rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "billing_rate",
      key: "billing_rate",
      dataIndex: "billing_rate",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.billing_rate || null,
      onFilter: (value, record) => record.billing_rate.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.billing_rate > b.billing_rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "billing_rate" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { billing_rate }) => {
        //console.log("Status : ", Status);
        return <div className="flex justify-end">{billing_rate}</div>;
      },
    },
    {
      title: "inc per",
      key: "inc_per",
      dataIndex: "inc_per",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.inc_per || null,
      onFilter: (value, record) => record.inc_per.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.inc_per > b.inc_per ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "inc_per" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Active",
      key: "active",
      dataIndex: "active",
      width: 60,
      filters: [{}],
      filteredValue: filteredInfo.active || null,
      onFilter: (value, record) => record.active.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.active > b.active ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "active" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { active }) => {
        return (
          <div className="mx-auto">
            {active === true ? (
              <span className="font-normal flex justify-center items-center text-green-600">
                Yes
              </span>
            ) : (
              <span className="font-normal flex justify-center items-center text-gray-500">
                No
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "degree",
      key: "degree",
      dataIndex: "degree",
      width: 120,
      filters: [{}],
      filteredValue: filteredInfo.degree || null,
      onFilter: (value, record) => record.degree.includes(value),
      //   sorter is for sorting asc or dsc purCPT_codee
      sorter: (a, b) => {
        return a.degree > b.degree ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "degree" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, { active }) => {
        return (
          <div className="flex justify-center gap-2">
            <Link
              to={"/admin/billing/rate-list-add-edit/544"}
              className="text-secondary"
            >
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

  return (
    <div className={!select ? "h-[100vh]" : ""}>
      <h1 className="text-lg text-orange-400">Contact Rate</h1>
      <div className="md:flex mb-2 mt-5 flex-wrap  items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="mb-3">
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Select Insurance
              </span>
            </label>
            <select
              className="input-border text-gray-600 rounded-sm  text-[14px] foactive-medium ml-1  w-full focus:outline-none"
              onChange={(e) => setSelect(e.target.value)}
              name="post"
            >
              <option value=""></option>
              <option value="health_net">Health Net</option>
              <option value="all_clieactive">All Clieactive</option>
              <option value="selective_clieactive">Selective Clieactive</option>
              <option value="selective_private_payor">
                Selective Private Payor
              </option>
            </select>
          </div>
          {select && (
            <span className="flex items-center gap-1 text-[14px] font-normal text-secondary mt-4">
              {select}.png <TiDeleteOutline className="mt-1" />
            </span>
          )}
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
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className=" text-xs font-normal"
                columns={column}
                dataSource={coactiveactData}
                scroll={{
                  y: 650,
                }}
                onChange={handleChange}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoactiveractRate;
