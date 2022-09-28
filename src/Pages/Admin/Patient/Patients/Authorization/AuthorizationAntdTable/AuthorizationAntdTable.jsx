import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GiPlainCircle } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import SelectContactRate from "../Authorization/SelectContactRate";
import AuthorizationEditModal from "../Authorization/AuthorizationEditModal";
import AuthorizationEditTable from "../AddAuthorization/AuthorizationEditTable";
//data tey key dewa lagbey id diley option select kaj korey na key:"1" ditey hobey backend thekey data ashar somoy id:'1' diley hobey na

const AuthorizationAntdTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [authData, setAuthData] = useState([]);
  const [selectContact, setSelectContact] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  //row expand code related
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  //const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const editAuth = (id) => {
    console.log(id);
    navigate(`/admin/authorization-Edit/${id}`);
  };

  //expendable row ar data jeita expand korley show korbey
  const expandedRowRender = () => {
    return (
      <div className="ml-[-40px] my-2">
        <AuthorizationEditTable></AuthorizationEditTable>
      </div>
    );
  };

  const handleClose = () => {
    setOpenEditModal(false);
    setSelectContact(false);
  };

  // fetch data
  useEffect(() => {
    fetch("../../../All_Fake_Api/Authorization.json")
      .then((res) => res.json())
      .then((d) => {
        setAuthData(d);
      });
  }, []);

  // console.log("authData", authData);

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
      dataIndex: "id",
      key: "id",
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
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth No.",
      dataIndex: "auth_no",
      key: "auth_no",
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
      filteredValue: filteredInfo.auth_no || null,
      onFilter: (value, record) => record.auth_no.includes(value),
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.auth_no > b.auth_no ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "auth_no" ? sortedInfo.order : null,
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
      render: (_, { id }) => (
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

            <span>|</span>
            <button onClick={() => editAuth(id)}>
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
      ),
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
    <div>
      <>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h1 className="text-sm font-semibold">Authorization</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={clearFilters}
              className="px-2 flex items-center py-2 bg-white from-primary text-xs  hover:to-secondary text-secondary border border-secondary rounded-sm"
            >
              Clear filters
            </button>
            <Link to={"/admin/authorization-Edit"}>
              <button className="px-2 flex items-center py-2 bg-gradient-to-r to-secondary from-primary text-xs  hover:to-secondary text-white rounded-sm">
                + Add Authorization
              </button>
            </Link>
          </div>
        </div>

        <div className=" overflow-scroll ">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            rowKey={(record) => record.id} //record is kind of whole one data object and here we are
            size="small"
            className=" text-xs font-normal "
            columns={columns}
            dataSource={authData}
            expandable={{
              expandedRowRender,
            }}
            expandedRowKeys={expandedRowKeys}
            onExpand={onTableRowExpand}
            onChange={handleChange}
          />
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

export default AuthorizationAntdTable;
