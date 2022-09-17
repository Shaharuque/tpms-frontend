import React from "react";
//import "./antDesign.css";
import { Badge, Dropdown, Menu, Space, Table } from "antd";

const ExpendedTable = () => {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: "Upgrade Status",
        dataIndex: "upgradeNum",
        key: "upgradeNum",
      },
    ];
    const data = [];

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Platform",
      dataIndex: "platform",
      key: "platform",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },
    {
      title: "Upgraded",
      dataIndex: "upgradeNum",
      key: "upgradeNum",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "operation",
      render: () => <a>Publish</a>,
    },
  ];
  const data = [];

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i.toString(),
      name: "Screem",
      platform: "iOS",
      version: "10.3.4.5654",
      upgradeNum: 500,
      creator: "Jack",
      createdAt: "2014-12-24 23:12:00",
    });
  }

  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.key); // I have set my record.id as row key. Check the documentation for more details.
    }

    setExpandedRowKeys(keys);
  };
  return (
    <div>
      {" "}
      <>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            // defaultExpandedRowKeys: [""],
          }}
          expandedRowKeys={expandedRowKeys}
          onExpand={onTableRowExpand}
          dataSource={data}
        />
      </>
    </div>
  );
};

export default ExpendedTable;
