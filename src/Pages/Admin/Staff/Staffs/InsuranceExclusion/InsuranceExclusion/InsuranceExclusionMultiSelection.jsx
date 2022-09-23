// import { FormControl, InputLabel, Select } from "@mui/material";
// import React, { useState } from "react";

// const names = [
//   "AVIVA Life Ins. Co. India Pvt. Ltd. ",
//   "AVIVA Life Ins. rCo India Pvt. Ltd.  ",
//   "BhartiAXA Life Insurance Co Ltd.  ",
//   "Binla Sun Life Insurance Co Ltd.  ",
//   "Binla Sun moon Life Insurance Co Ltd.  ",
//   "Binla Sun Life sdInsurance dfd Co Ltd.  ",
//   "anara HSBC Oriental Bank of Commerce Life Insurance ompany Ltd.  ",
//   "DHFL Pramerica Life Insurance Co Ltd  ",
//   "Edelweiss fg Tokio Life Insurance Co. Ltd  ",
//   "Edelweiss Tokio Life Insurance Co. Ltd  ",
//   "HDFC Standard Life Insurance Co. Ltd.  ",
//   "CICI dfd Prudential Life Insurance Co Ltd.  ",
//   "CICIer Prudential Life Insurance Co Ltd.  ",
//   "DBIdfd Federal Life Insurance Co Ltd.  ",
//   "DBI Federal Life Insurance Co Ltd  ",
//   "Kotak Mahindra OM Life Insurance Ltd.  ",
//   "PNB MetLife India Insurance Co Ltd.  ",
//   "Sahara India Life Insurance Co. Ltd.",
//   "SBI fd reLife Insurance Co Ltd.  ",
//   "SBI d Life Insurance Co Ltd.  ",
//   "SBI eLife Insurance Co Ltd.  ",
//   "Shriram Life Insurance Co Ltd.  ",
//   "TATA AIA Life Insurance Co Ltd.  ",
//   "ife Insurance rer Corporation of India  ",
//   "ife Insurance Corporation of India  ",
// ];

// const InsuranceExclusionMultiSelection = () => {
//   const [selectedNames, setSelectedNames] = useState([]);
//   const [optionNames, setOptionNames] = useState(names);
//   const [newAdded, setNewAdded] = useState([]);

//   // console.log("selectedNames", selectedNames);

//   console.log("newAdded", newAdded);

//   const handleChangeMultiple = (event) => {
//     const { options } = event.target;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setSelectedNames(value);
//   };
//   const handleAddItems = () => {
//     const value = [];
//     const option_length = selectedNames.length;
//     for (let i = 0; i < option_length; i += 1) {
//       value.push(selectedNames[i]);
//     }
//     setOptionNames(optionNames.filter((e) => !selectedNames.includes(e)));
//     setNewAdded([...newAdded, ...value]);
//   };
//   return (
//     <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-3 mr-2 gap-x-2 gap-y-1">
//       <FormControl className=" m-0 sm:m-2 bg-white ">
//         <InputLabel shrink htmlFor="select-multiple-native">
//           -----------
//         </InputLabel>
//         <Select
//           multiple
//           native
//           value={selectedNames}
//           onChange={handleChangeMultiple}
//           label="Native"
//           inputProps={{
//             id: "select-multiple-native",
//           }}
//         >
//           {optionNames.map((name) => (
//             <option key={name} value={name} className="text-sm font-normal">
//               {name}
//             </option>
//           ))}
//         </Select>
//       </FormControl>
//       <div className=" mx-auto my-auto">
//         <button
//           onClick={handleAddItems}
//           className="px-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
//         >
//           Add
//         </button>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default InsuranceExclusionMultiSelection;

import React, { useEffect, useState } from "react";
import { Switch, Table, Transfer } from "antd";
import axios from "axios";

const InsuranceExclusionMultiSelection = () => {
  // const mockData = Array.from({
  //   length: 20,
  // }).map((_, i) => ({
  //   key: i.toString(),
  //   title: `content${i + 1}`,
  //   description: `description of content${i + 1}`,
  // }));

  const [mockData, setMockData] = useState([]);
  const [checkdata, setcheckdata] = useState([]);

  useEffect(() => {
    axios("../../All_Fake_Api/Transfer.json")
      .then((response) => {
        setMockData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);
  console.log("mockdata", mockData);
  const oriTargetKeys = mockData.map((item) => item);
  console.log("orign", oriTargetKeys);

  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (newTargetKeys, direction, moveKeys) => {
    setTargetKeys(newTargetKeys);
    // console.log('targetKeys: ', newTargetKeys);
    // console.log('direction: ', direction);
    // console.log('moveKeys: ', moveKeys);
  };

  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

    // console.log('sourceSelectedKeys:-- ', sourceSelectedKeys);
    // console.log('targetSelectedKeys: ', targetSelectedKeys);

    //   const keysmap = sourceSelectedKeys.map((x)=>console.log(x.))
    // console.log("keysmap", keysmap,selectedKeys)
  };

  // console.log("---------",)

  // console.log(keysmap)
  // useEffect(()=>{
  //   const clonearr= [];
  // const keysmap = selectedKeys.toString()
  // console.log("keysmap", keysmap)
  // const newadditon =  mockData.filter((x)=> x.id == keysmap).map((j)=>(setcheckdata(j)))
  // console.log("stste df", checkdata)

  // },[checkdata])

  // mockData.map((j)=>(j)).filter(i =>keysmap.includes(i.id));
  // console.log("chk",mockData)

  // selectedKeys.map((x,l)=>(console.log("the ",x.title,l)))

  const handleScroll = (direction, e) => {
    console.log("direction:", direction);
    console.log("target:", e.target);
  };

  const handleDisable = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <Transfer
        dataSource={mockData}
        titles={["Source", "Action"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        onScroll={handleScroll}
        render={(item) => item.title}
        disabled={disabled}
        rowKey={(record) => record.id}
        oneWay
        style={{
          marginBottom: 16,
        }}
      />
    </>
  );
};

export default InsuranceExclusionMultiSelection;
