import React, { useEffect, useRef, useState } from "react";
import GlobalMultiSelect from "../../../Shared/CustomComponents/GlobalMultiSelect";
import { FiDownload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Table } from "antd";
import { DateRangePicker } from "react-date-range";
import { RiArrowLeftRightLine } from "react-icons/ri";

const MissingBilledSessionsUnderAppointment = () => {
  const [tableOpen, setTableOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const [table, setTable] = useState(false);
  useEffect(() => {
    axios("../../../All_Fake_Api/ExitingFacilities.json")
      .then((response) => {
        console.log("calling");
        setTable(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(table);
  const columns = [
    {
      title: "FacID",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Fac.",
      dataIndex: "main_contact_number",
      key: "main_contact_number",
      width: 150,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.main_contact_number || null,
      onFilter: (value, record) => record.main_contact_number.includes(value),
      sorter: (a, b) => {
        return a.main_contact_number > b.main_contact_number ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "main_contact_number"
          ? sortedInfo.order
          : null,
      ellipsis: true,
    },
    {
      title: "ManageID.",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "AppID",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "ClientID",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Client Name",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "DOS",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "CPT",
      dataIndex: "facility_id",
      key: "facility_id",
      width: 80,
      filters: [
        {
          text: `10/31/2021`,
          value: "10/31/2021",
        },
        {
          text: `11/31/2023`,
          value: "11/31/2023",
        },
        {
          text: "10/31/2025",
          value: "10/31/2025",
        },
      ],
      filteredValue: filteredInfo.facility_id || null,
      onFilter: (value, record) => record.facility_id.includes(value),
      sorter: (a, b) => {
        return a.facility_id > b.facility_id ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "facility_id" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setTableOpen(true);
    reset();
  };

  //Date Range Picker
  const [open, setOpen] = useState(false);
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
  //End Date Range Picker

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpen(false);
    }
  };
  //end outside click
  return (
    <div className="h-[100vh]">
      <div className="label-text text-[16px] ml-1 font-medium my-3 text-left">
        Create Deposit Apply with No Check
      </div>
      <div className=" flex justify-between mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center flex-wrap gap-4">
            <div>
              <label className="label">
                <span className=" label-font">Account(s)</span>
              </label>

              <div className="">
                <div className="pt-[4px]">
                  <GlobalMultiSelect />
                </div>
              </div>
            </div>

            <div>
              <label className="label">
                <span className=" label-font">Patient</span>
              </label>
              <select
                className="input-border input-font py-[1px] w-full focus:outline-none"
                {...register("region")}
              >
                <option value="work">work</option>
                <option value="home">home</option>
                <option value="family">family</option>
              </select>
            </div>
            <div className="w-[220px]">
              <label className="label">
                <span className=" label-font">Selected date</span>
              </label>
              <div className="ml-1 text-[14px]">
                <div className="flex  items-center justify-around text-gray-600 input-border px-1 ">
                  <input
                    value={
                      startDate
                        ? `${startMonth} ${startDay}, ${startYear}`
                        : "Start Date"
                    }
                    readOnly
                    onClick={() => setOpen((open) => !open)}
                    className="focus:outline-none w-1/3 font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent  cursor-pointer"
                  />

                  <RiArrowLeftRightLine
                    onClick={() => setOpen((open) => !open)}
                    className="cursor-pointer mx-1 text-gray-600 text-[14px] font-medium"
                  ></RiArrowLeftRightLine>

                  <input
                    value={
                      endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                    }
                    readOnly
                    onClick={() => setOpen((open) => !open)}
                    className="focus:outline-none w-1/3 font-medium text-center bg-transparent text-[14px] text-gray-600  cursor-pointer"
                  />
                </div>
              </div>
              <div
                ref={refClose}
                className="absolute z-10 lg:ml-[0%] md:ml-[-30%] mt-1"
              >
                {open && (
                  <div>
                    <div>
                      <DateRangePicker
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction="horizontal"
                        className="border-2 border-gray-100 p-2 sm:p-0 bg-white"
                      />
                    </div>
                    <div className="text-right bg-[#26818F] border-r-2 rounded-b-lg range-date-ok py-0">
                      <button
                        className="px-4 m-2 text-white border border-white rounded hover:border-red-700 hover:bg-red-700"
                        type="submit"
                        onClick={handleCancelDate}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 m-2 text-secondary border border-white bg-white rounded"
                        type="submit"
                        onClick={() => setOpen(false)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button type="submit" className="pms-input-button mt-7">
                Go
              </button>
            </div>
          </div>
        </form>

        <div className="flex items-end justify-end">
          <FiDownload className="text-secondary font-medium text-xl mx-1" />
        </div>
      </div>
      {tableOpen && (
        <>
          <div className="overflow-scroll">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
              size="small"
              bordered
              className="table-striped-rows text-xs font-normal"
              columns={columns}
              dataSource={table}
              // scroll={{
              //   y: 650,
              // }}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MissingBilledSessionsUnderAppointment;
