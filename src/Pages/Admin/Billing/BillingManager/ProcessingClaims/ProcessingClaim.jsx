import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import { Calendar } from "react-calendar";
import CustomDateRange from "../../../../Shared/CustomDateRange/CustomDateRange";

const ProcessingClaim = () => {
  const [insurance, setInsurance] = useState(false);
  const [insuranceSelect, setInsuranceSelect] = useState("");
  const [sortBy1, setSortBy1] = useState("");
  const [sortBy2, setSortBy2] = useState("");
  const [TData, setTData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [openSingleCalendar, setOpenSingleCalendar] = useState(false);

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
  //end outside click
  //end outside click
  return (
    <div className={!tableOpen ? "h-[100vh]" : ""}>
      <h1 className="text-lg text-orange-400">Processing Claim(s)</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7  mr-2 gap-6">
            <div className="flex gap-3">
              <div className="w-3/4">
                <label className="label">
                  <span className=" label-font">
                    To Date<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  onClick={() => setOpenSingleCalendar(!openSingleCalendar)}
                  value={date ? date.toLocaleDateString() : "Select a Date"}
                  className="input-border input-font w-full focus:outline-none"
                  {...register("date")}
                />
                {/* single calendar */}
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
                )}
              </div>
              {/* go*/}
              <button onClick={handleGO} className=" mt-8 w-12 pms-button">
                Go
              </button>
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
                  <select
                    onChange={(e) => setInsuranceSelect(e.target.value)}
                    name="type"
                    className="input-border input-font w-full focus:outline-none"
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
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
                    className="input-border input-font w-full focus:outline-none"
                  >
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
                {sortBy1 && (
                  <>
                    {sortBy1 === "Date Range" ? (
                      <div>
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
                            <BsArrowRight
                              onClick={() => setOpenCalendar(true)}
                              className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                            ></BsArrowRight>
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
                            className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s"
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
                          <span className=" label-font">{sortBy1}</span>
                        </label>
                        <select
                          // onChange={(e) => setInsuranceSelect(e.target.value)}
                          name="type"
                          className="input-border input-font w-full focus:outline-none"
                        >
                          <option value="all">All</option>
                          <option value="patient">Patient</option>
                          <option value="provider">Provider</option>
                        </select>
                      </div>
                    )}

                    {/* Sort By  */}
                    <div>
                      <label className="label">
                        <span className=" label-font">
                          Sort By<span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        onChange={(e) => setSortBy2(e.target.value)}
                        name="type"
                        className="input-border input-font w-full focus:outline-none"
                      >
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
                          <div>
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
                                <BsArrowRight
                                  onClick={() => setOpenCalendar(true)}
                                  className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
                                ></BsArrowRight>
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
                                className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s"
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
                              className="input-border input-font w-full focus:outline-none"
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
                <div className="gap-2 flex">
                  <button
                    className=" pms-button w-16 mt-8"
                    type="submit"
                    onClick={() => {
                      setTableOpen(true);
                    }}
                  >
                    Run
                  </button>
                  <button className="pms-close-button w-16 mt-8">Cancel</button>
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
