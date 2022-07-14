import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../Settings/SettingComponents/CheckBox";
import {
  ManageClaimsColumnsColumn,
  ManageClaimsColumnsData,
} from "./BatchingClaimsColumns";
import { RiPencilLine } from "react-icons/ri";
import SettingTableBox from "../Settings/SettingComponents/SettingTableBox";

const ManageClaims = () => {
  const [active, setActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [tActive, setTActive] = useState(false);
  const [select, setSelect] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sort_By, setSort_By] = useState("");
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setTActive(true);
    reset();
  };
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    setActive(true);
  };
  const handleSort_By = (e) => {
    setSort_By(e.target.value);
    setNextActive(true);
  };

  const data = useMemo(() => ManageClaimsColumnsData, []);
  const columns = useMemo(() => [...ManageClaimsColumnsColumn], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    selectedFlatRows,
    // page,
    prepareRow,
  } = useTable(
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
    },
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // other hooks such as selection hook
        ...columns,
        // edit hook
        {
          accessor: "action",
          id: "action",
          Header: "Action",
          Cell: ({ row, setEditableRow, editableRow }) => (
            <>
              <div>
                <div className="flex justify-center gap-1 text-primary">
                  <RiPencilLine />
                </div>
              </div>
            </>
          ),
        },
      ]);
    }
  );

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg text-orange-400">Batching Claim(s)</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-wrap items-center gap-2">
            {" "}
            {/* Sort By  */}
            <div>
              <label className="label">
                <span className="label-text text-xs text-gray-500 text-left">
                  Sort By
                </span>
              </label>
              <select
                onChange={handleSortBy}
                name="type"
                className="border rounded-sm px-2 w-36 py-1 text-xs "
              >
                <option value="all">All</option>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>
            {active && (
              <>
                {" "}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      {sortBy}
                    </span>
                  </label>
                  <select
                    // onChange={(e) => setInsuranceSelect(e.target.value)}
                    name="type"
                    className="border rounded-sm px-2 w-36 py-1 text-xs "
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {/* Sort By  */}
                <div>
                  <label className="label">
                    <span className="label-text text-xs text-gray-500 text-left">
                      Sort By
                    </span>
                  </label>
                  <select
                    onChange={handleSort_By}
                    name="type"
                    className="border rounded-sm px-2 w-36 py-1 text-xs "
                  >
                    <option value="all">All</option>
                    <option value="patient">Patient</option>
                    <option value="provider">Provider</option>
                  </select>
                </div>
                {/* Sort By  */}
                {nextActive && (
                  <div>
                    <label className="label">
                      <span className="label-text text-xs text-gray-500 text-left">
                        {sort_By}
                      </span>
                    </label>
                    <select
                      name="type"
                      className="border rounded-sm px-2 w-36 py-1 text-xs "
                    >
                      <option value="all">All</option>
                      <option value="patient">Patient</option>
                      <option value="provider">Provider</option>
                    </select>
                  </div>
                )}
              </>
            )}
            {/* submit  */}
            <button
              className=" py-2 mt-8  px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Get Claim(s)
            </button>
            <button className="font-normal  py-2 mt-8 px-3 text-xs bg-gradient-to-r from-red-600 to-red-400  hover:to-red-600 text-white rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
      {tActive && (
        <>
          <div className="my-5">
            <SettingTableBox
              getTableProps={getTableProps}
              headerGroups={headerGroups}
              getTableBodyProps={getTableBodyProps}
              rows={page}
              prepareRow={prepareRow}
            ></SettingTableBox>
          </div>
          <div className=" flex flex-wrap items-center gap-2">
            <div>
              <select
                onChange={(e) => setSelect(e.target.value)}
                name="type"
                className="border rounded-sm px-2 w-36 py-1 text-xs "
              >
                <option value="all">All</option>
                <option value="patient">Patient</option>
                <option value="provider">Provider</option>
              </select>
            </div>
            <button
              className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Go
            </button>
            <button
              className=" py-2   px-3 text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              type="submit"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageClaims;
