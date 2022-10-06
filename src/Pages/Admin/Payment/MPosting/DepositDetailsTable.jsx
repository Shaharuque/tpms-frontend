// This table will render basis on different 'id'. id wise data will be rendered
import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineDownload,
  AiOutlineEye,
} from "react-icons/ai";
import axios from "axios";
import { Table } from "antd";

// import MDepositDetailsTable from "./MPosting/MDepositDetailsTable";

const DepositDetailsTable = () => {
  const [depositDetailsData, setDepositDetailsData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  // Ant Table is starting(testing table used here)
  useEffect(() => {
    axios("../../../All_Fake_Api/MPosting.json")
      .then((response) => {
        console.log("calling");
        setDepositDetailsData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(depositDetailsData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const columns = [
    {
      title: "Deposit Date",
      dataIndex: "deposit_date",
      key: "deposit_date",
      width: 150,
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
      render: (_, { deposit_date }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{deposit_date}</div>;
      },
      filteredValue: filteredInfo.deposit_date || null,
      onFilter: (value, record) => record.deposit_date.includes(value),
      sorter: (a, b) => {
        return a.deposit_date > b.deposit_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "deposit_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check No",
      dataIndex: "check_no",
      key: "check_no",
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
      filteredValue: filteredInfo.check_no || null,
      onFilter: (value, record) => record.check_no.includes(value),
      sorter: (a, b) => {
        return a.check_no > b.check_no ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "check_no" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Check Date",
      dataIndex: "check_date",
      key: "check_date",
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
      filteredValue: filteredInfo.check_date || null,
      onFilter: (value, record) => record.check_date.includes(value),
      sorter: (a, b) => {
        return a.check_date > b.check_date ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "check_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Payee Name",
      dataIndex: "payee_name",
      key: "payee_name",
      width: 150,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.payee_name || null,
      onFilter: (value, record) => record.payee_name.includes(value),
      sorter: (a, b) => {
        return a.payee_name > b.payee_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "payee_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Payee Type",
      dataIndex: "payee_type",
      key: "payee_type",
      width: 150,
      filters: [
        {
          text: `Daisy Mewao`,
          value: "Daisy Mewao",
        },
        {
          text: `Daisy Duck`,
          value: "Daisy Duck",
        },
        {
          text: "Duck Duck",
          value: "Duck Duck",
        },
      ],
      filteredValue: filteredInfo.payee_type || null,
      onFilter: (value, record) => record.payee_type.includes(value),
      sorter: (a, b) => {
        return a.payee_type > b.payee_type ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "payee_type" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Allocated Amt.",
      dataIndex: "allocate_check",
      key: "allocate_check",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.allocate_check || null,
      onFilter: (value, record) => record.allocate_check.includes(value),
      sorter: (a, b) => {
        return a.allocate_check > b.allocate_check ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "allocate_check" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Unallocated",
      dataIndex: "unallocate_check",
      key: "unallocate_check",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.unallocate_check || null,
      onFilter: (value, record) => record.unallocate_check.includes(value),
      sorter: (a, b) => {
        return a.unallocate_check > b.unallocate_check ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "unallocate_check" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pay Type",
      dataIndex: "pay_type",
      key: "pay_type",
      width: 100,
      filters: [
        {
          text: `1001`,
          value: "1001",
        },
        {
          text: `1051`,
          value: "1051",
        },
        {
          text: "10015",
          value: "10015",
        },
      ],
      filteredValue: filteredInfo.pay_type || null,
      onFilter: (value, record) => record.pay_type.includes(value),
      sorter: (a, b) => {
        return a.pay_type > b.pay_type ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pay_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Notes",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-secondary flex justify-center">
            <AiOutlineEye />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <div className="mt-12">
      <div className="flex mb-3">
        <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
          <option value="" className="text-black">
            Select
          </option>
          <option value="Today" className="text-black">
            Show Details
          </option>
        </select>
        <button className="bg-[#34A7B8] px-2 text-white rounded">Go</button>
      </div>
      <div>
        <div className="flex justify-between font-bold">
          <h1 className="mb-3 text-[18px]">Deposit Details</h1>
          <div>
            <AiOutlineDownload className="text-xl text-[#34A7B8] cursor-pointer" />
          </div>
        </div>
      </div>

      <div>
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className=" text-xs font-normal"
          columns={columns}
          dataSource={depositDetailsData}
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{
            y: 650,
          }}
          onChange={handleChange}
        />
      </div>

      <div className="flex mb-3 mt-6">
        <select className=" bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-32 focus:outline-none z-0">
          <option value="" className="text-black">
            Retract Transaction
          </option>
        </select>
        <button className=" py-2 px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          Go
        </button>
        <button className="font-normal  py-2 px-3 text-xs ml-3 bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DepositDetailsTable;
