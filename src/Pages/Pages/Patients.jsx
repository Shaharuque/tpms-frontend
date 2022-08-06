import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import {
  PatientsColumnsColumn,
  PatientsColumnsData,
} from "./Patients/PatientsColumns";
import SettingTableBox from "./Settings/SettingComponents/SettingTableBox";
//redux-code
import { useDispatch, useSelector } from "react-redux";
import { getpatients } from "../../features/Patient_redux/patientSlice";
import usePatient from "../../CustomHooks/usePatient";
//react query
import { useQuery } from '@tanstack/react-query'
import Loading from "../../Loading/Loading";
import axios from "axios";


const Patients = () => {

  const data = useMemo(() => PatientsColumnsData, []);
  const columns = useMemo(() => [...PatientsColumnsColumn], []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    // page,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy, usePagination);

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg mb-2 text-orange-400">All Patients</h1>
        <div>
        <div className="pb-3 overflow-y-hidden">
          <table
            className="border overflow-scroll  sm:w-full "
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="bg-secondary border px-1 min-w-[120px]  py-1 text-xs font-normal text-white"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <span className="">
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ⇓ "
                            : " ⇑ "
                          : ""}
                      </span>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            border: "solid 1px #aeaeae55",
                          }}
                          className="text-xs py-[3px] w-10 md:w-24 text-center text-gray-600 "
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
