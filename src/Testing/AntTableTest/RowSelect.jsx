import React, { useState } from "react";
//import "antd/dist/antd.css";
import { Divider, Radio, Table } from "antd";

const data = [
  {
    key: "1",
    Patients: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    Patients: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    Patients: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    Patients: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
]; // rowSelection object indicates the need for row selection

const RowSelect = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [allData, setAllData] = useState([]);
  const [loading2, setLoading2] = useState(false);

  //   fetch data
  React.useEffect(() => {
    setLoading2(true);
    fetch("All_Fake_Api/Fakedb.json")
      .then((res) => res.json())
      .then((d) => {
        setAllData(d);
        setLoading2(false);
      });
  }, []);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Patients",
      key: "Patients",
      filters: [
        {
          text: `Jim`,
          value: "Jim",
        },
        {
          text: "Joe",
          value: "Joe",
        },
      ],
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
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
    getCheckboxProps: (record) => ({
      //disabled: record.age === "Disabled User",
      // Column configuration not to be checked
      Patients: record.Patients,
    }),
  };
  return (
    <div>
      <div>
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>

        <Divider />

        {loading2 ? (
          <h1>Laoding</h1>
        ) : (
          <Table
            rowSelection={{
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default RowSelect;
