import React, { useMemo, useState, useEffect } from "react";
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import { PatientsColumnsColumn } from "./Patients/PatientsColumns";
import axios from "axios";
import { memo } from "react";
import { headers } from "../../Misc/BaseClient";
import Loading from "../../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import ShimmerTableTet from "./Settings/SettingComponents/ShimmerTableTet";

const Patients = () => {
  // root Patient component
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(2);

  // get data from API

  useEffect(() => {
    const getComments = async () => {
      const res = await axios({
        method: "get",
        url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=1`,
        headers: headers,
      });
      // const result = await res.json();
      const data = res.data?.clients?.data;
      //console.log(data)
      setItems(data);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await axios({
      method: "get",
      url: `https://ovh.therapypms.com/api/v1/admin/ac/patient?page=${page}`,
      headers: headers,
    });
    const data = res.data?.clients?.data;
    //console.log(data)
    return data;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    console.log(commentsFormServer);
    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  //console.log(items)
  console.log(page);

  const data = useMemo(() => items, [items]);
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
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h1 className="text-lg mb-2 text-orange-400">All Patients</h1>
      {
        <div>
          <div className="pb-3 overflow-y-hidden">
            <InfiniteScroll
              dataLength={rows.length}
              next={fetchData}
              hasMore={hasMore}
              loader={<ShimmerTableTet></ShimmerTableTet>}
              // loader={<h1 className="text-teal-800 font-bold text-center">Loading...</h1>}
            >
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
            </InfiniteScroll>
          </div>
        </div>
      }
    </div>
  );
};

export default memo(Patients);
