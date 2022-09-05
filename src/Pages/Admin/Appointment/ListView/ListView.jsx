import React, { memo, useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { ManageTableColumnsColumn } from "./ListView/ManageTableColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "rsuite";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import UseTable from "../../../../Utilities/UseTable";
import { MdOutlineCancel } from "react-icons/md";

const ListView = () => {
  const [billable, setBillable] = useState("billable");
  const [table, setTable] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [TData, setTData] = useState([]);
  const [simpldata, setsimpledata] = useState([]);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  //test design
  const [clicked, setClicked] = useState(false);
  const [loader, setLoader] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
    setTable(!table);
  };

  const handleBillable = (e) => {
    setBillable(e);
    setTable(false);
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

  // -----------------------------------------------Table Data-------------------------------
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

  // -----------------------------------------------Multi-Select-------------------------------
  // ***************
  const datat = ["Eugenia", "Bryan", "Linda"].map((item) => ({
    label: item,
    value: item,
  }));
  const [value, setValue] = React.useState([]);

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <div>
        <div className="cursor-pointer">
          <div className="bg-gradient-to-r from-secondary via-primary to-cyan-700 rounded-lg px-4 py-2">
            <div onClick={clickHandler} className="  flex items-center ">
              {/* <button
              onClick={() => setLoader(true)}
              className="bg-teal-600 px-2 text-white rounded-lg text-sm"
            >
              {loader ? <h1>Loading</h1> : "Search"}
            </button> */}
              <h1 className="text-[16px]  text-white font-normal ">
                Manage Sessions
              </h1>
            </div>
            {/* Upper div */}
            {clicked && (
              <>
                <div className="  flex justify-between">
                  <div className="flex items-center">
                    <div className="flex mt-1 items-center">
                      <input
                        type="radio"
                        name="billable"
                        onChange={(e) => handleBillable("billable")}
                      />
                      <span className="text-sm ml-1 text-white font-normal">
                        Billable
                      </span>
                    </div>
                    <div className="flex ml-1 mt-1 items-center">
                      <input
                        type="radio"
                        name="billable"
                        onChange={(e) => handleBillable("non-billable")}
                      />
                      <span className="text-sm ml-1 text-white font-normal">
                        Non-Billable
                      </span>
                    </div>
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

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-5 mb-2">
                    {billable === "non-billable" ||
                      (billable === "billable" && (
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
                      ))}
                    <div className="w-full">
                      <h1 className="text-xs mb-2 ml-1 mt-2 text-gray-100">
                        Provider
                      </h1>
                      <CustomMultiSelection
                        data={datat}
                        value={value}
                        setValue={setValue}
                      ></CustomMultiSelection>
                    </div>

                    {billable === "billable" && (
                      <>
                        <div>
                          <label className="label">
                            <span className="label-text text-xs text-gray-100 text-left">
                              Place of Services
                            </span>
                          </label>
                          <div>
                            <select
                              className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                              {...register("pos")}
                            >
                              <option value=""></option>
                              <option value="Today">Today's follow up</option>
                              <option value="UK">Lost 7 days</option>
                              <option value="15">Lost 15 days</option>
                              <option value="15">Lost 30 days</option>
                              <option value="15">30 days & over</option>
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
                            <DateRangePicker
                              onChange={(date) => {
                                console.log(date);
                              }}
                              placeholder="Select Date"
                            />
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
                              className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                              {...register("Status")}
                            >
                              <option value=""></option>
                              <option value="Today">Today's follow up</option>
                              <option value="UK">Lost 7 days</option>
                              <option value="15">Lost 15 days</option>
                              <option value="15">Lost 30 days</option>
                              <option value="15">30 days & over</option>
                            </select>
                          </div>
                        </div>
                        <button
                          className="font-regular mt-[33px] sm:w-1/4    text-xs font-normal bg-secondary  hover:to-secondary text-white rounded-sm"
                          type="submit"
                        >
                          Save
                        </button>
                      </>
                    )}
                    {billable === "non-billable" && (
                      <button
                        onClick={() => setTable(true)}
                        className="font-regular mt-8 w-1/4  py-1  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                      >
                        Go
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}

            {/* Lower Div */}

            {/* {clicked && (
            <div className=" p-4 flex justify-between">
              <div className="flex flex-col">
                <label className="text-xs text-white">Name</label>
                <input
                  className="w-64 border-0 bg-[transparent] text-white"
                  type="text"
                  placeholder="Select Patient"
                />
              </div>
              <div></div>
            </div>
          )} */}
          </div>
        </div>
      </div>

      {/* -------------------------------------------TEST----------------------------------------------  */}
      <div className="flex flex-wrap justify-between items-center mb-5">
        {/* <h1 className="text-lg my-1 text-orange-500">Manage Sessions</h1> */}
        {/* <div>
          <Switch
            defaultChecked
            size="small"
            onClick={() => {
              setBillable(!billable);
              setTable(!table);
            }}
          />

          <label
            className="form-check-label inline-block ml-2 text-sm text-gray-500"
            htmlFor="flexSwitchCheckDefault"
          >
            {billable ? "Billable" : "Non-Billable"}
          </label>
        </div> */}
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 my-5 mr-2 gap-5">
          {billable && (
            <div>
              <h1 className="text-xs mb-2 ml-1 mt-2">Patients</h1>
              <CustomMultiSelection
                data={datat}
                value={value}
                setValue={setValue}
              ></CustomMultiSelection>
            </div>
          )}
          <div className="w-full">
            <h1 className="text-xs mb-2 ml-1 mt-2 ">Provider</h1>
            <CustomMultiSelection
              data={datat}
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
                    className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                    {...register("pos")}
                  >
                    <option value=""></option>
                    <option value="Today">Today's follow up</option>
                    <option value="UK">Lost 7 days</option>
                    <option value="15">Lost 15 days</option>
                    <option value="15">Lost 30 days</option>
                    <option value="15">30 days & over</option>
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
                  <DateRangePicker
                    onChange={(date) => {
                      console.log(date);
                    }}
                    placeholder="Select Date"
                  />
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
                    className="border rounded-sm px-2 py-[5px] font-thin mx-1 text-xs w-full"
                    {...register("Status")}
                  >
                    <option value=""></option>
                    <option value="Today">Today's follow up</option>
                    <option value="UK">Lost 7 days</option>
                    <option value="15">Lost 15 days</option>
                    <option value="15">Lost 30 days</option>
                    <option value="15">30 days & over</option>
                  </select>
                </div>
              </div>
              <button
                className="font-regular mt-8 sm:w-1/2 px-3 py-1  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
                type="submit"
              >
                Save
              </button>
            </>
          )}
          {!billable && (
            <button
              onClick={() => setTable(true)}
              className="font-regular mt-8 w-1/4  py-1  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Go
            </button>
          )}
        </div>
      </form> */}

      {/* table  */}
      {table && (
        <>
          <div className="my-5">
            <UseTable
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            ></UseTable>
          </div>
          <div className="flex item-center flex-wrap">
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
          </div>
        </>
      )}
    </div>
  );
};

export default memo(ListView);
