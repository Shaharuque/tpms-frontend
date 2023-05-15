import { Button, Popover, Table } from "antd";
// import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsPersonLinesFill, BsPersonPlusFill } from "react-icons/bs";
import { useGetStaffDataQuery } from "../../../features/Stuff_redux/staff/staffDataTableAPi";
import useToken from "../../../CustomHooks/useToken";
import Loading from "../../../Loading/Loading";
import StuffStatusAction from "./Staffs/StuffStatus/StuffStatusAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { baseIp } from "../../../Misc/BaseClient";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../Pages/Settings/SettingComponents/ShimmerTableTet";

import "jspdf-autotable";
import jsPDF from "jspdf";
const Staffs = () => {
  const [openStaff, setOpenStaff] = useState(false);
  const [staffData, setStaffData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { token } = useToken();
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  //get data from API + data fetch from api while scrolling[Important]
  useEffect(() => {
    const getStaffData = async () => {
      let res = await axios({
        method: "post",
        url: `${baseIp}/provider/list`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        data: {
          page: 1,
        },
      });
      const data = res?.data?.providerData?.data;
      setStaffData(data);
    };
    getStaffData();
  }, [token]);
  console.log("This is satff data of first page", staffData);

  const fetchProviders = async () => {
    let res = await axios({
      method: "post",
      url: `${baseIp}/provider/list`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      data: {
        page,
      },
    });
    const data = res?.data?.providerData?.data;
    console.log(data);
    return data;
  };

  const fetchData = async () => {
    const providersFromServer = await fetchProviders();
    //console.log(providersFromServer);
    setStaffData([...staffData, ...providersFromServer]);
    if (providersFromServer.length === 0) {
      setHasMore(false);
    }
    setPage(page + 1);
  };
  console.log("final total staffs", staffData);

  // const {
  //   data: stuffData,
  //   isLoading: staffLoading,
  //   isError,
  // } = useGetStaffDataQuery({ token, page });

  // console.log("rtk data received", stuffData);
  // const staffTableData = stuffData?.staffs?.data;
  // // SetStafData(stuffData?.staffs?.data);

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
          <Link to={`/admin/staff/staffs-biographic/${id}`} className="text-secondary">
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
      render: (_, record) => {
        // console.log("tags : ", Name, id);
        return <div>{record?.employeeTypeAssign?.type_name || <h1 className="text-red-500">Not Assigned Yet</h1>}</div>;
      },
      sorter: (a, b) => {
        return a.credential_type > b.credential_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "credential_type" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Phone",
      dataIndex: "office_phone",
      key: "office_phone",
      width: 120,
      sorter: (a, b) => {
        return a.Phone > b.Phone ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "office_phone" ? sortedInfo.order : null,

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
        return <StuffStatusAction id={id} status={is_active} setStaffData={setStaffData}></StuffStatusAction>;
      },
    },
  ];

  //console.log(items)

  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const exportPDF = async () => {
    // const input = document.getElementById("address");
    // const input2 = document.getElementById("signature");
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const name = "My Awesome Report";
    const headers = [["id", "credtype", "phone", "email", "employee_type", "language", "treatment_type"]];

    const data = staffData?.map((elt) => [elt.id, elt.first_name, elt.office_email, elt.employee_type, elt.language, elt.treatment_type]);

    console.log("pdf export data", data);

    let content = {
      // startY: 210,
      // upper gap
      // startY: 350,
      head: headers,
      body: data,
    };

    doc.text(name, marginLeft, 200);
    doc.autoTable(content);
    var finalY = doc.lastAutoTable.finalY;
    doc.save("jahid_repoty.pdf");
  };

  const exportCSV = async () => {
    // const input = document.getElementById("address");
    // const input2 = document.getElementById("signature");
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const name = "My Awesome Report";
    const headers = [["id", "language", "phone", "email"]];

    const data = staffData?.map((elt) => [elt.id, elt.language, elt.phone, elt.office_email]);

    console.log("pdf export data", data);

    let content = {
      // startY: 210,
      // upper gap
      // startY: 350,
      head: headers,
      body: data,
    };

    doc.text(name, marginLeft, 200);
    doc.autoTable(content);
    var finalY = doc.lastAutoTable.finalY;
    doc.save("jahid_repoty.csv");
  };

  const text = <span>Title</span>;

  const content = (
    <div>
      <Button onClick={exportPDF} color="primary">
        pdf
      </Button>

      <Button onClick={exportCSV} color="primary">
        CSV
      </Button>
    </div>
  );

  const buttonWidth = 70;

  return (
    <div className={""}>
      <div className="flex items-center flex-wrap justify-between gap-2 my-2">
        <h1 className="text-lg text-orange-500 text-left font-semibold ">Staffs</h1>

        <div className="flex items-center gap-2">
          <button onClick={clearFilters} className="pms-clear-button border">
            Clear filters
          </button>

          <div className="dropdown sm:dropdown-end">
            <label tabIndex={0}>
              <h1 className="pms-button">Add Staff</h1>
            </label>

            <div tabIndex={0} className="dropdown-content menu py-5 shadow-md ml-[-116px] drop-box rounded-sm bg-white w-52">
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
      <div className="pdfcsv d-flex justify-items-end ">
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <Button>Bottom</Button>
        </Popover>
        {/* <Button onClick={exportPDF} color="primary">
          pdf
        </Button>

        <Button onClick={exportCSV} color="primary">
          CSV
        </Button> */}
      </div>

      <InfiniteScroll dataLength={staffData?.length} next={staffData?.length > 0 && fetchData} hasMore={hasMore} loader={<ShimmerTableTet></ShimmerTableTet>}>
        <Table
          rowKey={(record) => record.id}
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className="table-striped-rows text-xs font-normal"
          columns={columns}
          dataSource={staffData}
          onChange={handleChange}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Staffs;
