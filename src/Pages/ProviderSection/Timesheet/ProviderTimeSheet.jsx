import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  usePayrollTimeAppointmentsGetMutation,
  usePayrollTimeGetQuery,
  usePayrollTimesheetUpdateMutation,
} from "../../../features/ProviderPortal/ProviderTimesheet_redux/providerTimeSheetApi";
import useToken from "../../../CustomHooks/useToken";
import { dateConverter } from "../../Shared/Dateconverter/DateConverter";
import { toast } from "react-toastify";
import ShimmerLoader from "../../../Loading/ShimmerLoader";

const ProviderTimeSheet = () => {
  const [tableOpen, setTableOpen] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [timeSheetData, setTimeSheetData] = useState([]);
  const [optionVal, setOptionVal] = useState("");
  const [payId, setPayId] = useState("");
  console.log(optionVal);
  const { token } = useToken();

  //Get the time periods
  const { data: timePeriods, isLoading: timePeriodsLoading, isError: timePeriodError } = usePayrollTimeGetQuery(token);
  // setStaffData(timePeriods);
  //payroll time sheet appointments
  const [payrollTimeAppointmentsGet, { data: payrollAppointmentData, isLoading: payrollLoading, isError: payrollError }] =
    usePayrollTimeAppointmentsGetMutation();

  useEffect(() => {
    if (payrollAppointmentData) {
      setTimeSheetData(payrollAppointmentData?.payrollData);
    }
  }, [payrollAppointmentData]);

  //update the changes in timesheet
  const [payrollTimesheetUpdate, { isSuccess: updateSuccess, isLoading: updateLoading, isError: updateError }] = usePayrollTimesheetUpdateMutation();

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Timesheet updated successfully");
      setSelectedRowKeys([]);
    }
  }, [updateSuccess]);

  // ----------------------------------------Multi-Select---------------------------------

  const inputHandle = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (data) => {
    if (!data?.status && !data?.pay_id) {
      return toast.error("Please select the status and pay period");
    }
    setPayId(data?.pay_id);
    const payload = {
      ...data,
      status: parseInt(data?.status),
    };
    payrollTimeAppointmentsGet({ token, payload });
    setTableOpen(true);
  };

  // ---------------------------------Table Data-------------------------
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "schedule_date",
      key: "schedule_date",
      width: 80,
      sorter: (a, b) => {
        return a.schedule_date > b.schedule_date ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "schedule_date" ? sortedInfo.order : null,
      render: (_, { schedule_date }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{dateConverter(schedule_date)}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider",
      dataIndex: "full_name",
      key: "full_name",
      width: 100,
      sorter: (a, b) => {
        return a.full_name > b.full_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "full_name" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Patient",
      dataIndex: "patientname",
      key: "patientname",
      width: 100,
      sorter: (a, b) => {
        return a.patientname > b.patientname ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patientname" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Activity",
      dataIndex: "servicename",
      key: "servicename",
      width: 120,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      // filteredValue: filteredInfo.activity || null,
      // onFilter: (value, record) => record.activity.includes(value),
      sorter: (a, b) => {
        return a.servicename > b.servicename ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "servicename" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { servicename }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{servicename || "No Data"}</h1>
          </div>
        );
      },
      ellipsis: false,
    },
    {
      title: "Time In",
      dataIndex: "timeIn",
      key: "timeIn",
      width: 100,
      sorter: (a, b) => {
        return a.timeIn > b.timeIn ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "timeIn" ? sortedInfo.order : null,

      render: (_, record) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center">
            {" "}
            <div className="mr-1">
              <input
                type="text"
                //value={record?.timein_one}
                defaultValue={record?.timein_one}
                onChange={(e) => handleTimeInHour(e.target.value, record?.id)}
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <input
                type="text"
                defaultValue={record?.timein_two}
                onChange={(e) => handleTimeInMin(e.target.value, record?.id)}
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              />
              <select
                defaultValue={record?.timein_three}
                onChange={(e) => handleTimeInOption(e.target.value, record?.id)}
                name="post"
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </div>
        );
      },
      ellipsis: false,
    },
    {
      title: "Time Out",
      dataIndex: "timeOut",
      key: "timeOut",
      width: 100,

      sorter: (a, b) => {
        return a.timeOut > b.timeOut ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "timeOut" ? sortedInfo.order : null,

      render: (_, record) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="flex justify-center">
            {" "}
            <div className="mr-1">
              <input
                type="text"
                name=""
                defaultValue={record?.timeout_one}
                onChange={(e) => handleTimeOutHour(e.target.value, record?.id)}
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <input
                type="text"
                name=""
                defaultValue={record?.timeout_two}
                onChange={(e) => handleTimeOutMin(e.target.value, record?.id)}
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              />
              <select
                defaultValue={record?.timeout_three}
                onChange={(e) => handleTimeOutOption(e.target.value, record?.id)}
                name="post"
                className="timesheet-time-box py-[3px] text-center focus:outline-none"
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </select>
            </div>
          </div>
        );
      },
      ellipsis: false,
    },
    {
      title: "Hours",
      dataIndex: "hours",
      key: "hours",
      width: 60,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.hours || null,
      onFilter: (value, record) => record.hours.includes(value),
      sorter: (a, b) => {
        return a.hours > b.hours ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "hours" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { hours, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{hours}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Miles",
      dataIndex: "miles",
      key: "miles",
      width: 80,
      // filters: [
      //   { text: "Celestine", value: "Celestine" },
      //   { text: "Annaliese", value: "Annaliese" },
      //   {
      //     text: `Maude`,
      //     value: "Maude",
      //   },
      //   {
      //     text: `Molly`,
      //     value: "Molly",
      //   },
      //   {
      //     text: "Karla",
      //     value: "Karla",
      //   },
      //   {
      //     text: "Marcellus",
      //     value: "Marcellus",
      //   },
      //   {
      //     text: "Hilton",
      //     value: "Hilton",
      //   },
      // ],
      filteredValue: filteredInfo.miles || null,
      onFilter: (value, record) => record.miles.includes(value),
      sorter: (a, b) => {
        return a.miles > b.miles ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "miles" ? sortedInfo.order : null,
      render: (_, { miles, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <input name="cms" defaultValue={miles} className="page py-[3px] text-center focus:outline-none" onChange={inputHandle} type="text"></input>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Submitted",
      dataIndex: "submitted",
      key: "submitted",
      width: 60,
      sorter: (a, b) => {
        return a.submitted > b.submitted ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "submitted" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { status }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div className="">
            {status === "Ready to Submit" ? <FcCancel className="text-[15px] mx-auto" /> : <FcCheckmark className="text-[15px] mx-auto" />}
          </div>
        );
      },
      ellipsis: true,
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

  const handleTimeInHour = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: changed,
      timein_two: timeSheetData[indexOfRecord].timein_two,
      timein_three: timeSheetData[indexOfRecord].timein_three,
      timeout_one: timeSheetData[indexOfRecord].timeout_one,
      timeout_two: timeSheetData[indexOfRecord].timeout_two,
      timeout_three: timeSheetData[indexOfRecord].timeout_three,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  const handleTimeInMin = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: timeSheetData[indexOfRecord].timein_one,
      timein_two: changed,
      timein_three: timeSheetData[indexOfRecord].timein_three,
      timeout_one: timeSheetData[indexOfRecord].timeout_one,
      timeout_two: timeSheetData[indexOfRecord].timeout_two,
      timeout_three: timeSheetData[indexOfRecord].timeout_three,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  const handleTimeInOption = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: timeSheetData[indexOfRecord].timein_one,
      timein_two: timeSheetData[indexOfRecord].timein_two,
      timein_three: changed,
      timeout_one: timeSheetData[indexOfRecord].timeout_one,
      timeout_two: timeSheetData[indexOfRecord].timeout_two,
      timeout_three: timeSheetData[indexOfRecord].timeout_three,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  const handleTimeOutHour = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: timeSheetData[indexOfRecord].timein_one,
      timein_two: timeSheetData[indexOfRecord].timein_two,
      timein_three: timeSheetData[indexOfRecord].timein_three,
      timeout_one: changed,
      timeout_two: timeSheetData[indexOfRecord].timeout_two,
      timeout_three: timeSheetData[indexOfRecord].timeout_three,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  const handleTimeOutMin = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: timeSheetData[indexOfRecord].timein_one,
      timein_two: timeSheetData[indexOfRecord].timein_two,
      timein_three: timeSheetData[indexOfRecord].timein_three,
      timeout_one: timeSheetData[indexOfRecord].timeout_two,
      timeout_two: changed,
      timeout_three: timeSheetData[indexOfRecord].timeout_three,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  const handleTimeOutOption = (changed, id) => {
    console.log("chaning");
    const indexOfRecord = timeSheetData.findIndex((item) => id === item.id);
    const updatedDataSource = [...timeSheetData];
    updatedDataSource.splice(indexOfRecord, 1, {
      timein_one: timeSheetData[indexOfRecord].timein_one,
      timein_two: timeSheetData[indexOfRecord].timein_two,
      timein_three: timeSheetData[indexOfRecord].timein_three,
      timeout_one: timeSheetData[indexOfRecord].timeout_one,
      timeout_two: timeSheetData[indexOfRecord].timeout_two,
      timeout_three: changed,
      miles: timeSheetData[indexOfRecord].miles,
      id,
    });
    setTimeSheetData(updatedDataSource);
  };
  console.log("changed TimeSheetData : ", timeSheetData);

  let finalSelected = [];
  const extractingData = () => {
    for (let i = 0; i < selectedRowKeys.length; i++) {
      finalSelected.push(timeSheetData?.find((each) => each.id === selectedRowKeys[i]));
    }
  };
  if (selectedRowKeys.length > 0) {
    extractingData();
  }
  console.log("finalSelected : ", finalSelected);
  const handleSave = () => {
    const edit_id = finalSelected?.map((item) => item.id);
    const timein_one = finalSelected?.map((item) => item.timein_one);
    const timein_two = finalSelected?.map((item) => item.timein_two);
    const timein_three = finalSelected?.map((item) => item.timein_three);
    const timeout_one = finalSelected?.map((item) => item.timeout_one);
    const timeout_two = finalSelected?.map((item) => item.timeout_two);
    const timeout_three = finalSelected?.map((item) => item.timeout_three);
    const miles = finalSelected?.map((item) => item?.miles);
    if (finalSelected?.length > 0 && optionVal === "1") {
      const payload = {
        pay_id: payId,
        edit_id,
        timein_one,
        timein_two,
        timein_three,
        timeout_one,
        timeout_two,
        timeout_three,
        miles,
      };
      console.log("payload : ", payload);
      payrollTimesheetUpdate({ token, payload });
    }
  };

  return (
    <div className={tableOpen ? "" : "h-[100vh]"}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">Timesheet(s) Submission</h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className="py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-wrap mb-5 mr-2 gap-x-3 gap-y-4">
          <div>
            <label className="label">
              <span className="label-text text-[14px]  text-left">Notes</span>
            </label>
            <select className="input-border input-font w-[200px] focus:outline-none" {...register("pay_id")}>
              <option value="">Select Payroll Period(s)</option>
              {timePeriods?.map((each) => {
                return (
                  <option value={each?.id} key={each?.id}>
                    {dateConverter(each?.start_date)} - {dateConverter(each?.end_date)}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-[14px]  text-left">Status</span>
            </label>
            <select
              name="type"
              className="input-border text-gray-600 rounded-sm  text-[14px] font-medium w-full ml-1 focus:outline-none"
              {...register("status")}
            >
              <option value=""></option>
              <option value={1}> Submitted </option>
              <option value={2}> Not Submitted </option>
            </select>
          </div>
          <button className="pms-input-button mt-2 md:mt-7">Go</button>
        </div>
      </form>
      {tableOpen && (
        <div className="my-2 h-[100vh]">
          <div className="flex flex-wrap justify-between items-center gap-2 mr-2">
            <div className="flex flex-wrap items-center gap-2">
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Monday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Tuesday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Wednesday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Thursday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Friday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Saturday
              </button>
              <button className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm">
                Sunday
              </button>
            </div>
          </div>
          {payrollLoading ? (
            <ShimmerLoader></ShimmerLoader>
          ) : (
            <div className=" overflow-scroll py-3">
              <Table
                rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                size="small"
                className=" text-xs font-normal"
                columns={columns}
                bordered
                dataSource={payrollAppointmentData?.payrollData} //Which data chunk you want to show in table
                // For fixed header table at top
                rowSelection={rowSelection}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 items-end my-5 mr-2 gap-4">
            <div>
              <select
                onChange={(e) => setOptionVal(e.target.value)}
                name="type"
                className="input-border text-gray-600 rounded-sm text-[14px] font-medium w-full ml-1 focus:outline-none"
              >
                <option value=""> Select Any Action </option>
                <option value="1"> Save Changes </option>
                <option value="2"> Submit Timesheet </option>
              </select>
            </div>
            <button
              className="w-1/4 py-1 px-2 md:ml-3 text-[15px] font-bold bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              onClick={handleSave}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderTimeSheet;
