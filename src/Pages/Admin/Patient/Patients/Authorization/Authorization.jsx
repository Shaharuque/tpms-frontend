import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GiPlainCircle } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import useToken from "../../../../../CustomHooks/useToken";
import { useGetPatientAuthorizationQuery } from "../../../../../features/Patient_redux/authorization/authorizationApi";
import AuthorizationActivityTable from "./AuthorizationActivityTable/AuthorizationActivityTable";
import Loading from "../../../../../Loading/Loading";
import SelectContactRate from "./AuthorizationModal/SelectContactRate";
import AuthorizationEditModal from "./AuthorizationModal/AuthorizationEditModal";

//data tey key dewa lagbey id diley option select kaj korey na key:"1" ditey hobey backend thekey data ashar somoy id:'1' diley hobey na

const Authorization = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [authData, setAuthData] = useState([]);
  const [selectContact, setSelectContact] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  //row expand code related
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  //const [open, setOpen] = useState(false);
  const { token } = useToken();
  const navigate = useNavigate();
  const { id } = useParams();

  //get patient authorization api
  const { data: authorizationData, isLoading: authorizationloading } =
    useGetPatientAuthorizationQuery({
      token,
      payload: {
        client_id: id,
      },
    });
  console.log(
    "All patient Authorization",
    authorizationData?.client_authorization?.data
  );
  const clientAuthorizationData =
    authorizationData?.client_authorization?.data || [];

  const editAuth = (record) => {
    //console.log("editdata edit", record);
    navigate(`/admin/authorization-Edit/${record?.id}`);
  };

  // const authorizationpetinedata = async () => {
  //   const body = {
  //     client_id: id,
  //   };
  //   const authapidata = await PostfetchData({
  //     endPoint: "admin/ac/patient/authorization",
  //     payload: body,
  //     token,
  //   });

  //   setAuthData(authapidata?.client_authorization?.data);
  //   // console.log("api data ", authapidata?.client_authorization?.data);
  // };

  // useEffect(() => {
  //   authorizationpetinedata();
  // }, []);

  //expendable row ar data jeita expand korley show korbey tar jnno new component call and props hisabey each row ar record id send
  const expandedRowRender = (record) => {
    // console.log("record", record);
    return (
      <div className="ml-[-40px] my-2">
        <AuthorizationActivityTable id={record?.id} />
      </div>
    );
  };

  const handleClose = () => {
    setOpenEditModal(false);
    setSelectContact(false);
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 120,
      filters: [
        {
          text: "Realcube",
          value: "Realcube",
        },
        {
          text: "Mycat",
          value: "Mycat",
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
      filteredValue: filteredInfo.description || null,
      onFilter: (value, record) => record.description.includes(value),
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Onset Date",
      dataIndex: "onset_date",
      key: "onset_date",
      width: 100,
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
      filteredValue: filteredInfo.onset_date || null,
      onFilter: (value, record) => record.onset_date.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.onset_date > b.onset_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "onset_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      width: 100,
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
      filteredValue: filteredInfo.end_date || null,
      onFilter: (value, record) => record.end_date.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.end_date > b.end_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "end_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 100,
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
      filteredValue: filteredInfo.insurance || null,
      onFilter: (value, record) => record.insurance.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.insurance > b.insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Ins. ID",
      dataIndex: "uci_id",
      key: "uci_id",
      width: 60,
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
      filteredValue: filteredInfo.uci_id || null,
      onFilter: (value, record) => record.uci_id.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.uci_id > b.uci_id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "uci_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth No.",
      dataIndex: "authorization_number",
      key: "authorization_number",
      width: 100,
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
      filteredValue: filteredInfo.authorization_number || null,
      onFilter: (value, record) => record.authorization_number.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.authorization_number > b.authorization_number ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "authorization_number"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "COB",
      dataIndex: "cob",
      key: "cob",
      width: 100,
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
      filteredValue: filteredInfo.cob || null,
      onFilter: (value, record) => record.cob.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.cob > b.cob ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cob" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 150,
      render: (_, record) => {
        console.log("render data", record);
        return (
          <div>
            <div className="flex justify-center gap-1 text-primary">
              <button
                onClick={() => {
                  setSelectContact(true);
                }}
              >
                <MdContentCopy className="text-xs mx-2 " />
              </button>

              <span>|</span>
              <button
                onClick={() => {
                  setOpenEditModal(true);
                }}
              >
                <AiOutlinePlus className="text-xs mx-2 " />
              </button>
              {/* edit */}
              <span>|</span>
              <button onClick={() => editAuth(record)}>
                <FiEdit className="text-xs mx-2  text-lime-700" title="Edit" />
              </button>

              <span>|</span>
              <Link to={"/"}>
                <AiOutlineDelete
                  className="text-xs text-red-500 mx-2"
                  title="Delete"
                />
              </Link>
            </div>
          </div>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 60,
      render: (_, { status }) => {
        return (
          <>
            {status === true ? (
              <div className="flex items-center justify-center gap-2 ">
                <GiPlainCircle className="text-green-500" />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 ">
                <GiPlainCircle className="text-red-500" />
              </div>
            )}
          </>
        );
      },
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
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
    <div className="h-[100vh]">
      <>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h1 className="text-[14px] font-semibold">Authorization</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={clearFilters} className="pms-clear-button">
              Clear filters
            </button>
            <Link to={"/admin/authorization-add"}>
              <button className="pms-button">+ Add Authorization</button>
            </Link>
          </div>
        </div>

        <div className=" overflow-scroll ">
          {!authorizationloading ? (
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are
              size="small"
              className=" text-xs font-normal table-striped-rows"
              columns={columns}
              dataSource={clientAuthorizationData}
              expandable={{
                expandedRowRender,
              }}
              scroll={{
                y: 850,
              }}
              expandedRowKeys={expandedRowKeys}
              onExpand={onTableRowExpand}
              onChange={handleChange}
            />
          ) : (
            <Loading />
          )}
        </div>
      </>
      {selectContact && (
        <SelectContactRate
          handleClose={handleClose}
          open={selectContact}
          // editableRow={editableRow}
        ></SelectContactRate>
      )}

      {openEditModal && (
        <AuthorizationEditModal
          handleClose={handleClose}
          open={openEditModal}
          // editableRow={editableRow}
        ></AuthorizationEditModal>
      )}
    </div>
  );
};

export default Authorization;
