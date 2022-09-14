import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Dropdown, Space, Table } from "antd";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import ManageTableTesting from "./ManageTableTesting";

//data tey key dewa lagbey id diley option select kaj korey na key:"1" ditey hobey backend thekey data ashar somoy id:'1' diley hobey na
const data = [
  {
    id: 1,
    key: "111", //id:'1' diley kaj korey na
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
    key: "255",
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
    key: "333",
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
    key: "4",
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

// const menu = (
//   <Menu
//     items={[
//       {
//         key: "1",
//         label: "Action 1",
//       },
//       {
//         key: "2",
//         label: "Action 2",
//       },
//     ]}
//   />
// );

const TestingTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [openAddNote, setOpenAddNote] = useState(false);
  const [openViewNote, setOpenViewNote] = useState(false);
  const [editSession, setEditSession] = useState(false);
  const [allData, setAllData] = useState([]);
  //const [open, setOpen] = useState(false);

  //   fetch data
  React.useEffect(() => {
    fetch("All_Fake_Api/Fakedb.json")
      .then((res) => res.json())
      .then((d) => {
        setAllData(d);
        // setLoading2(false);
      });
  }, []);

  const handleOpenAction = (e) => {
    e.preventDefault();
  };

  const addNoteHandler = () => {
    setOpenAddNote(true);
  };
  const viewNoteHandler = () => {
    setOpenViewNote(true);
  };
  const editSessionHandler = () => {
    setEditSession(true);
  };

  const handleClose = () => {
    setOpenAddNote(false);
    setOpenViewNote(false);
    setEditSession(false);
  };

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
      width: 60,
      // render contains what we want to reflect as our data
      render: (_, { lock }) => {
        console.log("tags : ", lock);
        return (
          <div>
            {lock === true && (
              <button onClink={() => console.log(lock)}>
                <AiFillUnlock className="mx-auto text-lg font-medium text-secondary" />
              </button>
            )}
            {lock === false && (
              <AiFillLock className=" text-lg font-medium text-red-600" />
            )}
          </div>
        );
      },
    },
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      filters: [
        {
          text: `Vernon`,
          value: "Vernon",
        },
        {
          text: "Donovan",
          value: "Donovan",
        },
      ],
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
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
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => {
        return a.address > b.address ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "pos",
      dataIndex: "pos",
      render: (_, { pos }) => {
        console.log("pos : ", pos);
        return (
          <>
            {pos === "telehealth" ? (
              <div className="flex items-center gap-2 ">
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
      ],
      filteredValue: filteredInfo.pos || null,
      onFilter: (value, record) => record.pos.includes(value),
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
              <button className="bg-green-700 text-white text-[9px] py-[2px] px-2 rounded-lg">
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
    <div>
      <>
        <Space
          style={{
            marginBottom: 16,
          }}
        >
          <Button onClick={clearFilters}>Clear filters</Button>
        </Space>
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal px-8"
          columns={columns}
          dataSource={data}
          rowSelection={{
            ...rowSelection,
          }}
          onChange={handleChange}
        />
        {/* {openAddNote && (
          <SessionAddNote
            handleClose={handleClose}
            open={openAddNote}
          ></SessionAddNote>
        )}
        {openViewNote && (
          <SessionViewNote
            handleClose={handleClose}
            open={openViewNote}
          ></SessionViewNote>
        )}
        {editSession && (
          <EditSession
            pagination={false}
            handleClose={handleClose}
            open={editSession}
          ></EditSession>
        )} */}
      </>
    </div>
  );
};

export default TestingTable;
