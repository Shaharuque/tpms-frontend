import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import { Button, Dropdown, Space, Table } from "antd";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import ManageTableTesting from "./ManageTableTesting";
import useToken from "../../CustomHooks/useToken";

const TestingTable = () => {
  const { token } = useToken();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [allData, setAllData] = useState([]);
  const [testData, setTestData] = useState();
  //const [open, setOpen] = useState(false);

  //   fetch data
  // React.useEffect(() => {
  //   fetch("../All_Fake_Api/Fakedb.json")
  //     .then((res) => res.json())
  //     .then((d) => {
  //       setAllData(d);
  //       // setLoading2(false)
  //     });
  // }, []);
  const formData = {
    client_id: [
      107, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 141, 142,
      143, 144, 145, 146, 147, 148, 150, 151, 152, 153, 154, 155, 156, 157, 159,
      181, 182, 271, 319, 653, 665, 738, 1504, 1586, 1593, 1830, 1911, 1913,
      1967, 1988, 2125, 2454, 2459, 2461, 2469, 2470, 2476, 2483, 2486, 2487,
      2490, 2500, 2501, 2510, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523,
      2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535,
      2536, 2537, 2538, 2539, 2540, 2541, 2542, 2545, 2546, 2547, 2548, 2549,
      2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561,
      2562, 2563, 2564,
    ],
    from_date: "2022-11-01",
    to_date: "2022-12-31",
  };
  useEffect(() => {
    fetch(
      "https://test-prod.therapypms.com/api/v1/internal/admin/ac/get-appoinments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token || null,
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => setTestData(data?.appointments));
  }, []);

  console.log(testData);
  console.log(allData);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Lock",
      key: "lock",
      dataIndex: "lock",
      width: 50,
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
              <AiFillLock className=" text-lg font-medium mx-auto  text-red-600" />
            )}
          </div>
        );
      },
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: 200,
      filters: [
        {
          text: `Vernon`,
          value: "Vernon",
        },
        {
          text: `Aileen Newman`,
          value: "Aileen Newman",
        },
        {
          text: "Donovan",
          value: "Donovan",
        },
        {
          text: "Burke Beard",
          value: "Burke Beard",
        },
        {
          text: "Hector Moses",
          value: "Hector Moses",
        },
      ],
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      width: 200,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
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
      width: 100,
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
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
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
    },
    {
      title: "Scheduled Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      width: 150,
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
      width: 100,
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
      key: "status",
      dataIndex: "status",
      width: 100,
      render: (_, { status }) => {
        //console.log("status : ", status);
        return (
          <div>
            {status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {status}
              </button>
            )}
            {status === "Rendered" && (
              <button className="bg-green-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {status}
              </button>
            )}
            {status === "hold" && (
              <button className="bg-red-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
                {status}
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
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value),
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
          <button onClick={(e) => e.preventDefault()}>
            <Space>
              <BsThreeDots />
            </Space>
          </button>
        </Dropdown>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <div className=" overflow-scroll ">
      <>
        <Space>
          <Button onClick={clearFilters}>Clear filters</Button>
        </Space>
        <Table
          rowKey={(record) => record.id}
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          bordered
          className=" text-xs font-normal mt-5"
          columns={columns}
          dataSource={testData}
          rowSelection={{
            ...rowSelection,
          }}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default TestingTable;
