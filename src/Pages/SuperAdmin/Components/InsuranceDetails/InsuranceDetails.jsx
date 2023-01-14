import React, { useEffect, useState } from "react";
import GlobalMultiSelect from "../../../Shared/CustomComponents/GlobalMultiSelect";
import { Table } from "antd";
import axios from "axios";
import { FiDownload } from "react-icons/fi";

const InsuranceDetails = () => {
  const [insurance, setInsurance] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/ExitingFacilities.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);
  const columns = [
    {
      title: "Fac.",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "FacID",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 50,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "InsID",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Ins",
      dataIndex: "main_contact_number",
      key: "main_contact_number",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.main_contact_number || null,
      onFilter: (value, record) => record.main_contact_number.includes(value),
      sorter: (a, b) => {
        return a.main_contact_number > b.main_contact_number ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "main_contact_number"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "Name33",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name32",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33a(NPI)",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33b(Taxo.)",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32a(NPI)",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32b(Taxo.)",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33Address",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33City",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33State",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "33Zip",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32Address",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32City",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32State",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "32Zip",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "SSN",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 40,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div className="h-[100vh]">
      <div className="label-text text-[16px] ml-1 font-medium my-3 text-left">
        Insurance Details
      </div>
      <div className=" flex justify-between mb-5">
        <div>
          <span className="label-font ml-1">Account (s)</span>
          <div className=" flex gap-2 items-center">
            <div>
              <div className="pt-[7px]">
                <GlobalMultiSelect />
              </div>
            </div>
            <button className="mb-2 pms-button">Go</button>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <FiDownload className="text-secondary font-medium text-xl mx-1" />
        </div>
      </div>

      <div className=" overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className="table-striped-rows text-xs font-normal"
          columns={columns}
          dataSource={table}
          // scroll={{
          //   y: 650,
          // }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InsuranceDetails;
