import React from 'react';
import { useTable, useSortBy } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from '../../Loading/Loading';

const Table = ({ columns, data, update,hasMore }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state: { sortBy }
      } = useTable(
        {
          columns,
          data
        },
        useSortBy
      );
    
      React.useEffect(() => {
        //console.log("sort");
      }, [sortBy]);
    
      // Render the UI for your table
    return (
        <InfiniteScroll
        dataLength={rows.length}
        next={update}
        hasMore={hasMore}
        loader={<Loading></Loading>}
      >
        <table className='m-12'  {...getTableProps()}>
          <thead className='sticky'>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th className='border-2 border-red-600' {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
  
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td className='border-2 border-teal-600 h-20' {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
    );
};

export default Table;