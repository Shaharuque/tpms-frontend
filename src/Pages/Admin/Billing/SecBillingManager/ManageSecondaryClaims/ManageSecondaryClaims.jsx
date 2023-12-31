import { DatePicker, Dropdown, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiDownload } from "react-icons/fi";
import ManageClaimsTableAction from "../../BillingManager/ManageClaims/ManageClaimAction/ManageClaimsTableAction";
import {
  useGet24jProviderManageClaimMutation,
  useGetManageClaimActivityMutation,
  useGetPayorManageClaimMutation,
  useGetTxProviderManageClaimMutation,
} from "../../../../../features/Billing_redux/Primary_Billing_redux/manageClaimApi";
import { useToken } from "antd/es/theme/internal";
import { BsThreeDots } from "react-icons/bs";

const ManageSecondaryClaims = () => {
  const [active, setActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [tActive, setTActive] = useState(false);
  const [select, setSelect] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sort_By, setSort_By] = useState("");
  const [selectedSortOptionOne, setSelectedSortOptionOne] = useState(null);
  const [ManageClimbsData, SetManageClimbsData] = useState([]);
  const { handleSubmit, register, reset } = useForm();
  // table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { token } = useToken();

  console.log("selected sorted option one", selectedSortOptionOne);

  //Manage Claim Get Payor
  const [getPayorManageClaim, { data: payorData, isLoading: payorLoading }] =
    useGetPayorManageClaimMutation();

  //Manage Claim Get TX Provider
  const [
    getTxProviderManageClaim,
    { data: txProviderData, isLoading: txProviderLoading },
  ] = useGetTxProviderManageClaimMutation();

  //Manage Claim Get CMS Provider(24J)
  const [
    get24jProviderManageClaim,
    { data: CMSProviderData, isLoading: CMSProviderLoading },
  ] = useGet24jProviderManageClaimMutation();

  //Manage Claim Get Activity Type
  const [
    getManageClaimActivity,
    { data: activityData, isLoading: activityLoading },
  ] = useGetManageClaimActivityMutation();

  // API calling Based on the selected option by SortBy
  useEffect(() => {
    if (sortBy === "Insurance") {
      getPayorManageClaim(token);
    }
    if (sortBy === "Tx Provider") {
      getTxProviderManageClaim(token);
    }
    if (sortBy === "24J Provider") {
      get24jProviderManageClaim(token);
    }
    if (sortBy === "Service Type") {
      getManageClaimActivity(token);
    }
  }, [sortBy, token]);

  const allInsurance = payorData?.payors || [];
  const allCMSProvider = CMSProviderData?.cms_provider || [];
  const allActivity = activityData?.activity_type || [];

  const onSubmit = (data) => {
    // console.log(data);
    setTActive(true);
    reset();
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const handleSort_By = (e) => {
    setSort_By(e.target.value);
    setNextActive(true);
  };

  // fakedb call
  useEffect(() => {
    axios("../../All_Fake_Api/ManageClimbs.json")
      .then((response) => {
        SetManageClimbsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      title: "Claim",
      dataIndex: "claim",
      key: "claim",
      width: 50,
      render: (_, { claim }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{claim}</div>;
      },
      sorter: (a, b) => {
        return a.claim > b.claim ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "claim" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Payor",
      dataIndex: "claim_info",
      key: "claim_info",
      width: 70,
      render: (_, { claim_info }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{claim_info}</div>;
      },
      sorter: (a, b) => {
        return a.claim_info > b.claim_info ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 50,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Date Range",
      key: "date_range",
      dataIndex: "date_range",
      width: 50,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.date_range > b.date_range ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "date_range" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 50,
      sorter: (a, b) => {
        return a.total > b.total ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder: sortedInfo.columnKey === "total" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "F.Billed Dt.",
      dataIndex: "F_billed",
      key: "F_billed",
      width: 50,
      sorter: (a, b) => {
        return a.F_billed > b.F_billed ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "F_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "L.Billed Dt.",
      key: "L_billed",
      dataIndex: "L_billed",
      width: 50,
      sorter: (a, b) => {
        return a.L_billed > b.L_billed ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "L_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Action",
      key: "M2",
      dataIndex: "M2",
      width: 50,
      sorter: (a, b) => {
        return a.M2 > b.M2 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M2" ? sortedInfo.order : null,
      ellipsis: true,

      render: (_, { id }) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={<ManageClaimsTableAction></ManageClaimsTableAction>}
            trigger={["click"]}
            overlayStyle={{ zIndex: "100" }}
          >
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <BsThreeDots />
              </Space>
            </button>
          </Dropdown>
        </div>
      ),
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  //

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
    <div className={!tActive ? "h-[100vh]" : ""}>
      {/* <h1 className="text-lg text-orange-400">Manage Claim(s)</h1> */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-end justify-between">
            <div className=" flex items-center gap-4 flex-wrap">
              {/* Sort By  */}
              <div>
                <label className="label">
                  <span className=" label-font">Sort By</span>
                </label>
                <select
                  onChange={handleSortBy}
                  name="type"
                  className="input-border input-font md:w-full w-[200px] focus:outline-none"
                >
                  <option value=""></option>
                  <option value="Batch">Batch</option>
                  <option value="Claim">Claim</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Patients">Patients</option>
                  <option value="Tx Provider">Tx Provider</option>
                  <option value="24J Provider">24J Provider</option>
                  <option value="Service Type">Service Type</option>
                  <option value="Date Range">Date Range</option>
                  <option value="Date of Submission">Date of Submission</option>
                </select>
              </div>
              {active && (
                <>
                  {" "}
                  {/* Sort By-1 */}
                  <div>
                    <label className="label">
                      <span className=" label-font">{sortBy}</span>
                    </label>
                    <select
                      disabled={
                        payorLoading ||
                        txProviderLoading ||
                        CMSProviderLoading ||
                        activityLoading
                          ? true
                          : false
                      }
                      onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                      name="type"
                      className="input-border input-font md:w-full w-[200px] focus:outline-none"
                    >
                      {sortBy === "Insurance" && (
                        <>
                          <option value="0">Select</option>
                          {allInsurance?.length > 0 && (
                            <>
                              {allInsurance?.map((ins) => {
                                return (
                                  <option value={ins?.payor_id} key={ins?.id}>
                                    {ins?.payor_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </>
                      )}
                      {sortBy === "Tx Provider" && (
                        <>
                          <option value="0">Select</option>
                          {txProviderData?.length > 0 && (
                            <>
                              {txProviderData?.map((txP) => {
                                return (
                                  <option value={txP?.id} key={txP?.id}>
                                    {txP?.full_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </>
                      )}
                      {sortBy === "24J Provider" && (
                        <>
                          <option value="0">Select</option>
                          {allCMSProvider?.length > 0 && (
                            <>
                              {allCMSProvider?.map((cmsP) => {
                                return (
                                  <option value={cmsP?.id} key={cmsP?.id}>
                                    {cmsP?.full_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </>
                      )}
                      {sortBy === "Service Type" && (
                        <>
                          <option value="0">Select</option>
                          {allActivity?.length > 0 && (
                            <>
                              {allActivity?.map((activity) => {
                                return (
                                  <option
                                    value={activity?.id}
                                    key={activity?.id}
                                  >
                                    {activity?.activity_one}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </>
                      )}
                    </select>
                  </div>
                  {/* Sort By-2  */}
                  <div>
                    <label className="label">
                      <span className=" label-font">Sort By</span>
                    </label>
                    <select
                      onChange={handleSort_By}
                      name="type"
                      className="input-border input-font w-full focus:outline-none"
                    >
                      <option value="all">All</option>
                      <option value="patient">Patient</option>
                      <option value="provider">Provider</option>
                    </select>
                  </div>
                  {/* Sort By  */}
                  {nextActive && (
                    <div>
                      <label className="label">
                        <span className=" label-font">{sort_By}</span>
                      </label>
                      <select
                        name="type"
                        className="input-border input-font w-full focus:outline-none"
                      >
                        <option value="all">All</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                      </select>
                    </div>
                  )}
                </>
              )}
              {/* submit  */}
              <div className="flex mt-[22px] gap-2">
                <button className="pms-button" type="submit">
                  Get Claim(s)
                </button>
                <button className="pms-close-button" type="button">
                  Cancel
                </button>
              </div>
            </div>
            {tActive && (
              <div>
                <FiDownload className="text-secondary text-lg font-bold" />
              </div>
            )}
          </div>
        </form>
      </div>
      {tActive && (
        <>
          <div className="my-5">
            {/* <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={page}
              prepareRow={prepareRow}
            ></SettingTableBox> */}
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className=" text-xs font-normal mt-5"
              columns={columns}
              dataSource={ManageClimbsData}
              rowSelection={{
                ...rowSelection,
              }}
              scroll={{
                y: 650,
              }}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-wrap items-center gap-2">
            <div>
              <select
                onChange={(e) => setSelect(e.target.value)}
                name="type"
                className="border rounded-sm px-2 w-36 py-1 text-xs "
              >
                <option value="all">All</option>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>
            <button
              className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Go
            </button>
            <button
              className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ManageSecondaryClaims;
