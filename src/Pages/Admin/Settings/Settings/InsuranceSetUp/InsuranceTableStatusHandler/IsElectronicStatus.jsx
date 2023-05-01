import React, { useState } from "react";
import { Switch } from "antd";

const IsElectronicStatus = ({ status, id, dataSource, setDataSource }) => {
  const [value, setValue] = useState(status);

  const handleStatusChange = (id) => {
    setValue(!value);
    const indexOfRecord = dataSource.findIndex((item) => id === item.id);
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(indexOfRecord, 1, {
      is_electronic: !value,
      cms_1500_31: dataSource[indexOfRecord].cms_1500_31,
      cms_1500_32a: dataSource[indexOfRecord].cms_1500_32a,
      cms_1500_32b: dataSource[indexOfRecord].cms_1500_32b,
      cms_1500_33a: dataSource[indexOfRecord].cms_1500_33a,
      cms_1500_33b: dataSource[indexOfRecord].cms_1500_33b,
      is_active: dataSource[indexOfRecord].is_active,
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
        checked={value}
        onClick={() => handleStatusChange(id)}
      />
    </div>
  );
};

export default IsElectronicStatus;
