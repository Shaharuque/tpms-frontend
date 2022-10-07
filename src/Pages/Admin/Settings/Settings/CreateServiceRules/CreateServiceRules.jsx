import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { ServiceColumns } from "./CreateServiceRules/CreateServiceColumns";
import CreateServiceComponent from "./CreateServiceRules/CreateServiceComponent";
import SettingTableBox from "../../../../Pages/Settings/SettingComponents/SettingTableBox";

const CreateServiceRules = () => {
  const data = useMemo(() => ServiceColumns, []);

  const columns = useMemo(
    () => [
      {
        Header: "Rule",
        accessor: "rule", // accessor is the "key" in the data
      },
      {
        Header: "Description/Message",
        accessor: "description",
      },
      {
        Header: "Run Rule",
        Cell: ({ row }) => {
          // the value is 'this is a test'
          // console.log(row);
          return <CreateServiceComponent row={row}></CreateServiceComponent>;
        },
      },
      {
        Header: "Prevent Session Creation",
        Cell: ({ row }) => {
          // the value is 'this is a test'
          // console.log(row);
          return <CreateServiceComponent row={row}></CreateServiceComponent>;
        },
      },
    ],
    []
  );
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
      <h1 className="text-lg my-2 text-orange-400">Service Rules</h1>
      <CssBaseline />
      <div className="">
        <SettingTableBox
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></SettingTableBox>
      </div>
      <button className="px-5 my-5 mb-5 text-sm py-1 bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md ">
        Save
      </button>
    </div>
  );
};

export default CreateServiceRules;
