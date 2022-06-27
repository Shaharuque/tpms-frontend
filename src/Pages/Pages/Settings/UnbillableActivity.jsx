import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { usePagination, useRowSelect, useSortBy, useTable } from "react-table";
import { CheckBox } from "./SettingComponents/CheckBox";
import { UnbillableColumns } from "./UnbillableActivity/UnbillableActivityColumns";

const options = ["Select Any", "Retract"];
const UnbillableActivity = () => {
  const data = useMemo(() => UnbillableColumns, []);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  console.log("value :", value);
  console.log("inputValue :", inputValue);

  const columns = useMemo(
    () => [
      {
        Header: "Patients",
        accessor: "patients", // accessor is the "key" in the data
      },
      {
        Header: "DOS",
        accessor: "dos",
      },
      {
        Header: "Tx.Provider",
        accessor: "tx_provider",
      },
      {
        Header: "Service & Hrs.",
        accessor: "Service",
      },
      {
        Header: "Cpt",
        accessor: "cpt",
      },
      {
        Header: "POS",
        accessor: "pos",
      },
      {
        Header: "M1",
        accessor: "m1",
      },
      {
        Header: "M2",
        accessor: "m2",
      },
      {
        Header: "M3",
        accessor: "m3",
      },
      {
        Header: "M4",
        accessor: "m4",
      },
      {
        Header: "Units",
        accessor: "units",
      },
      {
        Header: "Rates",
        accessor: "rates",
      },
      {
        Header: "Rendering",
        accessor: "rendering",
      },
      {
        Header: "ID Qual",
        accessor: "id_qual",
      },
      {
        Header: "Status",
        accessor: "status",
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
    selectedFlatRows,
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
  return (
    <div>
      <h1 className="text-lg my-2 text-orange-400">Non-Billable Service(s)</h1>
      <div className="">
        <table className="border w-24 sm:w-full " {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="bg-secondary border  text-sm text-white"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span className=" ml-4 ">
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⇓ "
                          : " ⇑ "
                        : ""}
                    </span>
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
                          border: "solid 1px gray",
                        }}
                        className="text-xs py-[6px] w-10 md:w-24 text-center text-gray-600 "
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* <pre>
            <code>
              {JSON.stringify(
                {
                  selectedFlatRows: selectedFlatRows.map((d) => d.original),
                },
                null,
                2
              )}
            </code>
          </pre> */}
        </table>
      </div>
      <div className="my-5">
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </div>
  );
};

export default UnbillableActivity;
