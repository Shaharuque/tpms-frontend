import React, { useState } from "react";
import { Switch } from "antd";

const IsActive = ({ status, id, dataSource, setDataSource }) => {
  const [value, setValue] = useState(status);

  const handleStatusChange = (id) => {
    setValue(!value);
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: dataSource[indexOfRecord].is_electronic,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: !value,
      id,
    });
    setDataSource(updatedDataSource);
  };
  // console.log("data source", dataSource);
  // console.log("status", value, id);
  return (
    <div className="flex items-center justify-center">
      <Switch
        size="small"
        defaultChecked={value}
        onClick={() => handleStatusChange(id)}
      />
      {!value ? (
        <h1 className="ml-1">In-Active</h1>
      ) : (
        <h1 className="ml-1">Active</h1>
      )}
    </div>
  );
};

export default IsActive;
