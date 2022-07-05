import React, { useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  InsuranceSetupColumn,
  InsuranceSetupData,
} from "./InsuranceSetup/InsuranceSetupColumns";
import SettingTableBox from "./SettingComponents/SettingTableBox";
import { CheckBox } from "./SettingComponents/CheckBox";
import InsuranceEditModal from "./InsuranceSetup/InsuranceEditModal";
import { RiPencilLine } from "react-icons/ri";

const InsuranceSetup = () => {
  const data = useMemo(() => InsuranceSetupData, []);
  const columns = useMemo(() => [...InsuranceSetupColumn], []);
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
    selectedFlatRows,
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
  console.log(selectedFlatRows);
  const { pageIndex, pageSize } = state;

  return (
    <div>
      <SettingTableBox
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={page}
        prepareRow={prepareRow}
      ></SettingTableBox>

      <div className="flex gap-2 items-center my-5 justify-center">
        <button
          className="hover:bg-secondary page text-lg text-secondary hover:text-white py-1 px-3"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <BiLeftArrow />
        </button>
        <div className="text-sm font-normal">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </div>
        <button
          className="hover:bg-secondary text-lg page text-secondary  hover:text-white py-1 px-3"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <BiRightArrow />
        </button>
        <select
          className="bg-secondary text-sm p-[3px] text-white "
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 15, 20, 50].map((p) => (
            <option key={p} value={p}>
              <span className="bg-primary">{p}</span>
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleClickOpen} className="text-secondary">
        <RiPencilLine />
      </button>
      {openEditModal && (
        <div>
          <h1>Editable Part :</h1>
        </div>
      )}
    </div>
  );
};

export default InsuranceSetup;
