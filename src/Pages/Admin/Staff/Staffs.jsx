import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatientStatusAction from "../Patient/Patients/PatientStatusAction";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsPersonLinesFill, BsPersonPlusFill } from "react-icons/bs";
const Staffs = () => {
  const [openStaff, setOpenStaff] = useState(false);
  const [StafData, SetStafData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [items, setItems] = useState([]);

  // fakeApi call
  useEffect(() => {
    axios("../../All_Fake_Api/Staff.json")
      .then((response) => {
        SetStafData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(StafData);

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      width: 200,
      filters: [
        {
          text: `Jamey`,
          value: "Jamey",
        },
        {
          text: `Minnie`,
          value: "Minnie",
        },
        {
          text: "Donald",
          value: "Donald",
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
      filteredValue: filteredInfo.Name || null,
      onFilter: (value, record) => record.Name.includes(value),
      sorter: (a, b) => {
        return a.Name > b.Name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Name" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // Name, id, key=>each row data(object) property value can be accessed.
      //here,using id as key, as key isn't availale in the data we got.
      render: (_, { Name, id }) => {
        console.log("tags : ", Name, id);
        return (
          <Link
            to={`/admin/staff/staffs-biographic/${id}`}
            className="text-secondary"
          >
            {Name}
          </Link>
        );
      },
      ellipsis: true,
    },
    {
      title: "Credential Type",
      dataIndex: "Credential_Type",
      key: "Credential_Type",
      width: 150,
      filters: [],
      filteredValue: filteredInfo.Credential_Type || null,
      onFilter: (value, record) => record.Credential_Type.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Credential_Type > b.Credential_Type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Credential_Type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key: "Phone",
      width: 120,
      // filters: [
      //   {
      //     text: "(940)-234-0329",
      //     value: "(940)-234-0329",
      //   },
      //   {
      //     text: "(124)-996-5455",
      //     value: "(124)-996-5455",
      //   },
      //   {
      //     text: "(972)-202-5007",
      //     value: "(972)-202-5007",
      //   },
      // ],
      // filteredValue: filteredInfo.Phone || null,
      // onFilter: (value, record) => record.Phone.includes(value),
      sorter: (a, b) => {
        return a.Phone > b.Phone ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Phone" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      render: (_, { Phone }) => {
        return (
          <div>
            <h1>{Phone ? Phone : "No Data"}</h1>
          </div>
        );
      },
      ellipsis: true,
    },

    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
      width: 200,
      filters: [
        {
          text: `Male`,
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filteredValue: filteredInfo.Email || null,
      onFilter: (value, record) => record.Email.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Email > b.Email ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Language",
      dataIndex: "Language",
      key: "Language",
      width: 100,
      filters: [
        {
          text: `Hindi`,
          value: "Hindi",
        },
        {
          text: "French",
          value: "French",
        },
        {
          text: "English",
          value: "English",
        },
      ],
      filteredValue: filteredInfo.Language || null,
      onFilter: (value, record) => record.Language.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Language > b.Language ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Language" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Scheduled",
      dataIndex: "id",
      key: "id",
      width: 100,
      filters: [
        {
          text: `Male`,
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <Link to="/admin" className=" text-secondary ">
            View
          </Link>
        );
      },
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      width: 70,
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return <PatientStatusAction status={Status}></PatientStatusAction>;
      },
      filters: [],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
  ];

  //console.log(items)

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  return (
    <div className={StafData ? "" : "h-[100vh]"}>
      <div className="flex items-center flex-wrap justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Staffs
        </h1>

        <div className="flex items-center gap-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>

          <div className="dropdown sm:dropdown-end ">
            <label tabIndex={0}>
              <h1 className="pms-button">Add Staff</h1>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content menu py-5 shadow-md ml-[-116px] drop-box rounded-sm bg-white w-52"
            >
              <div>
                <TiArrowSortedDown className=" text-3xl absolute top-[-12px] right-[-6px] text-primary" />
              </div>
              <Link to={"/admin/create-staff/staff"}>
                <button className="text-[14px] text-secondary border px-[20px] py-1 mb-2 rounded-sm border-secondary hover:text-white hover:bg-secondary mx-auto flex items-center font-semibold gap-2">
                  <div className="flex items-center">
                    <BsPersonPlusFill className="mr-2" />
                    Provider (Therapist)
                  </div>
                </button>
              </Link>
              <Link to={"/admin/create-staff/officeStaff"}>
                <button className="text-[14px] text-secondary border px-12 py-1 mx-auto rounded-sm border-secondary hover:text-white hover:bg-secondary flex items-center font-semibold gap-2">
                  <div className="flex items-center">
                    <BsPersonLinesFill className="mr-2" />
                    Office Staff
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" overflow-scroll">
        <Table
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal"
          columns={columns}
          dataSource={StafData}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Staffs;
