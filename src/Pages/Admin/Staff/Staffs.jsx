import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsPersonLinesFill, BsPersonPlusFill } from "react-icons/bs";
import { useGetStaffDataQuery } from "../../../features/Stuff_redux/staff/staffDataTableAPi";
import useToken from "../../../CustomHooks/useToken";
import Loading from "../../../Loading/Loading";
import StuffStatusAction from "./Staffs/StuffStatus/StuffStatusAction";
import { useDispatch } from "react-redux";
const Staffs = () => {
  const [openStaff, setOpenStaff] = useState(false);
  const [StafData, SetStafData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { token } = useToken();
  const [page, setPage] = useState(1);

  const {
    data: stuffData,
    isLoading: staffLoading,
    isError,
  } = useGetStaffDataQuery({ token, page });

  console.log("rtk data received", stuffData);
  const staffTableData = stuffData?.staffs?.data;
  // SetStafData(stuffData?.staffs?.data);

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "full_name",
      key: "full_name",
      width: 150,
      // filters: [
      //   {
      //     text: `Jamey`,
      //     value: "Jamey",
      //   },
      //   {
      //     text: `Minnie`,
      //     value: "Minnie",
      //   },
      //   {
      //     text: "Donald",
      //     value: "Donald",
      //   },
      //   {
      //     text: "Burke Beard",
      //     value: "Burke Beard",
      //   },
      //   {
      //     text: "Hector Moses",
      //     value: "Hector Moses",
      //   },
      // ],
      // render contains what we want to reflect as our data
      // Name, id, key=>each row data(object) property value can be accessed.
      //here,using id as key, as key isn't availale in the data we got.
      render: (_, { full_name, id }) => {
        // console.log("tags : ", Name, id);
        return (
          <Link
            to={`/admin/staff/staffs-biographic/${id}`}
            className="text-secondary"
          >
            {full_name}
          </Link>
        );
      },
      filteredValue: filteredInfo.full_name || null,
      onFilter: (value, record) => record.full_name.includes(value),
      sorter: (a, b) => {
        return a.full_name > b.full_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "full_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Credential Type",
      dataIndex: "credential_type",
      key: "credential_type",
      width: 150,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.credential_type > b.credential_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "credential_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Phone",
      dataIndex: "office_phone",
      key: "office_phone",
      width: 120,
      sorter: (a, b) => {
        return a.Phone > b.Phone ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "office_phone" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      render: (_, { office_phone }) => {
        return (
          <div>
            <h1>{office_phone ? office_phone : "No Data"}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "office_email",
      key: "office_email",
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
      dataIndex: "language",
      key: "language",
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
      key: "is_active",
      dataIndex: "is_active",
      width: 120,
      render: (_, { is_active, id }) => {
        //console.log("Status : ", Status);
        return (
          <StuffStatusAction id={id} status={is_active}></StuffStatusAction>
        );
      },
    },
  ];

  //console.log(items)

  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  console.log(staffTableData.length);

  return (
    <div className={staffTableData.length < 3 ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">
          Staffs
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>

          <div className="dropdown sm:dropdown-end">
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
              <Link to={`/admin/create-staff/provider`}>
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
        {staffLoading ? (
          <Loading />
        ) : (
          <Table
            rowKey={(record) => record.id}
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className="table-striped-rows text-xs font-normal"
            columns={columns}
            dataSource={staffTableData}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default Staffs;
