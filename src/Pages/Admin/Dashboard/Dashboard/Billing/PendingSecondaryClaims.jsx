import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Table } from "antd";

const PendingSecondaryClaims = () => {
  const { handleSubmit, register, reset } = useForm();
  const [pendingSecondaryClaimsData, setPendingSecondaryClaimsData] = useState(
    []
  );
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };

  // calling fake db
  useEffect(() => {
    axios("../../All_Fake_Api/PendingSecondaryClaims.json")
      .then((response) => {
        setPendingSecondaryClaimsData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(pendingSecondaryClaimsData);

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Claim",
      dataIndex: "claim",
      key: "claim",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.claim || null,
      onFilter: (value, record) => record.claim.includes(value),
      sorter: (a, b) => {
        return a.claim > b.claim ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "claim" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { claim, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{claim}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Payor",
      dataIndex: "payor",
      key: "payor",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.payor || null,
      onFilter: (value, record) => record.payor.includes(value),
      sorter: (a, b) => {
        return a.payor > b.payor ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "payor" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { payor, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{payor}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Date Range",
      dataIndex: "dateRange",
      key: "dateRange",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.dateRange || null,
      onFilter: (value, record) => record.dateRange.includes(value),
      sorter: (a, b) => {
        return a.dateRange > b.dateRange ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "dateRange" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { dateRange, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{dateRange}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.total || null,
      onFilter: (value, record) => record.total.includes(value),
      sorter: (a, b) => {
        return a.total > b.total ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "total" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { total, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{total}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.action || null,
      onFilter: (value, record) => record.action.includes(value),
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { action, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>true</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "F. Billed Dt.",
      dataIndex: "fBilledDt",
      key: "fBilledDt",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.fBilledDt || null,
      onFilter: (value, record) => record.fBilledDt.includes(value),
      sorter: (a, b) => {
        return a.fBilledDt > b.fBilledDt ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "fBilledDt" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { fBilledDt, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{fBilledDt}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "L. Billed Dt.",
      dataIndex: "lBilledDt",
      key: "lBilledDt",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.lBilledDt || null,
      onFilter: (value, record) => record.lBilledDt.includes(value),
      sorter: (a, b) => {
        return a.lBilledDt > b.lBilledDt ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "lBilledDt" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { lBilledDt, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{lBilledDt}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Box 19",
      dataIndex: "claim",
      key: "claim",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.claim || null,
      onFilter: (value, record) => record.claim.includes(value),
      sorter: (a, b) => {
        return a.claim > b.claim ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "claim" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { claim, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{claim}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Resub. Code",
      dataIndex: "total",
      key: "total",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.total || null,
      onFilter: (value, record) => record.total.includes(value),
      sorter: (a, b) => {
        return a.total > b.total ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "total" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { total, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{total}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Org. Ref. No.",
      dataIndex: "orgRefNo",
      key: "orgRefNo",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.orgRefNo || null,
      onFilter: (value, record) => record.orgRefNo.includes(value),
      sorter: (a, b) => {
        return a.orgRefNo > b.orgRefNo ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "orgRefNo" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { orgRefNo, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{orgRefNo}</h1>
          </div>
        );
      },
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
    <div className={!pendingSecondaryClaimsData ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Manage Claim(s)</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-end items-center mr-2">
          <button
            onClick={clearFilters}
            className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
          >
            Clear filters
          </button>
        </div>
        <div className=" overflow-scroll pt-3">
          <Table
            rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            dataSource={pendingSecondaryClaimsData} //Which data chunk you want to show in table
            rowSelection={{
              ...rowSelection,
            }}
            scroll={{
              y: 750,
            }}
            onChange={handleChange}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 items-end my-5 mr-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                    Place of Services
                  </span>
                </label>
                <div>
                  <select
                    className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
                    {...register("pos")}
                  >
                    <option value="Show detail">Show Detail(s)</option>
                    <option value="Generate Secondary Claim">
                      Generate Secondary Claim
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className="w-1/4 py-1 px-2 md:ml-3 text-base font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                  type="submit"
                >
                  Ok
                </button>
                <button className="w-2/4 py-1 px-2 ml-3 text-base font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendingSecondaryClaims;
