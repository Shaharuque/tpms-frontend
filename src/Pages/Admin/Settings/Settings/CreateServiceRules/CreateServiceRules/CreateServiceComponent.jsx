import { Switch } from "antd";
import React, { useState } from "react";

const CreateServiceComponent = ({ rule }) => {
  const [value, setValue] = useState(rule);
  console.log("rule", rule);
  return (
    <div>
      <Switch
        size="small"
        checked={value ? true : false}
        onClick={() => setValue(!value)}
      />
      {!value ? "No" : "Yes"}
    </div>
  );
};

export default CreateServiceComponent;
