import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "../../../../Pages/Settings/SettingComponents/CheckBox";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";
import {
  PayrollSetupColumnsColumn,
  PayrollSetupColumnsData,
} from "./PayrollSetup/PayrollSetupColumns";
import PayrollSetupModal from "./PayrollSetup/PayrollSetupModal";
import { BsArrow90DegRight } from "react-icons/bs";

const PayrollSetup = () => {
  const [select, setSelect] = useState("");
  const data = useMemo(() => PayrollSetupColumnsData, []);
  const columns = useMemo(() => [...PayrollSetupColumnsColumn], []);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleClickOpen = () => {
    setOpenEditModal(true);
  };
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
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
    }
  );
  return (
    <div className="h-[100vh]">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-lg my-2 text-orange-400">Payroll Setup</h1>
        <button
          className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          onClick={handleClickOpen}
        >
          + Add Payroll
        </button>
      </div>
      <div className="my-5">
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={page}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>

      <div className="flex items-center flex-wrap gap-3">
        <BsArrow90DegRight className=" font-bold text-secondary" />
        <button className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          Select All
        </button>
        <button className=" py-[6px]  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md">
          Unselect All
        </button>
        <div className=" ">
          <select
            onChange={(e) => setSelect(e.target.value)}
            name="post"
            className="border rounded-sm px-2 py-[5px] mx-1 text-xs w-52 md:w-72"
          >
            <option value=""></option>
            <option value="claim_no">Claim No</option>
            <option value="patient">Patient</option>
          </select>
        </div>
      </div>
      {openEditModal && (
        <PayrollSetupModal
          handleClose={handleClose}
          open={openEditModal}
        ></PayrollSetupModal>
      )}
    </div>
  );
};

export default PayrollSetup;
