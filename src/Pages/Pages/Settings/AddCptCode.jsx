import React, { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import AddCptCodeActionModal from "./AddCptCode/AddCptCodeActionModal";
import {
  AddCptCodeColumn,
  AddCptCodeData,
} from "./AddCptCode/AddCptCodeColumns";
import SettingTableBox from "./SettingComponents/SettingTableBox";

const AddCptCode = () => {
  const data = useMemo(() => AddCptCodeData, []);
  const columns = useMemo(() => [...AddCptCodeColumn], []);
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
  } = useTable({ columns, data }, useSortBy, usePagination);

  const { pageIndex, pageSize } = state;
  return (
    <div>
      <div className="">
        <div>
          <h1>Click on each Service name to edit</h1>
          <p className=" text-xs font-medium text-gray-500 my-3">
            Service Descriptions are shown throughout the SimplePractice
            platform internally, in some client communications and in
            Superbills.
          </p>
          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen}
                className="px-5 mt-2 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              >
                Add new Cpt Code
              </button>
            </label>
          </div>
        </div>
        <h1 className="text-lg my-2 text-orange-400">Services</h1>
      </div>
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
            <option className="bg-primary" key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      {openEditModal && (
        <AddCptCodeActionModal
          handleClose={handleClose}
          open={openEditModal}
        ></AddCptCodeActionModal>
      )}
    </div>
  );
};

export default AddCptCode;