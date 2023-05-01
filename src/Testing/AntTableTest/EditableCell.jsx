import { Button, Table, Form, Input } from "antd";
import { useEffect, useState } from "react";
function EditableCell() {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();

  console.log(dataSource);
  console.log(editingRow);

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 7; index++) {
      data.push({
        key: `${index}`,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }
    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return (
          <input
            type="text"
            defaultValue={text}
            onChange={(e) => handleChange(e.target.value, record?.key)}
          ></input>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (text, record) => {
        return (
          <input
            type="text"
            defaultValue={text}
            onChange={(e) => handleChange2(e.target.value, record?.key)}
          ></input>
        );
      },
    },
  ];
  const handleChange = (changed, key) => {
    console.log(key);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(key, 1, {
      name: changed,
      address: "test",
      key: key,
    });
    setDataSource(updatedDataSource);
  };
  const handleChange2 = (changed, key) => {
    console.log(key);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(key, 1, {
      ...dataSource[key],
      address: changed,
      key: key,
    });
    setDataSource(updatedDataSource);
  };
  const rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(selectedRows);
      setSelectedRecord(record?.key);
    },
  };
  return (
    <div>
      <header>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            ...rowSelection,
          }}
        ></Table>
      </header>
    </div>
  );
}

export default EditableCell;
