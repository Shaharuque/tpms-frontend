import React, { memo, useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";
import CardsView from "./CardView/CardsView";
import { Dropdown, Space, Table } from "antd";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { BsFillCameraVideoFill, BsThreeDots } from "react-icons/bs";
import ManageTableAction from "./ListView/ManageTableAction";

//for date range picker calendar
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsArrowRight } from "react-icons/bs";

const ListView = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [TData, setTData] = useState([]);
  const [listView, setListView] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const [value, setValue] = React.useState([]);
  // date range picker calendar
  const startDate = range[0]?.startDate;
  const endDate = range[0]?.endDate;
  const startMonth = startDate.toLocaleString("en-us", { month: "short" });
  const endMonth = endDate.toLocaleString("en-us", { month: "short" });
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  // const startYear = startDate.getFullYear();
  // const endYear = endDate.getFullYear();

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
  };

  const handleBillable = (e) => {
    setBillable(!billable);
    setTable(false);
  };

  const handleListView = () => {
    setListView(!listView);
  };
  // calling fake db
  // useEffect(() => {
  //   axios("../All_Fake_Api/Fakedb.json")
  //     .then((response) => {
  //       setTData(response?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch("../All_Fake_Api/Fakedb.json")
      .then((res) => res.json())
      .then((data) => setTData(data));
  }, []);

  // -------------------------------------------Table Data-----------------------------------
  const columns = [
    {
      title: "Lock",
      key: "lock",
      dataIndex: "lock",
      width: 40,
      // render contains what we want to reflect as our data
      render: (_, { lock }) => {
        //console.log("tags : ", lock);
        return (
          <div className="flex justify-center">
            {lock === true && (
              <button onClink={() => console.log(lock)}>
                <AiFillUnlock className=" text-lg font-medium text-secondary" />
              </button>
            )}
            {lock === false && (
              <button>
                <AiFillLock className="text-lg font-medium  text-red-600" />
              </button>
            )}
          </div>
        );
      },
    },
    {
      title: "Patients",
      dataIndex: "Patients",
      key: "Patients",
      width: 100,
      filters: [
        {
          text: `Vernon`,
          value: "Vernon",
        },
        {
          text: `Aileen Newman`,
          value: "Aileen Newman",
        },
        {
          text: "Donovan",
          value: "Donovan",
        },
        {
          text: "Burke Beard",
          value: "Burke Beard",
        },
        {
          text: "Hector Moses",
          value: "Hector Moses",
        },
      ],
      render: (_, { Patients }) => {
        //console.log("tags : ", lock);
        return <div className=" text-secondary">{Patients}</div>;
      },
      filteredValue: filteredInfo.Patients || null,
      onFilter: (value, record) => record.Patients.includes(value),
      sorter: (a, b) => {
        return a.Patients > b.Patients ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Patients" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Service & Hrs",
      dataIndex: "Service_hrs",
      key: "Service_hrs",
      width: 150,
      filters: [
        {
          text: `Amet`,
          value: "Amet",
        },
        {
          text: "Malesuada",
          value: "Malesuada",
        },
      ],
      filteredValue: filteredInfo.Service_hrs || null,
      onFilter: (value, record) => record.Service_hrs.includes(value),
      //   sorter is for sorting asc or dsc purpose
      sorter: (a, b) => {
        return a.Service_hrs > b.Service_hrs ? -1 : 1; //sorting problem solved using this logic
      },
      sortOrder:
        sortedInfo.columnKey === "Service_hrs" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Pos",
      key: "pos",
      dataIndex: "pos",
      width: 80,
      render: (_, { pos }) => {
        //console.log("pos : ", pos);
        return (
          <>
            {pos === "telehealth" ? (
              <div className="flex items-center justify-center gap-2 ">
                Telehealth
                <BsFillCameraVideoFill className="text-green-500" />
              </div>
            ) : (
              <div>{pos}</div>
            )}
          </>
        );
      },
      sorter: (a, b) => {
        return a.pos > b.pos ? -1 : 1;
      },

      sortOrder: sortedInfo.columnKey === "pos" ? sortedInfo.order : null,
      filters: [
        {
          text: "telehealth",
          value: "telehealth",
        },
        {
          text: "School",
          value: "School",
        },
        {
          text: "Office",
          value: "office",
        },
      ],
      filteredValue: filteredInfo.pos || null,
      onFilter: (value, record) => record.pos.includes(value),
    },
    {
      title: "Scheduled Date",
      dataIndex: "Scheduled_Date",
      key: "Scheduled_Date",
      width: 100,
      filters: [
        {
          text: `Feb 20, 2023`,
          value: "Feb 20, 2023",
        },
        {
          text: "Dec 30, 2021",
          value: "Dec 30, 2021",
        },
      ],
      filteredValue: filteredInfo.Scheduled_Date || null,
      onFilter: (value, record) => record.Scheduled_Date.includes(value),
      sorter: (a, b) => {
        return a.Scheduled_Date > b.Scheduled_Date ? -1 : 1;
        // a.Scheduled_Date - b.Scheduled_Date
      },
      sortOrder:
        sortedInfo.columnKey === "Scheduled_Date" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hours",
      dataIndex: "Hours",
      key: "Hours",
      width: 100,
      filters: [
        {
          text: `9:57 PM`,
          value: "9:57 PM",
        },
        {
          text: "3:01 PM",
          value: "3:01 PM",
        },
      ],
      filteredValue: filteredInfo.Hours || null,
      onFilter: (value, record) => {
        return record.Hours.includes(value);
      },
      sorter: (a, b) => {
        return a.Hours > b.Hours ? -1 : 1;
        // a.Hours - b.Hours,
      },
      sortOrder: sortedInfo.columnKey === "Hours" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
      width: 100,
      render: (_, { Status }) => {
        //console.log("Status : ", Status);
        return (
          <div className="flex justify-center">
            {Status === "Scheduled" && (
              <button className="bg-gray-500 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
            {Status === "Rendered" && (
              <button className="bg-teal-700 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
            {Status === "hold" && (
              <button className="bg-red-700 text-white text-[10px] py-[2px]  rounded w-14">
                {Status}
              </button>
            )}
          </div>
        );
      },
      filters: [
        {
          text: "hold",
          value: "hold",
        },
        {
          text: "Rendered",
          value: "Rendered",
        },
        {
          text: "Scheduled",
          value: "Scheduled",
        },
      ],
      filteredValue: filteredInfo.Status || null,
      onFilter: (value, record) => record.Status.includes(value),
    },
    {
      title: "Action",
      dataIndex: "operation",
      key: "operation",
      width: 60,
      render: (_, { id }) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={<ManageTableAction></ManageTableAction>}
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

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  // -----------------------------------------------Form-------------------------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setTable(true);
    reset();
  };

  // ----------------------------------------Multi-Select---------------------------------
  // ***************
  const datat = ["Eugenia", "Bryan", "Linda"].map((item) => ({
    label: item,
    value: item,
  }));

  const datatf = ["demo", "pos", "minda"].map((item) => ({
    label: item,
    value: item,
  }));

  return (
    // For responsive view point
    <div className={!table ? "h-[100vh]" : ""}>
      <div>
        <div className="cursor-pointer">
          <div className="bg-gradient-to-r from-secondary to-cyan-900 rounded-lg px-4 py-2">
            <div onClick={clickHandler} className="  flex items-center ">
              {!clicked && (
                <h1 className="text-[16px]  text-white font-semibold ">
                  Manage Sessions
                </h1>
              )}
            </div>
            {/* Upper div */}
            {clicked && (
              <div>
                <Fade>
                  <div className="flex justify-between items-center">
                    <h1 className="text-[20px]  text-white font-semibold ">
                      Manage Sessions
                    </h1>
                    <div className="  flex justify-end gap-3">
                      <div>
                        <Switch
                          color="default"
                          defaultChecked
                          size="small"
                          onClick={handleBillable}
                        />

                        <label
                          className="form-check-label inline-block ml-2 text-sm text-gray-100"
                          htmlFor="flexSwitchCheckDefault"
                        >
                          {billable ? "Billable" : "Non-Billable"}
                        </label>
                      </div>
                      <div>
                        <button
                          onClick={handleClose}
                          className="text-white text-2xl font-light"
                        >
                          <MdOutlineCancel />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List view or table view  */}

                  <div
                    className={
                      listView
                        ? "flex justify-end mr-[26px]"
                        : "flex justify-end mr-[15px]"
                    }
                  >
                    <div>
                      <Switch
                        color="default"
                        defaultChecked
                        size="small"
                        onClick={handleListView}
                      />

                      <label
                        className="form-check-label inline-block ml-2 text-sm text-gray-100"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {listView ? (
                          <span className="">List View</span>
                        ) : (
                          "Card View"
                        )}
                      </label>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 gap-5 mb-2">
                      {billable && (
                        <div>
                          <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                            Clients
                          </h1>
                          <CustomMultiSelection
                            data={datat}
                            value={value}
                            setValue={setValue}
                          ></CustomMultiSelection>
                        </div>
                      )}
                      <div className="w-full">
                        <h1 className="text-[16px] mb-2 ml-1 mt-2 text-gray-100">
                          Provider
                        </h1>
                        <CustomMultiSelection
                          data={datatf}
                          value={value}
                          setValue={setValue}
                        ></CustomMultiSelection>
                      </div>

                      {billable && (
                        <>
                          <div>
                            <label className="label">
                              <span className="label-text text-[16px] text-gray-100 text-left">
                                Place of Services
                              </span>
                            </label>
                            <div>
                              <select
                                className=" bg-transparent border-b-[3px] border-[#e5e5e5] text-white  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-full focus:outline-none"
                                {...register("pos")}
                              >
                                <option value="" className="text-black">
                                  Select
                                </option>
                                <option value="Today" className="text-black">
                                  Today's follow up
                                </option>
                                <option value="UK" className="text-black">
                                  Lost 7 days
                                </option>
                                <option value="15" className="text-black">
                                  Lost 15 days
                                </option>
                                <option value="15" className="text-black">
                                  Lost 30 days
                                </option>
                                <option value="15" className="text-black">
                                  30 days & over
                                </option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="label">
                              <span className="label-text text-[16px] text-gray-100 text-left">
                                Selected date
                              </span>
                            </label>
                            <div className="ml-1">
                              <div className="flex flex-wrap justify-between items-center border-b-[3px] border-[#e5e5e5] rounded-sm px-1 py-[4px] mx-1 text-[14px] w-full">
                                <input
                                  value={`${startDay} ${startMonth}`}
                                  readOnly
                                  onClick={() => setOpen((open) => !open)}
                                  className="focus:outline-none font-normal bg-transparent text-white w-1/3 cursor-pointer"
                                />
                                <BsArrowRight className="w-1/3 text-white"></BsArrowRight>
                                <input
                                  value={`${endDay} ${endMonth}`}
                                  readOnly
                                  onClick={() => setOpen((open) => !open)}
                                  className="focus:outline-none font-normal bg-transparent text-white w-1/3 cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="label">
                              <span className="label-text text-[16px] text-gray-100 text-left">
                                Status
                              </span>
                            </label>
                            <div>
                              <select
                                className="bg-transparent border-b-[3px] border-[#e5e5e5] rounded-sm px-1 py-[3px] font-normal text-white mx-1 text-[14px] w-full focus:outline-none"
                                {...register("Status")}
                              >
                                <option value="" className="text-black">
                                  Select
                                </option>
                                <option value="Today" className="text-black">
                                  Today's follow up
                                </option>
                                <option className="text-black" value="UK">
                                  Lost 7 days
                                </option>
                                <option className="text-black" value="15">
                                  Lost 15 days
                                </option>
                                <option className="text-black" value="15">
                                  Lost 30 days
                                </option>
                                <option className="text-black" value="15">
                                  30 days & over
                                </option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}
                      <button
                        className="font-regular mt-[35px] sm:w-1/4  text-[16px] font-bold bg-white  hover:to-secondary text-primary rounded-md"
                        type="submit"
                      >
                        Go
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            )}
          </div>
          <div className="absolute z-10 lg:ml-[10%] xl:ml-[15%] 2xl:ml-[20]">
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
                    className="border-2 border-gray-100"
                  />
                </div>
                <div className="text-right bg-white border-r-2 border-b-2 border-l-2 border-r-gray-100 border-b-gray-100 border-l-gray-100 range-date-ok">
                  <button
                    className="bg-gray-600 py-1  m-2 text-white rounded"
                    type="submit"
                    onClick={() => setOpen(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {table && (
          <>
            {listView && (
              <div className="my-5">
                <div className=" overflow-scroll ">
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
                      onChange={handleChange}
                    />
                  </>
                </div>
              </div>
            )}
            {!listView && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="my-5"
              >
                <CardsView data={TData}></CardsView>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ListView);
