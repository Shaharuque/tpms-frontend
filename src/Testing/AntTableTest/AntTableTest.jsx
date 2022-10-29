import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
// import "./antDesign.css";
import { Button, Dropdown, Space, Table, Badge } from "antd";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
// import ManageTableAction from "../../Pages/Admin/Appointment/ListView/ListView/ManageTableAction";
import { Link, useNavigate } from "react-router-dom";
import ManageTableTesting from "./ManageTableTesting";
import axios from "axios";
//data tey key dewa lagbey id diley option select kaj korey na key:"1" ditey hobey backend thekey data ashar somoy id:'1' diley hobey na
const data = [
  {
    id: 1,
    // key: "111", //id:'1' diley kaj korey na
    age: 32,
    address: "New York No. 1 Lake Park",
    lock: false,
    Patients: "Vernon Barlow",
    Service_hrs: "Eget Magna Corp.",
    Provider: "Travis Wagner",
    pos: "telehealth",
    Scheduled_Date: "Aug 6, 2023",
    Hours: "9:57 PM",
    Status: "hold",
  },
  {
    id: 2,
    // key: "255",
    age: 42,
    address: "London No. 1 Lake Park",
    lock: true,
    Patients: "Brett Campbell",
    Service_hrs: "Amet Ultricies PC",
    Provider: "Ryder Foster",
    pos: "School",
    Scheduled_Date: "Feb 20, 2023",
    Hours: "3:01 PM",
    Status: "Rendered",
  },
  {
    id: 3,
    // key: "333",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    lock: true,
    Patients: "Coby Gonzalez",
    Service_hrs: "Malesuada Corporation",
    Provider: "Bianca Lowery",
    pos: "School",
    Scheduled_Date: "Apr 30, 2022",
    Hours: "10:14 PM",
    Status: "Rendered",
  },
  {
    id: 4,
    // key: "4",
    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
  {
    id: 5,
    // key: "4",
    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
  {
    id: 6,
    // key: "4",
    age: 32,
    address: "London No. 2 Lake Park",
    lock: true,
    Patients: "Donovan Robertson",
    Service_hrs: "At Industries",
    Provider: "Sara Burke",
    pos: "School",
    Scheduled_Date: "Dec 30, 2021",
    Hours: "9:28 AM",
    Status: "hold",
  },
];

const AntTableTest = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [allData, setAllData] = useState([]);
  //const [open, setOpen] = useState(false);
  //row expand code related
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  const [testData, setTestData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/patients/all-patient")
      .then((response) => {
        console.log(response.data);
        setTestData(response.data);
      });
  }, []);

  //For getting unique value
  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }
  //this funtion to get dynamic filter value-text
  const patientSearch = () => {
    // const filterData = [
    //   {
    //     text: `Vernon`,
    //     value: "Vernon",
    //   },
    //   {
    //     text: `Aileen Newman`,
    //     value: "Aileen Newman",
    //   },
    //   {
    //     text: "Donovan",
    //     value: "Donovan",
    //   },
    //   {
    //     text: "Burke Beard",
    //     value: "Burke Beard",
    //   },
    //   {
    //     text: "Hector Moses",
    //     value: "Hector Moses",
    //   },
    // ];
    // return filterData.map((country) => {
    //   return <option value={country.text}>{country.value}</option>;
    // });

    let patientArray = data?.map((d) => d?.Patients);
    //console.log(patientArray);
    const resultArray = getUnique(patientArray);
    console.log(resultArray);
    // return filterData;
    let newArray = [];
    for (let x of resultArray) {
      console.log(x);
      newArray.push({ text: x, value: x });
    }
    console.log(newArray);
    return newArray;
  };
  const serviceSearch = () => {
    let serviceArray = data?.map((d) => d?.Service_hrs);
    //console.log(patientArray);
    const resultArray = getUnique(serviceArray);
    console.log(resultArray);
    // return filterData;
    let newArray = [];
    for (let x of resultArray) {
      console.log(x);
      newArray.push({ text: x, value: x });
    }
    console.log(newArray);
    return newArray;
  };

  //expendable row ar data jeita expand korley show korbey
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Service",
        dataIndex: "service",
        key: "service",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Status",
        key: "state",
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      {
        title: "Upgrade Status",
        dataIndex: "upgradeNum",
        key: "upgradeNum",
      },
    ];
    const data = [];

    for (let i = 0; i < 2; ++i) {
      data.push({
        key: i.toString(),
        date: "2014-12-24 23:12:00",
        name: "This is production name",
        upgradeNum: "Upgraded: 56",
        service: "Direct Behavior Therapy RBT",
      });
    }

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const patientDetails = (id, Patients, service) => {
    console.log(id, Patients, service);
    //navigate(`/details/${id}`);
  };

  //   fetch data
  React.useEffect(() => {
    fetch("http://localhost:8800/api/patients/all-patient")
      .then((res) => res.json())
      .then((d) => {
        setAllData(d);
        // setLoading2(false);
      });
  }, []);

  const handleOpenAction = (e) => {
    e.preventDefault();
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // let patientArray = [];
  // let serviceArray = [];
  const deletePatientTag = (tag) => {
    console.log(tag);
    const patientArray = filteredInfo?.Patients?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: patientArray,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: filteredInfo?.Service_hrs,
      pos: filteredInfo?.pos,
    });
  };

  const deleteServiceTag = (tag) => {
    console.log(tag);
    const serviceArray = filteredInfo?.Service_hrs?.filter(
      (item) => item !== tag
    );
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: serviceArray,
      Status: filteredInfo?.Status,
      pos: filteredInfo?.pos,
    });
  };

  const deletePosTag = (tag) => {
    console.log(tag);
    const posArray = filteredInfo?.pos?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: filteredInfo?.Status,
      pos: posArray,
    });
  };
  const deleteStatusTag = (tag) => {
    console.log(tag);
    const statusArray = filteredInfo?.Status?.filter((item) => item !== tag);
    setFilteredInfo({
      Patients: filteredInfo?.Patients,
      Service_hrs: filteredInfo?.Service_hrs,
      Status: statusArray,
      pos: filteredInfo?.pos,
      // Hours: filteredInfo?.Hours,
    });
  };

  console.log("new filteredInfo:", filteredInfo);

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Lock",
      key: "lock",
      dataIndex: "lock",
      width: 60,
      // render contains what we want to reflect as our data
      render: (_, { lock }) => {
        //console.log("tags : ", lock);
        return (
          <div>
            {lock === true && (
              <button onClink={() => console.log(lock)}>
                <AiFillUnlock className="mx-auto text-lg font-medium text-secondary" />
              </button>
            )}
            {lock === false && (
              <AiFillLock className=" text-lg mx-auto font-medium text-red-600" />
            )}
          </div>
        );
      },
    },
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      filters: patientSearch(),
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      //key, Patients, Service_hrs=>these are the property of table object so we will pass these and can use these dynamically..
      render: (_, { id, Patients, Service_hrs }) => {
        //console.log("patient_name : ", Patients);
        return (
          <div>
            <h1
              onClick={() => patientDetails(id, Patients, Service_hrs)}
              style={{ color: "teal" }}
            >
              {Patients}
            </h1>
          </div>
        );
      },
      // render: (record, { patients }) => {
      //   return (
      //     <>
      //       <h1
      //         onClick={() => patientDetails(record)}
      //         style={{ color: "teal" }}
      //       >
      //         {patients}
      //       </h1>
      //     </>
      //   );
      // },
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      filters: serviceSearch(),
      filteredValue: filteredInfo.Service_hrs || null,
      onFilter: (value, record) => record.Service_hrs.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Service_hrs > b.Service_hrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Service_hrs" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "pos",
      dataIndex: "pos",
      render: (_, { pos }) => {
        //console.log("pos : ", pos);
        return (
          <>
            {pos === "telehealth" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>{pos}</div>
            )}
          </>
        );
      },
      filters: [
        {
          text: "telehealth",
          value: "telehealth",
        },
        {
          text: "School",
          value: "School",
        },
        {
          text: "Office",
          value: "office",
        },
      ],
      filteredValue: filteredInfo.pos || null,
      onFilter: (value, record) => record.pos.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Scheduled Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      filters: [
        {
          text: `Feb 20, 2023`,
          value: "Feb 20, 2023",
        },
        {
          text: "Dec 30, 2021",
          value: "Dec 30, 2021",
        },
      ],
      filteredValue: filteredInfo.Scheduled_Date || null,
      onFilter: (value, record) => record.Scheduled_Date.includes(value),
      sorter: (a, b) => {
        return a.Scheduled_Date > b.Scheduled_Date ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder:
        sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hours",
      dataIndex: "Hours",
      key: "Hours",
      filters: [
        {
          text: `9:57 PM`,
          value: "9:57 PM",
        },
        {
          text: "3:01 PM",
          value: "3:01 PM",
        },
      ],
      filteredValue: filteredInfo.Hours || null,
      onFilter: (value, record) => {
        return record.Hours.includes(value);
      },
      sorter: (a, b) => {
        return a.Hours > b.Hours ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "Hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      width: 100,
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <div>
            {Status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
            {Status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
            {Status === "hold" && (
              <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {Status}
              </button>
            )}
          </div>
        );
      },
      filters: [
        {
          text: "hold",
          value: "hold",
        },
        {
          text: "Rendered",
          value: "Rendered",
        },
        {
          text: "Scheduled",
          value: "Scheduled",
        },
      ],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: () => (
        <Dropdown
          overlay={<ManageTableTesting></ManageTableTesting>}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <BsThreeDots />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  const rowSelection = {
    // onChange: (selectedRowKeys, selectedRows) => {
    //   console.log(
    //     `selectedRowKeys: ${selectedRowKeys}`,
    //     "selectedRows: ",
    //     selectedRows
    //   );
    // },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows); //here, record=> is the present data row which is selected and selectRows=>all the selected data rows
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  //If one new row is expanded then row expendation will be hidden
  const onTableRowExpand = (expanded, record) => {
    const keys = [];
    if (expanded) {
      keys.push(record.id); // I have set my record.id as row key. Check the documentation for more details.
    }

    setExpandedRowKeys(keys);
  };

  return (
    <div>
      <>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={clearFilters}>Clear filters</Button>
        </Space>
        {/* For showing filtered tags/words */}
        <div className="border-2 border-[#34A7B8] bg-gray-200 mb-2 mx-4 p-2 rounded ">
          <div className="flex mb-2">
            <span className="border-black font-bold mr-2 flex items-center">
              NAME:
            </span>
            {filteredInfo?.Patients?.map((tag, index) => (
              <h1
                className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                key={index}
              >
                {tag}
                <TiDelete
                  className="cursor-pointer text-lg"
                  onClick={() => deletePatientTag(tag)}
                ></TiDelete>
              </h1>
            ))}
          </div>

          <div className="flex mb-2">
            <span className="border-black font-bold mr-2 flex items-center">
              SERVICE_HOURS:
            </span>
            {filteredInfo?.Service_hrs?.map((t, index) => (
              <h1
                className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                key={index}
              >
                {t}
                <TiDelete
                  className="cursor-pointer text-lg"
                  onClick={() => deleteServiceTag(t)}
                ></TiDelete>
              </h1>
            ))}
          </div>

          <div className="flex mb-2">
            <span className="border-black font-bold mr-2 flex items-center">
              POS:
            </span>
            {filteredInfo?.pos?.map((tag, index) => (
              <h1
                className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                key={index}
              >
                {tag}
                <TiDelete
                  className="cursor-pointer text-lg"
                  onClick={() => deletePosTag(tag)}
                ></TiDelete>
              </h1>
            ))}
          </div>

          <div className="flex mb-2">
            <span className="border-black font-bold mr-2 flex items-center">
              STATUS:
            </span>
            {filteredInfo?.Status?.map((tag, index) => (
              <h1
                className="text-white border-2 border-black mr-2 rounded-lg px-1 bg-black flex"
                key={index}
              >
                {tag}
                <TiDelete
                  className="cursor-pointer text-lg"
                  onClick={() => deleteStatusTag(tag)}
                ></TiDelete>
              </h1>
            ))}
          </div>
        </div>

        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
          size="small"
          className=" text-xs font-normal px-8"
          columns={columns}
          dataSource={data}
          rowSelection={{
            ...rowSelection,
          }}
          expandable={{
            expandedRowRender,
          }}
          expandedRowKeys={expandedRowKeys}
          onExpand={onTableRowExpand}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default AntTableTest;
