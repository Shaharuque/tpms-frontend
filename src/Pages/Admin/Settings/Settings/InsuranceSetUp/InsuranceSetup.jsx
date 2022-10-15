import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import axios from "axios";
import { Table, Switch } from "antd";
import InsuranceEditComponent from "./InsuranceSetup/InsuranceEditComponent";

const InsuranceSetup = () => {
  const [insuranceData, setInsuranceData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [checkSwitch, setCheckSwitch] = useState(false);
  const [rowId, setRowId] = useState("");
  const [insuranceEdit, setInsuranceEdit] = useState(false);

  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/InsuranceSetup.json")
      .then((response) => {
        console.log("calling");
        setInsuranceData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(insuranceData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const inputHandle = (e) => {
    console.log(e.target.value);
  };
  const columns = [
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 100,
      filters: [
        {
          text: `Anthem Blue C`,
          value: "Anthem Blue C",
        },
        {
          text: `Health Net`,
          value: "Health Net",
        },
        {
          text: "Southern Illinoi",
          value: "Southern Illinoi",
        },
      ],
      render: (_, { insurance }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{insurance}</div>;
      },
      filteredValue: filteredInfo.insurance || null,
      onFilter: (value, record) => record.insurance.includes(value),
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Is Electronic",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <Switch size="small" defaultChecked onChange={onChange} />
            <h1 className="ml-2 text-gray-500">Electronic</h1>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cms1500 32",
      dataIndex: "cms32",
      key: "cms32",
      width: 60,
      render: (_, { cms32 }) => {
        //console.log("tags : ", lock);
        return (
          <div>
            <input
              name="cms"
              defaultValue={cms32}
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.cms32 > b.cms32 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "cms32" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cms1500 32a",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px] focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cms1500 32b",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cms1500 33a",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cms1500 33b",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: () => {
        //console.log("tags : ", lock);
        return (
          <div className="">
            <input
              name="cms"
              className="page py-[3px]  focus:outline-none"
              onChange={inputHandle}
              type="text"
            ></input>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Is Active",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <Switch
              size="small"
              defaultChecked
              onClick={() => {
                setCheckSwitch(!checkSwitch);
              }}
            />
            {!checkSwitch ? (
              <h1 className="ml-2">Active</h1>
            ) : (
              <h1 className="ml-2">In-Active</h1>
            )}
          </div>
        );
      },
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center text-teal-700">
            <div>
              <BiPencil
                onClick={() => {
                  setRowId(id);
                  setInsuranceEdit(true);
                }}
              />
            </div>
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
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <div>
      <Table
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
        size="small"
        bordered
        className=" text-xs font-normal"
        columns={columns}
        dataSource={insuranceData}
        rowSelection={{
          ...rowSelection,
        }}
        scroll={{
          y: 650,
        }}
        onChange={handleChange}
      />
      <button className="p-2 bg-[#33A4B5] mt-3 rounded text-white">
        Save Payer Setup
      </button>

      {insuranceEdit && (
        <>
          {" "}
          <InsuranceEditComponent id={rowId}></InsuranceEditComponent>
        </>
      )}
    </div>
  );
};

export default InsuranceSetup;
