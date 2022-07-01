import React, { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import SettingTableBox from "../SettingComponents/SettingTableBox";
import AddServiceSubTypeTabEditModal from "./AddServiceSubTypeTabEditModal";
import {
  AddServiceSubTypeTabColumn,
  AddServiceSubTypeTabData,
} from "./AddServiceSubTypeTableColumn";

const AddServiceSubTypeTab = () => {
  const [txType, setTxType] = useState(false);
  const [type, setType] = useState(false);
  const [service, setService] = useState(false);
  const data = useMemo(() => AddServiceSubTypeTabData, []);
  const columns = useMemo(() => [...AddServiceSubTypeTabColumn], []);
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
    rows,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const handleOnchange = (e) => {
    console.log(e.target.value);
    setTxType(!txType);
  };
  const typeHandleOnchange = (e) => {
    console.log(e.target.value);
    setType(!type);
  };
  const serviceHandleOnchange = (e) => {
    console.log(e.target.value);
    setService(!service);
  };
  return (
    <div>
      <div className="">
        <h1 className="text-lg my-3 text-orange-400">Place of Service</h1>
      </div>
      <div className="flex flex-wrap gap-5 mb-5">
        <div>
          <h1 className="text-xs mb-3 ml-1">Tx Type</h1>
          <select
            onChange={(e) => handleOnchange(e)}
            className="border rounded-sm px-2 py-2 mx-1 text-xs "
          >
            <option value="Select Tx type">Select Tx type</option>
            <option value="Behavior Therapy">Behavior Therapy</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Physical Therapy">Physical Therapy</option>
          </select>
        </div>
        {txType && (
          <div>
            <h1 className="text-xs mb-3 ml-1 ">Type</h1>
            <select
              onChange={(e) => typeHandleOnchange(e)}
              className="border rounded-sm px-2 py-2 mx-1 text-xs "
            >
              <option value="Select Tx type"></option>
              <option value="Behavior Therapy">Billable</option>
            </select>
          </div>
        )}
        {type && (
          <div>
            {" "}
            <h1 className="text-xs mb-3 ml-1">Service</h1>
            <select
              onChange={(e) => serviceHandleOnchange(e)}
              className="border rounded-sm px-2 py-2 mx-1 text-xs "
            >
              <option value="Select Tx type">Select Tx type</option>
              <option value="Behavior Therapy">Behavior Therapy</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Physical Therapy">Physical Therapy</option>
            </select>
          </div>
        )}
      </div>
      {service && (
        <div>
          <SettingTableBox
            getTableProps={getTableProps}
            headerGroups={headerGroups}
            getTableBodyProps={getTableBodyProps}
            rows={rows}
            prepareRow={prepareRow}
          ></SettingTableBox>

          <div>
            {/* <!-- The button to open modal --> */}
            <label htmlFor="pay-box" className="">
              <button
                onClick={handleClickOpen}
                className="px-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
              >
                Add Place of Service
              </button>
            </label>
          </div>
          {openEditModal && (
            <AddServiceSubTypeTabEditModal
              handleClose={handleClose}
              open={openEditModal}
            ></AddServiceSubTypeTabEditModal>
          )}
        </div>
      )}
    </div>
  );
};

export default AddServiceSubTypeTab;
