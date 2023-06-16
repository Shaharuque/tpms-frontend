import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PatientSelect from "./AllMultiSelectComponents/PatientSelect";
import { RiArrowLeftRightLine } from "react-icons/ri";
import CustomDateRange from "../../Shared/CustomDateRange/CustomDateRange";
import { useSelector } from "react-redux";
import { providerIp } from "../../../Misc/BaseClient";
import axios from "axios";
import useToken from "../../../CustomHooks/useToken";
import ProviderSelect from "./AllMultiSelectComponents/ProviderSelect";
import { toast } from "react-toastify";
import { Dropdown, Space, Table, Switch, Typography } from "antd";
import { AiFillLock, AiFillUnlock, AiOutlineMessage } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import { minsToHours, timeConverter2 } from "../../Shared/TimeConverter/TimeConverter";
import ShimmerLoader from "../../../Loading/ShimmerLoader";
import StatusSelect from "./AllMultiSelectComponents/StatusSelect";
import MonthlyUtilization from "./MonthlyUtilization/MonthlyUtilization";

//Date converter function [yy-mm-dd]
function convert(str) {
  let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

const Schedule = () => {
  const [formData, setFormData] = useState({});
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patientsId, setPatientsId] = useState([]);
  const [providers, setProviders] = useState([]);
  const [providersId, setProvidersId] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusVal, setStatusVal] = useState([]);
  const [notes, setNotes] = useState("1");
  const [sessionType, setSessionType] = useState(1);
  const [actionOption, setActionOption] = useState(null);
  const [utilizationData, setUtilizationData] = useState([]);
  const { Text } = Typography;
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const { token } = useToken();
  // is fixed toggle
  const isToggled = useSelector((state) => state.sideBarInfo);
  const status = [
    { label: "Scheduled", value: "Scheduled" },
    { label: "No Show", value: "No Show" },
    { label: "Hold", value: "Hold" },
    { label: "Cancelled by Client", value: "Cancelled by Client" },
    { label: "CC less than 24 hrs", value: "CC less than 24 hrs" },
    { label: "Cancelled by Provider", value: "Cancelled by Provider" },
    { label: "Rendered", value: "Rendered" },
  ];
  // console.log("status", statusVal);

  const handleBillable = (e) => {
    setBillable(!billable);
  };
  // console.log("billable", billable);

  useEffect(() => {
    if (billable) {
      setSessionType(1);
    } else {
      setStatusVal([]);
      setSessionType(2);
    }
  }, [billable]);

  //Date Range Picker
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  //Provider multi select data from server(Provider=>Stuff)
  useEffect(() => {
    const getProviderData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/providers`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      setProviders(data);
    };
    getProviderData();
  }, [token]);

  //Clients multi select data from server(Client=>Patient)
  useEffect(() => {
    const getPatientsData = async () => {
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/patients`,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-auth-token": token || null,
        },
      });
      const data = res?.data;
      setPatients(data);
    };
    getPatientsData();
  }, [token]);

  //Initial manage session data fetching(This api call will be done for once)
  useEffect(() => {
    const getSessionData = async () => {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/sessions`,
        headers: {
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: {
          start_date: convert(range[0]?.startDate),
          end_date: convert(range[0]?.endDate),
          patient_ids: "",
          provider_ids: "",
          status: "",
          app_type_check: sessionType,
          load_check: 1,
          notes_avail: notes,
        },
      });
      const data = res?.data;
      setSessionData(data?.sessions);
      setLoading(false);
    };
    getSessionData();
  }, [token]);

  // date range picker calendar
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  const startMonth = startDate ? startDate.toLocaleString("en-us", { month: "short" }) : null;
  const endMonth = endDate ? endDate.toLocaleString("en-us", { month: "short" }) : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate ? startDate.getFullYear().toString().slice(2, 4) : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;
  //End Date Range Picker

  //console.log("range", range);

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
  //end outside click

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        start_date: startDate ? `${startMonth} ${startDay}, ${startYear}` : "",
        end_date: endDate ? `${endMonth} ${endDay}, ${endYear}` : "",
      });
    }, 0);
  }, [reset, startDate, startMonth, startDay, startYear, endDate, endMonth, endDay, endYear]);
  const onSubmit = async (data) => {
    setFormData(data);
    const from_date = convert(data?.start_date);
    const to_date = convert(data?.end_date);
    console.log("converted date", from_date, to_date);

    const payLoad = {
      start_date: from_date,
      end_date: to_date,
      patient_ids: patientsId,
      provider_ids: providersId,
      status: statusVal,
      app_type_check: sessionType,
      load_check: 1,
      notes_avail: notes,
    };
    if (payLoad?.start_date === "NaN-aN-aN") {
      toast.error(<h1 className="font-bold">Select Valid Date-Range</h1>, {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    } else {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: `${providerIp}/get/all/sessions`,
        headers: {
          Accept: "application/json",
          "x-auth-token": token || null,
        },
        data: payLoad,
      });
      const data = res?.data;
      setSessionData(data?.sessions);
      setLoading(false);
    }
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: <h1 className="text-center">Lock</h1>,
      key: "is_locked",
      dataIndex: "is_locked",
      width: 80,
      // render contains what we want to reflect as our data
      render: (_, { is_locked }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {is_locked === 0 && (
              <button title="Un-Lock">
                <AiFillUnlock className=" text-lg font-medium text-[#309BAB]" />
              </button>
            )}
            {is_locked === 1 && (
              <button title="Billed">
                <AiFillLock className="text-lg font-medium  text-red-600" />
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Patients",
      dataIndex: "client_full_name",
      key: "client_full_name",
      width: 200,
      // filters: items?.length > 0 && patientSearch(),
      render: (_, record) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{record?.app_patient?.client_full_name}</div>;
      },
      // filteredValue: filteredInfo.client_full_name || null,
      // onFilter: (value, record) =>
      //   record?.app_client?.client_full_name?.includes(value),
      sorter: (a, b) => {
        return a.app_client?.client_full_name > b.app_client?.client_full_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "client_full_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "activity_name",
      key: "activity_name",
      width: 190,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{`${record?.app_activity?.activity_name} (${minsToHours(record?.time_duration)}Hr)`}</div>;
      },
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a?.app_activity?.activity_name > b?.app_activity?.activity_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "activity_name" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Provider",
      dataIndex: "provider_full_name",
      key: "provider_full_name",
      width: 160,
      render: (_, record) => {
        return <div className=" text-secondary">{record?.app_provider?.full_name}</div>;
      },
      sorter: (a, b) => {
        return a.app_provider?.full_name > b.app_provider?.full_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider_full_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "location",
      dataIndex: "location",
      width: 150,
      render: (_, record) => {
        //console.log("pos : ", pos);
        return (
          <>
            {record?.location === "02" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>{record?.app_pos?.pos_name}</div>
            )}
          </>
        );
      },
      // filteredValue: filteredInfo.location || null,
      // onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => {
        return a.location > b.location ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
    },
    {
      title: "Scheduled Date",
      dataIndex: "schedule_date",
      key: "schedule_date",
      width: 200,
      // filters: [
      //   {
      //     text: `Feb 20, 2023`,
      //     value: "Feb 20, 2023",
      //   },
      //   {
      //     text: "Dec 30, 2021",
      //     value: "Dec 30, 2021",
      //   },
      // ],
      render: (_, record) => {
        //console.log("tags : ", lock);
        return <div className=" text-black text-center">{dateConverter(record?.schedule_date)}</div>;
      },
      // filteredValue: filteredInfo.schedule_date || null,
      // onFilter: (value, record) => record.schedule_date.includes(value),
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1;
        // a.schedule_date - b.schedule_date
      },
      sortOrder: sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hours",
      dataIndex: "Hours",
      key: "Hours",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-gray-600 text-center ">
            {timeConverter2(record?.from_time)} to {timeConverter2(record?.to_time)}
          </div>
        );
      },
      // filteredValue: filteredInfo.Hours || null,
      // onFilter: (value, record) => {
      //   return record.Hours.includes(value);
      // },
      sorter: (a, b) => {
        return a.Hours > b.Hours ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "Hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 110,
      sorter: (a, b) => {
        return a.status > b.status ? -1 : 1;
        // a.status - b.status,
      },
      sortOrder: sortedInfo.columnKey === "status" ? sortedInfo.order : null,
      ellipsis: true,
      render: (_, { status }) => {
        //console.log("status : ", status);
        return (
          <div className="flex justify-center">
            {status === "Scheduled" && <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Rendered" && <button className="bg-green-700 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Hold" && <button className="bg-gray-100 text-black text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "No Show" && <button className="bg-rose-700 text-white text-[10px] py-[2px]  rounded w-14">{status}</button>}
            {status === "Cancelled by Client" && <button className="bg-secondary text-white text-[10px] py-[2px]  rounded w-24">{status}</button>}
            {status === "Cancelled by Provider" && <button className="bg-[#39B4C7] text-white text-[10px] p-[2px]  rounded w-28">{status}</button>}
          </div>
        );
      },
      // filters: [
      //   {
      //     text: "hold",
      //     value: "hold",
      //   },
      //   {
      //     text: "Rendered",
      //     value: "Rendered",
      //   },
      //   {
      //     text: "Scheduled",
      //     value: "Scheduled",
      //   },
      // ],
      // filteredValue: filteredInfo.status || null,
      // onFilter: (value, record) => record.status.includes(value),
    },
    // {
    //   title: "Nt",
    //   dataIndex: "operation",
    //   key: "operation",
    //   width: 60,
    //   render: (_, record) => (
    //     <div className="flex justify-center">
    //       <button className="flex items-center justify-center " onClick={addNoteHandler}>
    //         <AiOutlineMessage className="text-base text-secondary" />
    //       </button>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Action",
    //   dataIndex: "operation",
    //   key: "operation",
    //   width: 60,
    //   render: (_, record) => (
    //     <div className="flex justify-center">
    //       <Dropdown
    //         overlay={<ManageTableAction isLocked={record?.is_locked} appointmentId={record?.id}></ManageTableAction>}
    //         trigger={["click"]}
    //         overlayStyle={{ zIndex: "100" }}
    //       >
    //         <button onClick={(e) => e.preventDefault()}>
    //           <Space>
    //             <BsThreeDots />
    //           </Space>
    //         </button>
    //       </Dropdown>
    //     </div>
    //   ),
    // },
  ];

  //get rows id to do some action on them
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selected row-keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,

    //Billing is_locked===true then you can't chose that checkbox
    getCheckboxProps: (record) => {
      //console.log("record", record);
      const rowIndex = record?.is_locked;
      return {
        disabled: rowIndex === 1,
      };
    },
  };

  //Action handler function
  const handleAction = async () => {
    let payload = {
      sessionIds: selectedRowKeys,
    };
    if (actionOption === "1") {
      // setSelectedRowKeys([]);
      // setUtilizationData([]);
      if (payload) {
        const res = await axios({
          method: "POST",
          url: `${providerIp}/delete/session`,
          headers: {
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: payload,
        });
        const data = res?.data;
        setUtilizationData(data?.utilization);

        if (res?.data?.success) {
          toast.success(<h1 className="text-[12px]">{res?.data?.msg}</h1>, {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            theme: "dark",
          });
          const from_date = convert(formData?.start_date);
          const to_date = convert(formData?.end_date);
          const payLoad = {
            start_date: from_date,
            end_date: to_date,
            patient_ids: patientsId,
            provider_ids: providersId,
            status: statusVal,
            app_type_check: sessionType,
            load_check: 1,
            notes_avail: notes,
          };
          if (payload) {
            setLoading(true);
            const res = await axios({
              method: "POST",
              url: `${providerIp}/get/all/sessions`,
              headers: {
                Accept: "application/json",
                "x-auth-token": token || null,
              },
              data: payLoad,
            });
            const data = res?.data;
            setSessionData(data?.sessions);
            setLoading(false);
          }
        }
      }
    }
    if (actionOption === "2") {
      if (payload) {
        const res = await axios({
          method: "POST",
          url: `${providerIp}/get/monthly/utilization`,
          headers: {
            Accept: "application/json",
            "x-auth-token": token || null,
          },
          data: payload,
        });
        const data = res?.data;
        setUtilizationData(data?.utilization);
      }
    }
  };

  return (
    <div className={`${sessionData?.length > 0 || "h-[100vh]"}  text-black `}>
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-[16px] font-semibold ">Manage Sessions</h1>
      </div>
      <div className="flex items-center sm:justify-end sm:my-0 my-2 flex-wrap gap-2">
        <div>
          <Switch color="default" defaultChecked size="small" onClick={handleBillable} />

          <label className="form-check-label inline-block ml-2 text-[14px]" htmlFor="flexSwitchCheckDefault">
            {billable ? "Billable" : "Non-Billable"}
          </label>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className=" flex item-center  flex-wrap gap-3 ">
          {/* <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 2xl:grid-cols-8 gap-2 mb-2"> */}

          <div>
            <label className="label">
              <span className="label-text mb-[2px] text-[14px]  text-left">Provider</span>
            </label>

            <ProviderSelect providers={providers} setProvidersId={setProvidersId}></ProviderSelect>
          </div>
          <div>
            <label className="label">
              <span className="label-text mb-[2px] text-[14px]  text-left">Client</span>
            </label>

            <PatientSelect patients={patients} setPatientsId={setPatientsId}></PatientSelect>
          </div>
          <div className="md:w-[250px] w-[200px]">
            <label className="label">
              <span className="label-text text-[14px]  text-left">Date Range</span>
            </label>
            {/* Date Range calender will be set here */}
            <div className="ml-1">
              <div className="flex flex-wrap justify-between items-center text-gray-600 input-border rounded-sm  w-full pb-[2px]">
                <input
                  value={startDate ? `${startMonth} ${startDay}, ${startYear}` : "Start Date"}
                  readOnly
                  onClick={() => setOpenCalendar(true)}
                  className="focus:outline-none font-medium text-center text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                  {...register("start_date")}
                />
                <RiArrowLeftRightLine className="w-1/3 text-gray-600"></RiArrowLeftRightLine>
                <input
                  value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
                  readOnly
                  onClick={() => setOpenCalendar(true)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                  {...register("end_date")}
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
                  <CustomDateRange range={range} setRange={setRange} handleCancelDate={handleCancelDate} setOpen={setOpenCalendar}></CustomDateRange>
                )}
              </div>
            </div>
          </div>

          {billable && (
            <>
              <div>
                <label className="label">
                  <span className="label-text mb-[2px] text-[14px]  text-left">Status</span>
                </label>
                <StatusSelect status={status} setStatusVal={setStatusVal}></StatusSelect>
              </div>
            </>
          )}
          <div>
            <label className="label">
              <span className="label-text text-[14px]  text-left">Notes</span>
            </label>
            <select className="input-border input-font w-[200px] focus:outline-none" onChange={(e) => setNotes(e.target.value)}>
              <option value="1">All</option>
              <option value="2">Available</option>
              <option value="3">Not Available</option>
            </select>
          </div>
          <button className="schedule-go-btn " type="submit">
            Go
          </button>
        </div>
      </form>

      {loading ? (
        <ShimmerLoader></ShimmerLoader>
      ) : (
        <div className="my-5 overflow-scroll">
          <Table
            rowKey={(record) => record.id}
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            bordered
            className=" text-xs font-normal "
            columns={columns}
            dataSource={sessionData}
            rowSelection={rowSelection}
            // scroll={{
            //   y: 700,
            // }}
            onChange={handleChange}
            // summary={(pageData) => {
            //   console.log("pageData", pageData);
            //   let totalAllowed = pageData?.length;
            //   let totalBalance = 0;
            //   pageData.forEach(({ mngclam_tran }) => {
            //     let total;
            //     if (mngclam_tran?.length > 0) {
            //       total = mngclam_tran
            //         ?.map((each) => {
            //           return each?.pri_mngclmtrn_prcclm?.rate * each?.pri_mngclmtrn_prcclm?.units;
            //         })
            //         ?.reduce((accumulator, currentValue) => {
            //           return accumulator + currentValue;
            //         }, 0);
            //     }
            //     totalBalance = parseFloat(totalBalance) + total;
            //   });
            //   return (
            //     <>
            //       <Table.Summary.Row>
            //         <Table.Summary.Cell index={2} colSpan={3}>
            //           <span className="text-black font-bold flex justify-end mx-5 "> Total Claims</span>
            //         </Table.Summary.Cell>
            //         <Table.Summary.Cell index={6}>
            //           <Text className="text-black font-bold flex justify-center">{totalAllowed}</Text>
            //         </Table.Summary.Cell>
            //         <Table.Summary.Cell index={6}>
            //           <Text className="text-black font-bold flex justify-center">Total Amount</Text>
            //         </Table.Summary.Cell>
            //         <Table.Summary.Cell index={6}>
            //           <Text className="text-black font-bold flex justify-center">{totalBalance?.toFixed(2)}</Text>
            //         </Table.Summary.Cell>
            //         <Table.Summary.Cell index={2} colSpan={3}></Table.Summary.Cell>
            //       </Table.Summary.Row>
            //     </>
            //   );
            // }}
          />
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <select className="modal-input-field ml-1" onChange={(e) => setActionOption(e.target.value)}>
          <option value="0"></option>
          <option value="1">Delete</option>
          <option value="2">Monthly utilization &amp; total utilization</option>
          <option value="4">Rendered all selected session</option>
        </select>
        <button onClick={handleAction} className="pms-button">
          Ok
        </button>
      </div>
      {actionOption === "2" && utilizationData?.length > 0 && <MonthlyUtilization utilizationData={utilizationData}></MonthlyUtilization>}
    </div>
  );
};

export default Schedule;
