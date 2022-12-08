import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Table, Modal } from "antd";

const SelectPayoor = ({ handleClose, open }) => {
  const [tableData, settableData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  //   fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/PatientStatement.json")
      .then((res) => res.json())
      .then((d) => {
        settableData(d);
        console.log(d, "d");
        // setLoading2(false);
      });
  }, []);

  console.log(tableData);
  console.log("table");
  const column = [
    {
      title: "Payor",
      dataIndex: "first_name",
      key: "first_name",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.first_name || null,
      onFilter: (value, record) => record.first_name.includes(value),
      sorter: (a, b) => {
        return a.first_name > b.first_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "first_name" ? sortedInfo.order : null,
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
          width={400}
          bodyStyle={{ padding: "0" }}
        >
          <div className="px-5 py-2 box">
            <div className="flex items-center justify-between">
              <h1 className="text-lg text-left text-orange-400 ">
                Select Client
              </h1>
              <IoCloseCircleOutline
                onClick={handleClose}
                className="text-gray-600 font-semibold  text-2xl hover:text-primary "
              />
            </div>
            {/* <div className="flex justify-items-end items-center">
              <button
                onClick={clearFilters}
                className="px-2  py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
              >
                Clear filters
              </button>
            </div> */}
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" overflow-scroll">
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal mt-5"
                columns={column}
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
                Select
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

export default SelectPayoor;
