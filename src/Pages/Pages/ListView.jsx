import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import React, { memo, useState } from "react";

const ListView = () => {
  const { Option } = Select;
  const patient = [];
  const provider = [];
  const [patients, setPatients] = useState([]);
  const [providers, setProviders] = useState([]);
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const patientData = ["m", "v", "c"];
  const providerData = ["m", "v", "c", "p"];

  patientData.map((e) => patient.push(<Option key={e}>{e}</Option>));
  providerData.map((e) => provider.push(<Option key={e}>{e}</Option>));

  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";
  const handleSizeChange = (e) => {
    console.log(e);
  };

  // console.log(patients);
  // console.log("providers", providers);
  // console.log("service", service);
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* patients  */}
      <div className=" w-36">
        <h1 className="text-xs mb-3 ml-1 ">Patients</h1>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          onChange={(e) => setPatients(e)}
        >
          {patient}
        </Select>
      </div>

      {/* provider  */}
      <div className=" w-36">
        <h1 className="text-xs mb-3 ml-1 ">Provider</h1>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          onChange={(e) => setProviders(e)}
        >
          {provider}
        </Select>
      </div>

      {/* services  */}
      <div>
        <h1 className="text-xs mb-3 ml-1 ">Place Of Service</h1>
        <select
          onChange={(e) => setService(e.target.value)}
          name="type"
          className="border rounded-sm px-2 w-36 py-[6px] text-xs "
        >
          <option value="Home">Home</option>
          <option value="Home t">Home t</option>
        </select>
      </div>

      {/* date Picker  */}
      <div>
        <h1 className="text-xs mb-3 ml-1 ">Date</h1>
        <RangePicker
          format={dateFormat}
          onChange={(e) => handleSizeChange(e)}
        />
      </div>

      {/* Status  */}
      <div>
        <h1 className="text-xs mb-3 ml-1 ">Status</h1>
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="type"
          className="border rounded-sm px-2 w-36 py-[6px] text-xs "
        >
          <option value="Home">Home</option>
          <option value="Home t">Home t</option>
        </select>
      </div>
    </div>
  );
};

export default memo(ListView);
