import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { RecurringSessionColumn } from "./RecurringSession/RecurringSessionColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import SettingTableBox from "../../../Pages/Settings/SettingComponents/SettingTableBox";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import { Fade } from "react-reveal";
import { MdOutlineCancel } from "react-icons/md";

const RecurringSession = () => {
  const [table, setTable] = useState(false);
  const [select, setSelect] = useState("");
  const [SessionData, SetSessionData] = useState([]);

  // calling recurring session fakedb
  useEffect(() => {
    axios("../All_Fake_Api/recurringSession.json")
      .then((response) => {
        SetSessionData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // -----------------------------------------------form-------------------------------
  const { handleSubmit } = useForm({
    defaultValues: {
      filters: [],
    },
  });
  const onSubmit = (data) => {
    // setSubmitted(data);
    // console.log(data);
    setTable(true);
  };

  //test design
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  };
  const handleClose = () => {
    setClicked(!clicked);
  };

  // -----------------------------------------------Table-------------------------------
  const data = useMemo(() => SessionData, [SessionData]);
  const columns = useMemo(() => [...RecurringSessionColumn], []);
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

  // -----------------------------------------------Multi-Select-------------------------------
  const [value, setValue] = useState([]);
  const datat = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
  ].map((item) => ({ label: item, value: item }));

  const datatf = ["demo", "pos", "minda"].map((item) => ({
    label: item,
    value: item,
  }));

  console.log(value);

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <div className="cursor-pointer">
        <div className="bg-gradient-to-r from-secondary to-cyan-900 rounded-lg px-4 py-2">
          <div onClick={clickHandler} className="  flex items-center ">
            {!clicked && (
              <h1 className="text-[16px]  text-white font-normal ">
                Recurring Session
              </h1>
            )}
          </div>
          {/* Upper div */}
          {clicked && (
            <div>
              <Fade>
                <div className="flex justify-between items-center">
                  <h1 className="text-[16px]  text-white font-normal ">
                    Recurring Session
                  </h1>
                  <div className="  flex justify-end gap-3">
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

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 my-5 mr-2 gap-x-3">
                    <div>
                      <label className="label">
                        <span className="label-text text-xs text-gray-100 text-left">
                          Place of Services
                        </span>
                      </label>
                      <select
                        className=" bg-transparent border-b-[3px] border-[#e5e5e5] text-white  rounded-sm px-1 py-[3px] font-normal mx-1 text-[14px] w-full focus:outline-none"
                        onChange={(e) => setSelect(e.target.value)}
                        name="type"
                      >
                        <option value="all" className="text-black">
                          All
                        </option>
                        <option value="patient" className="text-black">
                          Patient
                        </option>
                        <option value="provider" className="text-black">
                          Provider
                        </option>
                      </select>
                    </div>

                    {select === "patient" ? (
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
                    ) : select === "provider" ? (
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
                    ) : (
                      <></>
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
      </div>

      {/* table  */}
      {table && (
        <div className="my-5">
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          ></SettingTableBox>
        </div>
      )}
    </div>
  );
};

export default RecurringSession;
