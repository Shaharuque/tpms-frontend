import React from "react";
import GlobalMultiSelect from "../../../Shared/CustomComponents/GlobalMultiSelect";
import { useState } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { useRef } from "react";
import { useEffect } from "react";
import CustomDateRange from "../../../Shared/CustomDateRange/CustomDateRange";
import axios from "axios";
import { Table } from "antd";

const Eligibility = () => {
  // table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);
  const [TData, setTData] = useState([]);

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
      title: "Enquiry Id",
      dataIndex: "Enquiry_id",
      key: "Enquiry_id",
      width: 100,
      render: (_, { Enquiry_id }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Enquiry_id}</div>;
      },
      sorter: (a, b) => {
        return a.Enquiry_id > b.Enquiry_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "Enquiry_id" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Processed DT",
      dataIndex: "Processed_DT",
      key: "Processed_DT",
      width: 90,
      render: (_, { Processed_DT }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Processed_DT}</div>;
      },
      sorter: (a, b) => {
        return a.Processed_DT > b.Processed_DT ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "Processed_DT" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Patient Name",
      dataIndex: "Patient_name",
      key: "Patient_name",
      width: 100,
      //   sorter is for sorting asc or dsc purCoveragee
      sorter: (a, b) => {
        return a.Patient_name > b.Patient_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Patient_name" ? sortedInfo.order : null,
      ellipsis: true,
    },

    {
      title: "Insurance",
      key: "Insurance",
      dataIndex: "Insurance",
      width: 80,
      //   sorter is for sorting asc or dsc purCoveragee
      sorter: (a, b) => {
        return a.Insurance > b.Insurance ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "Insurance" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Benefit Type",
      dataIndex: "Benefit_type",
      key: "Benefit_type",
      width: 70,
      sorter: (a, b) => {
        return a.Benefit_type > b.Benefit_type ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder:
        sortedInfo.columnKey === "Benefit_type" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Coverage",
      dataIndex: "Coverage",
      key: "Coverage",
      width: 70,
      sorter: (a, b) => {
        return a.Coverage > b.Coverage ? -1 : 1;
        // a.Coverage - b.Coverage,
      },
      sortOrder: sortedInfo.columnKey === "Coverage" ? sortedInfo.order : null,
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
  return (
    <div className="h-[100vh]">
      <div className="flex items-center gap-2 flex-wrap">
        {" "}
        <div>
          <label className="label">
            <span className=" label-font">Patient</span>
          </label>
          <div className="py-[2px]">
            <GlobalMultiSelect />
          </div>
        </div>
        <div>
          <label className="label">
            <span className=" label-font">Auth</span>
          </label>
          <div className="py-[2px]">
            <GlobalMultiSelect />
          </div>
        </div>
        <div className="w-[220px]">
          <label className="label">
            <span className=" label-font">Select Date</span>
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
                  endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                }
                readOnly
                onClick={() => setOpenCalendar(true)}
                className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
              />
            </div>

            {/* Multi date picker component called */}
            <div
              ref={refClose}
              className="absolute z-10 2xl:ml-[0%] xl:ml-[0%] lg:ml-[0%] md:ml-[0%] md:mr-[5%] sm:mr-[14%] mt-1 "
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
        <button
          className="mt-[23px]  mb-1  pms-button"
          type="submit"
          onClick={() => {
            setTableOpen(true);
          }}
        >
          View
        </button>
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

export default Eligibility;
