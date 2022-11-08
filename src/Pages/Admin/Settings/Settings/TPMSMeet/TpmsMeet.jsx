import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsCalendar2PlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const TpmsMeet = () => {
  const [data, setData] = useState();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  // Ant Table is starting
  useEffect(() => {
    axios("../../../All_Fake_Api/MeetLinks.json")
      .then((response) => {
        console.log("calling");
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Meet Link",
      dataIndex: "meet_link",
      key: "meet_link",
      width: 100,
      filters: [
        {
          text: "Duck Duci",
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
        {
          text: `Health Net`,
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
      ],
      render: (_, { meet_link }) => {
        //console.log("tags : ", lock);
        return (
          <Link
            to={
              "https://ant.design/components/table/#components-table-demo-dynamic-settings"
            }
            className=" text-secondary"
          >
            {meet_link}
          </Link>
        );
      },
      filteredValue: filteredInfo.meet_link || null,
      onFilter: (value, record) => record.meet_link.includes(value),
      ellipsis: true,
    },
    {
      title: "Created Date",
      dataIndex: "created",
      key: "created",
      width: 100,
      filters: [
        {
          text: "Duck Duci",
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
        {
          text: `Health Net`,
          value: "xpLb2phVleSb6YjISm9b2427116509082476266dc57898a2",
        },
      ],
      filteredValue: filteredInfo.created || null,
      onFilter: (value, record) => record.created.includes(value),
      sorter: (a, b) => {
        return a.created > b.created ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "created" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Video URL",
      dataIndex: "id",
      key: "id",
      width: 80,
      render: (_, { id }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary flex justify-center">-</div>;
      },
      ellipsis: true,
    },
  ];

  return (
    <div className="p-2 overflow-y-hidden">
      <div className="md:flex mb-2 flex-wrap  items-center justify-between">
        <h1 className="text-sm">Meet Lists</h1>
        <button className="flex items-center gap-2 pms-button">
          <BsCalendar2PlusFill className="text-[18px]" /> Create New Meet
        </button>
      </div>

      <Table
        pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
        rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
        size="small"
        bordered
        className=" text-xs font-normal"
        columns={columns}
        dataSource={data}
        scroll={{
          y: 650,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default TpmsMeet;
