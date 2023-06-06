//each authorization data has nested data and we will get that from Patient Authorization Activity api
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import useToken from "../../../../../CustomHooks/useToken";
import axios from "axios";
import { patientIp } from "../../../../../Misc/BaseClient";

const AuthorizationActivityTable = ({ authId }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [sortedInfo, setSortedInfo] = useState({});
  const [authActData, setAuthActData] = useState([]);
  const { token } = useToken();
  console.log("auth id", authId);

  //Get All Authorizations
  useEffect(() => {
    const getAuthorizations = async () => {
      const res = await axios({
        method: "POST",
        url: `${patientIp}/my/all/authorization/activity`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: {
          authId,
        },
      });
      console.log("Manage Session List", res?.data);
      setAuthActData(res?.data?.act);
    };
    getAuthorizations();
  }, [token, authId]);

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Service",
      dataIndex: "activity_name",
      key: "activity_name",
      width: 200,
      render: (_, record) => {
        return (
          <h1>
            {record?.activity_one} {record?.activity_two}
          </h1>
        );
      },
      sorter: (a, b) => {
        return a.service > b.service ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "service" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cpt. Code",
      dataIndex: "cpt_code",
      key: "cpt_code",
      width: 80,
      render: (_, { cpt_code }) => {
        return <h1>{cpt_code}</h1>;
      },
      sorter: (a, b) => {
        return a.cpt_code > b.cpt_code ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt_code" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Max By",
      dataIndex: "billed_type",
      key: "billed_type",
      width: 100,
      sorter: (a, b) => {
        return a.billed_type > b.billed_type ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "max_by" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Frequency",
      dataIndex: "hours_max_per_one",
      key: "hours_max_per_one",
      width: 80,
      sorter: (a, b) => {
        return a.hours_max_per_one > b.hours_max_per_one ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours_max_per_one" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Auth",
      dataIndex: "hours_max_is_one",
      key: "hours_max_is_one",
      width: 50,
      sorter: (a, b) => {
        return a.hours_max_is_one > b.hours_max_is_one ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "hours_max_is_one" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Scheduled",
      dataIndex: "scheduled",
      key: "scheduled",
      width: 100,
      sorter: (a, b) => {
        return a.scheduled > b.scheduled ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "scheduled" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rendered",
      dataIndex: "Rendered",
      key: "Rendered",
      width: 100,
      sorter: (a, b) => {
        return a.Rendered > b.Rendered ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Rendered" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Remaining",
      dataIndex: "remaining",
      key: "remaining",
      width: 100,
      sorter: (a, b) => {
        return a.remaining > b.remaining ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "remaining" ? sortedInfo.order : null,
      ellipsis: false,
    },
  ];

  return (
    <div>
      <>
        <div className=" overflow-scroll py-2 px-2">
          <Table
            bordered
            rowKey={(record) => record.id}
            pagination={false}
            size="small"
            className=" text-xs font-normal "
            columns={columns}
            dataSource={authActData}
            onChange={handleChange}
            scroll={{
              y: 650,
            }}
          />
        </div>
      </>
    </div>
  );
};

export default AuthorizationActivityTable;
