import React, { useMemo, useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import ReferringProviderActionModal from "./ReferringProvider/ReferringProviderActionModal";
import {
  ReferringProviderColumn,
  ReferringProviderData,
} from "./ReferringProvider/ReferringProviderColumns";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";

const ReferringProvider = () => {
  const data = useMemo(() => ReferringProviderData, []);
  const columns = useMemo(() => [...ReferringProviderColumn], []);
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
  return (
    <div>
      <div className="flex mb-2 items-center justify-between">
        <h1 className="text-lg my-2 text-orange-400">Referring Provider</h1>

        <div>
          {/* <!-- The button to open modal --> */}
          <label htmlFor="pay-box" className="">
            <h1
              onClick={handleClickOpen}
              className="px-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
            >
              Add Referring Provider
            </h1>
          </label>
        </div>
      </div>
      <SettingTableBox
        getTableProps={getTableProps}
        headerGroups={headerGroups}
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      ></SettingTableBox>

      {openEditModal && (
        <ReferringProviderActionModal
          handleClose={handleClose}
          open={openEditModal}
        ></ReferringProviderActionModal>
      )}
    </div>
  );
};
export default ReferringProvider;
