import { DatePicker, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import CustomDateRange from "../../../../Shared/CustomDateRange/CustomDateRange";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiArrowLeftRightLine } from "react-icons/ri";
import useToken from "../../../../../CustomHooks/useToken";
import InsuranceMultiSelect from "./InsuranceMultiSelect/InsuranceMultiSelect";
import {
  useGetActivityProcessClaimMutation,
  useGetAllProcessClaimsMutation,
  useGetCMSProviderProcessClaimMutation,
  useGetCPTProcessClaimMutation,
  useGetDegreeLevelProcessClaimMutation,
  useGetModifireProcessClaimMutation,
  useGetPatientProcessClaimMutation,
  useGetTherapistProcessClaimMutation,
  useGetZoneProcessClaimMutation,
  usePayorByDateMutation,
} from "../../../../../features/Billing_redux/Primary_Billing_redux/processingClaimApi";
import moment from "moment";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "../../../../Pages/Settings/SettingComponents/ShimmerTableTet";
import { baseIp } from "../../../../../Misc/BaseClient";
import { DatabaseDateConverter } from "../../../../Shared/Dateconverter/DateConverter";

const ProcessingClaim = () => {
  const [insurance, setInsurance] = useState(false);
  const [insuranceSelect, setInsuranceSelect] = useState([]);
  const [toDate, settoDate] = useState(null);
  const [sortBy1, setSortBy1] = useState("");
  const [sortBy2, setSortBy2] = useState("");
  const [TData, setTData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [openSingleCalendar, setOpenSingleCalendar] = useState(false);
  const { token } = useToken();
  const [selectedSortOptionOne, setSelectedSortOptionOne] = useState(null);
  // For Multi Select Insurance
  const [selected, setSelected] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [runClick, setRunClick] = useState(false);
  const [call, setCall] = useState(false);

  console.log("selected option from sortby1", selectedSortOptionOne);

  console.log("sortBy1", sortBy1);

  //Process Claim Get Payor api
  const [PayorByDate, { data: responsePayorData, isLoading: payorLoading, isSuccess: payorSuccess }] = usePayorByDateMutation();

  //Process Claim Get Patient
  const [getPatientProcessClaim, { data: patientData, isLoading: patientDataLoading, isSuccess: patientDataSuccess }] = useGetPatientProcessClaimMutation();

  //Process Claim Get Therapist Name API
  const [getTherapistProcessClaim, { data: therapistData, isLoading: therapistLoading, isError: therapistError }] = useGetTherapistProcessClaimMutation();

  //Process Claim Get CPT CODE API
  const [getCPTProcessClaim, { data: cptCodesData, isLoading: cptLoading, isError: cptError }] = useGetCPTProcessClaimMutation();

  //Process Claim Get Activity Type
  const [getActivityProcessClaim, { data: activityData, isLoading: activityLoading, isError: activityError }] = useGetActivityProcessClaimMutation();

  //Process Claim Get Degree Level
  const [getDegreeLevelProcessClaim, { data: degreeLevelData, isLoading: degreeLevelLoading, isError: degreeLevelError }] =
    useGetDegreeLevelProcessClaimMutation();

  //Process Claim Get ZONE
  const [getZoneProcessClaim, { data: zoneData, isLoading: zoneLoading, isError: zoneError }] = useGetZoneProcessClaimMutation();

  //Process Claim Get Modifire
  const [getModifireProcessClaim, { data: modifierData, isLoading: modifireLoading, isError: modifireError }] = useGetModifireProcessClaimMutation();

  //Process Claim Get CMS Provider
  const [getCMSProviderProcessClaim, { data: cmsProviderData, isLoading: cmsProviderLoading, isError: cmsProviderError }] =
    useGetCMSProviderProcessClaimMutation();

  //Get all process claim data
  const [getAllProcessClaims, { data: allProcessClaimData, isLoading: allProcessClaimLoading, isError: allProcessClaimError }] =
    useGetAllProcessClaimsMutation();

  useEffect(() => {
    if (sortBy1 === "Patient" && insuranceSelect?.length > 0) {
      getPatientProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Tx Providers" && insuranceSelect?.length > 0) {
      getTherapistProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "CPT Code" && insuranceSelect?.length > 0) {
      getCPTProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Service Type" && insuranceSelect?.length > 0) {
      getActivityProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Degree Level" && insuranceSelect?.length > 0) {
      getDegreeLevelProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Region" && insuranceSelect?.length > 0) {
      getZoneProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Modifier" && insuranceSelect?.length > 0) {
      getModifireProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "CMS Therapist" && insuranceSelect?.length > 0) {
      getCMSProviderProcessClaim({
        token,
        payload: {
          to_date: toDate,
          insurance_ids: insuranceSelect,
        },
      });
    }
  }, [
    sortBy1,
    toDate,
    insuranceSelect,
    getActivityProcessClaim,
    getCPTProcessClaim,
    getDegreeLevelProcessClaim,
    getModifireProcessClaim,
    getPatientProcessClaim,
    getTherapistProcessClaim,
    getZoneProcessClaim,
    token,
  ]);

  let allPatients = patientData?.data || [];
  const allProviders = therapistData?.data || [];
  const allCptCodes = cptCodesData?.cpt_code || [];
  const allActivities = activityData?.activity_type || [];
  const allDegreeLevel = degreeLevelData?.degree_level || [];
  const allRegions = zoneData?.zone || [];
  const allModifire = modifierData?.modifire || [];
  const allCMSProviders = cmsProviderData?.data || [];
  console.log("allPatients", allPatients);
  console.log("allProviders", allProviders);
  console.log("allCPTCodes", allCptCodes);
  console.log("allDegreeLevel", allDegreeLevel);
  console.log("allRegions", allRegions);
  console.log("allModifire", allModifire);
  console.log("allCMSProviders", allCMSProviders);

  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  console.log("isToggled", isToggled);

  const onChange = (date, dateString) => {
    setSelected([]);
    setInsurance(false);
    setInsuranceSelect([]);
    setRunClick(false);
    console.log(date, dateString);
    settoDate(dateString);
  };

  const handleSingleClearDate = () => {
    setOpenSingleCalendar(false);
    setDate(null);
  };

  const handleSingleCancelDate = () => {
    setOpenSingleCalendar(false);
    setDate(new Date());
  };

  // table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);
  console.log(sortBy2);

  //get data from API + data fetch from api while scrolling[Important]
  useEffect(() => {
    const getProcessClaims = async () => {
      let res = await axios({
        method: "post",
        url: `${baseIp}/pri/process/claim/get/billing/data`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token,
        },
        data: {
          payor_ids: insuranceSelect,
          page: 1,
          to_date: toDate,
        },
      });
      const data = res?.data?.processClaims?.data;
      setStaffData(data);
    };
    if (insuranceSelect?.length > 0 && toDate && runClick) {
      getProcessClaims();
    }
  }, [token, call, runClick]);
  console.log("This is satff data of first page", staffData);

  const fetchProviders = async () => {
    let res = await axios({
      method: "post",
      url: `${baseIp}/pri/process/claim/get/billing/data`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-auth-token": token,
      },
      data: {
        payor_id: insuranceSelect,
        page: page,
        to_date: toDate,
      },
    });
    const data = res?.data?.processClaims?.data;
    // console.log(data);
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

  const columns = [
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      width: 100,
      render: (_, { Patients }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Patients}</div>;
      },
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Dos",
      dataIndex: "from_time",
      key: "from_time",
      width: 90,
      render: (_, { from_time }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{DatabaseDateConverter(from_time)}</div>;
      },
      sorter: (a, b) => {
        return a.from_time > b.from_time ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "from_time" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Tx Provider",
      key: "TxProvider",
      dataIndex: "TxProvider",
      width: 80,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.TxProvider > b.TxProvider ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "TxProvider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "ServiceHrs",
      key: "ServiceHrs",
      width: 200,
      //   sorter is for sorting asc or dsc purpose
      render: (_, record) => {
        return <h1>{record?.activity_type + record?.degree_level}</h1>;
      },
      sorter: (a, b) => {
        return a.ServiceHrs > b.ServiceHrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "ServiceHrs" ? sortedInfo.order : null,
      ellipsis: false,
    },

    {
      title: "CPT",
      dataIndex: "cpt",
      key: "cpt",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.id}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.cpt > b.cpt ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "cpt" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "POS",
      dataIndex: "pos",
      key: "pos",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.pos}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "M1",
      dataIndex: "m1",
      key: "m1",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.m1}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.m1 > b.m1 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "m1" ? sortedInfo.order : null,
      ellipsis: false,
    },

    {
      title: "M2",
      dataIndex: "m2",
      key: "m2",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.m2}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.m2 > b.m2 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "m2" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "M3",
      dataIndex: "m3",
      key: "m3",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.m3}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.m3 > b.m3 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "m3" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "M4",
      dataIndex: "m4",
      key: "m4",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.m4}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.m4 > b.m4 ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "m4" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Units",
      dataIndex: "units",
      key: "units",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.units}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.units > b.units ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "units" ? sortedInfo.order : null,
      ellipsis: false,
    },

    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.rate}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.rate > b.rate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rate" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Rendering 24-j",
      dataIndex: "rate",
      key: "rate",
      width: 80,
      render: (_, record) => {
        return (
          <input
            className="page py-[3px]  focus:outline-none"
            type="text"
            defaultValue={record?.rate}
            // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          ></input>
        );
      },
      sorter: (a, b) => {
        return a.rate > b.rate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rate" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "ID Qualifier",
      dataIndex: "rate",
      key: "rate",
      width: 80,
      render: (_, record) => {
        return (
          // <input
          //   className="page py-[3px]  focus:outline-none"
          //   type="text"
          //   defaultValue={record?.rate}
          //   // onChange={(e) => handleCms1500_31(e.target.value, record?.id)}
          // ></input>
          <select className="page p-[3px]  focus:outline-none" defaultValue={record?.id_qualifier}>
            <option value=""></option>
            <option value="0B">0B</option>
            <option value="1B">1B</option>
            <option value="1C">1C</option>
            <option value="1D">1D</option>
            <option value="1G">1G</option>
            <option value="1H">1H</option>
            <option value="EI">EI</option>
            <option value="G2">G2</option>
            <option value="LU">LU</option>
            <option value="N5">N5</option>
            <option value="SY">SY</option>
            <option value="X5">X5</option>
            <option value="ZZ">ZZ</option>
          </select>
        );
      },
      sorter: (a, b) => {
        return a.rate > b.rate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rate" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Status",
      dataIndex: "rate",
      key: "rate",
      width: 80,
      render: (_, record) => {
        return <h1>Status</h1>;
      },
      sorter: (a, b) => {
        return a.rate > b.rate ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "rate" ? sortedInfo.order : null,
      ellipsis: false,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  // -------------------

  const handleGO = () => {
    setInsurance(true);
    const payload = {
      to_date: toDate,
    };
    PayorByDate({ token, payload });
    setInsuranceSelect([]);
    console.log("hello go button", toDate);
  };

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    setHasMore(true);
    setPage(2);
    // const payload = {
    //   to_date: toDate,
    //   insurance_ids: insuranceSelect,
    //   page: 1,
    // };
    // // console.log("hello go button", payload);
    // if (insuranceSelect.length > 0) {
    //   getAllProcessClaims({ token, payload });
    //   setTableOpen(true);
    // }
    //reset();
    if (insuranceSelect.length > 0) {
      setTableOpen(true);
      setRunClick(true);
    }
  };

  console.log(allProcessClaimData?.processClaims?.data);
  //Date converter function [yy-mm-dd]
  function convert(str) {
    let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  //Date Range Picker
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
  const startMonth = startDate ? startDate.toLocaleString("en-us", { month: "short" }) : null;
  const endMonth = endDate ? endDate.toLocaleString("en-us", { month: "short" }) : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate ? startDate.getFullYear().toString().slice(2, 4) : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };

  // Hide calendar on outside click
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

  // const MapingPayorbyDate =
  //   responsePayorData.length > 0 && responsePayorData.map((item) => item);
  // //end outside click
  // //end outside click
  // console.log("MapingPayorbyDate", MapingPayorbyDate);

  return (
    <div className={!tableOpen ? "h-[100vh]" : ""}>
      {/* <h1 className="text-lg text-orange-400 mb-10">Processing Claim(s)</h1> */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex items-center gap-4 flex-wrap">
            {/* <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7  mr-2 gap-6"> */}
            <div className="flex gap-2 mb-[6px]">
              <div className="">
                <label className="label">
                  <span className=" label-font">
                    To Date<span className="text-red-500">*</span>
                  </span>
                </label>

                <div className="flex items-end w-full">
                  <Space direction="vertical">
                    <DatePicker
                      autoFocus={false}
                      size="middle"
                      style={{}}
                      onChange={onChange}
                      // Disabled future Dates
                      className="input-border input-font w-full focus:outline-none border-none focus:border-none"
                      disabledDate={(current) => current.isAfter(moment())}
                    />
                  </Space>
                  {/* <AiOutlineCalendar className="ml-[-1.9px] mb-[-3px] font-semibold text-primary text-2xl" /> */}
                </div>
              </div>

              <div className="flex items-end">
                <button type="button" onClick={handleGO} className="pms-button mb-[1px]">
                  Go
                </button>
              </div>
            </div>

            {insurance && (
              <>
                {/* insurance  */}
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Insurance<span className="text-red-500">*</span>
                    </span>
                  </label>

                  <div className="mt-1">
                    <InsuranceMultiSelect
                      selected={selected}
                      setSelected={setSelected}
                      payorData={responsePayorData?.data || []}
                      payorLoading={payorLoading}
                      setInsuranceSelect={setInsuranceSelect}
                      setSortBy1={setSortBy1}
                      setRunClick={setRunClick}
                      setHasMore={setHasMore}
                      setPage={setPage}
                    />
                  </div>
                </div>
                {/* Sort By  */}
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Sort By<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select onChange={(e) => setSortBy1(e.target.value)} name="type" className="input-border input-font  focus:outline-none w-[200px]">
                    <option value={0}>Select</option>
                    <option value="Patient">Patient(s)</option>
                    <option value="Tx Providers">Tx Providers</option>
                    <option value="CMS Therapist">CMS Therapist</option>
                    <option value="Service Type">Service Type</option>
                    <option value="Claim Status">Claim Status</option>
                    <option value="Date Range">Date Range</option>
                    <option value="Degree Level">Degree Level</option>
                    <option value="Region">Region</option>
                    <option value="CPT Code">CPT Code</option>
                    <option value="Zero Units">Zero Units</option>
                    <option value="Place Of Service">Place Of Service</option>
                    <option value="Modifier">Modifier</option>
                  </select>
                </div>
                {/* First Sort By */}
                {sortBy1 && (
                  <>
                    {sortBy1 === "Date Range" && (
                      <div className="w-[220px]">
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <div className="ml-1">
                          <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                            <input
                              value={startDate ? `${startMonth} ${startDay}, ${startYear}` : "Start Date"}
                              readOnly
                              onClick={() => setOpenCalendar(true)}
                              className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                            />
                            <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                            <input
                              value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
                              readOnly
                              onClick={() => setOpenCalendar(true)}
                              className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                            />
                          </div>
                          {/* Multi date picker component called */}
                          <div
                            ref={refClose}
                            className={
                              isToggled
                                ? "absolute z-10 2xl:ml-[0%] xl:ml-[-25%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
                                : "absolute z-10 2xl:ml-[0%] xl:ml-[-10%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
                            }
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
                    )}
                    {sortBy1 === "Patient" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={patientDataLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allPatients?.length > 0 && (
                            <>
                              {allPatients?.map((p) => {
                                return (
                                  <option value={p?.id} key={p?.id}>
                                    {p?.client_full_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "Tx Providers" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={therapistLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allProviders?.length > 0 && (
                            <>
                              {allProviders?.map((provider) => {
                                return (
                                  <option value={provider?.id} key={provider?.id}>
                                    {provider?.full_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "CPT Code" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={cptLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allCptCodes?.length > 0 && (
                            <>
                              {allCptCodes?.map((cpt, index) => {
                                return (
                                  <option value={cpt?.id} key={index}>
                                    {cpt?.service}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "Service Type" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={activityLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allActivities?.length > 0 && (
                            <>
                              {allActivities?.map((activity, index) => {
                                return (
                                  <option value={activity?.activity_id} key={index}>
                                    {activity?.pclm_activity_type?.activity_one}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "Degree Level" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={degreeLevelLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allDegreeLevel?.length > 0 && (
                            <>
                              {allDegreeLevel?.map((degree) => {
                                return (
                                  <option value={degree?.id} key={degree?.id}>
                                    {degree?.activity_two}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "Region" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={zoneLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allRegions?.length > 0 && (
                            <>
                              {allRegions?.map((region, index) => {
                                return (
                                  <option value={region?.zone} key={index}>
                                    {region?.zone}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "Modifier" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={modifireLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allModifire?.length > 0 && (
                            <>
                              {allModifire?.map((modifier, index) => {
                                return (
                                  <option value={modifier} key={index}>
                                    {modifier !== null ? modifier : "Empty"}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}
                    {sortBy1 === "CMS Therapist" && (
                      <div>
                        <label className="label">
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          disabled={cmsProviderLoading && true}
                          onChange={(e) => setSelectedSortOptionOne(e.target.value)}
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allCMSProviders?.length > 0 && (
                            <>
                              {allCMSProviders?.map((cms, index) => {
                                return (
                                  <option value={cms?.id} key={index}>
                                    {cms?.full_name}
                                  </option>
                                );
                              })}
                            </>
                          )}
                        </select>
                      </div>
                    )}

                    {/* SortBy2  */}
                    <div>
                      <label className="label">
                        <span className=" label-font">
                          Sort By<span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select onChange={(e) => setSortBy2(e.target.value)} name="type" className="input-border input-font focus:outline-none w-[200px] ">
                        <option value="0">Select</option>
                        <option value="Patient">Patient(s)</option>
                        <option value="Tx Providers">Tx Providers</option>
                        <option value="CMS Therapist">CMS Therapist</option>
                        <option value="Service Type">Service Type</option>
                        <option value="Claim Status">Claim Status</option>
                        <option value="Date Range">Date Range</option>
                        <option value="Degree Level">Degree Level</option>
                        <option value="Region">Region</option>
                        <option value="CPT Code">CPT Code</option>
                        <option value="Zero Units">Zero Units</option>
                        <option value="Place Of Service">Place Of Service</option>
                        <option value="Modifier">Modifier</option>
                      </select>
                    </div>
                    {sortBy2 && (
                      <>
                        {sortBy2 === "Date Range" ? (
                          <div className="w-[220px]">
                            <label className="label">
                              <span className=" label-font">{sortBy2}</span>
                            </label>
                            <div className="ml-1">
                              <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                                <input
                                  value={startDate ? `${startMonth} ${startDay}, ${startYear}` : "Start Date"}
                                  readOnly
                                  onClick={() => setOpenCalendar(true)}
                                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                                />
                                <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                                <input
                                  value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
                                  readOnly
                                  onClick={() => setOpenCalendar(true)}
                                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                                />
                              </div>

                              {/* Multi date picker component called */}
                              <div ref={refClose} className="absolute z-10 2xl:ml-[0%] xl:ml-[0%] lg:ml-[0%] md:ml-[-30%]  md:mr-[10%] sm:mr-[14%] mt-1 ">
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
                        ) : (
                          <div>
                            <label className="label">
                              <span className=" label-font">{sortBy2}</span>
                            </label>
                            <select
                              // onChange={(e) => setInsuranceSelect(e.target.value)}
                              name="type"
                              className="input-border input-font w-full focus:outline-none "
                            >
                              <option value="all">All</option>
                              <option value="patient">Patient</option>
                              <option value="provider">Provider</option>
                            </select>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
                {/* submit  */}
                <div className="flex mt-6 gap-2">
                  <button className="pms-button" type="submit">
                    Run
                  </button>
                  <button className="pms-close-button" type="button">
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      {tableOpen && (
        <div className="my-5">
          <div className="overflow-scroll">
            <InfiniteScroll
              dataLength={staffData?.length}
              next={staffData?.length > 0 && fetchData}
              hasMore={hasMore}
              loader={<ShimmerTableTet></ShimmerTableTet>}
            >
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className=" text-xs font-normal mt-5"
                columns={columns}
                dataSource={staffData}
                rowSelection={{
                  ...rowSelection,
                }}
                // scroll={{
                //   y: 750,
                // }}
                onChange={handleChange}
              />
            </InfiniteScroll>
          </div>
        </div>
      )}
      <>
        {tableOpen && (
          <div className="flex my-5">
            <select
              // onChange={(e) => setSelect(e.target.value)}
              className=" bg-transparent border-[1px] border-[#8cd9e4]  rounded-[4px] px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0"
            >
              <option value="">Select Action</option>
              <option value="1">Ready to Bill</option>
              <option value="2">Clarification Pending</option>
              <option value="3">Retract</option>
              <option value="4">Non-billable Serv.</option>
              <option value="5">24J Provider Update</option>
              <option value="6">Update ID Qual</option>
              <option value="7">Modifier Update</option>
              <option value="9">Update Charge Amount</option>
              <option value="11">Add CPT Codes</option>
              <option value="12">Update Tx. Provider as 24J</option>
              <option value="13">Update 24J to Practice NPI</option>
              <option value="14">Update POS</option>
              <option value="15">Update Tele MOD</option>
              <option value="16">Gnerate Batch</option>
            </select>
            {/* {select === "1" && (
            <div className="flex gap-2">
              <input
                onChange={(e) => setHourlyRate(e.target.value)}
                className="ml-4 bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0 font-bold"
                defaultValue={hourlyRate}
                type="text"
                placeholder="Hourly Rate"
              />
              <input
                onChange={(e) => setMilageRate(e.target.value)}
                className="ml-4 bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0 font-bold"
                type="text"
                defaultValue={milageRate}
                placeholder="Milage Rate"
              />
            </div>
          )}
          {select === "2" && (
            <input
              onChange={(e) => setHourlyRate(e.target.value)}
              className="ml-4 bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0 font-bold"
              type="text"
              defaultValue={hourlyRate}
              placeholder="Hourly Rate"
            />
          )}
          {select === "3" && (
            <input
              onChange={(e) => setMilageRate(e.target.value)}
              className="ml-4 bg-transparent border-b-[2px] border-[#34A7B8]  rounded-sm px-[2px] py-[3px] mx-1 text-[14px]  focus:outline-none z-0 font-bold"
              type="text"
              defaultValue={milageRate}
              placeholder="Milage Rate"
            />
          )} */}
            <button className="pms-input-button">save</button>
          </div>
        )}
      </>
    </div>
  );
};

export default ProcessingClaim;
