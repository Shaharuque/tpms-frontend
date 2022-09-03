import React, { useEffect, useMemo, useState } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { ExpiringAuthorizationColumn } from "./PatientTableData";
import { Link } from "react-router-dom";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import axios from "axios";
import UseTable from "../../../../../Utilities/UseTable";

const ExpiringAuthorization = () => {
  const [ExpireAuthData, SetExpireAuthData] = useState([]);

  // fake Api call

  useEffect(() => {
    axios("../../All_Fake_Api/ExpiringAuthorization.json")
      .then((response) => {
        SetExpireAuthData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = useMemo(() => ExpireAuthData, [ExpireAuthData]);
  const columns = useMemo(() => [...ExpiringAuthorizationColumn], []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, usePagination, useRowSelect);
  return (
    <div className={!ExpireAuthData ? "h-[100vh]" : ""}>
      <div className="flex items-center flex-wrap gap-2 justify-between">
        <h1 className="text-lg my-2 text-orange-500">
          Expiring Authorizations
        </h1>
        <div className="flex items-center gap-3">
          <FiDownload className="text-secondary font-medium" />
          <Link
            to={"/admin"}
            className=" py-[6px] flex items-center  px-4  text-xs font-normal bg-gradient-to-r from-secondary to-primary  hover:to-secondary text-white rounded-md"
          >
            <IoCaretBackCircleOutline className="mr-1 text-sm" /> Back
          </Link>
        </div>
      </div>
      <div className="my-2">
        <UseTable
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        ></UseTable>
      </div>
    </div>
  );
};

export default ExpiringAuthorization;
