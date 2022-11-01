import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { Table } from "antd";
import axios from "axios";
import SelectiveClientsModal from "./SelectiveClientsModal";
import SelectClient from "./PatientStatement/SelectClient";
const PatientStatement = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [selected, setSelected] = useState(null);
  const [tactive, setTactive] = useState(false);
  const [tData, setTData] = useState([]);

  const [openEditModal, setOpenEditModal] = useState(false);

  const handleAuthClick = (id) => {
    console.log(id);
    //setOpenEditModal(true);
    // setModalOpen(true);
  };

  const handleRelated = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  console.log(selected);

  useEffect(() => {
    axios("../../../All_Fake_Api/PatientStatement.json").then((response) => {
      setTData(response?.data);
    });
  }, []);

  //console.log(tData);

  const column = [
    {
      title: "first_name",
      dataIndex: "first_name",
      key: "first_name",
      width: 100,
      filters: [{}],
      filteredValue: filteredInfo.first_name || null,
      onFilter: (value, record) => record.first_name.includes(value),
      sorter: (a, b) => {
        return a.first_name > b.first_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "first_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      index: 2,
      title: "last_name",
      dataIndex: "last_name",
      key: "last_name",
      width: 100,
      filters: [
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.last_name || null,
      onFilter: (value, record) => record.last_name.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.last_name > b.last_name ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "last_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "DOB",
      key: "dob",
      dataIndex: "dob",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.dob || null,
      onFilter: (value, record) => record.dob.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.dob > b.dob ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "dob" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "gurantor",
      key: "gurantor",
      dataIndex: "gurantor",
      width: 80,
      filters: [{}],
      filteredValue: filteredInfo.gurantor || null,
      onFilter: (value, record) => record.gurantor.includes(value),
      //   sorter is for sorting asc or dsc purgurantore
      sorter: (a, b) => {
        return a.gurantor > b.gurantor ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder: sortedInfo.columnKey === "gurantor" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const clearFilters = () => {
    setFilteredInfo({});
  };
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
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
      <h1 className="text-lg text-orange-400">Statement</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-7 my-5 mr-2 gap-5">
        <div>
          <label className="label">
            <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
              Related to
            </span>
          </label>
          <select
            defaultValue={selected}
            onChange={(e) => handleRelated(e)}
            name="related"
            className="input-border text-gray-600 rounded-sm  text-[14px] foactive-medium ml-1  w-full focus:outline-none"
          >
            <option value={null}></option>
            <option value="all_client">All Client</option>
            <option value="selective_client">Selective Client</option>
            <option value="selective_private_payor">
              Selective Private Payor
            </option>
          </select>
        </div>
        <div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Select date
              </span>
            </label>
            <div className="ml-1 text-[14px]">
              <div className="flex flex-wrap justify-between  items-center text-gray-600 input-border rounded-sm px-1 mx-1 w-full">
                <input
                  value={
                    startDate
                      ? `${startMonth} ${startDay}, ${startYear}`
                      : "Start Date"
                  }
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
                />
                <BsArrowRight
                  onClick={() => setOpen((open) => !open)}
                  className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                ></BsArrowRight>
                <input
                  value={
                    endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"
                  }
                  readOnly
                  onClick={() => setOpen((open) => !open)}
                  className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
                />
              </div>
            </div>
            <div
              ref={refClose}
              className="absolute z-10 mt-2  2xl:ml-[20] shadow-xl"
            >
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <DateRangePicker
                      onChange={(item) => setRange([item.selection])}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      className="border-2 border-gray-100"
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
                </motion.div>
              )}
            </div>
          </div>
        </div>
        {selected && <SelectClient></SelectClient>}
        {/* submit  */}
        <button
          className=" mt-8 py-1 w-1/4 text-xs  bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-sm"
          type="submit"
          onClick={() => setTactive(true)}
        >
          View
        </button>
      </div>
      {tactive && (
        <div className="my-5">
          <div className="overflow-scroll">
            <>
              <Table
                pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                rowKey={(record) => record.id} //record is kind of whole one data object and here we are assigning id as key
                size="small"
                bordered
                className=" text-xs font-normal"
                columns={column}
                dataSource={tData}
                scroll={{
                  y: 650,
                }}
                onChange={handleChange}
              />
            </>
          </div>
        </div>
      )}

      {/* Related to options basis modal is handling here */}
      {selected === "selective_client" && (
        <>
          <SelectClient></SelectClient>
        </>
      )}
    </div>
  );
};

export default PatientStatement;
