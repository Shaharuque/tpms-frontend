import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { BsThreeDots } from "react-icons/bs";

function MyDropdown({ record }) {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} overlayStyle={{ zIndex: "100" }}>
      <button onClick={(e) => e.preventDefault()}>
        <Space>
          <BsThreeDots />
        </Space>
      </button>
    </Dropdown>
  );
}

export default MyDropdown;
