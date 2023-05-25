import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Dropdown, Space, Table, Switch, Typography } from "antd";
import { BsThreeDots } from "react-icons/bs";
import ManageTableAction from "../../../Appointment/ListView/ListView/ManageTableAction";
import ManageClaimsTableAction from "./ManageClaimAction/ManageClaimsTableAction";
import {
  useGet24jProviderManageClaimMutation,
  useGetBatchMutation,
  useGetManageClaimActivityMutation,
  useGetManageClaimDataMutation,
  useGetManageClaimTransactionsMutation,
  useGetPatientMutation,
  useGetPayorManageClaimMutation,
  useGetTxProviderManageClaimMutation,
} from "../../../../../features/Billing_redux/Primary_Billing_redux/manageClaimApi";
import useToken from "../../../../../CustomHooks/useToken";
import { FiDownload } from "react-icons/fi";
import ManageClaimTransactions from "./ManageClaimTransactions/ManageClaimTransactions";
import { dateConverter } from "../../../../Shared/Dateconverter/DateConverter";

const ManageClaims = () => {
  const [active, setActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [tActive, setTActive] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sort_By, setSort_By] = useState("");
  const [selectedSortOptionOne, setSelectedSortOptionOne] = useState(null);
  const { handleSubmit, register, reset } = useForm();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [go, setGo] = useState(false);
  const { token } = useToken();
  const { Text } = Typography;

  console.log("selected sort by", sortBy);
  console.log("selected sorted option one", selectedSortOptionOne);
  console.log("selected bottom option of the first table", selectOption);

  //Manage Claim Get Batch
  const [getBatch, { data: batchData, isLoading: batchLoading }] = useGetBatchMutation();

  //Manage Claim Get Payor
  const [getPayorManageClaim, { data: payorData, isLoading: payorLoading }] = useGetPayorManageClaimMutation();

  //Manage Claim Get TX Patients
  const [getPatient, { data: patientData, isLoading: patientLoading }] = useGetPatientMutation();

  //Manage Calim Get TX Provider
  const [getTxProviderManageClaim, { data: txProviderData, isLoading: txProviderLoading }] = useGetTxProviderManageClaimMutation();

  //Manage Claim Get CMS Provider(24J)
  const [get24jProviderManageClaim, { data: CMSProviderData, isLoading: CMSProviderLoading }] = useGet24jProviderManageClaimMutation();

  //Manage Claim Get Activity Type
  const [getManageClaimActivity, { data: activityData, isLoading: activityLoading }] = useGetManageClaimActivityMutation();

  //get Manage Claim List data
  const [getManageClaimData, { data: AllManageClaim, isLoading: manageClaimLoad }] = useGetManageClaimDataMutation();

  //get Manage Claim Transaction data
  const [getManageClaimTransactions, { data: manageClaimTransactionData, isLoading: manageClaimTransactionIsLoading }] =
    useGetManageClaimTransactionsMutation();

  // API calling Based on the selected option by SortBy
  useEffect(() => {
    if (sortBy === "Batch") {
      getBatch(token);
    }
    if (sortBy === "Insurance") {
      getPayorManageClaim(token);
    }
    if (sortBy === "Patients") {
      getPatient(token);
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
  }, [sortBy, token, getBatch, getPayorManageClaim, getPatient, get24jProviderManageClaim, getManageClaimActivity, getTxProviderManageClaim]);

  const allBatch = batchData?.data || [];
  const allInsurance = payorData?.payors || [];
  const allCMSProvider = CMSProviderData?.cms_provider || [];
  const allActivity = activityData?.activity_type || [];
  const allProvoider = txProviderData?.data || [];

  const onSubmit = (data) => {
    const payload = {
      batch_no: selectedSortOptionOne,
    };
    if (payload) {
      getManageClaimData({
        payload,
        token,
      });
    }
    setTActive(true);
    setGo(false);
    setSelectedRowKeys([]);
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

  const columns = [
    {
      title: "Claim",
      dataIndex: "claim_id",
      key: "claim_id",
      width: 50,
      render: (_, { claim_id }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{claim_id}</div>;
      },
      sorter: (a, b) => {
        return a.claim_id > b.claim_id ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "claim_id" ? sortedInfo.order : null,
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
      render: (_, { mngclam_patient }) => {
        return <div className=" text-secondary">{mngclam_patient?.client_full_name}</div>;
      },
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
      render: (_, record) => {
        return (
          <h1>
            {dateConverter(record?.mngclam_tran_asc[0]?.schedule_date)}-{dateConverter(record?.mngclam_tran_desc[0]?.schedule_date)}
          </h1>
        );
      },
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.date_range > b.date_range ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "date_range" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 50,
      render: (_, { mngclam_tran }) => {
        return (
          <div className=" text-secondary">
            {mngclam_tran
              ?.map((each) => {
                return each?.pri_mngclmtrn_prcclm?.rate * each?.pri_mngclmtrn_prcclm?.units;
              })
              ?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
          </div>
        );
      },
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
          <Dropdown overlay={<ManageClaimsTableAction></ManageClaimsTableAction>} trigger={["click"]} overlayStyle={{ zIndex: "100" }}>
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

  //get rows id to do some action on them
  // const onSelectChange = (newSelectedRowKeys) => {
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };
  // console.log("selected Insurance Setup : ", selectedRowKeys);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
      setSelectedRowKeys(selectedRows);
    },
  };

  const handleOkClick = () => {
    setGo(true);
    if (selectedRowKeys.length > 0) {
      const id = selectedRowKeys.map((each) => each.claim_id);
      const payload = {
        claim_id: id,
      };
      getManageClaimTransactions({
        token,
        payload,
      });
    }
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
                <select onChange={handleSortBy} name="type" className="input-border input-font w-[200px] focus:outline-none">
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
                    {sortBy === "Claim" && (
                      <input
                        type="text"
                        onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                        className="input-border input-font w-[200px] focus:outline-none"
                      />
                    )}
                    {sortBy !== "Claim" && (
                      <>
                        <select
                          disabled={payorLoading || patientLoading || CMSProviderLoading || activityLoading ? true : false}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font md:w-full w-[200px] focus:outline-none"
                        >
                          {sortBy === "Batch" && (
                            <>
                              <option value="0">Select</option>
                              {allBatch?.length > 0 && (
                                <>
                                  {allBatch?.map((b, index) => {
                                    return (
                                      <option value={b?.batch_id} key={index}>
                                        {b?.batch_id}
                                      </option>
                                    );
                                  })}
                                </>
                              )}
                            </>
                          )}
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
                          {sortBy === "Patients" && (
                            <>
                              <option value="0">Select</option>
                              {patientData?.length > 0 && (
                                <>
                                  {patientData?.map((txP) => {
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
                          {sortBy === "Tx Provider" && (
                            <>
                              <option value="0">Select</option>
                              {allProvoider?.length > 0 && (
                                <>
                                  {allProvoider?.map((txP) => {
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
                                      <option value={activity?.id} key={activity?.id}>
                                        {activity?.activity_one}
                                      </option>
                                    );
                                  })}
                                </>
                              )}
                            </>
                          )}
                        </select>
                      </>
                    )}
                  </div>
                  {/* Sort By-2  */}
                  <div>
                    <label className="label">
                      <span className=" label-font">Sort By</span>
                    </label>
                    <select onChange={handleSort_By} name="type" className="input-border input-font w-full focus:outline-none">
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
                      <select name="type" className="input-border input-font w-full focus:outline-none">
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
          <div className="my-5 overflow-scroll">
            {/* <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={page}
              prepareRow={prepareRow}
            ></SettingTableBox> */}
            <Table
              rowKey={(record) => record.id}
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={columns}
              dataSource={AllManageClaim?.data}
              rowSelection={rowSelection}
              // scroll={{
              //   y: 700,
              // }}
              onChange={handleChange}
              summary={(pageData) => {
                console.log("pageData", pageData);
                let totalAllowed = pageData?.length;
                let totalBalance = 0;
                pageData.forEach(({ mngclam_tran }) => {
                  let total;
                  if (mngclam_tran?.length > 0) {
                    total = mngclam_tran
                      ?.map((each) => {
                        return each?.pri_mngclmtrn_prcclm?.rate * each?.pri_mngclmtrn_prcclm?.units;
                      })
                      ?.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                      }, 0);
                  }
                  totalBalance = parseFloat(totalBalance) + total;
                });
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={2} colSpan={3}>
                        <span className="text-black font-bold flex justify-end mx-5 "> Total Claims</span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-center">{totalAllowed}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-center">Total Amount</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6}>
                        <Text className="text-black font-bold flex justify-center">{totalBalance?.toFixed(2)}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2} colSpan={3}></Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>
          <div className=" flex flex-wrap items-center gap-2">
            <div>
              <select onChange={(e) => setSelectOption(e.target.value)} name="type" className="border rounded-sm px-2 w-36 py-2 text-xs text-[#495057]">
                <option value=""></option>
                <option value="1">HCFA with background</option>
                <option value="2">HCFA without background</option>
                <option value="3">Push Ability SFTP</option>
                <option value="4">Show Detail(s)</option>
                <option value="5">Create Secondary Claim</option>
                <option value="6">Generate 837 File</option>
                <option value="7">Codes Bulk Update</option>
              </select>
            </div>
            <button
              className=" py-2  px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              onClick={() => handleOkClick()}
            >
              Ok
            </button>
            <button
              className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>

          {/* Show details table component called */}
          {selectOption === "4" && go && <ManageClaimTransactions allTransactions={manageClaimTransactionData}></ManageClaimTransactions>}
        </>
      )}
    </div>
  );
};

export default ManageClaims;
