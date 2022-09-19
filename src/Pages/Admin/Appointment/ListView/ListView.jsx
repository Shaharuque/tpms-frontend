import React, { memo, useEffect, useMemo, useState, useRef } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { ManageTableColumnsColumn } from "./ListView/ManageTableColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import UseTable from "../../../../Utilities/UseTable";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from "framer-motion";
import { Fade } from "react-reveal";
import CardsView from "./CardView/CardsView";

//for date range picker calendar
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { BsArrowRight } from "react-icons/bs";

const ListView = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [TData, setTData] = useState([]);
  const [listView, setListView] = useState(true);
  const [card, setCard] = useState(false);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

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
  useEffect(() => {
    axios("../All_Fake_Api/Fakedb.json")
      .then((response) => {
        setTData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // -------------------------------------------Table Data-----------------------------------
  const data = useMemo(() => TData, [TData]);
  const columns = useMemo(() => [...ManageTableColumnsColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data },
      useSortBy,
      usePagination,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <div>
                  <CheckBox {...getToggleAllRowsSelectedProps()} />
                </div>
              ),
              Cell: ({ row }) => (
                <div>
                  <CheckBox {...row.getToggleRowSelectedProps()} />
                </div>
              ),
            },
            ...columns,
          ];
        });
      }
    );
  // console.log(selectedFlatRows);
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

  const [value, setValue] = React.useState([]);

    // date range picker calendar
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 0),
        key: "selection",
      },
    ]);
  
    const startDate = range[0]?.startDate;
    const endDate = range[0]?.endDate;
    const startMonth = startDate.toLocaleString("en-us", { month: "short" });
    const endMonth = endDate.toLocaleString("en-us", { month: "short" });
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    console.log(startMonth, endMonth, startDay, endDay, startYear, endYear);
  
    // open close
    const [open, setOpen] = useState(false);
  
    // get the target element to toggle
    // const refOne = useRef(null);
  
    // useEffect(() => {
    //   document.addEventListener("click", hideOnClickOutside, true);
    // }, []);
  
    // // Hide dropdown on outside click
    // const hideOnClickOutside = (e) => {
    //   if (refOne.current && !refOne.current.contains(e.target)) {
    //     setOpen(false);
    //   }
    // };

  return (
    // For responsive view point
    <div className={!table ? "h-[100vh]" : ""}>
      <div>
        <div className="cursor-pointer">
          <div className="bg-gradient-to-r from-secondary to-cyan-900 rounded-lg px-4 py-2">
            <div onClick={clickHandler} className="  flex items-center ">
              {!clicked && (
                <h1 className="text-[16px]  text-white font-normal ">
                  Manage Sessions
                </h1>
              )}
            </div>
            {/* Upper div */}
            {clicked && (
              <div>
                <Fade>
                  <div className="flex justify-between items-center">
                    <h1 className="text-[16px]  text-white font-normal ">
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
                    <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-5 mb-2">
                      {billable && (
                        <div>
                          <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                            Patients
                          </h1>
                          <CustomMultiSelection
                            data={datat}
                            value={value}
                            setValue={setValue}
                          ></CustomMultiSelection>
                        </div>
                      )}
                      <div className="w-full">
                        <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
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
                              <span className="label-text text-xs text-gray-100 text-left">
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
                              <span className="label-text text-xs text-gray-100 text-left">
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
                              <span className="label-text text-xs text-gray-100 text-left">
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
                        className="font-regular mt-[33px] sm:w-1/4  text-sm font-normal bg-secondary  hover:to-secondary text-white rounded-md"
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
          <div
            // ref={refOne}
            className="absolute lg:ml-[15%] md:ml-[10%] z-10 border rounded shadow-[0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06)]"
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
                  />
                </div>
                <div className="text-right bg-white">
                  <button
                    className="bg-gray-600 py-1 px-2 m-2 text-white rounded"
                    type="submit"
                    onClick={()=>setOpen(false)}
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
                <UseTable
                  getTableProps={getTableProps}
                  headerGroups={headerGroups}
                  getTableBodyProps={getTableBodyProps}
                  rows={rows}
                  prepareRow={prepareRow}
                ></UseTable>
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
            {/* <div className="flex item-center flex-wrap">
              <div>
                <select
                  onChange={handleSortBy}
                  name="type"
                  className="border border-gray-300 rounded-sm py-[5px] font-normal px-2 w-36 text-xs "
                >
                  <option value=""></option>
                  <option value="Specific_Date">Specific Date</option>
                  <option value="Date_Range">Provider</option>
                </select>
              </div>
              <button className="  px-3 ml-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
                Go
              </button>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ListView);
