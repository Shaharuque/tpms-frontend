import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PayorExistingTable = () => {
  const [show, setShow] = useState(true);
  const [existingPayor, setExistingPayor] = useState("");
  console.log(existingPayor);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/payor.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "#",
      dataIndex: "st",
      key: "st",
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
      render: (_, { st }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{st}</div>;
      },
      filteredValue: filteredInfo.st || null,
      onFilter: (value, record) => record.st.includes(value),
      sorter: (a, b) => {
        return a.st > b.st ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "st" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
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
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => {
        return a.name > b.name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Epayorid",
      dataIndex: "Epayorid",
      key: "Epayorid",
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
      filteredValue: filteredInfo.Epayorid || null,
      onFilter: (value, record) => record.Epayorid.includes(value),
      sorter: (a, b) => {
        return a.Epayorid > b.Epayorid ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Epayorid" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
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
      filteredValue: filteredInfo.Address || null,
      onFilter: (value, record) => record.Address.includes(value),
      sorter: (a, b) => {
        return a.Address > b.Address ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CIty",
      dataIndex: "City",
      key: "City",
      width: 100,
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
      render: (_, { City }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{City}</div>;
      },
      filteredValue: filteredInfo.City || null,
      onFilter: (value, record) => record.City.includes(value),
      sorter: (a, b) => {
        return a.City > b.City ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "City" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
      width: 100,
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
      filteredValue: filteredInfo.State || null,
      onFilter: (value, record) => record.State.includes(value),
      sorter: (a, b) => {
        return a.State > b.State ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "State" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Zip",
      dataIndex: "Epayorid",
      key: "Epayorid",
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
      filteredValue: filteredInfo.Epayorid || null,
      onFilter: (value, record) => record.Epayorid.includes(value),
      sorter: (a, b) => {
        return a.Epayorid > b.Epayorid ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Epayorid" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "PlanMedicare",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "PlanMedicaid",
      dataIndex: "action",
      key: "action",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.action > b.action ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "action" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "PlanChampus",
      dataIndex: "PlanGroup",
      key: "PlanGroup",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.PlanGroup > b.PlanGroup ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "PlanGroup" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "PlanChampVA",
      dataIndex: "PlanFECA",
      key: "PlanFECA",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.PlanFECA > b.PlanFECA ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "PlanFECA" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "PlanGroupHeal",
      dataIndex: "planOther",
      key: "planOther",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.planOther > b.planOther ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "planOther" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "PlanFECA",
      dataIndex: "planOther",
      key: "planOther",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.planOther > b.planOther ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "planOther" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "PlanOther",
      dataIndex: "planOther",
      key: "planOther",
      width: 70,
      render: (_, record) => {
        console.log(record.plan);
        //console.log("tags : ", lock);
        return (
          <div className=" flex justify-center items-center">
            <input
              defaultChecked={record.plan}
              type="checkbox"
              name="plan_champus"
            />
          </div>
        );
      },
      sorter: (a, b) => {
        return a.planOther > b.planOther ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "planOther" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <>
      <div className="flex items-center flex-wrap gap-2 my-5">
        <label className="label">
          <span className="label-text text-[16px] font-medium text-[#9b9b9b] text-left">
            Name
          </span>
        </label>
        <form>
          <select
            onChange={(e) => {
              setExistingPayor(e.target.value);
            }}
            className="input-border text-gray-600 rounded-sm  text-[14px] font-medium ml-1 py-[6px]  w-full focus:outline-none"
          >
            <option value="volvo">Volvo XC90</option>
            <option value="saab">Saab 95</option>
            <option value="mercedes adbsfs fdfgd">Mercedes SLK abababab</option>
            <option value="audi">Audi TT</option>
          </select>
        </form>
        <button onClick={() => setShow(!show)} className="pms-button my-3 mx-1">
          Show/Hide Payor
        </button>
      </div>

      {show && (
        <div>
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
            size="small"
            bordered
            className="table-striped-rows text-xs font-normal"
            columns={columns}
            dataSource={table}
            scroll={{
              y: 650,
            }}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default PayorExistingTable;
