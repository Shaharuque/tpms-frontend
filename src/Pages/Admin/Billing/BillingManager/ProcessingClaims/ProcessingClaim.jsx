import { DatePicker, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { Calendar } from "react-calendar";
import CustomDateRange from "../../../../Shared/CustomDateRange/CustomDateRange";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiArrowLeftRightLine } from "react-icons/ri";
import useToken from "../../../../../CustomHooks/useToken";
import InsuranceMultiSelect from "./InsuranceMultiSelect/InsuranceMultiSelect";
import {
  useGetActivityProcessClaimMutation,
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
  console.log("selected option from sortby1", selectedSortOptionOne);

  console.log("sortBy1", sortBy1);

  //Process Claim Get Payor api
  const [
    PayorByDate,
    {
      data: responsePayorData,
      isLoading: payorLoading,
      isSuccess: payorSuccess,
    },
  ] = usePayorByDateMutation();

  //Process Claim Get Patient
  const [
    getPatientProcessClaim,
    {
      data: patientData,
      isLoading: patientDataLoading,
      isSuccess: patientDataSuccess,
    },
  ] = useGetPatientProcessClaimMutation();

  //Process Claim Get Therapist Name API
  const [
    getTherapistProcessClaim,
    {
      data: therapistData,
      isLoading: therapistLoading,
      isError: therapistError,
    },
  ] = useGetTherapistProcessClaimMutation();

  //Process Claim Get CPT CODE API
  const [
    getCPTProcessClaim,
    { data: cptCodesData, isLoading: cptLoading, isError: cptError },
  ] = useGetCPTProcessClaimMutation();

  //Process Claim Get Activity Type
  const [
    getActivityProcessClaim,
    { data: activityData, isLoading: activityLoading, isError: activityError },
  ] = useGetActivityProcessClaimMutation();

  //Process Claim Get Degree Level
  const [
    getDegreeLevelProcessClaim,
    {
      data: degreeLevelData,
      isLoading: degreeLevelLoading,
      isError: degreeLevelError,
    },
  ] = useGetDegreeLevelProcessClaimMutation();

  //Process Claim Get ZONE
  const [
    getZoneProcessClaim,
    { data: zoneData, isLoading: zoneLoading, isError: zoneError },
  ] = useGetZoneProcessClaimMutation();

  //Process Claim Get Modifire
  const [
    getModifireProcessClaim,
    { data: modifierData, isLoading: modifireLoading, isError: modifireError },
  ] = useGetModifireProcessClaimMutation();

  //Process Claim Get CMS Provider
  const [
    getCMSProviderProcessClaim,
    {
      data: cmsProviderData,
      isLoading: cmsProviderLoading,
      isError: cmsProviderError,
    },
  ] = useGetCMSProviderProcessClaimMutation();

  useEffect(() => {
    if (sortBy1 === "Patient" && insuranceSelect?.length > 0) {
      getPatientProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Tx Providers" && insuranceSelect?.length > 0) {
      getTherapistProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "CPT Code" && insuranceSelect?.length > 0) {
      getCPTProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Service Type" && insuranceSelect?.length > 0) {
      getActivityProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Degree Level" && insuranceSelect?.length > 0) {
      getDegreeLevelProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Region" && insuranceSelect?.length > 0) {
      getZoneProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "Modifier" && insuranceSelect?.length > 0) {
      getModifireProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
        },
      });
    }
    if (sortBy1 === "CMS Therapist" && insuranceSelect?.length > 0) {
      getCMSProviderProcessClaim({
        token,
        payload: {
          to_date: toDate,
          payor_id: insuranceSelect,
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

  let allPatients = patientData?.patient || [];
  const allProviders = therapistData?.therapist || [];
  const allCptCodes = cptCodesData?.cpt_code || [];
  const allActivities = activityData?.activity_type || [];
  const allDegreeLevel = degreeLevelData?.degree_level || [];
  const allRegions = zoneData?.zone || [];
  const allModifire = modifierData?.modifire || [];
  const allCMSProviders = cmsProviderData?.cms_provider || [];
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

  // calling fake db
  useEffect(() => {
    axios("../../All_Fake_Api/ProcessingClaims.json")
      .then((response) => {
        setTData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      dataIndex: "Dos",
      key: "Dos",
      width: 90,
      render: (_, { Dos }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Dos}</div>;
      },
      sorter: (a, b) => {
        return a.Dos > b.Dos ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Dos" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Service & Hrs",
      dataIndex: "ServiceHrs",
      key: "ServiceHrs",
      width: 100,
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.ServiceHrs > b.ServiceHrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "ServiceHrs" ? sortedInfo.order : null,
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
      sortOrder:
        sortedInfo.columnKey === "TxProvider" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Cpt",
      dataIndex: "Cpt",
      key: "Cpt",
      width: 70,
      sorter: (a, b) => {
        return a.Cpt > b.Cpt ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder: sortedInfo.columnKey === "Cpt" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      dataIndex: "Pos",
      key: "Pos",
      width: 70,
      sorter: (a, b) => {
        return a.Pos > b.Pos ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Pos" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M1",
      key: "M1",
      dataIndex: "M1",
      width: 50,
      sorter: (a, b) => {
        return a.M1 > b.M1 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M1" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "M2",
      key: "M2",
      dataIndex: "M2",
      width: 50,
      sorter: (a, b) => {
        return a.M2 > b.M2 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M2" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M3",
      key: "M3",
      dataIndex: "M3",
      width: 50,
      sorter: (a, b) => {
        return a.M3 > b.M3 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M3" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "M4",
      key: "M4",
      dataIndex: "M4",
      width: 50,
      sorter: (a, b) => {
        return a.M4 > b.M4 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "M4" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Units",
      key: "Units",
      dataIndex: "Units",
      width: 60,
      sorter: (a, b) => {
        return a.Units > b.Units ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder: sortedInfo.columnKey === "Units" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Rate",
      key: "Rate",
      dataIndex: "Rate",
      width: 50,
      sorter: (a, b) => {
        return a.Rate > b.Rate ? -1 : 1;
        // a.Pos - b.Pos,
      },
      render: (_, { Rate }) => {
        //console.log("tags : ", lock);
        return <div className="flex justify-end">{Rate}</div>;
      },
      sortOrder: sortedInfo.columnKey === "Rate" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Rendering24-j",
      key: "Rendering24",
      dataIndex: "Rendering24",
      width: 100,
      sorter: (a, b) => {
        return a.Rendering24 > b.Rendering24 ? -1 : 1;
        // a.Pos - b.Pos,
      },
      sortOrder:
        sortedInfo.columnKey === "Rendering24" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

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

  // -------------------

  const handleGO = () => {
    setInsurance(true);
    const payload = {
      to_date: toDate,
    };
    PayorByDate({ token, payload });
    console.log("hello go button", toDate);
  };

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    reset();
  };

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
      <h1 className="text-lg text-orange-400 mb-10">Processing Claim(s)</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex items-center gap-4 flex-wrap">
            {/* <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-7  mr-2 gap-6"> */}
            <div className="flex gap-[4px] mb-[6px]">
              <div className="">
                <label className="label">
                  <span className=" label-font">
                    To Date<span className="text-red-500">*</span>
                  </span>
                </label>
                {/* <input                                        
                  onClick={() => setOpenSingleCalendar(!openSingleCalendar)}
                  value={date ? date.toLocaleDateString() : "Select a Date"}
                  className="input-border input-font w-full focus:outline-none py-[1px]"
                  {...register("date")}
                />
    
                {openSingleCalendar && (
                  <div className="col-span-2 w-[60%] xl:w-[20%] md:w-[25%] mt-1 rounded my-0 absolute z-10 bg-white single-date p-1">
                    <Calendar onChange={setDate} value={date} />
                    <div className="bg-gray-200 py-[1px] "></div>
                    <div className="flex justify-between bg-white p-1">
                      <button
                        onClick={() => handleSingleClearDate()}
                        className="pms-clear-button"
                      >
                        CLEAR
                      </button>
                      <div>
                        <button
                          onClick={() => setOpenSingleCalendar(false)}
                          className=" pms-button mr-2"
                          type="submit"
                        >
                          OK
                        </button>
                        <button
                          className="pms-close-button"
                          onClick={() => handleSingleCancelDate()}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}
                <div className="flex items-end w-full">
                  <Space direction="vertical">
                    <DatePicker
                      autoFocus={false}
                      bordered
                      size="middle"
                      style={{}}
                      onChange={onChange}
                      // Disabled future Dates
                      disabledDate={(current) => current.isAfter(moment())}
                    />
                  </Space>
                  {/* <AiOutlineCalendar className="ml-[-1.9px] mb-[-3px] font-semibold text-primary text-2xl" /> */}
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleGO}
                  className=" bg-[#34A7B8] rounded-sm text-white w-12 h-8 shadow-md shadow-gray-800"
                >
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

                  <InsuranceMultiSelect
                    selected={selected}
                    setSelected={setSelected}
                    payorData={responsePayorData?.all_payor || []}
                    payorLoading={payorLoading}
                    setInsuranceSelect={setInsuranceSelect}
                    setSortBy1={setSortBy1}
                  />
                </div>
                {/* Sort By  */}
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Sort By<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    onChange={(e) => setSortBy1(e.target.value)}
                    name="type"
                    className="input-border input-font  focus:outline-none w-[200px]"
                  >
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
                              value={
                                startDate
                                  ? `${startMonth} ${startDay}, ${startYear}`
                                  : "Start Date"
                              }
                              readOnly
                              onClick={() => setOpenCalendar(true)}
                              className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                            />
                            <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                            <input
                              value={
                                endDate
                                  ? `${endMonth} ${endDay}, ${endYear}`
                                  : "End Date"
                              }
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allPatients?.length > 0 && (
                            <>
                              {allPatients?.map((p) => {
                                return (
                                  <option
                                    value={p?.client_name?.id}
                                    key={p?.client_name?.id}
                                  >
                                    {p?.client_name?.client_full_name}
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allProviders?.length > 0 && (
                            <>
                              {allProviders?.map((provider) => {
                                return (
                                  <option
                                    value={provider?.therapist_name?.id}
                                    key={provider?.therapist_name?.id}
                                  >
                                    {provider?.therapist_name?.full_name}
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
                          name="type"
                          className="input-border input-font w-[200px] focus:outline-none"
                        >
                          <option value="0">Select</option>
                          {allActivities?.length > 0 && (
                            <>
                              {allActivities?.map((activity, index) => {
                                return (
                                  <option
                                    value={activity?.activity_id}
                                    key={index}
                                  >
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
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
                          onChange={(e) =>
                            setSelectedSortOptionOne(e.target.value)
                          }
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
                      <select
                        onChange={(e) => setSortBy2(e.target.value)}
                        name="type"
                        className="input-border input-font focus:outline-none w-[200px] "
                      >
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
                        <option value="Place Of Service">
                          Place Of Service
                        </option>
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
                                  value={
                                    startDate
                                      ? `${startMonth} ${startDay}, ${startYear}`
                                      : "Start Date"
                                  }
                                  readOnly
                                  onClick={() => setOpenCalendar(true)}
                                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                                />
                                <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                                <input
                                  value={
                                    endDate
                                      ? `${endMonth} ${endDay}, ${endYear}`
                                      : "End Date"
                                  }
                                  readOnly
                                  onClick={() => setOpenCalendar(true)}
                                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                                />
                              </div>

                              {/* Multi date picker component called */}
                              <div
                                ref={refClose}
                                className="absolute z-10 2xl:ml-[0%] xl:ml-[0%] lg:ml-[0%] md:ml-[-30%]  md:mr-[10%] sm:mr-[14%] mt-1 "
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
                <div className="flex gap-2">
                  <button
                    className=" bg-[#34A7B8] rounded-sm text-white px-2 shadow-md shadow-gray-600 h-8"
                    type="submit"
                  >
                    Run
                  </button>
                  <button
                    className="bg-[#b91c1c] rounded-sm text-white shadow-md shadow-gray-800  px-2"
                    type="button"
                  >
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
            <>
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className=" text-xs font-normal mt-5"
                columns={columns}
                dataSource={TData}
                rowSelection={{
                  ...rowSelection,
                }}
                scroll={{
                  y: 750,
                }}
                onChange={handleChange}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingClaim;
