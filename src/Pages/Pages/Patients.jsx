import React, { useMemo, useState, useEffect } from "react";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import { PatientsColumnsColumn } from "./Patients/PatientsColumns";
import axios from "axios";
import { memo } from "react";

const Patients = () => {
  // root Patient component
  const [tableData, setTableData] = useState([]);

  // get data from API
  useEffect(() => {
    axios({
      method: "get",
      url: `https://ovh.therapypms.com/api/v1/admin/ac/patient`,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzhkOTM0NTUwYWI2Mzk0OTgzMmM4MDA4MTJjODIyYmNlMTNhNzkwYjdmZGZhMzhkYmQyNzllYTJmY2ZhZmRkNjNjNmQ1MTZiZTkyMTJkMjIiLCJpYXQiOjE2NTk2MDMwMDMuMjU5MDIzOTA0ODAwNDE1MDM5MDYyNSwibmJmIjoxNjU5NjAzMDAzLjI1OTAyNzAwNDI0MTk0MzM1OTM3NSwiZXhwIjoxNjkxMTM5MDAzLjI1NzkyOTA4NjY4NTE4MDY2NDA2MjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UMDDJuxIwkgK3vYtcfKoRmcn4pj9tq3vBiaf0m2zz7ndkYsLVAWS5o6IXCnYZCwMV93u7tankgRn7Ap8nLs4Cl5vAQevBQlYF8EoU8e267uP0xyJrEfiGzhM6BzpeSQ3FAG-8o0kQQcadMpyceBmDKfpqfXbHmKR2UcGH0dYqoxOS7HbMEAKmdJmhLuau4vwZqRszk0_thCgSV3ingOG5GZx9aGO4heEPau1WKlvIfmhid2mf4ea9Aa7mvzh_zGsAXvzxKP85gcwlw_N0ZvY8yDGEiphEHkrVHCzgUjZKFT6tk_YYHRBDJSIXQ1RLNOVoZGsxQxHf_Au9yB06Ps-9tpH_64bpXf3ubm1gzO7d9mcZpe0I-_uCVRIKZ_nlgmiolBrkPIc31ZClUs5cGcV-UCHJX21kEkCnXKeie4tCwK9Solb0Fqm5n1gmsgNniCj4rsmRFVuplUJsBneCn0EFawcWDEcroITS6I2AyJtCtW8Ycx35jBC0blnRz3j0EcXYcJPTmbXiCzLLn-J3R-fx9v_2BTPLTexTA71BWqQhK_zBNs4qQAcrjBA0BuxabWmlvLNiEVwAi4heikxcd_sB148DYNWCxuwV3op2EvN1ImdDZEVaW9YemIzQSdL53ZEnWsfmIJSsoodE-tHv1zeCPEVSI3DjSpHOeTOl0Vy-c4",
      },
    }).then(function (res) {
      console.log("data =", res.data?.clients?.data);
      setTableData(res.data?.clients?.data);
    });
  }, []);

  const data = useMemo(() => tableData, [tableData]);
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

  if (data.length === 0) {
    return <h1 className="text-center font-semibold mt-5">Loading....</h1>;
  }

  return (
    <div className="h-[100vh]">
      <h1 className="text-lg mb-2 text-orange-400">All Patients</h1>
      {
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
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}

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
      }
    </div>
  );
};

export default memo(Patients);
