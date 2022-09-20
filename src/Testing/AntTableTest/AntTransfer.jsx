import React, { useState } from "react";
import { Transfer } from "antd";

// Our sample Mock Data
const mockData = [
  { key: "0", title: "Title 0", description: "Sample Description 0" },
  { key: "1", title: "Title 1", description: "Sample Description 1" },
  { key: "2", title: "Title 2", description: "Sample Description 2" },
  { key: "3", title: "Title 3", description: "Sample Description 3" },
  { key: "4", title: "Title 4", description: "Sample Description 4" },
  { key: "5", title: "Title 5", description: "Sample Description 5" },
];

export default function AntTransfer() {
  // To set target keys
  const [targetKeys, setTargetKeys] = useState(mockData);

  // Contains the selected keys
  const [selectedKeys, setSelectedKeys] = useState([]);

  const rowSelection = () => {
    const keysmap = selectedKeys.map((x) => {
      return mockData.map((item) => item[x]);
    });
    //   const newadditon =  mockData.filter((x)=> x.id === keysmap)
    //   console.log("chkc"newadditon)
    return keysmap;
  };

  console.log(selectedKeys);
  console.log(targetKeys);

  return (
    <div
      style={{
        display: "block",
        width: 700,
        padding: 30,
      }}
    >
      <h4>ReactJS Ant-Design Transfer Component</h4>
      <Transfer
        dataSource={mockData}
        titles={["Source", "Target"]}
        render={(item) => item.title}
        selectedKeys={selectedKeys}
        targetKeys={targetKeys}
        onChange={(nextTargetKeys) => {
          setTargetKeys(nextTargetKeys);
        }}
        onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
          setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
          rowSelection();
        }}
      />
    </div>
  );
}
