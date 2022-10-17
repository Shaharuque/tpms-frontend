import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "react-date-range";
import { BsArrowRight } from "react-icons/bs";
import { Table } from "antd";
import GlobalMultiSelect from "../../../../Shared/CustomComponents/GlobalMultiSelect";

const Provider = () => {
  const [ProviderInfoData, SetProviderInfoData] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [tableOpen, setTableOpen] = useState(false);
  // -----------------------------------------------Form-------------------------------
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {
      filters: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleGO = () => {
    setTableOpen(true);
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
    setOpen(false);
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

  // fake api cal
  useEffect(() => {
    axios("../../All_Fake_Api/LastWeekDeposit.json")
      .then((response) => {
        SetProviderInfoData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(ProviderInfoData);

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
      title: "DOS",
      dataIndex: "unallocated",
      key: "unallocated",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.unallocated || null,
      onFilter: (value, record) => record.unallocated.includes(value),
      sorter: (a, b) => {
        return a.unallocated > b.unallocated ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "unallocated" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { unallocated, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{unallocated}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider Name",
      dataIndex: "provider",
      key: "provider",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.provider || null,
      onFilter: (value, record) => record.provider.includes(value),
      sorter: (a, b) => {
        return a.provider > b.provider ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "provider" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { provider, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{provider}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Patient Name",
      dataIndex: "patient",
      key: "patient",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.patient || null,
      onFilter: (value, record) => record.patient.includes(value),
      sorter: (a, b) => {
        return a.patient > b.patient ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patient" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patient, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patient}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Session Time",
      dataIndex: "PT",
      key: "PT",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.PT || null,
      onFilter: (value, record) => record.PT.includes(value),
      sorter: (a, b) => {
        return a.PT > b.PT ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "PT" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { PT, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{PT}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Service & Hrs.",
      dataIndex: "Act",
      key: "Act",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.Act || null,
      onFilter: (value, record) => record.Act.includes(value),
      sorter: (a, b) => {
        return a.Act > b.Act ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "Act" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { Act, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{Act}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Patient Signature",
      dataIndex: "patientSignature",
      key: "patientSignature",
      width: 100,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.patientSignature || null,
      onFilter: (value, record) => record.patientSignature.includes(value),
      sorter: (a, b) => {
        return a.patientSignature > b.patientSignature ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "patientSignature" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { patientSignature, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{patientSignature}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
    {
      title: "Provider Signature",
      dataIndex: "providerSignature",
      key: "providerSignature",
      width: 80,
      filters: [
        { text: "Celestine", value: "Celestine" },
        { text: "Annaliese", value: "Annaliese" },
        {
          text: `Maude`,
          value: "Maude",
        },
        {
          text: `Molly`,
          value: "Molly",
        },
        {
          text: "Karla",
          value: "Karla",
        },
        {
          text: "Marcellus",
          value: "Marcellus",
        },
        {
          text: "Hilton",
          value: "Hilton",
        },
      ],
      filteredValue: filteredInfo.providerSignature || null,
      onFilter: (value, record) => record.providerSignature.includes(value),
      sorter: (a, b) => {
        return a.providerSignature > b.providerSignature ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "providerSignature" ? sortedInfo.order : null,

      // render contains what we want to reflect as our data
      // patient, id, key=>each row data(object) property value can be accessed.
      render: (_, { providerSignature, id, key }) => {
        //console.log("tags : ", client_first_name, id, key);
        return (
          <div>
            <h1>{providerSignature}</h1>
          </div>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div className={!tableOpen ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">
          Sessions missing Patient/Provider Signature
        </h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-5 mb-2">
          <div className="lg:mt-4 2xl:mt-0">
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Provider
              </span>
            </label>
            <>
              <GlobalMultiSelect />
            </>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-[17px] font-medium text-[#9b9b9b] text-left">
                Date
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
                  {...register("startDate")}
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
                  {...register("endDate")}
                />
              </div>
            </div>
            <div
              ref={refClose}
              className="absolute z-10  2xl:ml-[20] shadow-xl"
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
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleGO}
            className="mt-2 md:mt-8 w-12 text-sm bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            Go
          </button>
        </div>
      </form>
      {tableOpen && (
        <div className="my-2">
          <div className="flex justify-end items-center mr-2">
            <button
              onClick={clearFilters}
              className="px-2  py-[7px] bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
            >
              Clear filters
            </button>
          </div>
          <div className=" overflow-scroll pt-3">
            <Table
              rowKey="id" //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              dataSource={ProviderInfoData} //Which data chunk you want to show in table
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Provider;
