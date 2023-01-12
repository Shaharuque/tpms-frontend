import React, { useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import AuthorizationEditModal from "../Authorization/AuthorizationEditModal";

const AuthorizationEditTable = ({ db }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [sortedInfo, setSortedInfo] = useState({});
  const [authEditData, setAuthEditData] = useState(db);

  //   fetch data
  // React.useEffect(() => {
  //   fetch("../../../All_Fake_Api/AuthorizationEdit.json")
  //     .then((res) => res.json())
  //     .then((d) => {
  //       setAuthEditData(d);
  //       // setLoading2(false);
  //     });
  // }, []);

  // console.log("db auth edit", authEditData);
  // console.log("fek", authEditData);

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  // console.log("authData", authEditData);

  const columns = [
    {
      title: "Service",
      dataIndex: "activity_name",
      key: "activity_name",
      width: 100,
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cpt. Code",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => {
        return a.id > b.id ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Max By",
      dataIndex: "max_by",
      key: "max_by",
      width: 100,
      sorter: (a, b) => {
        return a.max_by > b.max_by ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "max_by" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
      width: 80,
      sorter: (a, b) => {
        return a.frequency > b.frequency ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "frequency" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth",
      dataIndex: "auth",
      key: "auth",
      width: 50,
      sorter: (a, b) => {
        return a.auth > b.auth ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "auth" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Scheduled",
      dataIndex: "scheduled",
      key: "scheduled",
      width: 60,
      sorter: (a, b) => {
        return a.scheduled > b.scheduled ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "scheduled" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Remaining",
      dataIndex: "remaining",
      key: "remaining",
      width: 50,
      sorter: (a, b) => {
        return a.remaining > b.remaining ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "remaining" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 50,
      render: () => (
        <div>
          {" "}
          <div>
            <div className="flex justify-center gap-1 text-primary">
              {/* <Link to={`/billing/deposit-apply/${row.original.id}`}>
                    <MdOutlineDashboard title="Deposit" />
                  </Link> */}

              <button
                onClick={() => {
                  setOpenEditModal(true);
                }}
              >
                <FiEdit className="text-xs mx-2 " />
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
        </div>
      ),
    },
  ];

  return (
    <div>
      <>
        <div className=" overflow-scroll py-2 px-2">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal "
            columns={columns}
            dataSource={db}
            onChange={handleChange}
          />
        </div>
      </>
      {openEditModal && (
        <AuthorizationEditModal
          handleClose={handleClose}
          open={openEditModal}
        ></AuthorizationEditModal>
      )}
    </div>
  );
};

export default AuthorizationEditTable;
