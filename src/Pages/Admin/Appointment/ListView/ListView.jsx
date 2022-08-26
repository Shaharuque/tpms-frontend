import React, { memo, useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { ManageTableColumnsColumn } from "./ListView/ManageTableColumns";
import { CheckBox } from "../../../Pages/Settings/SettingComponents/CheckBox";
import { Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "rsuite";
import axios from "axios";
import CustomMultiSelection from "../../../Shared/CustomComponents/CustomMultiSelection";
import SettingTableBox from "../../../Pages/Settings/SettingComponents/SettingTableBox";

const ListView = () => {
  const [billable, setBillable] = useState(true);
  const [table, setTable] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [TData, setTData] = useState([]);

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  // calling fake db
  useEffect(() => {
    axios("../Fakedb.json")
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
  const [value, setValue] = React.useState([]);

  return (
    <div className={!table ? "h-[100vh]" : ""}>
      <div className="flex flex-wrap justify-between items-center mb-5">
        <h1 className="text-lg my-1 text-orange-500">Manage Sessions</h1>
        <div>
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
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 my-5 mr-2 gap-5">
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
                  <span className="label-text text-xs text-gray-600 text-left">
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
                  <span className="label-text text-xs text-gray-600 text-left">
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
                  <span className="label-text text-xs text-gray-600 text-left">
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
              className="font-regular mt-8 w-1/4 px-3 py-1  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Go
            </button>
          )}
        </div>
      </form>

      {/* table  */}
      {table && (
        <>
          <div className="my-5">
            <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
            ></SettingTableBox>
          </div>
          <div className="flex item-center flex-wrap">
            <div>
              <select
                onChange={handleSortBy}
                name="type"
                className="border rounded-sm py-[5px] font-normal px-2 w-36 text-xs "
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
