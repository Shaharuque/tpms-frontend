import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Table, Modal } from "antd";

const SelectContactRate = ({ handleClose, open }) => {
  const [tableData, settableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/SelectContactRate.json")
      .then((res) => res.json())
      .then((d) => {
        settableData(d);
        console.log(d, "d");
        // setLoading2(false);
      });
  }, []);

  console.log(tableData);
  console.log("table");

  const columns = [
    {
      title: "Service Type",
      dataIndex: "service_type",
      key: "service_type",
      width: 100,
      filters: [
        {
          text: "Berka",
          value: "Berka",
        },
      ],
      filteredValue: filteredInfo.service_type || null,
      onFilter: (value, record) => record.service_type.includes(value),
      sorter: (a, b) => {
        return a.service_type > b.service_type ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "service_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service Sub Type",
      dataIndex: "service_sub_type",
      key: "service_sub_type",
      width: 120,
      filters: [
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.service_sub_type || null,
      onFilter: (value, record) => record.service_sub_type.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.service_sub_type > b.service_sub_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "service_sub_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "cpt",
      key: "cpt",
      dataIndex: "cpt",
      width: 50,
      filters: [{}],
      filteredValue: filteredInfo.cpt || null,
      onFilter: (value, record) => record.cpt.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.cpt > b.cpt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "M1",
      key: "M1",
      dataIndex: "M1",
      width: 50,
      filters: [{}],
      filteredValue: filteredInfo.M1 || null,
      onFilter: (value, record) => record.M1.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.M1 > b.M1 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "M1" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M2",
      key: "M2",
      dataIndex: "M2",
      width: 50,
      filters: [{}],
      filteredValue: filteredInfo.M2 || null,
      onFilter: (value, record) => record.M2.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.M2 > b.M2 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "M2" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M3",
      key: "M3",
      dataIndex: "M3",
      width: 50,
      filters: [{}],
      filteredValue: filteredInfo.M3 || null,
      onFilter: (value, record) => record.M3.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.M3 > b.M3 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "M3" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M4",
      key: "M4",
      dataIndex: "M4",
      width: 50,
      filters: [{}],
      filteredValue: filteredInfo.M4 || null,
      onFilter: (value, record) => record.M4.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.M4 > b.M4 ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "M4" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rate_Per",
      key: "Rate_Per",
      dataIndex: "Rate_Per",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.Rate_Per || null,
      onFilter: (value, record) => record.Rate_Per.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.Rate_Per > b.Rate_Per ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Rate_Per" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Contacted_Rate",
      key: "Contacted_Rate",
      dataIndex: "Contacted_Rate",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.Contacted_Rate || null,
      onFilter: (value, record) => record.Contacted_Rate.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.Contacted_Rate > b.Contacted_Rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Contacted_Rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Billing_Rate",
      key: "Billing_Rate",
      dataIndex: "Billing_Rate",
      width: 70,
      filters: [{}],
      filteredValue: filteredInfo.Billing_Rate || null,
      onFilter: (value, record) => record.Billing_Rate.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.Billing_Rate > b.Billing_Rate ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Billing_Rate" ? sortedInfo.order : null,
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

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          centered
          footer={false}
          closable={false}
          width={1000}
          bodyStyle={{ padding: "0" }}
        >
          <div className="px-5 py-2 box">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Edit Document
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary "
              />
            </div>
            <div className="flex justify-items-end items-center">
              <button
                onClick={clearFilters}
                className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </div>

            <div className=" overflow-scroll">
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal mt-5"
                columns={columns}
                dataSource={tableData}
                rowSelection={{
                  ...rowSelection,
                }}
                onChange={handleChange}
              />
            </div>

            <div className=" flex items-end justify-end mt-2">
              <button
                className=" py-[5px] font-normal px-3 mr-1 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
                type="submit"
              >
                Copy
              </button>

              <button
                className=" py-[5px]  px-3  text-xs font-normal bg-gradient-to-r  from-red-500 to-red-400  hover:to-red-500 text-white rounded-sm"
                autoFocus
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SelectContactRate;
