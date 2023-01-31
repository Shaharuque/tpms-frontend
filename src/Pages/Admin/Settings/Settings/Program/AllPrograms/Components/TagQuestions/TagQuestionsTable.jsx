import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const TagQuestionsTable = () => {
  const [tableData, setTableData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/BusinessDoc.json")
      .then((response) => {
        console.log("calling");
        setTableData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //console.log(tableData);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "description",
      key: "description",
      width: 150,
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Data Type",
      dataIndex: "description",
      key: "description",
      width: 150,
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: false,
    },

    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            <button className="text-sm mx-1 text-secondary">
              <AiOutlineDelete className="text-red-500" />
            </button>
          </div>
        );
      },
      sorter: (a, b) => {
        return a.creator > b.creator ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "creator" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];
  return (
    <div>
      <div className="pb-3 overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          bordered
          className="table-striped-rows text-xs font-normal"
          columns={columns}
          dataSource={tableData}
          // scroll={{
          //   y: 650,
          // }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TagQuestionsTable;
