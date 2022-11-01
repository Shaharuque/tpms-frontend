import { Table } from "antd";
import React from "react";
import { useState } from "react";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: "32",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: "42",
    address: "London No. 1 Lake Park",
  },
];
const AntTableSearchBox = () => {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");

  const FilterByNameInput = (
    <input
      className="text-black"
      placeholder="Search Name"
      value={value}
      onChange={(e) => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = data.filter((entry) =>
          entry.name.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );
  const FilterByAgeInput = (
    <input
      placeholder="Search Age"
      value={age}
      onChange={(e) => {
        const currValue = e.target.value;
        setAge(currValue);
        const filteredData = data.filter((entry) =>
          entry.age.includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );

  const columns = [
    {
      title: FilterByNameInput,
      dataIndex: "name",
      key: "1",
    },
    {
      title: FilterByAgeInput,
      dataIndex: "age",
      key: "1",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default AntTableSearchBox;
