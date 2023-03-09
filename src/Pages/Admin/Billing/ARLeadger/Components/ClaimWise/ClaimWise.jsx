import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { Switch, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import CustomDateRange from "../../../../../Shared/CustomDateRange/CustomDateRange";
import { BiCommentDetail } from "react-icons/bi";
import ClaimWiseActionModal from "./ClaimWiseActionModal";
import {
  useBulkNoteSaveMutation,
  useGetLedgerCPTMutation,
  useGetLedgerPatientsMutation,
  useGetLedgerPayorMutation,
} from "../../../../../../features/Billing_redux/AR_Ledger_redux/ledgerApi";
import useToken from "../../../../../../CustomHooks/useToken";
import PatientMultiSelect from "../PatientMultiSelect/PatientMultiSelect";
import PayorMultiSelect from "../PatientMultiSelect/PayorMultiSelect";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { toast } from "react-toastify";
import AddNote from "../AddNote/AddNote";

//Date converter function [yy-mm-dd]
function convert(str) {
  let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
// To Convert Date YY/MM/DD(2022-10-21) to MM/DD/YY
const dateConverter = (date) => {
  const afterSplit = date?.split("-");
  //console.log(afterSplit);
  if (afterSplit?.length > 0) {
    return `${afterSplit[1]}/${afterSplit[2]}/${afterSplit[0]}`;
  }
};

const ClaimWise = () => {
  const [selected, setSelected] = useState("patient");
  const [clientIds, setClientIds] = useState([]);
  const [insuranceIds, setInsuranceIds] = useState([]);
  const [table, setTable] = useState(false);
  const [value, setValue] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const { Text } = Typography;
  const [record, setRecord] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  // For infine scroll
  const [ledgerData, setLedgerData] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);
  const [lastPageNo, setLastPageNo] = useState(0);
  const [formData, setFormData] = useState(null);
  // const [selectedRowId, setSelectedRowId] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const { token } = useToken();

  console.log("selected option", selected);
  console.log("selected Patient ids", clientIds);
  console.log("selected Insurance ids", insuranceIds);

  // Ledger Get Patients API
  const [getLedgerPatients, { data: patients, isLoading: patientsLoading }] =
    useGetLedgerPatientsMutation();

  //Ledger Get Payor API
  const [getLedgerPayor, { data: payors, isLoading: payorLoading }] =
    useGetLedgerPayorMutation();

  //Ledger Get CPT Code API
  const [getLedgerCPT, { data: cptCodes, isLoading: cptLoading }] =
    useGetLedgerCPTMutation();

  useEffect(() => {
    if (selected === "patient") {
      getLedgerPatients(token);
      getLedgerCPT(token);
      getLedgerPayor(token);
    }
  }, [selected, token, getLedgerPatients, getLedgerPayor, getLedgerCPT]);

  const allPatients = patients?.clients || [];
  const allPayor = payors?.clients || [];
  const allCPT = cptCodes?.cpt_code || [];

  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const column = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <Link
              className="font-normal text-secondary"
              to={"/admin/patient-List"}
            >
              {record?.ledger_client?.client_full_name}
            </Link>
          </div>
        );
      },
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Payor",
      dataIndex: "payor",
      key: "payor",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <h1>
              {allPayor?.find((p) => p?.payor_id === record?.payor_id)
                ?.payor_name || "-"}
            </h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.payor > b.payor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "payor" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "DOS",
      key: "dos",
      dataIndex: "dos",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <h1>{dateConverter(record?.ledger_process_clm?.schedule_date)}</h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.dos > b.dos ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "dos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CPT",
      key: "cpt",
      dataIndex: "cpt",
      width: 80,
      render: (_, record) => {
        return (
          <div>
            <h1>{record?.ledger_process_clm?.cpt}</h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.cpt > b.cpt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Unit",
      key: "unit",
      dataIndex: "unit",
      width: 70,
      render: (_, record) => {
        return (
          <div>
            <h1>{record?.ledger_process_clm?.units_value_calc}</h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.unit > b.unit ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "unit" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date Billed",
      key: "date_billed",
      dataIndex: "date_billed",
      width: 120,
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.date_billed > b.date_billed ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "date_billed" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Allwd.$",
      key: "allowed_amount",
      dataIndex: "allowed_amount",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <h1>
              {record?.lreport_dep_payment?.length > 0
                ? parseFloat(record?.lreport_dep_payment[0]?.amount)?.toFixed(2)
                : (
                    parseFloat(record?.ledger_process_clm?.rate) *
                    parseFloat(record?.ledger_process_clm?.units)
                  )?.toFixed(2)}
            </h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.allowed_amount > b.allowed_amount ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "allowed_amount" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Paid",
      key: "paid",
      dataIndex: "paid",
      width: 70,
      render: (_, record) => {
        let result = record?.lreport_dep_payment?.map((each) => each?.payment);
        let sum = 0;
        for (let i = 0; i < result?.length; i++) {
          sum += parseFloat(result[i]);
        }
        return (
          <div className="text-center">
            {record?.lreport_dep_payment?.length > 0
              ? sum?.toFixed(2)
              : 0?.toFixed(2)}
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.paid > b.paid ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "paid" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Adj",
      key: "adj",
      dataIndex: "adj",
      width: 70,
      render: (_, record) => {
        return (
          <div className="text-center">
            {record?.lreport_dep_payment?.length > 0
              ? parseFloat(record?.lreport_dep_payment[0]?.adjustment)?.toFixed(
                  2
                )
              : 0?.toFixed(2)}
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.adj > b.adj ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "adj" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Balance",
      key: "balance",
      dataIndex: "balance",
      width: 70,
      render: (_, record) => {
        return (
          <div className="text-center">
            {record?.lreport_dep_payment?.length > 0
              ? parseFloat(record?.lreport_dep_payment[0]?.balance)?.toFixed(2)
              : (
                  parseFloat(record?.ledger_process_clm?.rate) *
                  parseFloat(record?.ledger_process_clm?.units)
                )?.toFixed(2)}
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.balance > b.balance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "balance" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Claim No",
      key: "claim_no",
      dataIndex: "claim_no",
      width: 80,
      render: (_, record) => {
        return (
          <div>
            <h1 className="text-secondary">
              {record?.lreport_mclam?.claim_id}
            </h1>
          </div>
        );
      },
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.claim_no > b.claim_no ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "claim_no" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "NT",
      key: "nt",
      dataIndex: "nt",
      width: 60,
      filters: [{}],
      filteredValue: filteredInfo.nt || null,
      onFilter: (value, record) => record.nt.includes(value),
      //   sorter is for sorting asc or dsc purcpte
      sorter: (a, b) => {
        return a.nt > b.nt ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "nt" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { nt }) => {
        return (
          <div className="mx-auto">
            {nt === true ? (
              <span className="font-normal flex justify-center items-center text-green-600">
                <BsFileEarmarkPlusFill />
              </span>
            ) : (
              <span className="font-normal flex justify-center items-center text-gray-500">
                <BsFileEarmarkPlusFill />
              </span>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 90,
      render: (_, record) => {
        return (
          <>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => {
                  handleClickOpen();
                  setRecord(record);
                }}
                className="text-sm mx-1 text-secondary"
              >
                <BiCommentDetail />
              </button>
            </div>
          </>
        );
      },
    },
  ];

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selected row-keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  //-----------Date Range Picker-----------------
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;

  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click

  //----------Date Range Picker Code End------------------

  // Ledger Bulk Note Save
  const [bulkNoteSave, { data: bulkNoteData, isSuccess: singleNoteSucceed }] =
    useBulkNoteSaveMutation();
  console.log(bulkNoteData);
  useEffect(() => {
    if (singleNoteSucceed === true) {
      sethasMore(true);
      setpage(2);
    }
  }, [singleNoteSucceed]);

  //get data from API + data fetch from api while scrolling[Important]
  //While 1st render page=1 data will be rendered
  useEffect(() => {
    const getLedgerData = async () => {
      const res = await axios({
        method: "POST",
        url: `https://test-prod.therapypms.com/api/v1/admin/ac/ledger/list?page=1`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token ? token : null,
        },
        data: formData,
      });
      const data = res.data?.ledger_list?.data;
      console.log("1st render data", data);
      setLedgerData(data);
      setLastPageNo(res.data?.ledger_list?.last_page);
    };
    if (
      formData?.client_id?.length > 0 ||
      formData?.all_insurance?.length > 0 ||
      formData?.claim_no
    ) {
      getLedgerData();
    }
  }, [token, formData, singleNoteSucceed]);

  const fetchLedger = async () => {
    const res = await axios({
      method: "POST",
      url: `https://test-prod.therapypms.com/api/v1/admin/ac/ledger/list?page=${page}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token ? token : null,
      },
      data: formData,
    });
    const data = res.data?.ledger_list?.data;
    console.log("scroll render data", data);
    return data;
  };

  const fetchData = async () => {
    const patientsFromServer = await fetchLedger();
    console.log(patientsFromServer);
    setLedgerData([...ledgerData, ...patientsFromServer]);
    if (patientsFromServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  //----------React Hook Form Part--------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });

  const onSubmit = (data) => {
    setSelect(false);
    const from_date = convert(data?.start_date);
    const to_date = convert(data?.end_date);
    const payLoad = {
      sort_by: selected === "patient" ? 2 : selected === "insurance" ? 3 : 1,
      claim_no: data?.claim_no,
      client_id: clientIds,
      all_insurance: insuranceIds,
      // payor_id,
      // cpt,
      // fil_cat_name,
      claim_check: 1,
      reportrange: selected === "claim_no" ? "" : `${from_date} - ${to_date}`,
    };
    console.log(payLoad);

    if (to_date === "NaN-aN-aN" && selected !== "claim_no") {
      toast.error(<h1 className="font-bold">Select Valid Date-Range</h1>, {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    } else if (payLoad?.claim_no === "" && selected === "claim_no") {
      toast.error(<h1>Please Enter Claim No.</h1>, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else if (payLoad?.client_id?.length === 0 && selected === "patient") {
      toast.error(<h1>Please Select Valid Client</h1>, {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } else {
      setTable(true);
      setFormData(payLoad);
      setLedgerData([]);
      setpage(2);
      sethasMore(true);
    }
  };
  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: startDate ? `${startMonth} ${startDay}, ${startYear}` : "",
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date",
        claim_no: "",
      });
    }, 0);
  }, [
    startDate,
    startMonth,
    startDay,
    startYear,
    endDate,
    endMonth,
    endDay,
    endYear,
    reset,
  ]);

  const [select, setSelect] = useState(false);
  const [optionSelect, setOptionSelect] = useState("");
  const handleAction = () => {
    // console.log(optionSelect);
    setSelect(!select);
  };

  // useEffect(()=>{

  // },[])
  return (
    <div className={!table || ledgerData.length < 10 ? "h-[170vh]" : ""}>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-2"
          style={{
            transition: "all .3s ease-out",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lg my-2 text-orange-500">AR Ledger</h1>
            <div className=" flex items-center gap-4 flex-wrap">
              {/* name  */}
              <div className="">
                <label className="label">
                  <span className=" label-font">Sort by</span>
                </label>
                <select
                  onChange={(e) => setSelected(e.target.value)}
                  name="post"
                  className="input-border input-font md:w-full w-[200px] focus:outline-none"
                >
                  <option value="patient">Patient</option>
                  <option value="claim_no">Claim No</option>
                  <option value="insurance">Insurance</option>
                </select>
              </div>
              {selected === "claim_no" ? (
                <>
                  <div className="">
                    <label className="label">
                      <span className=" label-font">Claim No</span>
                    </label>
                    <input
                      type="string"
                      name="check"
                      placeholder={"Claim No"}
                      className="input-border input-font w-[100px] focus:outline-none"
                      {...register("claim_no")}
                    />
                  </div>
                </>
              ) : selected === "patient" ? (
                <>
                  <div>
                    <label className="label">
                      <span className=" label-font">Patients</span>
                    </label>
                    <div className="py-[2px] mx-1">
                      <PatientMultiSelect
                        allPatients={allPatients}
                        setClientIds={setClientIds}
                        patientsLoading={patientsLoading}
                      />
                    </div>
                  </div>
                  <div className="w-[200px]">
                    <div>
                      <label className="label">
                        <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                          Selected date
                        </span>
                      </label>
                      <div className="">
                        <div className="flex  justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                          <input
                            value={
                              startDate
                                ? `${startMonth} ${startDay}, ${startYear}`
                                : `Start Date`
                            }
                            readOnly
                            onClick={() => setOpenCalendar(true)}
                            {...register("start_date")}
                            className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-2/5 cursor-pointer"
                          />
                          <RiArrowLeftRightLine
                            onClick={() => setOpenCalendar(true)}
                            className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium w-1/5"
                          ></RiArrowLeftRightLine>
                          <input
                            // defaultValue={"5-10-2034"}
                            value={
                              endDate
                                ? `${endMonth} ${endDay}, ${endYear}`
                                : `End Date`
                            }
                            readOnly
                            onClick={() => setOpenCalendar(true)}
                            {...register("end_date")}
                            className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-2/5 cursor-pointer"
                          />
                        </div>

                        {/* Multi date picker component called */}
                        <div
                          ref={refClose}
                          // className="absolute z-10 md:ml-[-20%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s "
                          className="absolute z-10 lg:ml-[0%] md:ml-[-30%] mt-1"
                        >
                          {openCalendar && (
                            <CustomDateRange
                              range={range}
                              setRange={setRange}
                              handleCancelDate={handleCancelDate}
                              setOpen={setOpenCalendar}
                            ></CustomDateRange>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    {/* CPT Code  */}
                    <div>
                      <label className="label">
                        <span className=" label-font">CPT Code</span>
                      </label>
                      <select
                        disabled={cptLoading && true}
                        className="input-border input-font w-full focus:outline-none"
                        {...register("CPT_Code")}
                      >
                        <option value="0">Select</option>
                        {allCPT?.map((cpt) => {
                          return (
                            <>
                              <option value={cpt?.cpt_code}>
                                {cpt?.cpt_code}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                    {/*Aging Status  */}
                    <div>
                      <label className="label">
                        <span className=" label-font">Aging Status</span>
                      </label>
                      <select
                        className="input-border input-font w-full focus:outline-none"
                        {...register("aging_status")}
                      >
                        <option value="name">EFT</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                // Insurance Option Part
                <>
                  <div>
                    <label className="label">
                      <span className=" label-font">Insurance</span>
                    </label>
                    <div className="py-[2px]">
                      <PayorMultiSelect
                        allInsurance={allPayor}
                        setInsuranceIds={setInsuranceIds}
                        insuranceLoading={payorLoading}
                      />
                    </div>
                  </div>
                  <div className="w-[220px]">
                    <div>
                      <label className="label">
                        <span className="label-text text-[15px] font-medium text-[#9b9b9b] text-left">
                          Selected date
                        </span>
                      </label>
                      <div className="ml-1">
                        <div className="flex  justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                          <input
                            value={
                              startDate
                                ? `${startMonth} ${startDay}, ${startYear}`
                                : `Start Date`
                            }
                            readOnly
                            onClick={() => setOpenCalendar(true)}
                            // {...register("start_date")}
                            className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-2/5 cursor-pointer"
                          />
                          <RiArrowLeftRightLine
                            onClick={() => setOpenCalendar(true)}
                            className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium w-1/5"
                          ></RiArrowLeftRightLine>
                          <input
                            // defaultValue={"5-10-2034"}
                            value={
                              endDate
                                ? `${endMonth} ${endDay}, ${endYear}`
                                : `End Date`
                            }
                            readOnly
                            onClick={() => setOpenCalendar(true)}
                            // {...register("end_date")}
                            className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-2/5 cursor-pointer"
                          />
                        </div>

                        {/* Multi date picker component called */}
                        <div
                          ref={refClose}
                          // className="absolute z-10 md:ml-[-9%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s "
                          className="absolute z-10 lg:ml-[0%] md:ml-[-30%] mt-1"
                        >
                          {openCalendar && (
                            <CustomDateRange
                              range={range}
                              setRange={setRange}
                              handleCancelDate={handleCancelDate}
                              setOpen={setOpenCalendar}
                            ></CustomDateRange>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Zero Paid btn was here */}
                </>
              )}
              <div className="flex items-center gap-2">
                <div className="flex mt-8 items-center ">
                  <Switch
                    size="small"
                    checked={value ? true : false}
                    onClick={() => setValue(!value)}
                  />
                  <span className="text-[14px] font-medium text-gray-500 mx-1">
                    Zero Paid
                  </span>
                </div>
                {/* submit  */}
                <button className="pms-input-button mt-6" type="submit">
                  View
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      {table && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>

          <div className=" overflow-scroll py-3">
            <InfiniteScroll
              dataLength={ledgerData.length} //items is basically all data here
              next={ledgerData?.length > 0 && lastPageNo > 1 && fetchData} //This condition is mendatory for perfectly working with infinite scrolling
              hasMore={hasMore}
              loader={lastPageNo > 1 && <ShimmerTableTet></ShimmerTableTet>}
            >
              <Table
                rowKey={(record) => record.id}
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                bordered
                className=" text-xs font-normal "
                columns={column}
                dataSource={ledgerData}
                rowSelection={rowSelection}
                // scroll={{
                //   y: 700,
                // }}
                onChange={handleChange}
                summary={(pageData) => {
                  let totalAllowed = 0;
                  let totalPaid = 0;
                  let totalBalance = 0;
                  let totalAdj = 0;
                  pageData.forEach(
                    ({ lreport_dep_payment, ledger_process_clm }) => {
                      let presentBalance;
                      if (lreport_dep_payment?.length > 0) {
                        presentBalance = parseFloat(
                          lreport_dep_payment[0]?.balance
                        );
                      } else {
                        presentBalance =
                          parseFloat(ledger_process_clm?.rate) *
                          parseFloat(ledger_process_clm?.units);
                      }

                      let presentAdj;
                      if (lreport_dep_payment?.length > 0) {
                        presentAdj = parseFloat(
                          lreport_dep_payment[0]?.adjustment
                        );
                      } else {
                        presentAdj = 0;
                      }

                      let presentPaid;
                      if (lreport_dep_payment?.length > 0) {
                        presentPaid = parseFloat(
                          lreport_dep_payment[0]?.payment
                        );
                      } else {
                        presentPaid = 0;
                      }

                      let presentAllwd;
                      if (lreport_dep_payment > 0) {
                        presentAllwd = parseFloat(
                          lreport_dep_payment[0]?.amount
                        );
                      } else {
                        presentAllwd =
                          parseFloat(ledger_process_clm?.rate) *
                          parseFloat(ledger_process_clm?.units);
                      }
                      totalAllowed += parseFloat(presentAllwd);
                      totalPaid += parseFloat(presentPaid);
                      totalAdj = parseFloat(totalAdj) + parseFloat(presentAdj);
                      totalBalance = parseFloat(totalBalance) + presentBalance;
                    }
                  );
                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell index={2} colSpan={7}>
                          <span className="text-black font-bold flex justify-end mx-5 ">
                            {" "}
                            Total
                          </span>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={8}>
                          <Text className="text-black font-bold flex justify-center">
                            {totalAllowed?.toFixed(2)}
                          </Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={6}>
                          <Text className="text-black font-bold flex justify-center">
                            {totalPaid?.toFixed(2)}
                          </Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={6}>
                          <Text className="text-black font-bold flex justify-center">
                            {totalAdj?.toFixed(2)}
                          </Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={6}>
                          <Text className="text-black font-bold flex justify-center">
                            {totalBalance?.toFixed(2)}
                          </Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell
                          index={2}
                          colSpan={3}
                        ></Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
                  );
                }}
              />
            </InfiniteScroll>
          </div>

          <div className="flex item-center flex-wrap my-5">
            <div>
              <select
                onChange={(e) => setOptionSelect(e.target.value)}
                name="Option"
                className="modal-input-field ml-1"
              >
                <option value="" className="text-black">
                  Select
                </option>
                <option value="add-note" className="text-black">
                  Add Note
                </option>
              </select>
            </div>
            <button onClick={handleAction} className="pms-button mx-2">
              Go
            </button>
          </div>
          {select && (
            <>
              {optionSelect === "add-note" && (
                <AddNote
                  bulkNoteSave={bulkNoteSave}
                  selectedRowId={selectedRowKeys}
                ></AddNote>
              )}
            </>
          )}
        </div>
      )}
      {openEditModal && (
        <ClaimWiseActionModal
          record={record}
          handleClose={handleClose}
          open={openEditModal}
        ></ClaimWiseActionModal>
      )}
    </div>
  );
};

export default ClaimWise;
