import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GiPlainCircle } from "react-icons/gi";
import { Link, useNavigate, useParams } from "react-router-dom";
import useToken from "../../../../../CustomHooks/useToken";
import Loading from "../../../../../Loading/Loading";
import SelectContactRate from "./AuthorizationActivityModal/SelectContactRate";
import AuthorizationEditModal from "./AuthorizationActivityModal/AuthorizationEditModal";
import { toast } from "react-toastify";
import axios from "axios";
import { providerIp } from "../../../../../Misc/BaseClient";
import { dateConverter } from "../../../../Shared/Dateconverter/DateConverter";
import AuthorizationActivityTable from "./AuthorizationActivityTable/AuthorizationActivityTable";

const ProviderPatientAuthorization = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectContact, setSelectContact] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  //row expand code related
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  const [clientAuthorizationData, setClientAuthorizationData] = useState({});
  const [authorizationloading, setAuthorizationLoading] = useState(false);
  //const [open, setOpen] = useState(false);
  const { token } = useToken();
  const { id } = useParams();

  //Get Patient Authorization List
  useEffect(() => {
    const getAuthData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/patients/get/patient/auth/list`,
        headers: {
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: {
          patient_id: id,
        },
      });
      const result = res?.data;
      setClientAuthorizationData(result);
    };
    if (id) {
      getAuthData();
    }
  }, [id, token]);
  console.log("data from the backend", clientAuthorizationData);

  const authData = clientAuthorizationData?.allAuthorization || [];
  const clientSelectedPayors = clientAuthorizationData?.selectedPayors || [];

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
      sorter: (a, b) => {
        return a.description > b.description ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "description" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Onset Date",
      dataIndex: "onset_date",
      key: "onset_date",
      width: 100,
      render: (_, { onset_date }) => {
        return <h1>{dateConverter(onset_date)}</h1>;
      },
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.onset_date > b.onset_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "onset_date" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      width: 100,
      render: (_, { end_date }) => {
        return <h1>{dateConverter(end_date)}</h1>;
      },

      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.end_date > b.end_date ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "end_date" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
      width: 150,
      render: (_, record) => {
        return <h1>{clientSelectedPayors?.find((payor) => payor?.payor_id === record?.payor_id)?.payor_name}</h1>;
      },
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
      width: 150,
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
      width: 150,
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.authorization_number > b.authorization_number ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "authorization_number" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "COB",
      dataIndex: "is_primary",
      key: "is_primary",
      width: 100,
      render: (_, { is_primary }) => {
        if (is_primary === 1) {
          return <h1 className="text-green-600">Primary</h1>;
        } else if (is_primary === 2) {
          return <h1 className="text-red-600">Secondary</h1>;
        } else if (is_primary === 3) {
          return <h1>Tertiary</h1>;
        }
      },
      //   sorter is for sorting asc or dsc purstatuse
      sorter: (a, b) => {
        return a.is_primary > b.is_primary ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "is_primary" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 100,
      render: (_, { is_primary }) => {
        return (
          <>
            {is_primary === 1 ? (
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
      <div className="h-[100%]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h1 className="text-[14px] font-semibold">Authorizations List</h1>
        </div>

        <div className=" overflow-scroll ">
          {!authorizationloading ? (
            <Table
              bordered
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are
              size="small"
              className=" text-xs font-normal table-striped-rows"
              columns={columns}
              dataSource={authData}
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
      </div>
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

export default ProviderPatientAuthorization;
